# Ajustements Site Personnel Tudor Pop — Prompts Codex

## Contexte

Le site personnel Tudor Pop est déjà déployé sur Netlify.

Objectif maintenant : améliorer le rendu, corriger les problèmes visibles, enrichir la navigation, intégrer les nouvelles illustrations, clarifier les offres/prix, cacher temporairement les projets clients non finalisés, créer des pages pédagogiques et mettre en place un vrai formulaire de contact fonctionnel.

Ce document est destiné à être donné à Codex dans VS Code.

---

# 0. Règles générales pour Codex

Avant toute modification importante :

1. Lire le projet existant.
2. Comprendre l’architecture Astro actuelle.
3. Ne pas casser le déploiement Netlify.
4. Ne pas supprimer les sections existantes intéressantes : les masquer proprement si elles ne doivent pas encore être visibles.
5. Garder le site rapide, responsive et SEO-friendly.
6. Tester le build à la fin de chaque grosse étape.
7. Respecter l’identité Tudor Pop :
   - vert profond
   - vert principal
   - pêche
   - crème
   - style moderne, local, humain, premium accessible.

---

# 1. Assets à intégrer

Les nouvelles illustrations seront placées dans le projet, idéalement dans :

```txt
public/assets/illustrations/
```

Images à intégrer :

```txt
pub-1.png
pub-2-avant-apres.png
etapes-du-projet.png
exemples-de-commerces-locaux.png
la-vitrine-et-les-plus.png
contact-rapide.png
exemple-cafe-tudor.png
personalisation.png
site-internet.png
avantages-du-projet.png
logo-tudor-pop.png
logo-tudor-pop-transparent.png
```

Important :
Si les fichiers ont des espaces ou des accents, les renommer proprement en kebab-case sans accents.

---

# 2. Objectifs de correction immédiate

## 2.1 Boutons invisibles

Problème observé :
Certains boutons sont sombres avec du texte noir, donc peu lisibles.

Correction attendue :

- Tous les boutons principaux doivent avoir un contraste fort.
- Boutons pêche : texte vert profond.
- Boutons vert profond : texte crème ou blanc.
- Boutons outline : bordure visible, texte lisible, hover clair.
- Vérifier les boutons dans le hero, header, offres, contact, footer et CTA intermédiaires.

Ne jamais laisser :
```txt
fond vert sombre + texte noir
fond pêche + texte trop clair
fond transparent sans bordure visible
```

## 2.2 Logo plus grand et mieux intégré

Objectif :
Le logo Tudor Pop doit être beaucoup plus présent, harmonisé et premium.

À faire :

- Agrandir le logo dans le header.
- Ajouter le logo dans le hero, de façon élégante.
- Utiliser le monogramme TP comme élément graphique léger dans certaines sections.
- Ajouter le logo dans le footer.
- Vérifier que le logo n’est pas flou.
- Prévoir une version responsive :
  - desktop : logo complet plus grand
  - mobile : monogramme ou logo compact.

## 2.3 Tarifs à corriger

### Offre Essentiel

Prix :
```txt
390 €
```

Positionnement :
Pour une première vitrine simple, propre et professionnelle.

Temps de travail estimé :
```txt
1 à 2 jours
```

Inclure :

- Site one-page
- Design adapté à l’activité
- Présentation claire des services
- Mise en avant des avis ou points forts
- Boutons d’appel / email / itinéraire
- Optimisation mobile
- SEO local de base
- Mise en ligne Netlify ou équivalent
- 1 aller-retour de modification

### Offre Pro

Prix :
```txt
990 €
```

Positionnement :
Pour une vitrine plus complète et plus convaincante.

Temps de travail estimé :
```txt
3 à 5 jours
```

Inclure :

- Site vitrine multi-sections ou multi-pages léger
- Design plus premium
- Contenus structurés
- Mise en avant des services
- Galerie ou exemples
- FAQ
- Formulaire de contact
- Intégration Google Maps / liens externes
- SEO local renforcé
- Optimisation mobile
- Mise en ligne
- 2 allers-retours de modification

