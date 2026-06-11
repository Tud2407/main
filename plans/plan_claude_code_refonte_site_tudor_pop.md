# Plan Claude Code — Refonte premium du site personnel Tudor Pop

## Objectif du document

Ce document sert à reprendre le projet avec Claude Code après plusieurs itérations faites avec Codex.

Le site est déjà déployé sur Netlify, mais la direction artistique n’est pas encore satisfaisante. L’objectif est maintenant de reprendre proprement la homepage, harmoniser le design, corriger les bugs visuels, finaliser les traductions FR/EN, consolider le mode clair/sombre, puis seulement ensuite passer à une vraie structure multi-pages.

Le site doit devenir la vitrine commerciale principale de Tudor Pop.

---

# 1. Contexte global du projet

Tudor Pop crée des sites vitrines modernes pour professionnels locaux.

Positionnement :

> Sites modernes pour professionnels locaux

Promesse principale :

> Une vitrine qui travaille pour vous

Bénéfices à répéter :

- Plus visible
- Plus crédible
- Plus facile à contacter
- Plus de clients
- Une image plus professionnelle
- Démo avant engagement
- Design moderne
- SEO local
- Contact facilité

Le site ne doit pas ressembler à un simple portfolio de freelance.

Il doit donner envie à un professionnel local de penser :

> Cette personne peut clairement améliorer l’image de mon activité.

---

# 2. État actuel du site

Le site est déjà en ligne :

```txt
https://tudor-pop.netlify.app/
```

Stack actuelle :

```txt
Astro
TypeScript
Tailwind CSS
Netlify
```

Le site a déjà subi plusieurs modifications :

- identité Tudor Pop intégrée ;
- prix mis à jour ;
- illustrations ajoutées ;
- section glossaire créée ;
- début de mode clair/sombre ;
- début de switch FR/EN ;
- certains vrais projets clients masqués ;
- section métiers locaux créée ;
- page glossaire créée ou en cours ;
- homepage encore trop longue et pas assez professionnelle.

---

# 3. Problèmes actuels observés

## 3.1 Le site ne fait pas encore assez wow

Le site contient de bonnes idées, mais le rendu desktop reste trop amateur :

- sections déséquilibrées ;
- images mal intégrées ;
- cadres trop rigides ;
- certains visuels sont coupés ;
- certaines images ne rentrent pas correctement dans les containers ;
- manque d’harmonie globale ;
- certaines sections paraissent vides ;
- la homepage manque de rythme et de hiérarchie premium.

## 3.2 Images mal intégrées

Les illustrations sont belles, mais actuellement elles sont parfois utilisées comme de simples images posées dans des cadres.

Problèmes :

- images coupées ;
- mauvais object-fit ;
- mauvaises hauteurs de container ;
- composition peu intentionnelle ;
- manque de cohérence entre texte et visuel ;
- certains cadres ne respectent pas les proportions des images.

Règle à appliquer :

- utiliser object-fit: contain quand il faut voir toute l’image ;
- utiliser object-fit: cover seulement quand le cadrage est maîtrisé ;
- éviter les images décoratives inutiles ;
- chaque image doit soutenir une idée précise.

## 3.3 Problèmes avec mode clair / sombre

Le switch clair/sombre existe ou a commencé à être implémenté, mais certains éléments ne suivent pas correctement :

- mauvais contrastes ;
- boutons mal lisibles ;
- fonds incohérents ;
- cartes qui restent trop sombres en mode clair ou trop claires en mode sombre ;
- texte pas toujours harmonisé.

Il faut stabiliser cela avec des variables de thème.

## 3.4 Problèmes avec switch FR / EN

Le switch français / anglais existe ou a été commencé, mais tout n’est pas traduit proprement.

Objectif :

- FR par défaut ;
- EN disponible ;
- toutes les sections visibles doivent être traduites ;
- navigation traduite ;
- CTA traduits ;
- offres traduites ;
- glossaire au moins structuré pour être traduisible, même si on complète progressivement.

## 3.5 Sections partiellement correctes

