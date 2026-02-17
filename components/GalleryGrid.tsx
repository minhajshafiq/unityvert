'use client'

import { useState } from 'react'
import Image from 'next/image'
import Lightbox from './Lightbox'
import ScrollAnimator from './ScrollAnimator'

export interface GalleryImage {
  _id: string
  title: string
  category: string
  imageUrl: string
  alt: string
}

interface GalleryGridProps {
  images: GalleryImage[]
  categories: string[]
}

export default function GalleryGrid({ images, categories }: GalleryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Tous')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)

  const filteredImages =
    selectedCategory === 'Tous'
      ? images
      : images.filter((img) => img.category === selectedCategory)

  const allCategories = ['Tous', ...categories]

  return (
    <>
      {/* Category Filter */}
      <ScrollAnimator animation="fade-up">
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {allCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'bg-gray-100 text-text-light hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </ScrollAnimator>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, index) => (
          <ScrollAnimator key={image._id} animation="scale" delay={index * 50}>
            <button
              onClick={() => setSelectedImage(image)}
              className="aspect-square relative overflow-hidden rounded-xl group focus:outline-none focus:ring-2 focus:ring-primary hover-lift w-full"
            >
              {image.imageUrl ? (
                <Image
                  src={image.imageUrl}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              ) : (
                <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
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
              <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center text-white p-4 scale-95 group-hover:scale-100">
                <span className="text-xs uppercase tracking-wider mb-1 text-accent">
                  {image.category}
                </span>
                <span className="text-sm font-medium text-center">{image.title}</span>
                <svg
                  className="w-6 h-6 mt-2 animate-pulse"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </button>
          </ScrollAnimator>
        ))}
      </div>

      {/* Empty State */}
      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-light">Aucune image dans cette catégorie.</p>
        </div>
      )}

      {/* Lightbox */}
      {selectedImage && (
        <Lightbox
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
          onPrev={() => {
            const currentIndex = filteredImages.findIndex(
              (img) => img._id === selectedImage._id
            )
            const prevIndex =
              currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1
            setSelectedImage(filteredImages[prevIndex])
          }}
          onNext={() => {
            const currentIndex = filteredImages.findIndex(
              (img) => img._id === selectedImage._id
            )
            const nextIndex =
              currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0
            setSelectedImage(filteredImages[nextIndex])
          }}
        />
      )}
    </>
  )
}
