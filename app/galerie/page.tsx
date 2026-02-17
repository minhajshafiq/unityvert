import { Metadata } from 'next'
import GalerieContent from '@/components/GalerieContent'
import CTASection from '@/components/CTASection'
import { getGalleryPhotos, getCategories } from '@/lib/sanity'

export const metadata: Metadata = {
  title: 'Galerie photos | Nos réalisations de jardinage',
  description:
    'Découvrez nos réalisations en images : entretien de jardins, taille de haies, élagage, aménagement paysager à Paris et en Île-de-France. Avant/après.',
  alternates: {
    canonical: 'https://unityvert.fr/galerie',
  },
  openGraph: {
    title: 'Galerie photos - Unity Vert Jardinier Paris',
    description:
      'Découvrez nos réalisations : entretien, taille, élagage, aménagement à Paris.',
    url: 'https://unityvert.fr/galerie',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Galerie photos - Unity Vert',
    description: 'Découvrez nos réalisations en images : entretien, taille, élagage, aménagement.',
  },
}

// Photos de démonstration (utilisées si Sanity n'est pas configuré)
const placeholderImages = [
  {
    _id: '1',
    title: 'Taille de haie - Noisy-le-Sec',
    category: 'Taille',
    imageUrl: '',
    alt: 'Taille de haie par jardinier à Noisy-le-Sec',
  },
  {
    _id: '2',
    title: 'Aménagement paysager - Montreuil',
    category: 'Aménagement',
    imageUrl: '',
    alt: 'Aménagement paysager par Unity Vert à Montreuil',
  },
  {
    _id: '3',
    title: 'Entretien jardin - Bondy',
    category: 'Entretien',
    imageUrl: '',
    alt: 'Entretien de jardin à Bondy par jardinier professionnel',
  },
  {
    _id: '4',
    title: 'Élagage arbre - Bobigny',
    category: 'Élagage',
    imageUrl: '',
    alt: 'Élagage d\'arbre à Bobigny',
  },
  {
    _id: '5',
    title: 'Tonte pelouse - Romainville',
    category: 'Entretien',
    imageUrl: '',
    alt: 'Tonte de pelouse par jardinier à Romainville',
  },
  {
    _id: '6',
    title: 'Création massif fleuri - Pantin',
    category: 'Aménagement',
    imageUrl: '',
    alt: 'Création de massif fleuri à Pantin',
  },
  {
    _id: '7',
    title: 'Taille arbustes - Les Lilas',
    category: 'Taille',
    imageUrl: '',
    alt: 'Taille d\'arbustes aux Lilas par Unity Vert',
  },
  {
    _id: '8',
    title: 'Débroussaillage terrain - Vincennes',
    category: 'Débroussaillage',
    imageUrl: '',
    alt: 'Débroussaillage de terrain à Vincennes',
  },
]

const defaultCategories = ['Entretien', 'Taille', 'Élagage', 'Aménagement', 'Débroussaillage']

export default async function GaleriePage() {
  // Récupérer les photos depuis Sanity (ou utiliser les placeholders)
  const sanityPhotos = await getGalleryPhotos()
  const sanityCategories = await getCategories()

  // Utiliser les données Sanity si disponibles, sinon les placeholders
  const images = sanityPhotos.length > 0
    ? sanityPhotos.map(photo => ({
        _id: photo._id,
        title: photo.title,
        category: photo.category,
        imageUrl: (photo as any).imageUrl || '',
        alt: photo.alt,
      }))
    : placeholderImages

  const categories = sanityCategories.length > 0 ? sanityCategories : defaultCategories

  return (
    <>
      <GalerieContent images={images} categories={categories} />
      <CTASection />
    </>
  )
}
