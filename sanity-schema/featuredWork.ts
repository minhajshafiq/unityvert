// Schéma Sanity pour les réalisations vedettes (page d'accueil)
// À copier dans votre projet Sanity Studio

export default {
  name: 'featuredWork',
  title: 'Réalisation Vedette',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      description: 'Ex: "Taille de haie - Noisy-le-Sec"',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Photo',
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
      name: 'order',
      title: 'Ordre d\'affichage',
      type: 'number',
      description: 'Les réalisations sont triées par ordre croissant (1, 2, 3...)',
      initialValue: 0,
    },
  ],
  orderings: [
    {
      title: 'Ordre d\'affichage',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
      order: 'order',
      media: 'image',
    },
    prepare({ title, category, order, media }: any) {
      return {
        title: `${order !== undefined ? `${order}. ` : ''}${title}`,
        subtitle: category,
        media,
      }
    },
  },
}
