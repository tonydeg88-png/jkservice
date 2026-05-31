/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { STATS_DATA } from '../data';
import { motion } from 'motion/react';
import { Check, Heart, Trophy, Compass, Star } from 'lucide-react';

export default function About() {
  return (
    <section id="a-propos" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative vector background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-50/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Images Section on Left */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] lg:max-w-none">
              
              {/* Decorative dotted grid */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[radial-gradient(#cbd5e1_1.5px,transparent_1.5px)] [background-size:12px_12px] opacity-70 pointer-events-none" />
              
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border-8 border-slate-50 shadow-2xl aspect-[3/4]">
                <img
                  src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&q=80&w=600"
                  alt="Fondateur / Directeur J&K Services à son bureau"
                  className="w-full h-full object-cover grayscale-10 brightness-110 filter hover:scale-105 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual elegant tint overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-950/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Decorative absolute card overlay (Client Satisfaction Badge) */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute -right-4 top-1/2 -translate-y-1/2 bg-blue-900 text-white p-5 rounded-2xl shadow-xl space-y-2 max-w-[210px] hidden sm:block border-4 border-white"
              >
                <div className="flex items-center gap-1.5 text-emerald-400">
                  <Heart className="h-5 w-5 fill-emerald-400" />
                  <span className="text-xs font-bold tracking-widest uppercase">Éthique J&K</span>
                </div>
                <p className="text-xs font-semibold leading-relaxed text-slate-200">
                  « Amorcer la croissance, pérenniser la gestion et sécuriser la fiscalité avec une transparence totale. »
                </p>
                <div className="flex items-center gap-0.5 text-xs text-emerald-400 font-bold uppercase tracking-wider">
                  <span>Signé Direction</span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Text & Stats Section on Right */}
          <div className="lg:col-span-7 space-y-6 md:space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-blue-950 text-xs font-bold uppercase tracking-wider">
                <span>⭐ À Propos de Nous</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Cabinet Partenaire <br />
                <span className="text-blue-900">J&K Services</span>
              </h2>
              <div className="h-1 w-20 bg-emerald-500 rounded-full" />
            </div>

            <div className="space-y-4 md:space-y-6 text-slate-600 font-normal leading-relaxed text-sm md:text-base">
              <p>
                <strong>J&K Services</strong> est un cabinet d’administration et d’ingénierie d’affaires à Lomé, conçu pour accompagner les créateurs d’entreprises, gérants et investisseurs fonciers. Notre mission est de simplifier l’accès aux prestations comptables, fiscales et juridiques à toute entité commerciale.
              </p>
              <p>
                Afin de garantir à nos clients une tranquillité permanente, nous gérons pour eux l'instruction de l'immatriculation d'entreprise, la tenue régulière des TVA, la télé-déclaration syndicale et la gestion technique et financière des baux d’habitation et locaux professionnels.
              </p>
            </div>

            {/* Core Values Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4">
              <div className="flex gap-3 items-start">
                <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Rigueur d’Évaluation</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Systématiquement double-validé fiscalement.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Discrétion Absolue</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Vos données comptables et immobilières hautement sécurisées.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Portée Multi-Services</h4>
                  <p className="text-xs text-slate-500 mt-0.5">De la formation au commerce général et immobiliers.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <div className="h-6 w-6 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800 text-sm">Synergie SYSCOHADA</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Parfaitement en phase avec la législation de l’UEMOA.</p>
                </div>
              </div>
            </div>

            {/* Statistics Row Card Layout */}
            <div className="pt-8 border-t border-slate-100">
              <h3 className="text-slate-400 font-semibold text-[10px] uppercase tracking-widest mb-6">
                Nos Indicateurs Clés de Croissance
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {STATS_DATA.map((stat) => (
                  <motion.div
                    whileHover={{ translateY: -3 }}
                    transition={{ duration: 0.2 }}
                    key={stat.id}
                    className="bg-blue-50/50 p-6 rounded-2xl border border-blue-500/5 hover:bg-blue-50 hover:border-blue-500/10 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-3xl md:text-4xl font-extrabold text-blue-900 block font-mono">
                        {stat.value}
                      </span>
                      <span className="text-slate-800 font-bold text-sm block mt-2">
                        {stat.label}
                      </span>
                    </div>
                    <span className="text-slate-500 text-xs mt-1.5 leading-snug font-light">
                      {stat.description}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
