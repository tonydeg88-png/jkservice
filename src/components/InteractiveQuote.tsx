/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { SERVICES_DATA } from '../data';
import { QuoteSimulation } from '../types';
import { 
  Calculator, Check, AlertCircle, Clock, Send, 
  Trash2, FileSpreadsheet, Sparkles, Building, Briefcase, RefreshCw, Layers
} from 'lucide-react';

export default function InteractiveQuote({ selectedServiceFromParent }: { selectedServiceFromParent: string }) {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [companyType, setCompanyType] = useState<string>('individuel');
  const [revenueBracket, setRevenueBracket] = useState<string>('micro');
  const [isUrgent, setIsUrgent] = useState<boolean>(false);
  const [additionalInfo, setAdditionalInfo] = useState<string>('');
  
  // Contacts
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  // Statuses
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string>('');
  const [allSimulations, setAllSimulations] = useState<QuoteSimulation[]>([]);
  const [calculatedComplexity, setCalculatedComplexity] = useState<{ score: number; label: string; text: string }>({ score: 0, label: 'Basse', text: 'Diagnostic simple nécessitant de moindres démarches.' });

  // Initial load
  useEffect(() => {
    const saved = localStorage.getItem('jk_simulations');
    if (saved) {
      try {
        setAllSimulations(JSON.parse(saved));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  // Listen to parental changes if a service was clicked from above Catalogue cards
  useEffect(() => {
    if (selectedServiceFromParent) {
      if (!selectedServices.includes(selectedServiceFromParent)) {
        setSelectedServices(prev => [...prev, selectedServiceFromParent]);
      }
      
      // Auto scroll to quote simulator
      const element = document.getElementById('simulateur-devis');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [selectedServiceFromParent]);

  // Real-time Complexity & Assessment calculation
  useEffect(() => {
    let score = selectedServices.length * 15;
    
    if (companyType === 'sarl' || companyType === 'sa') score += 20;
    if (revenueBracket === 'moyen') score += 15;
    if (revenueBracket === 'grand') score += 30;
    if (isUrgent) score += 25;

    let label = 'Basse';
    let text = 'Vos démarches administratives ou fiscales demandent un faible volume réglementaire.';
    if (score > 35 && score <= 65) {
      label = 'Modérée';
      text = 'Niveau standard. Nécessite la préparation d’états financiers types et la complétion de formulaires visés.';
    } else if (score > 65) {
      label = 'Élevée';
      text = 'Niveau complexe (SYSCOHADA complet/multisectoriel). Assistance personnalisée d’un de nos experts fiscaux requise.';
    }

    setCalculatedComplexity({ score, label, text });
  }, [selectedServices, companyType, revenueBracket, isUrgent]);

  // Toggle Services
  const handleToggleService = (serviceTitle: string) => {
    if (selectedServices.includes(serviceTitle)) {
      setSelectedServices(prev => prev.filter(s => s !== serviceTitle));
    } else {
      setSelectedServices(prev => [...prev, serviceTitle]);
    }
  };

  // Submit Simulated Quote
  const handleSubmitSimulation = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    if (selectedServices.length === 0) {
      setValidationError('Veuillez sélectionner au moins un de nos services pour lancer l’estimation.');
      return;
    }
    if (!fullName || !email || !phone) {
      setValidationError('Veuillez renseigner toutes vos coordonnées de base (Nom, Email, Téléphone).');
      return;
    }

    const estimateTimeNeeded = isUrgent 
      ? '2 à 3 Jours Ouvrés (Traitement Express)' 
      : `${Math.max(3, Math.min(10, selectedServices.length * 2))} Jours Ouvrés`;

    const newSimulation: QuoteSimulation = {
      id: 'SIM-' + Math.random().toString(36).substr(2, 9).toUpperCase(),
      servicesChosen: [...selectedServices],
      companyType,
      revenueBracket,
      additionalInfo,
      fullName,
      email,
      phone,
      dateCreated: new Date().toLocaleDateString('fr-FR', {
        year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
      }),
      estimatedTime: estimateTimeNeeded
    };

    const updated = [newSimulation, ...allSimulations];
    setAllSimulations(updated);
    localStorage.setItem('jk_simulations', JSON.stringify(updated));

    // Reset Form fields
    setSelectedServices([]);
    setIsUrgent(false);
    setAdditionalInfo('');
    setFullName('');
    setEmail('');
    setPhone('');
    setShowSuccess(true);
    
    // Auto clear success banner
    setTimeout(() => {
      setShowSuccess(false);
    }, 10000);
  };

  // Delete Simulation from History
  const handleDeleteSim = (id: string) => {
    const updated = allSimulations.filter(s => s.id !== id);
    setAllSimulations(updated);
    localStorage.setItem('jk_simulations', JSON.stringify(updated));
  };

  return (
    <section id="simulateur-devis" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative vectors */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-blue-150 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-150 rounded-full blur-3xl opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full text-emerald-950 text-xs font-bold uppercase tracking-wider">
            <span>⚙️ Estimation Immédiate</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Simulateur de Devis en Ligne
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full" />
          <p className="text-slate-600 font-normal text-base md:text-lg">
            Configurez vos besoins en quelques clics. Recevez un diagnostic personnalisé immédiat ainsi qu’une estimation préliminaire de temps de traitement.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Simulator Form (Left - 8 columns representing clean setup) */}
          <div className="lg:col-span-8 bg-white border border-gray-150 rounded-3xl p-6 md:p-8 shadow-xl">
            <form onSubmit={handleSubmitSimulation} className="space-y-8">
              
              {/* Step 1: Services Selection */}
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2">
                    <span className="h-7 w-7 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center">1</span>
                    Choisissez vos Services Requis
                  </h3>
                  <span className="text-xs text-slate-400 font-semibold uppercase">Sélection multiple</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {SERVICES_DATA.map((service) => {
                    const isChecked = selectedServices.includes(service.title);
                    return (
                      <div
                        key={service.id}
                        onClick={() => handleToggleService(service.title)}
                        className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-3 ${
                          isChecked 
                            ? 'border-blue-900 bg-blue-50/20 shadow-md' 
                            : 'border-gray-200 hover:border-gray-300 hover:bg-slate-50'
                        }`}
                      >
                        <div className={`mt-0.5 h-4.5 w-4.5 rounded border flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-blue-900 border-blue-900 text-white' : 'border-gray-300'
                        }`}>
                          {isChecked && <Check size={12} strokeWidth={3} />}
                        </div>
                        <div>
                          <p className="text-xs sm:text-sm font-bold text-slate-800 leading-tight">
                            {service.title}
                          </p>
                          <p className="text-[11px] text-slate-500 mt-0.5 leading-normal">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 2: Corporate parameters */}
              <div className="space-y-4 pt-4 border-t border-gray-50">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-gray-100 pb-3">
                  <span className="h-7 w-7 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center">2</span>
                  Paramètres de Votre Entreprise
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Company Legal Structure */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block flex items-center gap-1.5">
                      <Building size={14} className="text-blue-900" />
                      Statut Juridique
                    </label>
                    <select
                      value={companyType}
                      onChange={(e) => setCompanyType(e.target.value)}
                      className="w-full text-sm border border-gray-200 bg-[#fafafa] rounded-xl px-3.5 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900"
                    >
                      <option value="individuel">Entreprise Individuelle (Établissement)</option>
                      <option value="sarl">S.A.R.L / S.A.R.L.U</option>
                      <option value="sa">S.A (Société Anonyme)</option>
                      <option value="association">Association / ONG</option>
                      <option value="particulier">Particulier (Immobilier uniquement)</option>
                    </select>
                  </div>

                  {/* Volume Tracker */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block flex items-center gap-1.5">
                      <Briefcase size={14} className="text-blue-900" />
                      Taille / Chiffre d'Affaire
                    </label>
                    <select
                      value={revenueBracket}
                      onChange={(e) => setRevenueBracket(e.target.value)}
                      className="w-full text-sm border border-gray-200 bg-[#fafafa] rounded-xl px-3.5 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900"
                    >
                      <option value="micro">Nouveau Projet (Création)</option>
                      <option value="petit">Moins de 20 millions FCFA</option>
                      <option value="moyen">De 20 à 100 millions FCFA</option>
                      <option value="grand">Plus de 100 millions FCFA</option>
                    </select>
                  </div>

                  {/* Urgence Toggle */}
                  <div className="space-y-2 flex flex-col justify-end">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block">
                      Priorité de dossier
                    </label>
                    <div className="flex gap-2 items-center py-1 select-none">
                      <button
                        type="button"
                        onClick={() => setIsUrgent(!isUrgent)}
                        className={`w-full py-2.5 px-4 text-xs font-bold rounded-xl border flex items-center justify-center gap-2 transition-all cursor-pointer ${
                          isUrgent 
                            ? 'bg-rose-50 border-rose-200 text-rose-700 font-extrabold focus:outline-none'
                            : 'bg-white border-gray-200 text-slate-600 hover:border-gray-300'
                        }`}
                      >
                        <Clock size={14} />
                        {isUrgent ? 'Traitement SUPER-URGENT ⚡' : 'Traitement Standard'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3: Contact Coordinates */}
              <div className="space-y-4 pt-4 border-t border-gray-50">
                <h3 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-2 border-b border-gray-100 pb-3">
                  <span className="h-7 w-7 rounded-full bg-blue-900 text-white text-xs font-bold flex items-center justify-center">3</span>
                  Vos Coordonnées de Contact
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Full Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Nom Complet / Raison Sociale</label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Ex: Jean Kossi"
                      className="w-full text-sm border border-gray-200 bg-[#fafafa] rounded-xl px-3.5 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Email Officiel</label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Ex: jean.kossi@gmail.com"
                      className="w-full text-sm border border-gray-200 bg-[#fafafa] rounded-xl px-3.5 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-600">Numéro de Téléphone (Togo)</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: +228 90 81 02 72"
                      className="w-full text-sm border border-gray-200 bg-[#fafafa] rounded-xl px-3.5 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900"
                    />
                  </div>
                </div>

                {/* Additional notes Info */}
                <div className="space-y-1.5 pt-2">
                  <label className="text-xs font-bold text-slate-600 block">Notes Complémentaires (Spécifications, Chantiers ou Délais)</label>
                  <textarea
                    rows={2}
                    value={additionalInfo}
                    onChange={(e) => setAdditionalInfo(e.target.value)}
                    placeholder="Précisez ici les détails de vos biens, les statuts envisagés, ou vos contraintes de traitement..."
                    className="w-full text-sm border border-gray-200 bg-[#fafafa] rounded-xl p-3.5 text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-900/10 focus:border-blue-900"
                  />
                </div>
              </div>

              {/* Error messages if any */}
              {validationError && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl flex items-center gap-3 text-rose-800 text-xs font-bold">
                  <AlertCircle size={18} className="shrink-0" />
                  <span>{validationError}</span>
                </div>
              )}

              {/* Submit / Trigger Button */}
              <div className="pt-4 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedServices([]);
                    setIsUrgent(false);
                    setAdditionalInfo('');
                  }}
                  className="flex items-center gap-1 text-slate-400 hover:text-slate-600 font-bold text-xs uppercase tracking-wider cursor-pointer"
                >
                  <RefreshCw size={13} />
                  Réinitialiser
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto bg-blue-900 hover:bg-slate-900 text-white font-extrabold px-8 py-3.5 rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <Send size={15} />
                  Enregistrer ma Simulation de Devis
                </button>
              </div>

            </form>
          </div>

          {/* Real-time Assessment Summary Card (Right - 4 columns) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Realtime diagnostic view */}
            <div className="bg-gradient-to-br from-blue-950 to-indigo-950 text-white rounded-3xl p-6 shadow-xl border border-blue-900/30">
              <h3 className="text-md font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-6 border-b border-indigo-900/40 pb-3">
                <Sparkles size={16} />
                Diagnostic Immédiat
              </h3>

              <div className="space-y-6">
                
                {/* Score indicators */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                    <span>Complexité de Traitement :</span>
                    <span className={`px-2.5 py-0.5 rounded-full text-[10px] uppercase ${
                      calculatedComplexity.label === 'Basse' 
                        ? 'bg-emerald-500/10 text-emerald-300'
                        : calculatedComplexity.label === 'Modérée'
                        ? 'bg-amber-500/10 text-amber-300'
                        : 'bg-rose-500/10 text-rose-300'
                    }`}>
                      {calculatedComplexity.label}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-emerald-400 to-blue-400 transition-all duration-300"
                      style={{ width: `${Math.max(10, Math.min(100, calculatedComplexity.score))}%` }}
                    />
                  </div>
                </div>

                {/* Selected counts */}
                <div className="space-y-1">
                  <span className="text-xs text-slate-400 font-bold block">Services Sélectionnés ({selectedServices.length})</span>
                  {selectedServices.length === 0 ? (
                    <p className="text-xs text-slate-300 italic">Aucun service coché pour l'instant.</p>
                  ) : (
                    <ul className="text-xs space-y-1.5 max-h-[140px] overflow-y-auto pr-1">
                      {selectedServices.map((title, i) => (
                        <li key={i} className="flex gap-2 items-center text-slate-200">
                          <span className="text-emerald-400 font-bold font-mono">✓</span>
                          <span>{title}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Estimate Preparation Time */}
                <div className="bg-slate-900/55 p-4 rounded-2xl border border-slate-800 flex gap-3 items-center">
                  <div className="h-9 w-9 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block">Temps Estimé de Remise</span>
                    <span className="text-xs font-extrabold text-white">
                      {selectedServices.length === 0 
                        ? 'Sélectionnez des services...' 
                        : isUrgent 
                        ? '2 à 3 Jours Ouvrés (Express)' 
                        : `${Math.max(3, Math.min(10, selectedServices.length * 2))} Jours Ouvrés`
                      }
                    </span>
                  </div>
                </div>

                {/* Diagnostic Description */}
                <p className="text-xs font-light text-slate-300 leading-normal border-t border-indigo-900/40 pt-4">
                  {calculatedComplexity.text}
                </p>

              </div>
            </div>

            {/* Success notification block */}
            {showSuccess && (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-5 shadow-md text-emerald-900 space-y-2 animate-in fade-in slide-in-from-top-7 duration-350">
                <h4 className="font-bold flex items-center gap-1.5 text-sm">
                  <Check size={18} className="text-emerald-600" />
                  Demande Enregistrée !
                </h4>
                <p className="text-xs font-normal leading-normal text-emerald-800">
                  Votre de consultation est simulé et préservé avec succès dans votre espace personnel. Un gestionnaire de J&K Services va l’analyser pour votre rendez-vous. Merci !
                </p>
              </div>
            )}

            {/* Quick Contacts J&K Mini Card */}
            <div className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm text-slate-700 space-y-4">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">Assistance Directe</h4>
              <p className="text-xs leading-relaxed text-slate-500">Besoin d’un audit physique directement dans nos bureaux à Agoè Atsanvé ? Appelez le secrétariat J&K Services :</p>
              
              <div className="text-sm font-bold text-blue-900 space-y-1">
                <a href="tel:+22890810272" className="block hover:underline">📞 +228 90 81 02 72</a>
                <a href="mailto:jkservicesinfos@gmail.com" className="block hover:underline text-xs text-emerald-600 font-medium">✉️ jkservicesinfos@gmail.com</a>
              </div>
            </div>

          </div>

        </div>

        {/* Saved Simulations/Requests (Local Storage History Drawer - highly satisfying capacity) */}
        {allSimulations.length > 0 && (
          <div className="mt-16 bg-white border border-gray-200 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
              <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                <FileSpreadsheet className="text-blue-900" size={20} />
                Vos Simulations Récentes ({allSimulations.length})
              </h3>
              <button
                onClick={() => {
                  if (window.confirm('Voulez-vous supprimer tout votre historique de simulation ?')) {
                    setAllSimulations([]);
                    localStorage.removeItem('jk_simulations');
                  }
                }}
                className="text-xs font-bold text-rose-600 hover:text-rose-700 hover:underline cursor-pointer flex items-center gap-1"
              >
                Tout effacer
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {allSimulations.map((sim) => (
                <div 
                  key={sim.id}
                  className="bg-slate-50 border border-gray-200 rounded-2xl p-5 relative group hover:border-blue-900/20 transition-all shadow-sm"
                >
                  <button
                    onClick={() => handleDeleteSim(sim.id)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-rose-600 transition-colors cursor-pointer"
                    title="Supprimer la simulation"
                  >
                    <Trash2 size={15} />
                  </button>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                      <span>{sim.id}</span>
                      <span className="text-emerald-600 font-mono">{sim.dateCreated}</span>
                    </div>

                    <div className="space-y-1 pointer-events-none">
                      <p className="text-sm font-extrabold text-blue-950 leading-tight">Demandeur : {sim.fullName}</p>
                      <p className="text-xs text-slate-500">{sim.email} / {sim.phone}</p>
                    </div>

                    {/* Preselected list */}
                    <div className="pt-2 border-t border-gray-200/65">
                      <span className="text-[10px] text-slate-400 uppercase tracking-wider font-extrabold block mb-1">Prestations sélectionnées</span>
                      <div className="flex flex-wrap gap-1">
                        {sim.servicesChosen.map((serv, index) => (
                          <span key={index} className="text-[10px] font-bold bg-white border border-gray-200 text-slate-700 px-2 py-0.5 rounded-md">
                            {serv}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Meta stats */}
                    <div className="pt-2 flex items-center justify-between text-xs text-slate-600 font-medium">
                      <span>Délai d’établissement :</span>
                      <span className="text-blue-900 font-bold">{sim.estimatedTime}</span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
