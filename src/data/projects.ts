export type Project = {
  name: string;
  sector: string;
  city?: string;
  problem: string;
  solution: string;
  highlights: string[];
  demoUrl?: string;
  image?: string;
};

export const projects: Project[] = [
  {
    name: "Centre Auto Viviani",
    sector: "Garage indépendant",
    city: "Région lyonnaise",
    problem: "Créer une image plus moderne et rassurante.",
    solution: "Mettre en avant la confiance locale, les avis clients et la demande de devis.",
    highlights: ["Confiance locale", "Avis clients", "Demande de devis", "Contact rapide"],
    demoUrl: "/contact",
  },
  {
    name: "Charlemagne Mécanic",
    sector: "Garage",
    city: "Poissy",
    problem: "Clarifier les services et faciliter le contact.",
    solution: "Structurer une vitrine locale orientée appels, devis et services clés.",
    highlights: ["Services clairs", "SEO local", "Mobile first"],
    demoUrl: "/contact",
  },
  {
    name: "Garage Piegay",
    sector: "Garage",
    city: "Ouest lyonnais",
    problem: "Donner plus de crédibilité à une activité déjà reconnue localement.",
    solution: "Créer une page rassurante avec prestations, preuves, accès rapide et appel visible.",
    highlights: ["Image plus pro", "Prestations lisibles", "Itinéraire", "Appel direct"],
    demoUrl: "/contact",
  },
  {
    name: "Ahiyo Coffee",
    sector: "Coffee shop",
    city: "Paris",
    problem: "Valoriser l'ambiance et les informations pratiques.",
    solution: "Présenter l'univers, les horaires, l'adresse et les appels à l'action utiles.",
    highlights: ["Ambiance", "Google Maps", "Instagram", "Horaires"],
    demoUrl: "/contact",
  },
  {
    name: "Le Soprano Poissy",
    sector: "Restaurant",
    city: "Poissy",
    problem: "Transformer une présence locale en vitrine qui donne envie de réserver.",
    solution: "Mettre en scène le lieu, la carte, les informations pratiques et les réservations.",
    highlights: ["Réservation", "Menu", "Photos", "Accès rapide"],
    demoUrl: "/contact",
  },
  {
    name: "Centre Dentaire Marrel Gentil & Associés",
    sector: "Cabinet dentaire",
    city: "Marseille",
    problem: "Rassurer les patients et rendre les informations essentielles faciles à trouver.",
    solution: "Organiser les soins, l'équipe, la prise de rendez-vous et les informations d'accès.",
    highlights: ["Confiance", "Prise de RDV", "Soins lisibles", "Mobile first"],
    demoUrl: "/contact",
  },
];
