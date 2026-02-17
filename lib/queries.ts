import { client, urlFor } from './sanity'

export interface SanityPhoto {
  _id: string
  title: string
  alt: string
  imageUrl: string
  category: string
  isFeatured: boolean
}

export interface SanityCategory {
  _id: string
  name: string
  slug: string
}

// Fetch all gallery photos
export async function getGalleryPhotos(): Promise<SanityPhoto[]> {
  const query = `*[_type == "photo"] | order(order asc) {
    _id,
    title,
    alt,
    "imageUrl": image.asset->url,
    "category": category->name,
    isFeatured
  }`

  const photos = await client.fetch(query)
  return photos
}

// Fetch featured photos for homepage
export async function getFeaturedPhotos(): Promise<SanityPhoto[]> {
  const query = `*[_type == "photo" && isFeatured == true] | order(order asc)[0...4] {
    _id,
    title,
    alt,
    "imageUrl": image.asset->url,
    "category": category->name,
    isFeatured
  }`

  const photos = await client.fetch(query)
  return photos
}

// Fetch all categories
export async function getCategories(): Promise<SanityCategory[]> {
  const query = `*[_type == "category"] | order(order asc) {
    _id,
    name,
    "slug": slug.current
  }`

  const categories = await client.fetch(query)
  return categories
}

// Fetch photos by category
export async function getPhotosByCategory(categorySlug: string): Promise<SanityPhoto[]> {
  const query = `*[_type == "photo" && category->slug.current == $categorySlug] | order(order asc) {
    _id,
    title,
    alt,
    "imageUrl": image.asset->url,
    "category": category->name,
    isFeatured
  }`

  const photos = await client.fetch(query, { categorySlug })
  return photos
}

// Helper to get optimized image URL
export function getOptimizedImageUrl(
  imageSource: SanityImageSource,
  width: number = 800,
  quality: number = 80
): string {
  return urlFor(imageSource)
    .width(width)
    .quality(quality)
    .format('webp')
    .url()
}

type SanityImageSource = Parameters<typeof urlFor>[0]