Certaines sections semblent plutôt correctes et ne doivent pas être entièrement détruites :

- Vrai sujet ;
- Métiers locaux ;
- Méthode ;
- Offres.

Ces sections peuvent être améliorées visuellement, mais elles ne sont pas prioritaires pour une refonte complète.

## 3.6 Sections à retravailler en priorité

À retravailler fortement :

- Hero / accueil ;
- La solution ;
- Pourquoi travailler avec moi ;
- transitions entre sections ;
- harmonie globale ;
- image integration system ;
- navigation ;
- switches clair/sombre et FR/EN ;
- cohérence desktop.

---

# 4. Direction artistique attendue

## 4.1 Objectif émotionnel

Le site doit donner une impression :

- moderne ;
- premium accessible ;
- dynamique ;
- propre ;
- local ;
- rassurant ;
- jeune ;
- sérieux ;
- commercialement efficace.

Le visiteur doit se dire :

> C’est propre, actuel, clair, et ça inspire confiance.

## 4.2 Ce qu’il faut éviter

Éviter :

- design vide ;
- cartes trop grandes avec peu de contenu ;
- images posées sans intention ;
- cadres qui coupent les visuels ;
- boutons illisibles ;
- effets gadgets ;
- surcharge d’animations ;
- trop gros blocs de texte ;
- sections monotones.

## 4.3 Style visuel

Identité Tudor Pop :

```txt
Vert principal : #0E8F78
Vert profond : #064F46
Vert sombre : #033B35
Pêche accent : #FFC49D
Crème texte : #FFF7EF
Fond clair : #F5EFE7
```

Le site doit alterner :

- fonds crème ;
- fonds vert profond ;
- sections avec dégradés doux ;
- cartes bien contrastées ;
- accents pêche ;
- éléments de grille ou motifs subtils.

---

# 5. Règles importantes pour Claude Code

Avant de coder :

1. Inspecter le projet.
2. Lire les fichiers existants.
3. Comprendre l’architecture actuelle.
4. Ne pas supprimer brutalement les sections existantes.
5. Ne pas casser la compatibilité Netlify.
6. Ne pas passer au multi-pages avant stabilisation de la homepage.
7. Toujours lancer le build après une grosse étape.
8. Respecter le mobile, qui semble déjà plutôt propre.
9. Corriger globalement les problèmes de design, pas bouton par bouton.
10. Créer une architecture maintenable.

Commandes utiles sous Windows PowerShell :

```powershell
npm.cmd install
npm.cmd run build
npm.cmd run dev
```

Ne pas lancer :

```powershell
npm audit fix --force
```

---

# 6. Organisation recommandée du travail avec Claude Code

Ordre recommandé :

1. Audit complet du projet.
2. Correction design system : boutons, thèmes, images, containers.
3. Refonte premium du hero.
4. Refonte de la section La solution.
5. Refonte de la section Pourquoi travailler avec moi.
6. Harmonisation FR/EN.
7. Stabilisation clair/sombre.
8. Build + vérification.
9. Ensuite seulement : passage multi-pages.
10. Ensuite : formulaire Netlify Forms.
11. Ensuite : SEO final et polish.

---

# 7. PROMPT CLAUDE 1 — Audit et plan avant intervention

