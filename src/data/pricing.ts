export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  timeEstimate: string;
  positioning: string;
  features: string[];
  highlighted?: boolean;
};

export const pricing: PricingPlan[] = [
  {
    name: "Essentiel",
    description: "Première vitrine simple, propre et professionnelle.",
    price: "390 €",
    timeEstimate: "1 à 2 jours",
    positioning: "Pour lancer une présence crédible rapidement.",
    features: [
      "Site one-page",
      "Design adapté à l'activité",
      "Présentation claire des services",
      "Mise en avant des avis ou points forts",
      "Boutons d'appel / email / itinéraire",
      "Optimisation mobile",
      "SEO local de base",
      "Mise en ligne Netlify ou équivalent",
      "1 aller-retour de modification",
    ],
  },
  {
    name: "Pro",
    description: "Vitrine plus complète et plus convaincante.",
    price: "990 €",
    timeEstimate: "3 à 5 jours",
    positioning: "Pour mieux structurer votre image, vos services et vos demandes.",
    highlighted: true,
    features: [
      "Site vitrine multi-sections ou multi-pages léger",
      "Design plus premium",
      "Contenus structurés",
      "Mise en avant des services",
      "Galerie ou exemples",
      "FAQ",
      "Formulaire de contact",
      "Intégration Google Maps / liens externes",
      "SEO local renforcé",
      "Optimisation mobile",
      "Mise en ligne",
      "2 allers-retours de modification",
    ],
  },
  {
    name: "Premium Local",
    description: "Site complet pour les activités à plus fort enjeu.",
    price: "Sur devis",
    timeEstimate: "1 à 3 semaines selon périmètre",
    positioning: "Pour construire une présence locale plus stratégique.",
    features: [
      "Site complet",
      "Pages dédiées",
      "Stratégie de positionnement",
      "Copywriting commercial",
      "SEO local avancé",
      "Intégration réservation ou outils externes",
      "Tracking des conversions",
      "Accompagnement personnalisé",
    ],
  },
];

export const maintenance = {
  price: "À partir de 49 €/mois",
  features: [
    "Suivi technique",
    "Sauvegardes",
    "Petites modifications",
    "Suivi sécurité",
    "Support simple",
  ],
};
