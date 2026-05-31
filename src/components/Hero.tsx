/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ArrowRight, Calculator, CalendarCheck, ShieldCheck, Star } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white flex items-center pt-24 overflow-hidden"
    >
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-[50%] h-[70%] bg-blue-600/10 rounded-bl-[100px] blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-10 w-[300px] h-[300px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Corporate Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none brightness-75" />

      {/* Curved/Diagonal Border Accent at Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] pointer-events-none select-none z-10">
        <svg
          className="relative block w-full h-[60px] md:h-[120px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1260,42.7L1320,32L1320,120L1260,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z"
            fill="#fafafa"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20 pb-16 md:pb-32 pt-8 md:pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            {/* Elite Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <ShieldCheck className="h-4 w-4" />
              Cabinet Conseil Certifié à Lomé
            </motion.div>

            {/* Slogan */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight md:leading-none text-white font-sans"
              >
                Votre partenaire de <br className="hidden md:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  confiance en gestion
                </span> <br className="hidden md:inline" />
                et services professionnels
              </motion.h1>

              {/* Subtext */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl font-light leading-relaxed"
              >
                Accompagnement rigoureux des entreprises, gestion administrative d’élite, optimisation fiscale avancée et formations professionnelles sur-mesure à Lomé, Togo.
              </motion.p>
            </div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={() => scrollToSection('simulateur-devis')}
                className="flex items-center justify-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-xl text-base font-bold shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/30 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calculator className="h-5 w-5" />
                Demander un devis
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => scrollToSection('contact')}
                className="flex items-center justify-center gap-2 bg-slate-800/80 hover:bg-slate-800 text-white border border-slate-700 hover:border-slate-600 px-8 py-4 rounded-xl text-base font-bold transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <CalendarCheck className="h-5 w-5" />
                Nous contacter
              </button>
            </motion.div>

            {/* Micro Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="pt-6 sm:pt-8 border-t border-slate-800 flex flex-wrap items-center gap-x-8 gap-y-4"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((num) => (
                    <img
                      key={num}
                      src={`https://picsum.photos/seed/user-${num}/100/100`}
                      alt="Trust user"
                      className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5 text-amber-400">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="h-3 w-3 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-slate-300">Confiance d'excellence</span>
                </div>
              </div>

              <div className="text-slate-400 text-xs font-medium space-y-1">
                <span className="block text-emerald-400 font-bold">● ÉVALUATION DE CONFORMITÉ</span>
                <span>Procédures 100% alignées SYSCOHADA & Fiscalité Togolaise</span>
              </div>
            </motion.div>
          </div>

          {/* Majestic Hero Banner Graphics / Visual Card Stack */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-[450px] lg:max-w-none"
            >
              {/* Main Decorative Image Frame with Shadows */}
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 shadow-2xl shadow-blue-500/10 aspect-4/3 md:aspect-square lg:aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1573497161161-c3e73707e25c?auto=format&fit=crop&q=80&w=600"
                  alt="J&K Services Professional Office Partner"
                  className="w-full h-full object-cover grayscale-15 brightness-95 filter transition-all duration-700 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual elegant tint overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
              </div>

              {/* Floating Interactive Badge (Satisfied scale) */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                className="absolute -right-4 -bottom-4 bg-slate-900/95 backdrop-blur-md border border-slate-800 p-4 rounded-xl shadow-xl flex items-center gap-3"
              >
                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center font-bold text-lg">
                  8+
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium leading-none">Années de</p>
                  <p className="text-sm text-white font-bold">Gestion d’Élite</p>
                </div>
              </motion.div>

              {/* Floating Task Checklist Indicator */}
              <motion.div
                initial={{ x: -55, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5, type: "spring", stiffness: 80 }}
                className="absolute -left-6 top-8 bg-slate-900/95 backdrop-blur-sm border border-slate-800 p-3.5 rounded-xl shadow-xl hidden sm:flex items-center gap-3.5 max-w-[200px]"
              >
                <div className="h-8 w-8 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs">
                  ✓
                </div>
                <div>
                  <p className="text-[10px] text-emerald-400 font-bold tracking-wider uppercase">TVA & CNSS</p>
                  <p className="text-xs text-white font-medium leading-tight">Zéro Pénalité d'impôts</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