```text
Tu reprends un site Astro / TypeScript / Tailwind déjà existant pour Tudor Pop.

Contexte :
Le site est déployé sur Netlify : https://tudor-pop.netlify.app/
Le site vend des sites vitrines modernes pour professionnels locaux.
Le positionnement est :
“Sites modernes pour professionnels locaux”
La promesse est :
“Une vitrine qui travaille pour vous”

Le site a déjà été modifié par Codex, mais le rendu actuel n’est pas satisfaisant.

Problèmes actuels :
- le rendu desktop ne fait pas assez professionnel ;
- le hero n’est pas assez “wow” ;
- certaines images sont mal intégrées ou coupées ;
- plusieurs sections manquent d’harmonie ;
- certains boutons ou éléments restent peu lisibles ;
- le mode clair/sombre comporte des incohérences ;
- le switch FR/EN n’est pas encore complet ;
- les sections “Vrai sujet”, “Métiers locaux”, “Méthode” et “Offres” sont plutôt correctes, donc il ne faut pas les détruire ;
- les sections à retravailler en priorité sont le hero, “La solution”, “Pourquoi travailler avec moi”, l’harmonie globale, les images et les switches.

Mission :
1. Inspecte toute l’architecture du projet.
2. Identifie les fichiers de pages, composants, styles, data, i18n, thème et assets.
3. Identifie les composants responsables :
   - des boutons ;
   - du hero ;
   - des sections solution ;
   - des sections “pourquoi travailler avec moi” ;
   - du mode clair/sombre ;
   - du switch FR/EN ;
   - des images.
4. Liste les problèmes concrets trouvés dans le code.
5. Propose un plan d’intervention en plusieurs étapes.
6. Ne code rien avant validation.

Contraintes :
- ne pas casser le build ;
- ne pas passer au multi-pages maintenant ;
- ne pas supprimer les sections existantes ;
- préserver le mobile ;
- viser un rendu desktop beaucoup plus premium.

Réponds avec :
- ton diagnostic ;
- les fichiers à modifier ;
- les risques ;
- l’ordre recommandé ;
- la commande de test à lancer à la fin.
```

---

# 8. PROMPT CLAUDE 2 — Correction du design system, boutons, images, thème

```text
Plan validé.

Avant de refaire les sections, corrige les fondations visuelles du site.

Objectif :
Créer une base fiable pour éviter les boutons illisibles, les thèmes incohérents et les images mal cadrées.

À faire :

1. Boutons
Centralise les styles de boutons.
S’il existe un composant Button, corrige-le.
Sinon, crée une logique propre de variantes.

Variantes nécessaires :
- primary : fond pêche, texte vert profond ;
- dark : fond vert profond, texte crème/blanc ;
- secondary : fond crème ou blanc, texte vert profond ;
- outline : fond transparent, bordure visible, texte lisible ;
- ghost : discret mais lisible.

Règles :
- aucun bouton fond sombre + texte sombre ;
- aucun bouton vide sans texte visible ;
- hover lisible ;
- focus visible ;
- CTA principal toujours très visible ;
- le bouton “Voir les exemples” doit être parfaitement lisible.

2. Images
Créer ou corriger un composant image réutilisable si pertinent :
- image responsive ;
- alt obligatoire ;
- object-fit maîtrisé ;
- jamais d’image coupée par accident ;
- variants possibles : contain, cover, hero, card, full-width.

Corriger les containers d’images pour éviter les visuels coupés.

3. Thème clair/sombre
Stabiliser le mode clair/sombre avec des variables CSS ou une stratégie Tailwind propre.

Modes attendus :
Mode clair :
- fond crème ;
- texte vert profond ;
- cartes blanches/crème ;
- accents pêche.

Mode sombre :
- fond vert profond ;
- texte crème ;
- cartes vert sombre ;
- accents pêche.

Le switch doit :
- fonctionner ;
- mémoriser le choix avec localStorage ;
- ne pas casser le contraste ;
- ne pas créer de flash trop visible.

4. FR/EN
Préparer ou corriger la structure i18n.
Le français reste par défaut.
L’anglais doit pouvoir traduire tous les textes visibles de la homepage.

Si une traduction complète existe déjà, l’auditer et la corriger.
Si elle est partielle, créer une structure simple et propre :
- fr.ts
- en.ts
ou équivalent.

Ne traduis pas encore tout le glossaire si cela demande trop de travail.
Mais tous les textes visibles de la homepage doivent être prêts à être traduits.

À la fin :
- lancer npm.cmd run build
- corriger les erreurs
- résumer les fichiers modifiés
```

---

# 9. PROMPT CLAUDE 3 — Refonte premium du hero

