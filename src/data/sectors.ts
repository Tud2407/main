export type Sector = {
  slug: string;
  label: string;
  headline: string;
  primaryActions: string[];
};

export const sectors: Sector[] = [
  {
    slug: "garages",
    label: "Garage",
    headline: "Un site clair pour inspirer confiance et recevoir plus de demandes.",
    primaryActions: ["Appeler", "Demander un devis", "Voir les avis"],
  },
  {
    slug: "restaurants",
    label: "Restaurant",
    headline: "Une vitrine qui donne envie de reserver ou de passer vous voir.",
    primaryActions: ["Reserver", "Voir le menu", "Obtenir l'itineraire"],
  },
  {
    slug: "cabinets-medicaux",
    label: "Cabinet medical",
    headline: "Une presence rassurante pour presenter vos soins et vos informations utiles.",
    primaryActions: ["Prendre rendez-vous", "Appeler", "Voir l'adresse"],
  },
  {
    slug: "commerces-locaux",
    label: "Commerce local",
    headline: "Une image plus professionnelle pour valoriser votre activite de quartier.",
    primaryActions: ["Appeler", "Voir les horaires", "Venir en boutique"],
  },
];