### Offre Premium Local

Prix :
```txt
Sur devis
```

Positionnement :
Pour les activités qui veulent une image plus forte et une vraie stratégie de présence locale.

Temps de travail estimé :
```txt
1 à 3 semaines selon le périmètre
```

Inclure :

- Site complet
- Pages dédiées
- Stratégie de positionnement
- Copywriting commercial
- SEO local avancé
- Intégration réservation ou outils externes
- Tracking des conversions
- Accompagnement personnalisé

### Maintenance

Prix :
```txt
À partir de 49 € / mois
```

Inclure :

- suivi technique
- sauvegardes
- petites modifications
- suivi sécurité
- support simple

## 2.4 Cacher les projets non finalisés

Problème :
Les exemples comme Viviani, Ahiyo, Le Soprano, etc. ne sont pas encore des projets vendus/finalisés. Il ne faut pas les afficher comme références clients.

À faire :

- Masquer temporairement la section “Réalisations”, “Exemples clients”, ou toute section qui donne l’impression que ces commerces sont déjà clients.
- Ne pas supprimer le code.
- Créer une constante ou un flag du type :

```ts
const showClientProjects = false;
```

Remplacer temporairement cette section par une section plus générique :

Titre :
```txt
Des sites pensés pour les métiers locaux
```

Texte :
```txt
Chaque métier a ses propres besoins : rassurer, présenter ses services, montrer son ambiance, faciliter la réservation ou générer des appels. Mon approche consiste à adapter la structure du site à votre activité, votre ville et vos clients.
```

Cartes génériques :

- Garage
- Restaurant
- Cabinet médical
- Coffee shop
- Artisan / commerce local

---

# 3. Passage à un site multi-pages

Objectif :
Ne pas avoir seulement une homepage très longue. Créer une navigation plus puissante, plus professionnelle et meilleure pour le SEO.

Pages recommandées :

```txt
/
/
/offres
/methode
/sites-pour-commerces-locaux
/sites-pour-restaurants
/sites-pour-garages
/sites-pour-cabinets-medicaux
/glossaire
/contact
/merci
```

Navigation principale :

```txt
Accueil
Offres
Méthode
Métiers
Glossaire
Contact
```

Menu “Métiers” :
- Commerces locaux
- Restaurants
- Garages
- Cabinets médicaux

CTA header :
```txt
Demander ma démo
```

---

# 4. Page Glossaire pédagogique

URL :
```txt
/glossaire
```

Objectif :
Créer une page pédagogique qui montre que Tudor maîtrise le vocabulaire web sans être jargon.

Titre :
```txt
Comprendre les mots importants d’un site internet
```

Intro :
```txt
Créer un site internet ne devrait pas être compliqué. Cette page explique simplement les notions les plus importantes pour comprendre ce que vous achetez, ce qui est inclus, et ce qui permet à votre site d’être visible, rapide et utile.
```

Termes à expliquer simplement :

- Site vitrine
- Nom de domaine
- Hébergement
- SEO
- SEO local
- SEA
- Responsive
- UX
- UI
- CTA
- Formulaire de contact
- Analytics
- Conversion
- Landing page
- Maintenance
- SSL / HTTPS
- Performance
- Sitemap
- Meta title
- Meta description
- Netlify
- CMS

Fin de page :
CTA :
```txt
Vous n’avez pas besoin de tout maîtriser. Mon rôle est de rendre ces sujets simples et utiles pour votre activité.
```

---

# 5. Formulaire de contact fonctionnel

Objectif :
Le formulaire doit envoyer une demande à Tudor.

Site déployé sur Netlify :
Utiliser Netlify Forms en priorité.

Champs :

```txt
Nom
Activité
Ville
Téléphone
Email
Site actuel ou fiche Google
Objectif principal
Message
```