```text
Maintenant, refais uniquement le hero / accueil.

Objectif :
Le haut du site doit être beaucoup plus moderne, cool, professionnel et mémorable.
Il doit créer un effet “wow” dès les premières secondes.

Ne change pas toute la homepage.
Concentre-toi sur le hero.

Texte principal à garder :
Titre :
Une vitrine qui travaille pour vous

Sous-titre :
Je crée des sites vitrines modernes pour professionnels locaux, pensés pour rassurer vos futurs clients, valoriser votre activité et faciliter la prise de contact.

Badges :
- Démo avant engagement
- Design moderne
- SEO local
- Contact facilité

CTA :
- Demander ma démo
- Voir les exemples

Direction souhaitée :
- hero desktop en vraie composition premium ;
- pas simplement texte à gauche / image posée à droite de façon brute ;
- intégrer les images comme storytelling ;
- logo Tudor Pop plus harmonieux ;
- meilleur équilibre entre texte, image et CTA ;
- fond travaillé avec grille subtile ou dégradé ;
- petits éléments flottants possibles ;
- image principale jamais coupée maladroitement ;
- CTA parfaitement lisibles ;
- mobile conservé propre.

Images possibles :
- pub-1.png
- la-vitrine-et-les-plus.png
- site-internet.png
- avantages-du-projet.png

Composition possible :
À gauche :
- logo ou mini badge Tudor Pop ;
- titre fort ;
- sous-titre ;
- badges ;
- CTA ;
- mini preuve “Démo avant engagement”.

À droite :
- grande carte visuelle premium ;
- image principale intégrée dans un mockup ou une carte ;
- petites pastilles autour :
  - Plus visible
  - Plus crédible
  - Contact facilité
  - SEO local

Important :
Ne pas utiliser une image énorme coupée dans un cadre trop petit.
Si l’image est large, utiliser object-fit contain.
Si elle est en fond, appliquer overlay lisible.

Le hero doit faire comprendre immédiatement :
- ce que Tudor vend ;
- pour qui ;
- le bénéfice ;
- l’action à faire.

À la fin :
- vérifier responsive ;
- lancer npm.cmd run build ;
- résumer les changements.
```

---

# 10. PROMPT CLAUDE 4 — Refonte “La solution”

```text
Refais la section “La solution” pour qu’elle soit plus harmonieuse et professionnelle.

Problème actuel :
Les images semblent placées de façon aléatoire.
La section manque de structure et d’intention.

Objectif :
Créer une section claire qui explique comment Tudor transforme une présence en ligne faible en vraie vitrine commerciale.

Messages clés :
- Démo avant engagement ;
- Design moderne ;
- SEO local ;
- Contact facilité.

Titre possible :
Je transforme votre présence en ligne en vraie vitrine commerciale

Sous-texte :
Un site clair, moderne et pensé pour convertir. Votre activité devient plus compréhensible, plus crédible et plus simple à contacter.

Structure souhaitée :
- une composition équilibrée ;
- 4 piliers bien présentés ;
- une illustration principale bien intégrée ;
- moins d’images dispersées ;
- plus de hiérarchie ;
- cartes remplies et utiles ;
- design cohérent clair/sombre.

Pour chaque pilier :
1. Démo avant engagement
Texte :
Vous voyez une première projection avant de vous engager.

2. Design moderne
Texte :
Un site propre, clair et adapté à votre activité.

3. SEO local
Texte :
Une structure pensée pour être trouvé dans votre ville.

4. Contact facilité
Texte :
Appel, formulaire, réservation ou itinéraire visibles au bon moment.

Images possibles :
- avantages-du-projet.png
- site-internet.png
- personalisation.png
- pub-2-avant-apres.png

Règles :
- maximum une grande illustration principale dans la section ;
- ne pas multiplier les visuels sans raison ;
- pas de visuel coupé ;
- les cartes doivent avoir une taille cohérente ;
- pas de grands blocs vides.

À la fin :
- vérifier mobile ;
- vérifier mode clair/sombre ;
- lancer npm.cmd run build.
```

---

# 11. PROMPT CLAUDE 5 — Refonte “Pourquoi travailler avec moi” + lien glossaire

