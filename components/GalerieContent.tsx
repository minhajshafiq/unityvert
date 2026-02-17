'use client'

import ScrollAnimator from './ScrollAnimator'
import GalleryGrid, { GalleryImage } from './GalleryGrid'

interface GalerieContentProps {
  images: GalleryImage[]
  categories: string[]
}

export default function GalerieContent({ images, categories }: GalerieContentProps) {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <ScrollAnimator animation="fade-up">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Galerie de nos réalisations
            </h1>
            <p className="text-text-light max-w-2xl mx-auto">
              Découvrez quelques exemples de nos interventions à Paris et en
              Île-de-France. Entretien de jardins, taille de haies, élagage,
              aménagement paysager...
            </p>
          </div>
        </ScrollAnimator>

        <GalleryGrid images={images} categories={categories} />
      </div>
    </section>
  )
}