Options objectif :

```txt
Avoir un site moderne
Recevoir plus d’appels
Améliorer mon image
Présenter mes services
Rediriger vers une réservation
Être plus visible localement
Voir une démo
```

Configuration Netlify Forms :

Formulaire HTML avec :

```html
<form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
```

Ajouter le champ caché :

```html
<input type="hidden" name="form-name" value="contact" />
```

Ajouter champ anti-spam invisible :

```html
<p hidden>
  <label>Ne pas remplir : <input name="bot-field" /></label>
</p>
```

Après soumission :
- rediriger vers `/merci`.

Créer une page :

```txt
/merci
```

Texte :

```txt
Merci, votre demande a bien été envoyée.
Je vous répondrai rapidement pour échanger sur votre activité et voir ce qu’on peut créer ensemble.
```

Après déploiement, vérifier dans Netlify :
Forms > contact

Pour recevoir les emails :
Forms > Form notifications > Add notification > Email notification.

---

# 6. Illustrations recommandées par section

Homepage :

Hero :
- pub-1.png
ou
- la-vitrine-et-les-plus.png

Section problème / avant-après :
- pub-2-avant-apres.png

Section méthode :
- etapes-du-projet.png

Section métiers :
- exemples-de-commerces-locaux.png

Section bénéfices :
- avantages-du-projet.png

Section personnalisation :
- personalisation.png

Section contact :
- contact-rapide.png

Page SEO local :
- site-internet.png
ou
- exemple-cafe-tudor.png

Important :
Les images doivent :
- être optimisées
- avoir des alt text utiles
- être responsive
- ne pas ralentir excessivement le site
- ne pas écraser le texte
- ne pas rendre le site trop chargé

---

# 7. PROMPTS CODEX

## Prompt 1 — Audit des ajustements et plan d’intervention

```text
Tu travailles sur le site Astro déjà déployé de Tudor Pop.

Objectif :
Préparer une série d’ajustements sans casser le site ni le déploiement Netlify.

Commence par analyser :
- l’architecture actuelle
- les pages existantes
- les composants
- le système de styles
- les boutons
- la section exemples/réalisations
- le formulaire
- la configuration Netlify
- les assets disponibles

Problèmes et besoins à prendre en compte :
1. Certains boutons sont illisibles : fond sombre + texte noir.
2. Le logo Tudor Pop doit être plus grand, plus présent et mieux harmonisé.
3. Les prix doivent être modifiés :
   - Essentiel : 390 €
   - Pro : 990 €
   - Premium Local : sur devis
   - Maintenance : à partir de 49 €/mois
4. Les sections qui affichent de vrais commerces comme références clients doivent être masquées temporairement, sans suppression.
5. Il faut remplacer ces références par une section générique sur les métiers locaux.
6. Le site doit devenir multi-pages.
7. Les nouvelles illustrations doivent être intégrées.
8. Il faut créer une page glossaire pédagogique.
9. Il faut mettre en place un vrai formulaire de contact compatible Netlify Forms.

Ne code rien pour le moment.
Réponds avec :
- les fichiers que tu vas modifier
- les fichiers que tu vas créer
- les risques éventuels
- l’ordre recommandé des modifications
- les commandes de test à exécuter à la fin

Attends ma validation.
```

## Prompt 2 — Corrections UI immédiates : boutons, logo, tarifs

