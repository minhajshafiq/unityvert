# Configuration Sanity pour Unity Vert

## Étape 1 : Créer un projet Sanity

1. Allez sur https://www.sanity.io/manage
2. Connectez-vous (gratuit)
3. Cliquez sur "Create new project"
4. Nom du projet : `unity-vert`
5. Choisissez "Create from scratch"

## Étape 2 : Installer Sanity Studio localement

```bash
# Dans un nouveau dossier (pas dans le projet Next.js)
npm create sanity@latest -- --project <votre-project-id> --dataset production

# Choisissez :
# - Template: Clean project
# - TypeScript: Yes
```

## Étape 3 : Ajouter les schémas

Copiez le contenu des fichiers suivants dans le dossier `schemaTypes` de votre projet Sanity :
- `photo.ts` - Pour la galerie de photos
- `hero.ts` - Pour la section hero de la page d'accueil
- `featuredWork.ts` - Pour les réalisations vedettes de la page d'accueil

Puis dans `schemaTypes/index.ts` :

```typescript
import photo from './photo'
import hero from './hero'
import featuredWork from './featuredWork'

export const schemaTypes = [photo, hero, featuredWork]
```

## Étape 4 : Déployer Sanity Studio

```bash
# Dans le dossier Sanity Studio
npx sanity deploy
```

Choisissez un nom pour votre studio (ex: `unity-vert`)
Votre admin sera accessible sur : https://unity-vert.sanity.studio

## Étape 5 : Configurer le site Next.js

Dans le fichier `.env.local` du projet Next.js :

```
NEXT_PUBLIC_SANITY_PROJECT_ID=votre-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

Le Project ID se trouve dans l'URL de votre projet sur sanity.io/manage

## Étape 6 : Ajouter du contenu

1. Allez sur https://unity-vert.sanity.studio (ou votre URL)

### Hero (Page d'accueil)
- Cliquez sur "Hero (Page d'accueil)"
- Créez **un seul** document avec l'image de fond et le texte d'expérience
- L'image apparaîtra dans la section hero de la page d'accueil

### Réalisations Vedettes
- Cliquez sur "Réalisation Vedette"
- Ajoutez 4 réalisations avec titre, photo, catégorie et ordre d'affichage
- Ces images apparaîtront dans la section vedettes de la page d'accueil

### Photos de la Galerie
- Cliquez sur "Photo"
- Ajoutez vos réalisations avec titre, photo, catégorie
- Ces photos apparaîtront dans la page galerie

Les contenus apparaîtront automatiquement sur le site !

## Structure des données

### Hero
- **Image de fond** : L'image principale du hero
- **Années d'expérience** : Ex: "+15 ans d'expérience"

### Réalisation Vedette
- **Titre** : Ex: "Taille de haie - Noisy-le-Sec"
- **Photo** : L'image de la réalisation
- **Catégorie** : Entretien, Taille, Élagage, Aménagement, etc.
- **Ordre** : Numéro pour le tri (1, 2, 3, 4)

### Photo (Galerie)
- **Titre** : Ex: "Taille de haie - Montreuil"
- **Photo** : L'image de la réalisation
- **Catégorie** : Entretien, Taille, Élagage, Aménagement, etc.
- **Description** : (optionnel) Détails du travail
- **Lieu** : (optionnel) Ville ou quartier
