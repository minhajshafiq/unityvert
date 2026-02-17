'use client'

import Link from 'next/link'
import Image from 'next/image'
import ScrollAnimator from './ScrollAnimator'

interface FeaturedImage {
  _id?: string
  title: string
  category: string
  imageUrl?: string
  alt?: string
}

const defaultImages: FeaturedImage[] = [
  {
    title: 'Taille de haie - Noisy-le-Sec',
    category: 'Taille',
  },
  {
    title: 'Aménagement paysager - Montreuil',
    category: 'Aménagement',
  },
  {
    title: 'Entretien jardin - Bondy',
    category: 'Entretien',
  },
  {
    title: 'Élagage - Bobigny',
    category: 'Élagage',
  },
]

interface GalleryPreviewProps {
  featuredWorks?: FeaturedImage[]
}

export default function GalleryPreview({ featuredWorks }: GalleryPreviewProps) {
  // Utiliser les réalisations Sanity ou les images par défaut
  const images = featuredWorks && featuredWorks.length > 0 ? featuredWorks : defaultImages
  return (
    <section className="section-padding bg-background-alt">
      <div className="container-custom mx-auto">
        <ScrollAnimator animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Nos réalisations
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Découvrez quelques exemples de nos interventions à Paris et en
              Île-de-France. Avant/après, aménagements, entretiens réguliers...
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <ScrollAnimator
              key={image._id || index}
              animation="scale"
              delay={index * 100}
            >
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden relative group cursor-pointer hover-lift">
                {/* Image ou Placeholder */}
                {image.imageUrl ? (
                  <Image
                    src={image.imageUrl}
                    alt={image.alt || image.title}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-primary/10">
                    <svg
                      className="w-12 h-12 text-primary/30 transition-transform duration-300 group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-4 scale-95 group-hover:scale-100">
                  <span className="text-xs uppercase tracking-wider mb-1 text-accent">
                    {image.category}
                  </span>
                  <span className="text-sm font-medium text-center">
                    {image.title}
                  </span>
                </div>
              </div>
            </ScrollAnimator>
          ))}
        </div>

        <ScrollAnimator animation="fade-up" delay={500}>
          <div className="text-center mt-8">
            <Link href="/galerie" className="btn-secondary inline-flex items-center space-x-2 group">
              <span>Voir toute la galerie</span>
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}
