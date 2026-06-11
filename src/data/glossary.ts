export type GlossaryTerm = {
  term: string;
  definition: string;
  example: string;
  usefulness: string;
};

export const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Site vitrine",
    definition: "Un site qui presente votre activite, vos services, vos informations pratiques et les moyens de vous contacter.",
    example: "Pour un restaurant, il peut afficher le menu, les horaires, l'ambiance, l'adresse et un bouton pour reserver.",
    usefulness: "Il donne une image plus professionnelle et rassure les clients avant leur premier appel ou leur premiere visite.",
  },
  {
    term: "Nom de domaine",
    definition: "L'adresse de votre site internet, comme moncommerce.fr.",
    example: "Un garage peut utiliser garage-dupont.fr pour etre facile a retrouver et a partager.",
    usefulness: "Il rend votre activite plus credible et permet aux clients de vous retrouver simplement.",
  },
  {
    term: "Hebergement",
    definition: "L'espace technique ou les fichiers de votre site sont stockes pour etre visibles en ligne.",
    example: "C'est ce qui permet a la page de votre cabinet medical de s'afficher quand un patient ouvre votre site.",
    usefulness: "Un bon hebergement aide le site a rester rapide, stable et disponible.",
  },
  {
    term: "SEO",
    definition: "L'ensemble des optimisations qui aident un site a etre mieux compris par Google.",
    example: "Une page claire sur vos services de plomberie aide Google a comprendre ce que vous proposez.",
    usefulness: "Il peut apporter plus de visiteurs sans payer chaque clic.",
  },
  {
    term: "SEO local",
    definition: "Le SEO applique a une ville, une zone ou une clientele locale.",
    example: "Un cabinet dentaire a Villefranche peut travailler des expressions comme dentiste a Villefranche.",
    usefulness: "Il aide les clients proches de vous a trouver votre activite au bon moment.",
  },
  {
    term: "SEA",
    definition: "La publicite payante sur les moteurs de recherche, souvent via Google Ads.",
    example: "Un serrurier peut payer pour apparaitre en haut des resultats sur une recherche urgente.",
    usefulness: "C'est utile pour obtenir de la visibilite rapidement, avec un budget controle.",
  },
  {
    term: "Responsive",
    definition: "Un site responsive s'adapte aux mobiles, tablettes et ordinateurs.",
    example: "Le menu et les boutons d'appel restent faciles a utiliser sur smartphone.",
    usefulness: "La plupart des clients consultent depuis leur telephone, donc le site doit etre confortable sur petit ecran.",
  },
  {
    term: "UX",
    definition: "L'experience utilisateur : la facilite avec laquelle une personne comprend et utilise le site.",
    example: "Sur un site de garage, les services, horaires et boutons de contact doivent etre trouves rapidement.",
    usefulness: "Une bonne UX reduit les hesitations et augmente les prises de contact.",
  },
  {
    term: "UI",
    definition: "L'interface visuelle : couleurs, boutons, espacements, cartes, formulaires et presentation generale.",
    example: "Une carte de tarifs bien lisible permet a un client de comparer sans effort.",
    usefulness: "Une UI soignee donne confiance et renforce l'image de votre activite.",
  },
  {
    term: "CTA",
    definition: "Un appel a l'action, comme Appeler, Reserver, Demander un devis ou Voir l'itineraire.",
    example: "Un bouton Appeler maintenant sur mobile peut transformer une visite en contact.",
    usefulness: "Il guide le client vers l'action importante au lieu de le laisser chercher.",
  },
  {
    term: "Formulaire de contact",
    definition: "Un espace ou un visiteur peut laisser ses coordonnees et expliquer son besoin.",
    example: "Un artisan peut recevoir une demande avec la ville, le type de travaux et le delai souhaite.",
    usefulness: "Il facilite les demandes qualifiees, meme quand vous n'etes pas disponible par telephone.",
  },
  {
    term: "Analytics",
    definition: "Des outils qui mesurent les visites, les pages vues et certaines actions sur le site.",
    example: "Vous pouvez savoir si les visiteurs cliquent sur le bouton d'appel ou la page contact.",
    usefulness: "Cela aide a comprendre ce qui fonctionne et ce qu'il faut ameliorer.",
  },
  {
    term: "Conversion",
    definition: "Une action utile realisee par un visiteur : appel, formulaire, reservation, demande de devis.",
    example: "Pour un restaurant, une conversion peut etre un clic vers la reservation.",
    usefulness: "Le site ne sert pas seulement a etre vu, il doit aider votre activite a recevoir plus de contacts.",
  },
  {
    term: "Landing page",
    definition: "Une page concue autour d'un objectif precis, souvent une offre ou une demande de contact.",
    example: "Une page speciale pour presenter une offre de nettoyage de toiture dans une ville.",
    usefulness: "Elle concentre le message et peut mieux convertir qu'une page trop generale.",
  },
  {
    term: "Maintenance",
    definition: "Le suivi du site apres sa mise en ligne : corrections, securite, petits ajouts et surveillance.",
    example: "Changer des horaires, ajouter un service ou corriger un lien casse.",
    usefulness: "Votre site reste propre, a jour et fiable dans le temps.",
  },
  {
    term: "SSL / HTTPS",
    definition: "La protection qui securise l'adresse du site et affiche le cadenas dans le navigateur.",
    example: "Un formulaire de contact doit etre envoye sur une page securisee en HTTPS.",
    usefulness: "C'est important pour la confiance, la securite et le referencement.",
  },
  {
    term: "Performance",
    definition: "La rapidite avec laquelle un site charge et reagit.",
    example: "Une page de restaurant qui s'ouvre vite permet de consulter le menu sans attendre.",
    usefulness: "Un site lent fait partir les visiteurs et peut penaliser l'experience mobile.",
  },
  {
    term: "Sitemap",
    definition: "Un fichier qui liste les pages importantes du site pour aider les moteurs de recherche.",
    example: "Il indique a Google les pages Accueil, Services, Contact et Secteurs.",
    usefulness: "Il facilite l'exploration du site, surtout quand il contient plusieurs pages.",
  },
  {
    term: "Meta title",
    definition: "Le titre qui apparait souvent dans les resultats Google et dans l'onglet du navigateur.",
    example: "Garage automobile a Lyon | Garage Dupont.",
    usefulness: "Il aide a comprendre rapidement le sujet de la page et peut ameliorer le clic.",
  },
  {
    term: "Meta description",
    definition: "Le court texte qui resume une page dans les resultats de recherche.",
    example: "Entretien, pneus et reparations auto a Lyon. Contact rapide et devis simple.",
    usefulness: "Elle donne envie de cliquer et clarifie ce que le visiteur va trouver.",
  },
  {
    term: "Netlify",
    definition: "Une plateforme qui permet de mettre en ligne des sites rapides et modernes.",
    example: "Un site vitrine peut etre publie sur Netlify avec un formulaire de contact et une connexion au domaine.",
    usefulness: "C'est pratique pour deployer un site leger, rapide et facile a maintenir.",
  },
  {
    term: "CMS",
    definition: "Un outil qui permet de modifier du contenu sans toucher au code.",
    example: "Un commerce peut changer une actualite, une photo ou un texte depuis une interface simple.",
    usefulness: "Il devient utile quand vous voulez modifier souvent le site en autonomie.",
  },
];
