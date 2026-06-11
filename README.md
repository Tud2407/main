# Tudor Pop - Site personnel

Site commercial personnel de Tudor Pop pour vendre des sites vitrines modernes a des professionnels locaux.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Netlify

## Installation

```bash
npm install
```

## Lancement local

```bash
npm run dev
```

Par defaut, Astro lance le site sur `http://localhost:4321`.

## Verification

```bash
npm run check
npm run build
```

## Build

```bash
npm run build
```

Le site genere est disponible dans le dossier `dist/`.

## Deploiement Netlify

La configuration Netlify se trouve dans `netlify.toml`.

- Build command : `npm run build`
- Publish directory : `dist`
- Node version : `24`

Le formulaire de contact pourra utiliser Netlify Forms via un composant Astro compatible HTML statique.

## Contenu

Le cahier des charges principal est conserve dans :

```txt
plans/cahier_des_charges_site_personnel_tudor_pop.md
```
