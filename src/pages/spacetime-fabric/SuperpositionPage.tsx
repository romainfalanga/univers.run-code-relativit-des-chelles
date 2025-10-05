import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export const SuperpositionPage: React.FC = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 relative overflow-hidden pt-24 sm:pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,185,129,0.1)_1px,transparent_1px),linear-gradient(rgba(16,185,129,0.1)_1px,transparent_1px)] bg-[size:30px_30px] opacity-30"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900/20 via-transparent to-teal-900/20"></div>

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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent bg-[length:400%_400%] animate-gradient-x drop-shadow-[0_0_30px_rgba(16,185,129,0.8)] mb-3 sm:mb-4 px-2">
            La Superposition des Tissus
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-emerald-200/90 max-w-4xl mx-auto px-4 leading-relaxed">
            Deux tissus entrelacés par le pivot temporel
          </p>
        </header>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 lg:space-y-10">

          <div className="bg-white/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-white/20 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-emerald-300 mb-4 sm:mb-6">Le Lien Fondamental</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-emerald-900/40 to-teal-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-emerald-400">
                <p className="text-base sm:text-lg text-emerald-100 leading-relaxed">
                  L'espace-temps et l'échelle-temps ne sont pas deux mondes séparés : <strong className="text-white">ils sont superposés, liés par le même pivot : le temps</strong>.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Einstein nous a révélé l'espace-temps, cette toile où l'espace et le temps s'entremêlent. Mais il manquait une dimension : l'échelle. Dans mon modèle, l'échelle et le temps forment un second tissu, l'échelle-temps, qui se superpose au premier.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-cyan-900/20 p-4 sm:p-6 rounded-lg border border-cyan-400/30">
                  <h3 className="text-lg font-semibold text-cyan-300 mb-3">Tissu Espace-Temps</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Le tissu d'Einstein : l'espace et le temps entrelacés, déformés par la masse et l'énergie. C'est ce qui crée la gravité telle que nous la connaissons.
                  </p>
                </div>

                <div className="bg-teal-900/20 p-4 sm:p-6 rounded-lg border border-teal-400/30">
                  <h3 className="text-lg font-semibold text-teal-300 mb-3">Tissu Échelle-Temps</h3>
                  <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                    Le nouveau tissu : l'échelle et le temps entrelacés. C'est ce qui régit notre descente constante vers l'infiniment petit à la vitesse de la lumière.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-cyan-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-cyan-300 mb-4 sm:mb-6">La Connexion Invisible</h2>

            <div className="space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Le temps joue un rôle unique dans ce modèle : <strong className="text-cyan-300">il est le pivot qui relie les deux tissus</strong>. Quand votre vitesse change, votre budget temps-espace se réorganise, et automatiquement, votre budget temps-échelle s'ajuste en miroir.
              </p>

              <div className="bg-gradient-to-r from-blue-900/40 to-indigo-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-blue-400">
                <p className="text-base sm:text-lg text-blue-100 leading-relaxed">
                  Cette connexion explique pourquoi l'univers semble "s'étendre" : <strong className="text-white">ce n'est pas l'espace qui grandit, mais l'échelle qui se contracte</strong>.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Chaque objet, selon sa masse et sa vitesse, descend son tapis roulant avec une inclinaison différente, créant l'illusion d'un éloignement mutuel.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/40 to-purple-900/30 backdrop-blur-sm rounded-xl lg:rounded-2xl p-6 sm:p-8 border border-indigo-400/30 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-300 mb-4 sm:mb-6">Une Structure Unifiée</h2>

            <div className="space-y-4 sm:space-y-6">
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/20 p-4 sm:p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-base sm:text-lg text-purple-100 leading-relaxed">
                  Le tissu d'espace-temps-d'échelle n'est pas trois tissus séparés, mais <strong className="text-white">une seule structure à cinq dimensions</strong> : trois d'espace, une de temps, et une d'échelle.
                </p>
              </div>

              <p className="text-base sm:text-lg text-gray-200 leading-relaxed">
                Cette structure unique gouverne tous les phénomènes de l'univers, de la gravité à l'expansion cosmique. Elle unifie la relativité d'Einstein avec la dimension d'échelle, créant un cadre cohérent pour comprendre la réalité à tous les niveaux.
              </p>

              <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/30 p-4 sm:p-6 rounded-lg border-l-4 border-indigo-400">
                <h3 className="text-lg font-semibold text-indigo-200 mb-3">Les Cinq Dimensions</h3>
                <div className="space-y-2">
                  <p className="text-sm sm:text-base text-gray-200"><strong className="text-white">1-3. Espace</strong> - Les trois dimensions spatiales classiques</p>
                  <p className="text-sm sm:text-base text-gray-200"><strong className="text-white">4. Temps</strong> - Le pivot qui relie les deux tissus</p>
                  <p className="text-sm sm:text-base text-gray-200"><strong className="text-white">5. Échelle</strong> - La dimension de contraction universelle</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <div className="w-32"></div>
            <Link
              to="/tissu-espace-temps-echelle/moteur-universel"
              className="group flex items-center px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Suivant
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};
