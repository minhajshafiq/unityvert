'use client'

import Link from 'next/link'
import dynamic from 'next/dynamic'
import ScrollAnimator from './ScrollAnimator'
import { departments } from '@/lib/locations'

// Import dynamique de la carte (Leaflet ne fonctionne pas avec SSR)
const Map = dynamic(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full rounded-2xl bg-[#1e2a3a] flex items-center justify-center">
      <div className="animate-pulse text-white/50">Chargement de la carte...</div>
    </div>
  ),
})

export default function ServiceArea() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-custom mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Content */}
          <div>
            <ScrollAnimator animation="fade-up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Zone d'intervention
              </h2>
              <p className="text-white/70 mb-10 max-w-lg">
                Basés à Noisy-le-Sec, nous intervenons sur l'ensemble de
                l'Île-de-France. Cliquez sur votre département pour voir les villes desservies.
              </p>
            </ScrollAnimator>

            {/* Departments grid */}
            <ScrollAnimator animation="fade-up" delay={100}>
              <div className="grid grid-cols-2 gap-4 mb-10">
                {departments.map((dept, index) => (
                  <Link
                    key={index}
                    href={`/zones/${dept.slug}`}
                    className="flex items-center space-x-3 group hover:bg-white/5 p-2 rounded-lg transition-colors -ml-2"
                  >
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span className="text-white font-medium group-hover:text-accent transition-colors">
                      {dept.name} <span className="text-white/60 group-hover:text-accent/60">({dept.code})</span>
                    </span>
                  </Link>
                ))}
              </div>
            </ScrollAnimator>

            {/* Contact box */}
            <ScrollAnimator animation="fade-up" delay={200}>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-4 max-w-lg">
                <p className="text-white/90 text-sm">
                  Votre ville n'est pas listée ?{' '}
                  <Link href="/contact" className="text-white underline font-medium hover:text-accent transition-colors">
                    Contactez-nous
                  </Link>{' '}
                  pour vérifier notre disponibilité.
                </p>
              </div>
            </ScrollAnimator>
          </div>

          {/* Right side - Interactive Map */}
          <ScrollAnimator animation="fade-left" delay={300}>
            <div className="relative">
              <div className="rounded-2xl aspect-[4/3] overflow-hidden shadow-xl">
                <Map />
              </div>

              {/* Radius badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-[1000]">
                <div className="bg-cta text-white px-6 py-3 rounded-full font-medium shadow-lg whitespace-nowrap">
                  Rayon de 20km autour de Noisy
                </div>
              </div>
            </div>
          </ScrollAnimator>
        </div>
      </div>
    </section>
  )
}
