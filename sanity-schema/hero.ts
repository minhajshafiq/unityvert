// Schéma Sanity pour la section Hero
// À copier dans votre projet Sanity Studio

export default {
  name: 'hero',
  title: 'Hero (Page d\'accueil)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      description: 'Titre principal du hero (optionnel)',
    },
    {
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'string',
      description: 'Sous-titre du hero (optionnel)',
    },
    {
      name: 'image',
      title: 'Image de fond',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Texte alternatif',
          type: 'string',
          description: 'Important pour le SEO et l\'accessibilité',
        },
      ],
      description: 'Image principale affichée en arrière-plan du hero',
    },
    {
      name: 'experience',
      title: 'Années d\'expérience',
      type: 'string',
      description: 'Ex: "+15 ans d\'expérience"',
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
    prepare({ title, media }: any) {
      return {
        title: title || 'Hero - Page d\'accueil',
        media,
      }
    },
  },
}
