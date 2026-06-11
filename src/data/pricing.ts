export type PricingPlan = {
  name: string;
  description: string;
  price: string;
  features: string[];
  highlighted?: boolean;
};

export const pricing: PricingPlan[] = [
  {
    name: "Essentiel",
    description: "Pour lancer une présence propre rapidement.",
    price: "À partir de 690 €",
    features: [
      "Site one page",
      "Design personnalisé",
      "Présentation de l'activité",
      "Contact facilité",
      "Optimisation mobile",
      "SEO local de base",
    ],
  },
  {
    name: "Pro",
    description: "Pour une vitrine complète et plus convaincante.",
    price: "À partir de 1 200 €",
    highlighted: true,
    features: [
      "Site multi sections",
      "Design premium",
      "Contenu structuré",
      "Pages services",
      "SEO local renforcé",
      "Formulaire intelligent",
      "Mise en ligne",
    ],
  },
  {
    name: "Premium Local",
    description: "Pour les activités à forte valeur.",
    price: "Sur devis",
    features: [
      "Site complet",
      "Stratégie de positionnement",
      "Pages dédiées",
      "SEO local avancé",
      "Copywriting commercial",
      "Tracking des contacts",
      "Maintenance ou accompagnement",
    ],
  },
];