```text
Plan validé.

Commence par les corrections UI et commerciales immédiates.

À faire :

1. Corriger tous les boutons illisibles
- aucun bouton ne doit avoir fond sombre + texte noir
- les boutons vert profond doivent avoir texte crème ou blanc
- les boutons pêche doivent avoir texte vert profond
- les boutons outline doivent être clairement visibles
- vérifier header, hero, offres, contact, footer, CTA intermédiaires

2. Améliorer le logo Tudor Pop
- agrandir le logo dans le header
- intégrer le logo de façon plus forte et harmonieuse dans le hero
- utiliser le monogramme TP dans le footer
- vérifier le rendu desktop et mobile
- éviter tout logo flou ou trop petit

3. Modifier les offres et tarifs

Offre Essentiel :
- Prix : 390 €
- Temps estimé : 1 à 2 jours
- Positionnement : première vitrine simple, propre et professionnelle
- Inclure :
  - Site one-page
  - Design adapté à l’activité
  - Présentation claire des services
  - Mise en avant des avis ou points forts
  - Boutons d’appel / email / itinéraire
  - Optimisation mobile
  - SEO local de base
  - Mise en ligne Netlify ou équivalent
  - 1 aller-retour de modification

Offre Pro :
- Prix : 990 €
- Temps estimé : 3 à 5 jours
- Positionnement : vitrine plus complète et plus convaincante
- Inclure :
  - Site vitrine multi-sections ou multi-pages léger
  - Design plus premium
  - Contenus structurés
  - Mise en avant des services
  - Galerie ou exemples
  - FAQ
  - Formulaire de contact
  - Intégration Google Maps / liens externes
  - SEO local renforcé
  - Optimisation mobile
  - Mise en ligne
  - 2 allers-retours de modification

Offre Premium Local :
- Prix : Sur devis
- Temps estimé : 1 à 3 semaines selon périmètre
- Inclure :
  - Site complet
  - Pages dédiées
  - Stratégie de positionnement
  - Copywriting commercial
  - SEO local avancé
  - Intégration réservation ou outils externes
  - Tracking des conversions
  - Accompagnement personnalisé

Maintenance :
- Prix : À partir de 49 €/mois
- Inclure :
  - suivi technique
  - sauvegardes
  - petites modifications
  - suivi sécurité
  - support simple

À la fin :
- lancer npm run build
- corriger toute erreur éventuelle
- résumer les fichiers modifiés
```

## Prompt 3 — Masquer les références clients et créer une section métiers générique

```text
Maintenant, ajuste la section exemples/réalisations.

Problème :
Les projets comme Centre Auto Viviani, Charlemagne Mécanic, Garage Piegay, Ahiyo Coffee, Le Soprano Poissy ou Marrel Gentil ne doivent pas encore apparaître comme références clients.

Objectif :
Ne pas supprimer le travail existant, mais le masquer temporairement.

À faire :
1. Créer un flag de configuration :
   showClientProjects = false

2. Si showClientProjects est false :
   - ne pas afficher les vraies références
   - afficher une section générique à la place

3. Section générique à créer :

Titre :
Des sites pensés pour les métiers locaux

Texte :
Chaque métier a ses propres besoins : rassurer, présenter ses services, montrer son ambiance, faciliter la réservation ou générer des appels. Mon approche consiste à adapter la structure du site à votre activité, votre ville et vos clients.

Cartes :
- Garage
- Restaurant
- Cabinet médical
- Coffee shop
- Artisan / commerce local

Pour chaque carte :
- objectif principal
- ce que le site met en avant
- CTA adapté

4. Intégrer l’illustration :
exemples-de-commerces-locaux.png

5. Garder le code des vraies références disponible pour plus tard.

À la fin :
- vérifier responsive
- lancer npm run build
```

## Prompt 4 — Intégrer les nouvelles illustrations

