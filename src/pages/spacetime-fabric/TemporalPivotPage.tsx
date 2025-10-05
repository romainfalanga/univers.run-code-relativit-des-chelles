import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export const TemporalPivotPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900/20 via-transparent to-purple-900/20"></div>

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(99,102,241,0.8)] mb-3 sm:mb-4 px-2">
            Le Pivot Temporel
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-indigo-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Le temps comme lien unificateur des deux tissus
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-300 mb-4 sm:mb-6">Le Rôle Unique du Temps</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Le temps joue un rôle unique dans ce modèle : <strong className="text-indigo-300">il est le pivot qui relie les deux tissus</strong>. Quand votre vitesse change, votre budget temps-espace se réorganise, et automatiquement, votre budget temps-échelle s'ajuste en miroir.
              </p>

              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <p className="text-base sm:text-lg text-indigo-100 leading-relaxed">
                  <strong className="text-white">Le temps est la seule dimension partagée entre les deux tissus.</strong> C'est le point de jonction, la charnière qui permet aux deux structures de communiquer et de s'influencer mutuellement.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-purple-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-purple-300 mb-4 sm:mb-6">La Connexion Invisible</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Imaginez deux balançoires attachées au même axe central. Quand l'une monte, l'autre descend. Le temps joue ce rôle d'axe : <strong className="text-purple-300">ce qui est pris au temps dans un tissu affecte automatiquement l'autre tissu</strong>.
              </p>

              <div className="bg-gradient-to-r from-purple-900/40 to-pink-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-lg font-semibold text-purple-200 mb-3">Le Mécanisme d'Ajustement</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Quand vous accélérez dans l'espace, vous "volez" du budget au temps dans le tissu espace-temps. Ce temps réduit devient alors le pivot plus petit qui relie les deux tissus. Automatiquement, dans le tissu échelle-temps, le budget échelle augmente pour compenser.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cyan-900/20 p-4 sm:p-6 rounded-lg border border-cyan-400/30">
                  <h4 className="font-semibold text-cyan-300 mb-3">Situation: Immobile</h4>
                  <p className="text-sm sm:text-base text-gray-300 mb-3">
                    Temps = 100% (pivot large)
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-300">
                    <p><strong className="text-white">Tissu ET:</strong> Temps dominant, espace minimal</p>
                    <p><strong className="text-white">Tissu TE:</strong> Temps dominant, échelle minimale</p>
                  </div>
                </div>

                <div className="bg-red-900/20 p-4 sm:p-6 rounded-lg border border-red-400/30">
                  <h4 className="font-semibold text-red-300 mb-3">Situation: Très Rapide</h4>
                  <p className="text-sm sm:text-base text-gray-300 mb-3">
                    Temps ≈ 0% (pivot réduit)
                  </p>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-300">
                    <p><strong className="text-white">Tissu ET:</strong> Espace dominant, temps minimal</p>
                    <p><strong className="text-white">Tissu TE:</strong> Échelle dominante, temps minimal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-pink-900/40 to-red-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-pink-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-pink-300 mb-4 sm:mb-6">Une Structure à Cinq Dimensions</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-red-900/40 to-orange-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-red-400">
                <p className="text-base sm:text-lg text-red-100 leading-relaxed">
                  Le tissu d'espace-temps-d'échelle n'est pas trois tissus séparés, mais <strong className="text-white">une seule structure à cinq dimensions</strong> : trois d'espace, une de temps, et une d'échelle.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Cette connexion explique pourquoi l'univers semble "s'étendre" : ce n'est pas l'espace qui grandit, mais l'échelle qui se contracte. Chaque objet, selon sa masse et sa vitesse, descend son tapis roulant avec une inclinaison différente, créant l'illusion d'un éloignement mutuel.
              </p>

              <div className="bg-gradient-to-r from-orange-900/40 to-yellow-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-orange-400">
                <h3 className="text-lg font-semibold text-orange-200 mb-3">L'Unification Complète</h3>
                <p className="text-sm sm:text-base text-gray-200 leading-relaxed">
                  Cette structure unique gouverne tous les phénomènes de l'univers, de la gravité à l'expansion cosmique. <strong className="text-white">Le temps, en tant que pivot, assure la cohérence de l'ensemble</strong>, garantissant que chaque changement dans un aspect de la réalité se répercute harmonieusement dans tous les autres.
                </p>
              </div>

              <div className="bg-gradient-to-r from-cyan-900/40 to-blue-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-lg font-semibold text-cyan-200 mb-3">La Vision Complète</h3>
                <div className="space-y-2 text-sm sm:text-base text-gray-200">
                  <p><strong className="text-white">Espace (3D)</strong> - Les dimensions spatiales classiques</p>
                  <p><strong className="text-cyan-300">Temps (1D)</strong> - Le pivot reliant tout</p>
                  <p><strong className="text-white">Échelle (1D)</strong> - La dimension de contraction</p>
                  <p className="text-cyan-100 mt-3 font-semibold">= Un tissu unifié à 5 dimensions gouvernant toute la réalité</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <Link
              to="/tissu-espace-temps-echelle/moteur-universel"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Précédent
            </Link>
            <div className="w-32"></div>
          </div>

        </div>
      </div>
    </div>
  );
};
