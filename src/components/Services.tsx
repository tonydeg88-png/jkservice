/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import * as Icons from 'lucide-react';
import { SERVICES_DATA } from '../data';
import { ServiceItem } from '../types';

export default function Services({ onSelectServiceForQuote }: { onSelectServiceForQuote: (serviceTitle: string) => void }) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  // Categories helper
  const categories = [
    { id: 'all', label: 'Tous les services' },
    { id: 'management', label: 'Gestion & Formation' },
    { id: 'finance', label: 'Fiscalité & Comptabilité' },
    { id: 'admin', label: 'Création & Appels d’offres' },
    { id: 'property', label: 'Immobilier' },
    { id: 'services', label: 'Commerce & Prestations' }
  ];

  // Filters services based on selection
  const filteredServices = SERVICES_DATA.filter(service => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'management') return service.category === 'management';
    if (selectedCategory === 'finance') return service.category === 'finance';
    if (selectedCategory === 'admin') return service.category === 'admin';
    if (selectedCategory === 'property') return service.category === 'property';
    if (selectedCategory === 'services') return service.category === 'services';
    return true;
  });

  // Helper to render Lucide Icons dynamically
  const renderIcon = (iconName: string, className: string = "h-6 w-6 text-blue-900") => {
    const IconComponent = (Icons as any)[iconName];
    if (IconComponent) {
      return <IconComponent className={className} />;
    }
    return <Icons.HelpCircle className={className} />;
  };

  const selectServiceForQuoteAndClose = (serviceTitle: string) => {
    setActiveModalService(null);
    onSelectServiceForQuote(serviceTitle);
  };

  return (
    <section id="services" className="py-20 bg-[#fafafa] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-emerald-50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-blue-950 text-xs font-bold uppercase tracking-wider">
            <span>🚀 Catalogue Complet</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Offres de Services Professionnels
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full" />
          <p className="text-slate-600 font-normal text-base md:text-lg">
            Découvrez nos gammes de prestations pensées pour propulser, sécuriser et encadrer rigoureusement toutes les facettes de vos activités commerciales et foncières à Lomé.
          </p>
        </div>

        {/* Categories Tabs Filter */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                selectedCategory === category.id
                  ? 'bg-blue-900 text-white shadow-md shadow-blue-900/15'
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid with Framer Motion Layout */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={service.id}
                onClick={() => setActiveModalService(service)}
                className="group bg-white rounded-2xl p-6 md:p-8 border border-gray-100 hover:border-blue-900/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer relative overflow-hidden flex flex-col justify-between"
              >
                {/* Decorative border line on hover */}
                <span className="absolute top-0 left-0 w-0 h-[3px] bg-gradient-to-r from-blue-900 to-emerald-500 group-hover:w-full transition-all duration-300" />
                
                <div>
                  {/* Icon Card Cover */}
                  <div className="h-12 w-12 rounded-xl bg-blue-50 group-hover:bg-blue-900/5 flex items-center justify-center transition-colors">
                    {renderIcon(service.iconName, "h-6 w-6 text-blue-900 group-hover:scale-110 transition-transform")}
                  </div>

                  <h3 className="text-xl font-bold text-slate-800 mt-6 mb-3 group-hover:text-blue-900 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600 group-hover:text-emerald-700 transition-all pt-4 border-t border-gray-50 uppercase tracking-widest mt-auto">
                  <span>En savoir plus</span>
                  <Icons.ArrowRight size={13} className="transform group-hover:translate-x-1.5 transition-transform" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Dynamic Details Modal Overlay */}
        <AnimatePresence>
          {activeModalService && (
            <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', duration: 0.5 }}
                className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative"
              >
                {/* Close Button */}
                <button
                  onClick={() => setActiveModalService(null)}
                  className="absolute top-5 right-5 h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-200 text-gray-700 hover:text-black transition-colors"
                >
                  <Icons.X size={18} />
                </button>

                {/* Banner accent color */}
                <div className="p-6 md:p-8 bg-gradient-to-r from-blue-950 to-blue-900 text-white flex items-center gap-4 rounded-t-3xl">
                  <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                    {renderIcon(activeModalService.iconName, "h-7 w-7 text-emerald-400")}
                  </div>
                  <div>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 font-bold px-2 py-0.5 rounded uppercase tracking-wider">
                      J&K Services
                    </span>
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight">
                      {activeModalService.title}
                    </h3>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-6">
                  {/* Detailed Description */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-bold text-slate-400 uppercase tracking-widest">
                      Description Détaillée
                    </h4>
                    <p className="text-slate-700 leading-relaxed text-sm md:text-base">
                      {activeModalService.longDescription}
                    </p>
                  </div>

                  {/* Bullet features */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
                    {/* Prestabilités incluses */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider flex items-center gap-1.5">
                        <Icons.CheckCircle size={14} />
                        Prestations Clés
                      </h4>
                      <ul className="space-y-2">
                        {activeModalService.features.map((feat, i) => (
                          <li key={i} className="flex gap-2 text-xs text-slate-800 leading-tight">
                            <span className="text-emerald-500 font-bold mt-0.5">•</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bénéfices attendus */}
                    <div className="space-y-3">
                      <h4 className="text-xs font-bold text-emerald-600 uppercase tracking-wider flex items-center gap-1.5">
                        <Icons.Award size={14} />
                        Bénéfices pour vous
                      </h4>
                      <ul className="space-y-2">
                        {activeModalService.benefits.map((benefit, i) => (
                          <li key={i} className="flex gap-2 text-xs text-slate-800 leading-tight">
                            <span className="text-blue-500 font-bold mt-0.5">✓</span>
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action bar */}
                  <div className="pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
                    <span className="text-slate-500 text-xs text-center sm:text-left">
                      Besoin d’informations immédiates de la part de nos experts ?
                    </span>
                    <button
                      onClick={() => selectServiceForQuoteAndClose(activeModalService.title)}
                      className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
                    >
                      <Icons.Calculator size={15} />
                      Simuler un devis
                    </button>
                  </div>

                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