```text
Intègre les nouvelles illustrations dans le site.

Avant de commencer :
- repère où sont placées les images dans le projet
- si nécessaire, renomme les fichiers en kebab-case sans accents ni espaces
- optimise leur usage pour le web

Images à utiliser :
- pub-1.png
- pub-2-avant-apres.png
- etapes-du-projet.png
- exemples-de-commerces-locaux.png
- la-vitrine-et-les-plus.png
- contact-rapide.png
- exemple-cafe-tudor.png
- personalisation.png
- site-internet.png
- avantages-du-projet.png

Placement recommandé :

Homepage hero :
- pub-1.png ou la-vitrine-et-les-plus.png

Section problème / avant-après :
- pub-2-avant-apres.png

Section méthode :
- etapes-du-projet.png

Section métiers :
- exemples-de-commerces-locaux.png

Section bénéfices :
- avantages-du-projet.png

Section personnalisation :
- personalisation.png

Section contact :
- contact-rapide.png

Page ou section SEO local :
- site-internet.png ou exemple-cafe-tudor.png

Contraintes :
- ne pas surcharger le site
- conserver une bonne lisibilité
- ajouter des alt text utiles
- images responsive
- lazy loading si possible
- ne pas ralentir le site
- garder une hiérarchie claire entre texte et image

À la fin :
- vérifier mobile
- lancer npm run build
```

## Prompt 5 — Transformer le site en multi-pages

```text
Transforme le site en vrai site multi-pages.

Objectif :
Ne plus avoir uniquement une homepage très longue.
Créer une navigation plus professionnelle et plus puissante pour le SEO.

Pages à créer :
- /
- /offres
- /methode
- /sites-pour-commerces-locaux
- /sites-pour-restaurants
- /sites-pour-garages
- /sites-pour-cabinets-medicaux
- /glossaire
- /contact
- /merci

Navigation principale :
- Accueil
- Offres
- Méthode
- Métiers
- Glossaire
- Contact

Le menu Métiers doit donner accès à :
- Commerces locaux
- Restaurants
- Garages
- Cabinets médicaux

CTA header :
Demander ma démo

Règles :
1. Garder la homepage forte, mais moins interminable.
2. Déplacer les contenus détaillés vers les pages dédiées.
3. Chaque page doit avoir :
   - un title SEO
   - une meta description
   - un H1 clair
   - un CTA final
4. Le design doit rester cohérent.
5. Le menu mobile doit être impeccable.
6. Les liens internes doivent tous fonctionner.

À la fin :
- vérifier toutes les routes
- lancer npm run build
```

## Prompt 6 — Créer la page Glossaire pédagogique

```text
Crée la page /glossaire.

Objectif :
Créer une page pédagogique pour expliquer simplement les notions importantes d’un site internet à des professionnels locaux.

Cette page doit montrer que Tudor maîtrise les sujets sans utiliser un ton trop technique.

Titre :
Comprendre les mots importants d’un site internet

Introduction :
Créer un site internet ne devrait pas être compliqué. Cette page explique simplement les notions les plus importantes pour comprendre ce que vous achetez, ce qui est inclus, et ce qui permet à votre site d’être visible, rapide et utile.

Termes à inclure :
- Site vitrine
- Nom de domaine
- Hébergement
- SEO
- SEO local
- SEA
- Responsive
- UX
- UI
- CTA
- Formulaire de contact
- Analytics
- Conversion
- Landing page
- Maintenance
- SSL / HTTPS
- Performance
- Sitemap
- Meta title
- Meta description
- Netlify
- CMS

Pour chaque terme :
- définition simple
- exemple concret pour un commerce local
- pourquoi c’est utile

Fin de page :
Ajouter un CTA :
Vous n’avez pas besoin de tout maîtriser. Mon rôle est de rendre ces sujets simples et utiles pour votre activité.

Design :
- afficher les termes sous forme de cartes ou accordéons
- garder un ton clair, humain et rassurant
- éviter le jargon excessif

SEO :
Title :
Glossaire web simple | Tudor Pop

Meta description :
Comprendre simplement les termes importants d’un site internet : SEO, nom de domaine, hébergement, responsive, CTA, analytics, maintenance et plus encore.

À la fin :
- lancer npm run build
```

## Prompt 7 — Formulaire de contact Netlify Forms

