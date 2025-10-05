import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const UniversalEnginePage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-blue-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-blue-900/20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 relative z-10">
        <div className="flex justify-center mb-4 sm:mb-6">
          <Link
            to="/tissu-espace-temps-echelle"
            className="group flex items-center px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gray-500/25"
          >
            <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Retour
          </Link>
        </div>

        <header className="text-center mb-6 sm:mb-8 lg:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(6,182,212,0.8)] mb-3 sm:mb-4 px-2">
            Le Moteur Universel
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-cyan-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            La vitesse de la lumière comme métronome cosmique
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4 sm:mb-6">Le Métronome Cosmique</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <p className="text-base sm:text-lg text-cyan-100 leading-relaxed font-semibold">
                  Ensemble, ils forment un seul tissu : <strong className="text-white">le tissu d'espace-temps-d'échelle</strong>. Ce tissu est entraîné par un moteur universel : la vitesse de la lumière.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Ce moteur ne varie jamais. Il bat comme un métronome cosmique, entraînant tout l'univers dans sa cadence. Chaque particule, chaque atome, chaque être vivant descend ce tapis roulant universel à exactement la même vitesse : <strong className="text-cyan-300">299 792 458 mètres par seconde</strong>.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900/40 to-indigo-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-blue-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-300 mb-4 sm:mb-6">L'Inclinaison Variable</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <p className="text-base sm:text-lg text-indigo-100 leading-relaxed">
                  <strong className="text-white">Tout descend toujours à ce rythme, sans exception.</strong> La seule différence, c'est l'inclinaison du tapis roulant : plus ou moins raide selon la vitesse, la masse et l'énergie.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Le moteur universel tourne à vitesse constante, mais le tapis roulant qu'il entraîne peut s'incliner selon les circonstances. Cette inclinaison détermine comment votre budget se répartit entre le temps et l'échelle.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-900/20 p-4 rounded-lg border border-green-400/30 text-center">
                  <h4 className="font-semibold text-green-300 mb-2">Tapis Roulant Plat</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Objet au repos, faible masse</p>
                  <p className="text-xs text-green-200 mt-2">Avancement surtout dans le temps</p>
                </div>
                <div className="bg-yellow-900/20 p-4 rounded-lg border border-yellow-400/30 text-center">
                  <h4 className="font-semibold text-yellow-300 mb-2">Tapis Roulant Incliné</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Vitesse modérée, masse importante</p>
                  <p className="text-xs text-yellow-200 mt-2">Partage temps-échelle équilibré</p>
                </div>
                <div className="bg-red-900/20 p-4 rounded-lg border border-red-400/30 text-center">
                  <h4 className="font-semibold text-red-300 mb-2">Tapis Roulant Vertical</h4>
                  <p className="text-xs sm:text-sm text-gray-300">Vitesse extrême, masse énorme</p>
                  <p className="text-xs text-red-200 mt-2">Plongée vertigineuse dans l'échelle</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-purple-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4 sm:mb-6">Une Vitesse Immuable</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                <strong className="text-purple-300">Le moteur ne change jamais de vitesse.</strong> Que vous soyez immobile ou que vous voyagiez à 99,999% de la vitesse de la lumière, le tapis roulant universel avance toujours à la même cadence absolue.
              </p>

              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                  <strong className="text-white">Seule l'inclinaison change.</strong> C'est cette variation d'angle qui crée tous les phénomènes relativistes : dilatation du temps, contraction des longueurs, et maintenant, descente d'échelle.
                </p>
              </div>

              <div className="bg-gradient-to-r from-pink-900/40 to-red-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-lg font-semibold text-pink-200 mb-3">L'Élégance du Modèle</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Cette constance du moteur universel révèle l'élégance fondamentale de la réalité : <strong className="text-white">un seul rythme cosmique, une infinité d'inclinaisons possibles</strong>. Tout l'univers danse sur la même musique, mais chaque danseur suit son propre chemin.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
