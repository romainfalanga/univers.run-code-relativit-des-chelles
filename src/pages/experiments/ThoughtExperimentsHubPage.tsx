import React from 'react';
import { NavigationHub } from '../../components/NavigationHub';

export const ThoughtExperimentsHubPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "Le Musée des Dimensions",
      description: "Visualiser la cinquième dimension à travers une expérience de pensée révélatrice",
      path: "/experiences-pensee-echelles/musee-dimensions",
      gradient: "from-orange-500 to-yellow-500"
    },
    {
      title: "Les Tapis Roulants Universels",
      description: "Comment chaque objet voyage sur son propre escalator cosmique",
      path: "/experiences-pensee-echelles/tapis-roulants",
      gradient: "from-red-500 to-pink-500"
    },
    {
      title: "L'Illusion de l'Expansion",
      description: "Pourquoi l'univers semble s'étendre alors qu'il se contracte",
      path: "/experiences-pensee-echelles/illusion-expansion",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-red-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(251,146,60,0.1)_1px,transparent_1px),linear-gradient(rgba(251,146,60,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-900/20 via-transparent to-red-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <header className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-orange-300 via-red-300 to-pink-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(251,146,60,0.8)] mb-4 sm:mb-6 px-2">
            Les Expériences de Pensée
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-orange-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Visualiser la cinquième dimension à travers des expériences mentales
          </p>
        </header>

        <NavigationHub
          sections={sections}
          backPath="/relativite-echelles"
          backLabel="Retour à la Relativité des Échelles"
        />

        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-300 mb-4 sm:mb-6">Introduction</h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-200 leading-relaxed">
              <p>
                La cinquième dimension est difficile à visualiser. Comment imaginer une dimension au-delà de l'espace et du temps que nous connaissons ? <strong className="text-white">Les expériences de pensée sont des outils puissants pour rendre l'abstrait concret</strong>.
              </p>
              <p>
                À travers ces expériences mentales, nous allons explorer comment la dimension d'échelle se manifeste, comment elle interagit avec le temps et l'espace, et pourquoi elle change notre compréhension fondamentale de l'univers.
              </p>
              <p className="text-orange-100 font-semibold">
                Préparez-vous à un voyage conceptuel qui révélera la nature cachée de la réalité.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