```text
Mets en place un vrai formulaire de contact fonctionnel compatible Netlify Forms.

Objectif :
Quand un prospect remplit le formulaire, la demande doit remonter dans Netlify Forms.
Ensuite, Tudor pourra configurer une notification email depuis l’interface Netlify.

Créer ou corriger la page :
/contact

Créer aussi :
/merci

Formulaire :
- name="contact"
- method="POST"
- data-netlify="true"
- netlify-honeypot="bot-field"
- champ hidden form-name="contact"

Champs visibles :
- Nom
- Activité
- Ville
- Téléphone
- Email
- Site actuel ou fiche Google
- Objectif principal
- Message

Options du champ Objectif principal :
- Avoir un site moderne
- Recevoir plus d’appels
- Améliorer mon image
- Présenter mes services
- Rediriger vers une réservation
- Être plus visible localement
- Voir une démo

Message anti-friction :
Pas besoin d’avoir déjà un cahier des charges. Envoyez-moi simplement votre activité et votre ville.

Contact direct :
Téléphone : 06 25 66 44 48
Email : pop.tudor.pro@gmail.com
LinkedIn : tudor-pop-2407
Instagram : pop_d_tudor

Après soumission :
Rediriger vers /merci si possible.

Page /merci :
Titre :
Merci, votre demande a bien été envoyée.

Texte :
Je vous répondrai rapidement pour échanger sur votre activité et voir ce qu’on peut créer ensemble.

Important :
- labels accessibles
- validation HTML basique
- design cohérent avec le site
- boutons lisibles
- protection honeypot
- compatible Astro build statique
- ne pas utiliser une API backend si Netlify Forms suffit

À la fin :
- expliquer comment vérifier dans Netlify :
  Forms > contact
- expliquer comment activer l’email :
  Forms > Form notifications > Add notification > Email notification
- lancer npm run build
```

## Prompt 8 — SEO final, responsive et build

```text
Finalise le site après tous les ajustements.

Checklist :

1. SEO global
- chaque page a un title
- chaque page a une meta description
- un seul H1 par page
- Open Graph propre
- sitemap
- robots
- favicon

2. Navigation
- tous les liens fonctionnent
- menu desktop propre
- menu mobile impeccable
- CTA header visible

3. Responsive
- mobile
- tablette
- desktop
- aucune image trop grande
- aucun texte illisible
- aucun bouton invisible

4. Formulaire
- page contact fonctionnelle
- page merci fonctionnelle
- formulaire compatible Netlify Forms

5. Performances
- images optimisées
- lazy loading
- pas d’animations trop lourdes

6. Accessibilité
- contrastes corrects
- labels de formulaire
- focus visible
- alt text sur les images

7. Build
- lancer npm run build
- corriger toutes les erreurs
- résumer les modifications

Important :
Ne pas faire de changements visuels majeurs non demandés.
L’objectif est de stabiliser le site avant commit et push vers GitHub/Netlify.
```

---

# 8. Commandes locales à utiliser

Comme PowerShell bloque parfois `npm`, utiliser :

```powershell
npm.cmd install
npm.cmd run build
npm.cmd run dev
```

Avant de push :

```powershell
npm.cmd run build
```

Si le build réussit :
- commit dans GitHub Desktop
- push origin
- vérifier Netlify

---

# 9. Après déploiement Netlify

À vérifier :

1. Le site s’affiche.
2. Les boutons sont lisibles.
3. Le logo est bien visible.
4. Les prix sont corrects.
5. Les vrais projets clients ne sont plus affichés.
6. Les illustrations sont bien intégrées.
7. Les pages fonctionnent.
8. Le formulaire apparaît dans Netlify Forms.
9. Une notification email est configurée dans Netlify.
10. Le mobile est propre.

---

# 10. Message stratégique à garder

Le site Tudor Pop ne doit pas se vendre comme un portfolio.

Il doit vendre une promesse claire :

```txt
Une vitrine qui travaille pour vous.
```

Les bénéfices à répéter :

```txt
Plus visible.
Plus crédible.
Plus facile à contacter.
```

Les différenciants :

```txt
Démo avant engagement.
Design moderne.
SEO local.
Contact facilité.
```
