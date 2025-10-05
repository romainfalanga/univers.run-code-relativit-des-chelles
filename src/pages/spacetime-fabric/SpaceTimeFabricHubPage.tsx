import React from 'react';
import { NavigationHub } from '../../components/NavigationHub';

export const SpaceTimeFabricHubPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "La Superposition des Tissus",
      description: "Comment l'espace-temps et l'échelle-temps se superposent en une structure unifiée",
      path: "/tissu-espace-temps-echelle/superposition",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "Le Moteur Universel",
      description: "La vitesse de la lumière comme moteur constant entraînant tout l'univers",
      path: "/tissu-espace-temps-echelle/moteur-universel",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Le Pivot Temporel",
      description: "Le temps comme pivot reliant les deux tissus en une structure à cinq dimensions",
      path: "/tissu-espace-temps-echelle/pivot-temporel",
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-teal-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <header className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(16,185,129,0.8)] mb-4 sm:mb-6 px-2">
            Le Tissu d'Espace-Temps-d'Échelle
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-emerald-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            La superposition de deux tissus en une structure unifiée
          </p>
        </header>

        <NavigationHub
          sections={sections}
          backPath="/relativite-echelles"
          backLabel="Retour à la Relativité des Échelles"
        />

        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-4 sm:mb-6">Introduction</h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-200 leading-relaxed">
              <p>
                L'espace-temps et l'échelle-temps ne sont pas deux mondes séparés : <strong className="text-white">ils sont superposés, liés par le même pivot : le temps</strong>.
              </p>
              <p>
                Einstein nous a révélé l'espace-temps, cette toile où l'espace et le temps s'entremêlent. Mais il manquait une dimension : l'échelle. Dans ce modèle, l'échelle et le temps forment un second tissu, l'échelle-temps, qui se superpose au premier.
              </p>
              <p className="text-emerald-100 font-semibold">
                Ensemble, ils forment le tissu d'espace-temps-d'échelle, une structure unique à cinq dimensions qui gouverne tous les phénomènes de l'univers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
