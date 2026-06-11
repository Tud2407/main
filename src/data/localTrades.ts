export type LocalTrade = {
  name: string;
  objective: string;
  highlights: string[];
  cta: string;
};

export const localTrades: LocalTrade[] = [
  {
    name: "Garage",
    objective: "Inspirer confiance avant l'appel ou la demande de devis.",
    highlights: ["Prestations", "Avis clients", "Devis rapide", "Itinéraire"],
    cta: "Demander un devis",
  },
  {
    name: "Restaurant",
    objective: "Donner envie de réserver ou de passer sur place.",
    highlights: ["Ambiance", "Menu", "Horaires", "Réservation"],
    cta: "Réserver une table",
  },
  {
    name: "Cabinet médical",
    objective: "Rassurer les patients et rendre les informations utiles visibles.",
    highlights: ["Soins", "Équipe", "Prise de rendez-vous", "Accès"],
    cta: "Prendre rendez-vous",
  },
  {
    name: "Coffee shop",
    objective: "Montrer l'univers du lieu et faciliter la visite.",
    highlights: ["Ambiance", "Carte", "Instagram", "Google Maps"],
    cta: "Voir l'adresse",
  },
  {
    name: "Artisan / commerce local",
    objective: "Présenter le savoir-faire et générer des contacts qualifiés.",
    highlights: ["Réalisations", "Services", "Zone d'intervention", "Appel direct"],
    cta: "Échanger sur mon besoin",
  },
];
