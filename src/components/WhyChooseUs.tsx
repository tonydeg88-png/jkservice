/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ADVANTAGES_DATA } from '../data';
import * as Icons from 'lucide-react';
import { motion } from 'motion/react';

export default function WhyChooseUs() {
  const renderIcon = (iconName: string, className: string) => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.Sparkles className={className} />;
  };

  return (
    <section id="pourquoi-nous" className="py-20 bg-gradient-to-b from-blue-950 via-slate-900 to-slate-900 text-white relative overflow-hidden">
      {/* Dynamic Geometric Polygons representing curved or diagonal structures of J&K Services */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-full h-[60px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1260,42.7L1320,32L1320,120L1260,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z" fill="#fafafa"></path>
        </svg>
      </div>

      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 pt-10 md:pt-16 pb-6">
        
        {/* Header content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/25 px-3 py-1 rounded-full text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <span>💎 Notre Vision d'Affaires</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight font-sans text-white leading-tight">
              Pourquoi choisir <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                J&K Services ?
              </span>
            </h2>
            <div className="h-1 w-16 bg-emerald-400 rounded-full" />
          </div>
          <div className="lg:col-span-6">
            <p className="text-slate-300 font-light text-base md:text-lg leading-relaxed">
              Nous comprenons que chaque entreprise et propriétaire de bien immobilier fait face à des obstacles administratifs uniques. J&K Services est né de l'ambition d'apporter rigueur légale, réactivité commerciale et sécurité financière totale directement dans vos quotidiens d'affaires à Lomé.
            </p>
          </div>
        </div>

        {/* Benefits Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ADVANTAGES_DATA.map((adv, idx) => (
            <motion.div
              whileHover={{ scale: 1.015, translateY: -3 }}
              transition={{ duration: 0.2 }}
              key={adv.id}
              className="bg-slate-900/60 backdrop-blur-md rounded-2xl p-8 border border-slate-800 hover:border-emerald-500/30 shadow-lg relative overflow-hidden group flex gap-6"
            >
              {/* Corner green decoration */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-emerald-500/5 to-transparent rounded-bl-full pointer-events-none group-hover:from-emerald-500/20 transition-all duration-300" />

              {/* Number Badge */}
              <div className="absolute bottom-5 right-5 text-7xl font-black text-white/5 group-hover:text-emerald-500/10 pointer-events-none select-none transition-all duration-300">
                0{idx + 1}
              </div>

              {/* Icon Container */}
              <div className="h-14 w-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-slate-900 transition-all duration-300">
                {renderIcon(adv.iconName, "h-7 w-7")}
              </div>

              {/* Text Layout */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-300 transition-colors">
                  {adv.title}
                </h3>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed font-light">
                  {adv.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extra Guarantee banner */}
        <div className="mt-16 bg-gradient-to-r from-emerald-800/15 via-blue-900/10 to-transparent border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
              <Icons.ShieldAlert size={24} />
            </div>
            <div>
              <h4 className="font-bold text-white text-base md:text-lg">Zéro Risque de Retard ou Non-Conformité</h4>
              <p className="text-slate-300 text-xs md:text-sm font-light mt-0.5">Tous nos rapports fiscaux et états financiers de fin d’exercice sont visés par des experts chevronnés agréés SYSCOHADA.</p>
            </div>
          </div>
          <button 
            onClick={() => {
              const element = document.getElementById('simulateur-devis');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="flex items-center gap-1.5 bg-emerald-500 hover:bg-emerald-600 font-bold text-xs uppercase tracking-wider text-white px-5 py-3 rounded-xl transition-all cursor-pointer whitespace-nowrap self-stretch md:self-auto text-center justify-center"
          >
            Débuter Votre Accompagnement
            <Icons.ChevronRight size={14} />
          </button>
        </div>

      </div>
    </section>
  );
}