```text
Refais la section “Pourquoi travailler avec moi”.

Problème actuel :
La section est trop vide, les images n’apportent pas assez de valeur, et l’ensemble manque d’impact.

Objectif :
Créer une section beaucoup plus professionnelle, rassurante et commerciale.

Titre :
Plus concret qu’une promesse de site web

Sous-texte :
Vous ne payez pas seulement pour du code. Vous investissez dans une meilleure image, plus de confiance et un contact plus évident.

Arguments à afficher :
1. Vous voyez avant de décider
La démo rend le projet concret dès le départ.

2. Je parle le langage des clients locaux
Pas de jargon ou de cahier technique compliqué.

3. Je pense image et contact
Le site doit rassurer et déclencher l’appel, pas seulement être joli.

4. Je personnalise vraiment
Chaque vitrine part du métier, des avis, de la ville et des objectifs.

Ajouter un cinquième élément ou CTA lié au glossaire :
Titre :
Je rends le web plus simple à comprendre

Texte :
SEO, domaine, hébergement, responsive, formulaire… j’explique les notions importantes pour que vous sachiez ce que vous achetez.

CTA :
Comprendre les mots du web

Lien :
/glossaire

Design souhaité :
- grande composition premium ;
- pas de cartes vides ;
- pas d’images posées au hasard ;
- une illustration principale possible, mais bien intégrée ;
- hiérarchie forte ;
- rythme visuel ;
- mode clair/sombre propre ;
- version mobile lisible.

Images possibles :
- personalisation.png
- site-internet.png
- contact-rapide.png
- pub-1.png

Règles :
- ne pas afficher deux petites images sans rôle clair ;
- remplir mieux l’espace ;
- chaque carte doit avoir un texte utile ;
- ajouter un CTA vers le glossaire.

À la fin :
- vérifier mobile ;
- vérifier clair/sombre ;
- lancer npm.cmd run build.
```

---

# 12. PROMPT CLAUDE 6 — Harmonisation générale homepage

```text
Maintenant, harmonise toute la homepage sans ajouter de nouvelles pages.

Objectif :
La homepage doit paraître plus cohérente, plus premium et mieux organisée.

Sections à conserver globalement :
- “Vrai sujet” si elle existe ;
- “Métiers locaux” ;
- “Méthode” ;
- “Offres”.

Mais tu peux améliorer :
- les espacements ;
- les transitions ;
- les fonds ;
- les titres ;
- les CTA ;
- les cartes ;
- les images ;
- la cohérence entre sections.

À vérifier :
1. Aucun bouton illisible.
2. Aucun texte trop sombre sur fond sombre.
3. Aucun visuel coupé.
4. Sections bien espacées.
5. Moins de vide inutile.
6. Plus de rythme desktop.
7. Mobile propre.
8. Mode clair/sombre propre.
9. FR/EN complet sur homepage.
10. Lien glossaire ajouté dans “Pourquoi travailler avec moi”.

Travail attendu :
- ajuster les spacing ;
- harmoniser les cards ;
- rendre les titres plus cohérents ;
- utiliser les images avec intention ;
- vérifier les largeurs max ;
- éviter les grandes zones vides ;
- améliorer les transitions entre sections ;
- garder un rendu professionnel.

À la fin :
- lancer npm.cmd run build ;
- lister les corrections effectuées ;
- indiquer les zones qui restent à vérifier manuellement.
```

---

# 13. PROMPT CLAUDE 7 — Traduction FR/EN complète de la homepage et du glossaire

