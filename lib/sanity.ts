import { createClient } from '@sanity/client'
import { createImageUrlBuilder, type SanityImageSource } from '@sanity/image-url'

// Configuration Sanity
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Désactivé pour avoir les données fraîches
  perspective: 'published',
})

// Options de fetch - pas de cache pour Cloudflare Pages
const fetchOptions = { cache: 'no-store' as const } // Données fraîches à chaque requête

// Helper pour générer les URLs d'images optimisées
const builder = createImageUrlBuilder(client)

export function urlFor(source: SanityImageSource) {
  return builder.image(source)
}

// Types pour la galerie
export interface GalleryPhoto {
  _id: string
  title: string
  description?: string
  category: string
  location?: string
  image: SanityImageSource
  alt: string
}

// Requêtes GROQ
const galleryQuery = `*[_type == "photo"] | order(_createdAt desc) {
  _id,
  title,
  description,
  category,
  location,
  image,
  "alt": coalesce(image.alt, title)
}`

// Fonction pour récupérer les photos de la galerie
export async function getGalleryPhotos(): Promise<GalleryPhoto[]> {
  // Si Sanity n'est pas configuré, retourner un tableau vide
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return []
  }

  try {
    const photos = await client.fetch(galleryQuery, {}, fetchOptions)
    return photos.map((photo: GalleryPhoto) => ({
      ...photo,
      imageUrl: photo.image ? urlFor(photo.image).width(800).height(800).url() : '',
    }))
  } catch (error) {
    console.error('Erreur Sanity:', error)
    return []
  }
}

// Fonction pour récupérer les catégories uniques
export async function getCategories(): Promise<string[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return ['Entretien', 'Taille', 'Élagage', 'Aménagement', 'Débroussaillage']
  }

  try {
    const photos = await client.fetch(`*[_type == "photo"]{ category }`, {}, fetchOptions)
    const categories = Array.from(new Set(photos.map((p: { category: string }) => p.category).filter(Boolean)))
    return categories as string[]
  } catch (error) {
    console.error('Erreur Sanity:', error)
    return ['Entretien', 'Taille', 'Élagage', 'Aménagement', 'Débroussaillage']
  }
}

// Types pour le Hero
export interface HeroData {
  title?: string
  subtitle?: string
  image?: SanityImageSource
  imageUrl?: string
  imageAlt?: string
  experience?: string
}

// Fonction pour récupérer les données du Hero
export async function getHeroData(): Promise<HeroData | null> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return null
  }

  try {
    const hero = await client.fetch(`*[_type == "hero"][0] {
      title,
      subtitle,
      image,
      "imageAlt": image.alt,
      experience
    }`, {}, fetchOptions)

    if (hero?.image) {
      hero.imageUrl = urlFor(hero.image).width(600).height(600).url()
    }

    return hero
  } catch (error) {
    console.error('Erreur Sanity Hero:', error)
    return null
  }
}

// Types pour les réalisations vedettes
export interface FeaturedWork {
  _id: string
  title: string
  category: string
  image: SanityImageSource
  imageUrl?: string
  alt?: string
  order?: number
}

// Fonction pour récupérer les réalisations vedettes (page d'accueil)
export async function getFeaturedWorks(): Promise<FeaturedWork[]> {
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return []
  }

  try {
    const works = await client.fetch(`*[_type == "featuredWork"] | order(order asc) {
      _id,
      title,
      category,
      image,
      "alt": coalesce(image.alt, title),
      order
    }`, {}, fetchOptions)

    return works.map((work: FeaturedWork) => ({
      ...work,
      imageUrl: work.image ? urlFor(work.image).width(400).height(400).url() : '',
    }))
  } catch (error) {
    console.error('Erreur Sanity FeaturedWorks:', error)
    return []
  }
}
