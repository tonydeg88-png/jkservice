/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, AdvantageItem, StatItem } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'gestion-entreprise',
    title: 'Gestion d’Entreprise',
    description: 'Accompagnement opérationnel et stratégique pour piloter et structurer votre activité commerciale.',
    longDescription: 'Nous vous assistons dans l’organisation interne, l’optimisation des processus administratifs et opérationnels, ainsi que l’établissement de tableaux de bord financiers et de gestion pour une prise de décision éclairée.',
    iconName: 'Building2',
    category: 'management',
    benefits: ['Gains de productivité substantiels', 'Prise de décision basée sur des indicateurs fiables', 'Meilleure gestion des ressources internes'],
    features: ['Audit organisationnel', 'Mise en place de process de gestion', 'Aide aux décisions stratégiques', 'Suivi de trésorerie']
  },
  {
    id: 'creation-entreprise',
    title: 'Création d’Entreprise',
    description: 'De l’idée juridique à l’enregistrement de votre société, nous prenons en charge toutes les formalités.',
    longDescription: 'Nous gérons l’intégralité des étapes nécessaires à la création de votre entreprise à Lomé et dans la sous-région (rédaction de statuts, formalités CFE, agrément administratif, ouverture de compte et conseils d’implantation).',
    iconName: 'Rocket',
    category: 'admin',
    benefits: ['Formalités bouclées en un temps record', 'Accompagnement juridique sur-mesure', 'Démarrage d’activité serein et conforme'],
    features: ['Étude de faisabilité et choix du statut juridique', 'Rédaction complète des statuts', 'Formalités d’immatriculation au CFE', 'Obtention de la carte d’opérateur économique']
  },
  {
    id: 'gestion-immobiliere',
    title: 'Gestion Immobilière',
    description: 'Une gestion locative et patrimoniale transparente pour sécuriser et valoriser vos investissements.',
    longDescription: 'De la recherche de locataires sérieux à la rédaction des baux conformes à la législation locale, en passant par le recouvrement des loyers et l’entretien régulier des biens, nous prenons votre sérénité au sérieux.',
    iconName: 'Home',
    category: 'property',
    benefits: ['Revenus locatifs sécurisés', 'Valorisation de votre patrimoine immobilier', 'Gestion des conflits et du recouvrement'],
    features: ['Gestion des contrats de bail', 'Recouvrement actif des loyers', 'Suivi technique et travaux d’entretien', 'Reporting financier régulier pour les propriétaires']
  },
  {
    id: 'prestations-services',
    title: 'Prestations de Services',
    description: 'Une assistance logistique et administrative polyvalente adaptée aux besoins quotidiens des professionnels.',
    longDescription: 'Nous assurons des prestations d’assistance polyvalente allant de la saisie numérique et l’archivage à l’accompagnement logistique, les courses administratives urgentes et la mise en relation avec des prestataires agréés.',
    iconName: 'Workflow',
    category: 'services',
    benefits: ['Délégation de tâches non stratégiques', 'Fluidité des opérations quotidiennes', 'Réseau de prestataires rigoureusement sélectionnés'],
    features: ['Assistance administrative sur-mesure', 'Courses administratives et logistiques', 'Suivi de chantiers ou de projets', 'Secrétariat délocalisé']
  },
  {
    id: 'commerce-general',
    title: 'Commerce Général',
    description: 'Sourcing, distribution et courtage international de biens et denrées de premier ordre.',
    longDescription: 'Nous négocions et assurons l’approvisionnement et la logistique de marchandises de qualité à l’échelle locale et internationale, avec un réseau logistique performant et sécurisé.',
    iconName: 'ShoppingBag',
    category: 'services',
    benefits: ['Accès à des fournisseurs fiables et qualifiés', 'Optimisation des coûts d’achat', 'Garantie de qualité et conformité des produits'],
    features: ['Achat et négoce international', 'Distribution de produits et équipements', 'Services de dédouanement et d’import-export', 'Sourcing local et sous-régional']
  },
  {
    id: 'formations',
    title: 'Formations Professionnelles',
    description: 'Développez les compétences pratiques de vos équipes en bureautique, comptabilité et fiscalité.',
    longDescription: 'Des modules pratiques de formation, dispensés par des experts chevronnés, visant à renforcer l’autonomie de vos employés sur des sujets incontournables : gestion comptable, bureautique d’entreprise et déclarations sociales.',
    iconName: 'GraduationCap',
    category: 'management',
    benefits: ['Inculcation de bonnes pratiques comptables', 'Maîtrise d’outils de gestion modernes', 'Amélioration directe du rendement des employés'],
    features: ['Formation en comptabilité & fiscalité pratique', 'Bureautique avancée (Excel, Word)', 'Management d’équipe et communication', 'Formations à la conformité réglementaire']
  },
  {
    id: 'fiscalite-cnss',
    title: 'Déclaration TVA, Impôts & CNSS',
    description: 'Mise en conformité rigoureuse de vos déclarations fiscales et charges patronales.',
    longDescription: 'Établissement régulier de vos déclarations de TVA, calcul de l’impôt annuel sur les sociétés, gestion des versements CNSS et précompte professionnels. Nous garantissons zéro erreur pour écarter toute pénalité.',
    iconName: 'Percent',
    category: 'finance',
    benefits: ['Sécurité absolue face aux risques de redressement', 'Calcul optimisé des charges sociales', 'Relations d’affaires saines avec les administrations'],
    features: ['Déclaration mensuelle / trimestrielle de TVA', 'Déclaration de l’impôt sur le revenu et les sociétés', 'Calcul et versement des cotisations CNSS', 'Assistance lors de contrôles ou audits fiscaux']
  },
  {
    id: 'appels-offres',
    title: 'Dossiers d’Appels d’Offres',
    description: 'Montage méticuleux et compétitif de vos réponses administratives et techniques.',
    longDescription: 'De la veille sur les marchés publics et privés au montage des dossiers de candidature technique et d’offre financière, nous optimisons vos réponses pour maximiser vos chances de sélection auprès des donneurs d’ordres.',
    iconName: 'FileText',
    category: 'admin',
    benefits: ['Dossiers administratifs certifiés conformes', 'Optimisation des volets techniques et financiers', 'Augmentation significative de votre taux de réussite'],
    features: ['Analyse de cahiers des charges (DAO)', 'Collecte des pièces administratives requises', 'Rédaction et mise en forme de la proposition technique', 'Estimation des coûts pour l’offre financière']
  },
  {
    id: 'bilan-financier',
    title: 'Bilan de Fin d’Exercice',
    description: 'Production d’états financiers de fin d’année certifiés et conformes au référentiel SYSCOHADA.',
    longDescription: 'Nous élaborons vos balances, grands livres et états de synthèse de fin d’exercice (compte de résultat, bilan comptable, tableau des flux de trésorerie) pour vous donner une visibilité nette et rassurer vos partenaires financiers.',
    iconName: 'TrendingUp',
    category: 'finance',
    benefits: ['États financiers certifiés fidèles', 'Liasse fiscale optimisée prête à être déposée', 'Analyse approfondie de la santé financière'],
    features: ['Clôture des comptes annuels', 'Élaboration de la liasse fiscale SYSCOHADA', 'Présentation synthétique de l’exercice comptable', 'Rapports de gestion financière pour les actionnaires']
  }
];