```text
Finalise la traduction FR/EN.

Objectif :
Le switch français / anglais doit être propre et crédible.

À faire :
1. Vérifier tous les textes visibles de la homepage.
2. Vérifier header, footer, CTA, badges, cartes, offres.
3. Traduire tous les textes manquants.
4. Traduire la page glossaire si elle existe déjà, ou préparer sa structure en i18n si c’est trop long.
5. S’assurer que le switch fonctionne sur desktop et mobile.
6. Mémoriser la langue avec localStorage.
7. Le français reste la langue par défaut.
8. Éviter les textes mélangés FR/EN.
9. Ne pas casser le SEO.

Traductions importantes :
- Demander ma démo -> Request my demo
- Voir les exemples -> See examples
- Offres -> Offers
- Méthode -> Method
- Métiers -> Industries
- Glossaire -> Glossary
- Contact -> Contact
- Une vitrine qui travaille pour vous -> A website that works for you
- Sites modernes pour professionnels locaux -> Modern websites for local professionals
- Plus visible -> More visible
- Plus crédible -> More credible
- Contact facilité -> Easier contact
- Démo avant engagement -> Demo before commitment
- Design moderne -> Modern design
- SEO local -> Local SEO

À la fin :
- tester le switch ;
- vérifier qu’aucune section ne reste dans la mauvaise langue ;
- lancer npm.cmd run build.
```

---

# 14. PROMPT CLAUDE 8 — Stabilisation clair/sombre

```text
Stabilise définitivement le mode clair/sombre.

Objectif :
Les deux modes doivent être beaux, lisibles et cohérents.

À vérifier :
- body background ;
- header ;
- hero ;
- cards ;
- boutons ;
- formulaires ;
- footer ;
- section solution ;
- section pourquoi travailler avec moi ;
- offres ;
- glossaire ;
- CTA ;
- liens ;
- badges ;
- images et overlays.

Mode clair :
- fond crème ;
- texte vert profond ;
- cartes claires ;
- accents pêche ;
- sections sombres ponctuelles possibles, mais lisibles.

Mode sombre :
- fond vert profond ou vert sombre ;
- texte crème ;
- cartes vert sombre ;
- accents pêche ;
- boutons lisibles.

Règles :
- pas de texte noir sur fond vert sombre ;
- pas de texte blanc sur fond pêche clair si contraste faible ;
- les boutons gardent toujours un contraste fort ;
- le thème choisi reste en localStorage ;
- pas de flash visuel gênant si possible.

À la fin :
- vérifier desktop ;
- vérifier mobile ;
- lancer npm.cmd run build.
```

---

# 15. PROMPT CLAUDE 9 — Prompt 5 amélioré : passage multi-pages

À ne lancer qu’après validation visuelle de la homepage.

```text
La homepage est maintenant suffisamment stable visuellement.

Passe le site en structure multi-pages propre.

Objectif :
Créer une navigation simple, puissante et professionnelle.
Ne plus tout mettre dans une seule page.

Pages à créer ou finaliser :
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

Menu Métiers :
- Commerces locaux
- Restaurants
- Garages
- Cabinets médicaux

CTA header :
Demander ma démo

Principe :
- La homepage doit rester très forte mais plus courte.
- Les détails doivent être déplacés vers les pages dédiées.
- Ne pas dupliquer trop de contenu.
- Chaque page doit avoir un vrai rôle.

Page /offres :
- présenter Essentiel 390 €
- Pro 990 €
- Premium sur devis
- Maintenance à partir de 49 €/mois
- détailler les inclusions
- expliquer les temps estimés
- CTA final

Page /methode :
- expliquer le processus :
  1. Analyse
  2. Direction visuelle
  3. Démo
  4. Ajustements
  5. Mise en ligne
  6. Suivi
- intégrer l’image etapes-du-projet.png

Pages métiers :
Pour chaque métier :
- problème du secteur
- ce qu’un site apporte
- sections recommandées
- CTA utiles
- bénéfices concrets
- ne pas citer de vrais clients non signés

Page /glossaire :
- conserver la page créée
- l’améliorer si besoin
- lien depuis “Pourquoi travailler avec moi”

Page /contact :
- formulaire propre
- coordonnées directes
- CTA clair

Page /merci :
- confirmation de soumission formulaire

SEO :
Chaque page doit avoir :
- title
- meta description
- H1 unique
- CTA final
- liens internes

Design :
- cohérent avec la homepage
- clair/sombre fonctionnel
- FR/EN préparé
- mobile impeccable

À la fin :
- vérifier toutes les routes ;
- lancer npm.cmd run build ;
- corriger toutes les erreurs ;
- résumer les pages créées.
```

---

