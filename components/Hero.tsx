'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface HeroProps {
  heroImage?: string
  heroImageAlt?: string
  experience?: string
}

export default function Hero({ heroImage, heroImageAlt, experience }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Utiliser l'image Sanity ou l'image par défaut
  const displayImage = heroImage || '/images/ba39845c-2db7-4b8b-b055-8dd34c870034.jpeg'
  const displayAlt = heroImageAlt || 'Unity Vert - Jardinier paysagiste au travail'
  const displayExperience = experience || '+15 ans d\'expérience'

  return (
    <section className="relative text-white overflow-hidden min-h-[calc(100vh-64px)] md:min-h-screen flex items-center">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Green_grass_lawn.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
          aria-hidden
        />
        {/* Overlay pour lisibilité du texte */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-dark/85"
          aria-hidden
        />
      </div>

      {/* Animated Background Pattern (léger) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.4%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] animate-pulse-slow" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full blur-lg animate-float" style={{ animationDelay: '2s' }} />

      <div className="container-custom mx-auto section-padding relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-center md:text-left">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5 md:mb-6 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Jardinier Paysagiste à{' '}
              <span className="text-accent relative">
                Noisy-le-Sec
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-accent/50"
                  viewBox="0 0 200 12"
                  fill="none"
                >
                  <path
                    d="M2 10C50 2 150 2 198 10"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              <span className="text-white/90">Entretien & Aménagement Espaces Verts</span>
            </h1>
            <p
              className={`text-base sm:text-lg md:text-xl text-white/90 mb-6 md:mb-8 max-w-xl transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              Unity Vert prend soin de vos espaces verts avec passion.
              Tonte, taille de haies, élagage, création de jardin, pose de clôtures.
              <strong className="text-white"> Devis gratuit sous 24h.</strong>
            </p>
            <div
              className={`flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center md:justify-start transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Link
                href="/contact"
                className="bg-cta hover:bg-cta-hover text-white font-semibold py-3 px-6 md:py-4 md:px-8 text-sm md:text-base rounded-full transition-all duration-300 inline-flex items-center space-x-2 hover:scale-105 hover:shadow-lg active:scale-95"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
                <span>Demander un devis gratuit</span>
              </Link>
              <Link
                href="/#prestations"
                className="bg-white/10 hover:bg-white/20 border-2 border-white text-white font-semibold py-3 px-6 md:py-4 md:px-8 text-sm md:text-base rounded-full transition-all duration-300 inline-flex items-center space-x-2 hover:scale-105 active:scale-95 backdrop-blur-sm"
              >
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
                <span>Explorer nos services</span>
              </Link>
            </div>
            {/* Trust Badges */}
            <div
              className={`mt-6 md:mt-8 flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <Image
                src="/images/services_personne.webp"
                alt="Services à la personne"
                width={200}
                height={80}
                className="h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-auto object-contain"
              />
              <Image
                src="/images/reduc_impots.webp"
                alt="-50% Réduction d'impôts"
                width={200}
                height={80}
                className="h-10 sm:h-12 md:h-16 lg:h-20 xl:h-24 w-auto object-contain"
              />
            </div>
          </div>

          {/* Hero image */}
          <div
            className={`hidden md:block relative transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="aspect-square relative rounded-2xl overflow-hidden border border-white/20 shadow-2xl ring-2 ring-white/10">
              <Image
                src={displayImage}
                alt={displayAlt}
                fill
                sizes="(max-width: 768px) 0px, 50vw"
                className="object-cover"
                priority
              />
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-4 -left-4 bg-accent text-text px-6 py-3 rounded-full shadow-xl font-bold animate-bounce-slow">
              {displayExperience}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block animate-bounce">
          <svg
            className="w-6 h-6 text-white/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