export const ADVANTAGES_DATA: AdvantageItem[] = [
  {
    id: 'expertise',
    title: 'Expertise Professionnelle',
    description: 'Une équipe pluridisciplinaire d’experts en fiscalité, comptabilité, gestion locative et assistance juridique pour déjouer tous vos défis réglementaires.',
    iconName: 'Award'
  },
  {
    id: 'rapidite',
    title: 'Rapidité de Traitement',
    description: 'Nous traitons vos sollicitations, dossiers d’appels d’offres et enregistrements d’entreprises dans des délais ultra-courts pour propulser votre dynamique.',
    iconName: 'Zap'
  },
  {
    id: 'accompagnement',
    title: 'Accompagnement Personnalisé',
    description: 'Chez nous, vous n’êtes pas un simple numéro. Nous concevons pour chaque client une solution d’accompagnement unique, adaptée à sa taille et son budget.',
    iconName: 'Users'
  },
  {
    id: 'solutions',
    title: 'Solutions Fiables & Modernes',
    description: 'Des process dématérialisés, un suivi clair, et des reporting réguliers garantissant une transparence totale sur vos affaires foncières, fiscales ou administratives.',
    iconName: 'ShieldCheck'
  }
];

export const STATS_DATA: StatItem[] = [
  {
    id: 'clients',
    value: '150+',
    label: 'Clients Satisfaits',
    description: 'PME, indépendants, propriétaires immobiliers et grands comptes.'
  },
  {
    id: 'dossiers',
    value: '800+',
    label: 'Dossiers Traités',
    description: 'Formations, fiscalité, créations d’entreprises et d’appels d’offres.'
  },
  {
    id: 'annees',
    value: '8+',
    label: 'Années d’Expérience',
    description: 'Un savoir-faire consolidé au service du développement économique.'
  }
];