# 16. PROMPT CLAUDE 10 — Formulaire Netlify Forms

```text
Mets en place un vrai formulaire de contact compatible Netlify Forms.

Objectif :
Les demandes prospects doivent remonter dans Netlify Forms.
Tudor pourra ensuite activer une notification email depuis Netlify.

Page :
/contact

Page confirmation :
/merci

Formulaire :
- name="contact"
- method="POST"
- data-netlify="true"
- netlify-honeypot="bot-field"
- input hidden form-name="contact"

Champs :
- Nom
- Activité
- Ville
- Téléphone
- Email
- Site actuel ou fiche Google
- Objectif principal
- Message

Options objectif :
- Avoir un site moderne
- Recevoir plus d’appels
- Améliorer mon image
- Présenter mes services
- Rediriger vers une réservation
- Être plus visible localement
- Voir une démo

Contact direct :
- Téléphone : 06 25 66 44 48
- Email : pop.tudor.pro@gmail.com
- LinkedIn : tudor-pop-2407
- Instagram : pop_d_tudor

Après soumission :
- redirection vers /merci

Important :
- compatible Astro statique ;
- labels accessibles ;
- validation HTML simple ;
- honeypot anti-spam ;
- design cohérent clair/sombre ;
- FR/EN si possible ;
- aucun backend nécessaire.

À la fin :
- expliquer comment vérifier sur Netlify :
  Forms > contact
- expliquer comment activer l’email :
  Forms > Form notifications > Add notification > Email notification
- lancer npm.cmd run build.
```

---

# 17. PROMPT CLAUDE 11 — Final polish SEO, performance, responsive

```text
Finalise le site Tudor Pop avant push Netlify.

Checklist :

1. Design
- homepage premium ;
- images bien intégrées ;
- aucun visuel coupé ;
- sections équilibrées ;
- boutons lisibles ;
- clair/sombre propre ;
- FR/EN propre.

2. Navigation
- toutes les pages fonctionnent ;
- menu desktop propre ;
- menu mobile propre ;
- CTA header visible ;
- footer complet.

3. SEO
- title sur chaque page ;
- meta description sur chaque page ;
- Open Graph ;
- favicon ;
- sitemap ;
- robots ;
- H1 unique par page.

4. Formulaire
- /contact fonctionnel ;
- /merci fonctionnel ;
- Netlify Forms compatible.

5. Performance
- images optimisées ;
- lazy loading ;
- pas d’animation trop lourde ;
- build rapide.

6. Accessibilité
- contrastes ;
- labels ;
- alt text ;
- focus visible ;
- navigation clavier raisonnable.

7. Build
- lancer npm.cmd run build ;
- corriger toute erreur ;
- ne laisser aucune erreur critique.

À la fin :
- donner un résumé clair des modifications ;
- indiquer les points à vérifier manuellement après déploiement.
```

---

# 18. Recommandation de rythme

Ne donne pas tout d’un coup à Claude Code.

Utilise cet ordre :

```txt
1. Prompt Claude 1 — Audit
2. Prompt Claude 2 — Fondations visuelles
3. Prompt Claude 3 — Hero
4. Prompt Claude 4 — Solution
5. Prompt Claude 5 — Pourquoi travailler avec moi + glossaire
6. Prompt Claude 6 — Harmonisation homepage
7. Prompt Claude 7 — FR/EN
8. Prompt Claude 8 — Clair/sombre
9. Build + push si satisfait
10. Prompt Claude 9 — Multi-pages
11. Prompt Claude 10 — Formulaire
12. Prompt Claude 11 — Polish final
```

Après chaque gros bloc :

```powershell
npm.cmd run build
```

Puis commit si stable.

---

# 19. Message à garder en tête

Le site doit être la preuve de ce que Tudor vend.

Il ne doit pas seulement dire :

> Je fais des sites modernes.

Il doit le prouver visuellement.

Le site doit faire ressentir :

```txt
C’est clair.
C’est pro.
C’est moderne.
C’est rassurant.
J’ai envie de lui demander ce que mon propre site pourrait devenir.
```
