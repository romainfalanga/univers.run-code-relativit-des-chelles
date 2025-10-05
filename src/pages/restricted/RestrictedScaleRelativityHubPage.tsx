import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { NavigationHub } from '../../components/NavigationHub';

export const RestrictedScaleRelativityHubPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigationCards = [
    {
      title: "Le Budget Universel",
      description: "Explication des deux budgets ET et TE avec visualisations",
      path: "/relativite-restreinte-echelles/budget-universel",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "Situation : Presque Immobile",
      description: "Budget temps maximum avec graphiques et barres de progression",
      path: "/relativite-restreinte-echelles/immobile",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Situation : Vitesse Extrêmement Rapide",
      description: "Budget espace/échelle maximum avec visualisations",
      path: "/relativite-restreinte-echelles/vitesse-extreme",
      gradient: "from-red-500 to-orange-500"
    },
    {
      title: "La Liberté Spatiale",
      description: "Les contraintes du modèle et le moteur immuable",
      path: "/relativite-restreinte-echelles/liberte-spatiale",
      gradient: "from-purple-500 to-indigo-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-blue-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/relativite-echelles"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] mb-3 sm:mb-4 px-2">
            Relativité Restreinte des Échelles
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-cyan-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Le budget universel et ses deux comptes reliés
          </p>
        </header>

        <NavigationHub
          sections={navigationCards}
          backPath="/relativite-echelles"
          backLabel="Retour à la Relativité des Échelles"
        />

        <div className="max-w-4xl mx-auto mt-12 sm:mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4 sm:mb-6">Introduction</h2>
            <div className="space-y-4 text-base sm:text-lg text-gray-200 leading-relaxed">
              <p>
                Einstein avait montré que notre mouvement se partage entre l'espace et le temps : <strong className="text-white">plus tu avances vite dans l'espace, moins tu avances vite dans le temps</strong>.
              </p>
              <p>
                Dans ce modèle, ce partage s'étend. Il existe un <strong className="text-cyan-300">budget universel</strong>, découpé en deux comptes reliés par un même pivot : le curseur temps.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
