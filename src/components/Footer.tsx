/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Mail, Phone, MapPin, ShieldCheck, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

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
    <footer className="bg-slate-950 text-slate-350 pt-20 pb-8 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Logo Brand column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center group cursor-pointer" onClick={scrollToTop}>
              <div className="h-10 w-10 rounded-lg bg-blue-900 flex items-center justify-center font-bold text-white text-xl shadow-md">
                J<span className="text-emerald-400">&</span>K
              </div>
              <div className="ml-3">
                <span className="text-xl font-extrabold text-white tracking-tight block">
                  J&K SERVICES
                </span>
                <span className="text-[9px] font-semibold text-emerald-400 tracking-wider block -mt-1 uppercase">
                  Gestion & Administration d’élite
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm">
              Votre partenaire de choix à Lomé pour l'assistance administrative des entreprises, la gestion patrimoniale et immobilière, ainsi que l'accompagnement fiscal rigoureux.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
              <ShieldCheck size={16} />
              <span>Agrément SYSCOHADA & Fiscalité Togolaise</span>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest border-b border-slate-900 pb-2">
              Navigation Rapide
            </h4>
            <ul className="space-y-2.5 text-sm font-normal">
              <li>
                <button
                  onClick={() => scrollToSection('hero')}
                  className="hover:text-white hover:underline transition-all cursor-pointer text-left block w-full"
                >
                  Accueil principal
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="hover:text-white hover:underline transition-all cursor-pointer text-left block w-full"
                >
                  Nos Services & Offres
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('pourquoi-nous')}
                  className="hover:text-white hover:underline transition-all cursor-pointer text-left block w-full"
                >
                  Pourquoi notre expertise ?
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('a-propos')}
                  className="hover:text-white hover:underline transition-all cursor-pointer text-left block w-full"
                >
                  À Propos du cabinet
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-white hover:underline transition-all cursor-pointer text-left block w-full"
                >
                  Coordonnées & Bureau
                </button>
              </li>
            </ul>
          </div>

          {/* Quick contact values Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white text-xs font-bold uppercase tracking-widest border-b border-slate-900 pb-2">
              J&K Bureau Secrétariat
            </h4>
            <ul className="space-y-3.5 text-sm font-light">
              <li className="flex gap-3.5 items-start">
                <Phone size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Service client direct</span>
                  <a href="tel:+22890810272" className="text-white font-semibold hover:underline block mt-0.5">
                    +228 90 81 02 72
                  </a>
                </div>
              </li>

              <li className="flex gap-3.5 items-start">
                <Mail size={16} className="text-blue-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Consultation Email</span>
                  <a href="mailto:jkservicesinfos@gmail.com" className="text-white font-semibold hover:underline block mt-0.5 break-all">
                    jkservicesinfos@gmail.com
                  </a>
                </div>
              </li>

              <li className="flex gap-3.5 items-start">
                <MapPin size={16} className="text-rose-400 mt-0.5 shrink-0" />
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Siège social</span>
                  <span className="text-white font-semibold block mt-0.5">
                    Agoè Atsanvé, non loin du marché
                  </span>
                  <span className="block text-xs text-slate-400">Lomé, Togo</span>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Lower footer with Scroll Top button & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-xs text-slate-400 font-normal text-center sm:text-left">
            <p>© {new Date().getFullYear()} J&K Services. Cabinet d’Administration d’élite à Lomé. Tous droits réservés.</p>
            <p className="mt-1 text-slate-500">Conformité réglementaire assurée par J&K Experts.</p>
          </div>

          <button
            onClick={scrollToTop}
            className="h-10 w-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer shrink-0 shadow-inner"
            title="Retour en haut"
          >
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  );
}
