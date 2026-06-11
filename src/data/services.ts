export type Service = {
  title: string;
  description: string;
  icon: string;
};

export const services: Service[] = [
  {
    title: "Demo avant engagement",
    description: "Vous voyez une premiere projection avant de vous engager.",
    icon: "play-circle",
  },
  {
    title: "Design moderne",
    description: "Un site propre, clair et adapte a votre activite.",
    icon: "layout-template",
  },
  {
    title: "SEO local",
    description: "Une structure pensee pour etre trouve dans votre ville.",
    icon: "map-pin",
  },
  {
    title: "Contact facilite",
    description: "Appel, formulaire, reservation ou itineraire visibles au bon moment.",
    icon: "phone-call",
  },
];
