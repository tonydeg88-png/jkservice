/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle, Clock } from 'lucide-react';

export default function Contact() {
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [subject, setSubject] = useState<string>('deplacement');
  const [message, setMessage] = useState<string>('');

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    // Basic validation
    if (!fullName || !email || !phone || !message) {
      setErrorMessage('Veuillez compléter l’ensemble des champs obligatoires.');
      setIsSubmitting(false);
      return;
    }

    // Simulate sending (realistic premium debounce)
    setTimeout(() => {
      // Save message locally so they see true feedback simulation
      const savedMessages = localStorage.getItem('jk_contact_messages') || '[]';
      let messagesArray = [];
      try {
        messagesArray = JSON.parse(savedMessages);
      } catch (e) {
        messagesArray = [];
      }

      const newMessage = {
        id: 'MSG-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
        fullName,
        email,
        phone,
        subject,
        message,
        dateCreated: new Date().toLocaleString('fr-FR')
      };

      messagesArray.unshift(newMessage);
      localStorage.setItem('jk_contact_messages', JSON.stringify(messagesArray));

      // Reset
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setIsSubmitting(false);
      setSubmitSuccess(true);

      // Reset success visual feedback after 10s
      setTimeout(() => setSubmitSuccess(false), 10000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic curve transition from grey top to white */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-full h-[60px] md:h-[120px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,32L120,42.7C240,53,480,75,720,74.7C960,75,1200,53,1260,42.7L1320,32L1320,120L1260,120C1200,120,960,120,720,120C480,120,240,120,120,120L0,120Z" fill="#f8fafc"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full text-blue-950 text-xs font-bold uppercase tracking-wider">
            <span>📮 Contact Express</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Coordonnées & Messagerie
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full" />
          <p className="text-slate-600 font-normal text-base md:text-lg">
            Que vous soyez une grande entreprise à Lomé ou un particulier gérant un patrimoine foncier, notre équipe d’experts vous assure un accueil convivial et chaleureux.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Coordinates Cards (Left column - 5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Summary card */}
            <div className="bg-[#0f172a] text-white p-8 rounded-3xl space-y-6 relative overflow-hidden shadow-xl">
              <div className="absolute right-0 bottom-0 w-36 h-36 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />
              
              <h3 className="text-xl font-bold border-b border-slate-800 pb-3">
                J&K Services Lomé
              </h3>

              <div className="space-y-6 font-light">
                
                {/* Telephone */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Téléphone Direct</h4>
                    <p className="text-md font-bold text-white mt-1">
                      <a href="tel:+22890810272" className="hover:text-emerald-400 transition-colors">
                        +228 90 81 02 72
                      </a>
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">Appel standard et WhatsApp Professionnel</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Courriel Officiel</h4>
                    <p className="text-md font-bold text-white mt-1 break-all">
                      <a href="mailto:jkservicesinfos@gmail.com" className="hover:text-blue-400 transition-colors">
                        jkservicesinfos@gmail.com
                      </a>
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">Réponse garantie sous 24 heures maximum</p>
                  </div>
                </div>

                {/* Address */}
                <div className="flex gap-4 items-start">
                  <div className="h-10 w-10 rounded-xl bg-rose-500/10 text-rose-400 flex items-center justify-center shrink-0 border border-rose-500/20">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Bureau J&K Services</h4>
                    <p className="text-md font-bold text-white mt-1">
                      Agoè Atsanvé, non loin du marché
                    </p>
                    <p className="text-xs text-slate-300 mt-0.5">Lomé - Quartier Agoè, République Togolaise</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex gap-4 items-start pt-4 border-t border-slate-800">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
                    <Clock size={18} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400">Heures d'Ouverture</h4>
                    <p className="text-sm text-slate-200 mt-1 font-semibold">Lundi - Vendredi : 08h00 - 17h30</p>
                    <p className="text-xs text-slate-300">Samedi : 09h00 - 13h00 (Sur rendez-vous)</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Simulated Live Google Maps Area */}
            <div className="bg-slate-50 rounded-3xl p-3 border border-gray-150 overflow-hidden shadow-md">
              <div className="rounded-2xl overflow-hidden aspect-video relative h-[220px]">
                {/* Embedded standard clean Maps */}
                <iframe
                  title="J&K Services - Location Map"
                  src="https://maps.google.com/maps?q=Agoe%20Atsanve%20Lome%20Togo&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0 w-full h-full border-0 grayscale brightness-95"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <span className="text-[10px] text-slate-400 block text-center mt-2.5 font-bold uppercase tracking-widest">
                📍 Agoè Atsanvé - Plan de situation
              </span>
            </div>

          </div>

          {/* Messaging Form (Right column - 7 columns) */}
          <div className="lg:col-span-7 bg-[#fafafa] border border-gray-150 rounded-3xl p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 border-b border-gray-200/60 pb-3 mb-6">
              Envoyer un Message Sécurisé
            </h3>

            <form onSubmit={handleSendMessage} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Full name input */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 block">Nom & Prénom / Structure *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Ex: Jean Kossi"
                    className="w-full text-sm border border-gray-200 bg-white rounded-xl px-3.5 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900"
                  />
                </div>

                {/* Telephone */}
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-600 block">Téléphone Portable *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ex: +228 90 81 02 72"
                    className="w-full text-sm border border-gray-200 bg-white rounded-xl px-3.5 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 block">Adresse Email *</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ex: jkservicesinfos@gmail.com"
                  className="w-full text-sm border border-gray-200 bg-white rounded-xl px-3.5 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900"
                />
              </div>

              {/* Subject */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 block">Sujet de votre démarche *</label>
                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full text-sm border border-gray-200 bg-white rounded-xl px-3.5 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900"
                >
                  <option value="deplacement">Prendre rendez-vous physique au bureau</option>
                  <option value="entreprise">Création ou modification d'entreprise</option>
                  <option value="impots">Déclaration TVA / Impôts / CNSS</option>
                  <option value="immobilier">Gérance Immobilière / Litige locatif</option>
                  <option value="offres">Traitement de dossier d'appel d'offre</option>
                  <option value="autre">Prestations de services diverses</option>
                </select>
              </div>

              {/* Message text area */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-600 block">Détails de Votre Demande *</label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Rédigez ici votre message ou votre question de manière détaillée..."
                  className="w-full text-sm border border-gray-200 bg-white rounded-xl p-3.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900"
                ></textarea>
              </div>

              {/* Validation notification or feedbacks */}
              {errorMessage && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-2.5 text-rose-800 text-xs font-bold">
                  <AlertCircle size={16} />
                  <span>{errorMessage}</span>
                </div>
              )}

              {submitSuccess && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl flex items-start gap-2.5 text-emerald-800 text-xs">
                  <CheckCircle2 size={16} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Votre message a été envoyé avec succès !</span>
                    <span className="block mt-0.5 font-light text-emerald-700 leading-normal">
                      Nos consultants J&K Services vont lire votre courriel et vous recontacter par téléphone dans l'heure. Merci de nous faire confiance.
                    </span>
                  </div>
                </div>
              )}

              {/* CTA button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-900 hover:bg-slate-900 disabled:bg-slate-400 text-white font-bold py-3.5 rounded-xl text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Transmission en cours...</span>
                  </>
                ) : (
                  <>
                    <Send size={15} />
                    <span>Envoyer mon courriel à J&K Services</span>
                  </>
                )}
              </button>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
