// Schéma Sanity pour la section Hero
// À copier dans votre projet Sanity Studio

export default {
  name: 'hero',
  title: 'Hero (Page d\'accueil)',
  type: 'document',
  fields: [
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
      media: 'image',
    },
    prepare({ media }: any) {
      return {
        title: 'Hero - Page d\'accueil',
        media,
      }
    },
  },
}
