import React from 'react';
import { NavigationHub } from '../../components/NavigationHub';

export const GeneralScaleRelativityHubPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "L'Escalator Universel",
      description: "Comment la masse et l'énergie inclinent le tapis roulant cosmique",
      path: "/relativite-generale-echelles/escalator-universel",
      gradient: "from-purple-500 to-indigo-500"
    },
    {
      title: "Les Différents Environnements",
      description: "Du vide spatial aux trous noirs : comment la gravité modifie l'inclinaison",
      path: "/relativite-generale-echelles/environnements",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "L'Effet du Rayonnement",
      description: "Comment la lumière de l'univers agit comme une pression constante",
      path: "/relativite-generale-echelles/effet-rayonnement",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Le Coefficient Multiplicateur",
      description: "La formule unifiée reliant vitesse et courbure gravitationnelle",
      path: "/relativite-generale-echelles/coefficient-multiplicateur",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(147,51,234,0.1)_1px,transparent_1px),linear-gradient(rgba(147,51,234,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-indigo-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <header className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-purple-300 via-indigo-300 to-blue-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(147,51,234,0.8)] mb-4 sm:mb-6 px-2">
            Relativité Générale des Échelles
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-purple-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Comment la masse et l'énergie inclinent l'escalator universel
          </p>
        </header>

        <NavigationHub
          sections={sections}
          backPath="/relativite-echelles"
          backLabel="Retour à la Relativité des Échelles"
        />

        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4 sm:mb-6">Introduction</h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-200 leading-relaxed">
              <p>
                Dans la relativité restreinte des échelles, nous avons vu comment la vitesse affecte notre descente sur le tapis roulant universel. Mais il manquait un élément crucial : <strong className="text-white">l'effet de la masse et de l'énergie environnantes</strong>.
              </p>
              <p>
                La relativité générale d'Einstein nous a révélé que la masse courbe l'espace-temps. Dans ce modèle étendu, <strong className="text-purple-300">cette courbure agit comme une main qui appuie sur le tapis roulant, modifiant son inclinaison</strong>.
              </p>
              <p className="text-purple-100 font-semibold">
                La masse et l'énergie n'inventent pas un nouveau moteur, elles ajoutent seulement un coefficient multiplicateur à l'inclinaison du tapis roulant.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
