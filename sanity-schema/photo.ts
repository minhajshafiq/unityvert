// Schéma Sanity pour les photos de la galerie
// À copier dans votre projet Sanity Studio

export default {
  name: 'photo',
  title: 'Photo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      description: 'Ex: "Taille de haie - Montreuil"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Photo',
      type: 'image',
      options: {
        hotspot: true, // Permet de définir le point focal
      },
      fields: [
        {
          name: 'alt',
          title: 'Texte alternatif',
          type: 'string',
          description: 'Important pour le SEO et l\'accessibilité',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Entretien', value: 'Entretien' },
          { title: 'Taille', value: 'Taille' },
          { title: 'Élagage', value: 'Élagage' },
          { title: 'Aménagement', value: 'Aménagement' },
          { title: 'Débroussaillage', value: 'Débroussaillage' },
          { title: 'Création de jardin', value: 'Création' },
          { title: 'Pose de clôtures', value: 'Clôtures' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Description optionnelle du travail réalisé',
    },
    {
      name: 'location',
      title: 'Lieu',
      type: 'string',
      description: 'Ex: "Noisy-le-Sec", "Montreuil (93)"',
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      media: 'image',
    },
    prepare({ title, category, media }: any) {
      return {
        title,
        subtitle: category,
        media,
      }
    },
  },
}
