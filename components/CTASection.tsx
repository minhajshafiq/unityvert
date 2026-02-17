'use client'

import Link from 'next/link'
import Image from 'next/image'
import ScrollAnimator from './ScrollAnimator'

export default function CTASection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto text-center">
        <ScrollAnimator animation="scale">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text mb-4 md:mb-6">
            Prêt à embellir votre jardin ?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-text-light mb-6 md:mb-10 max-w-2xl mx-auto">
            Demandez votre devis gratuit dès maintenant. Nous répondons sous 24h et nous
            nous déplaçons gratuitement pour évaluer vos besoins.
          </p>
        </ScrollAnimator>

        <ScrollAnimator animation="fade-up" delay={200}>
          <div className="flex flex-col sm:flex-row items-center gap-3 md:gap-4 justify-center">
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
            <a
              href="tel:+33743455349"
              className="bg-white border-2 border-primary text-primary font-semibold py-3 px-6 md:py-4 md:px-8 text-sm md:text-base rounded-full transition-all duration-300 inline-flex items-center space-x-2 hover:scale-105 hover:bg-primary hover:text-white hover:shadow-lg active:scale-95"
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
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span>07 43 45 53 49</span>
            </a>
          </div>
        </ScrollAnimator>

        <ScrollAnimator animation="fade-up" delay={400}>
          <div className="mt-6 md:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
            <p className="text-text-light text-xs md:text-sm">Lundi - Samedi : 8h - 19h</p>
            <div className="flex items-center gap-3 md:gap-4">
              <Image
                src="/images/services_personne.webp"
                alt="Services à la personne"
                width={120}
                height={48}
                className="h-8 md:h-12 w-auto object-contain"
              />
              <Image
                src="/images/reduc_impots.webp"
                alt="-50% Réduction d'impôts"
                width={120}
                height={48}
                className="h-8 md:h-12 w-auto object-contain"
              />
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}
