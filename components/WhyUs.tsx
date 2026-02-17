'use client'

import ScrollAnimator from './ScrollAnimator'

const reasons = [
  {
    title: 'Expérience & Savoir-faire',
    description:
      'Des années d\'expérience dans l\'entretien et l\'aménagement de jardins parisiens. Nous connaissons les spécificités des espaces verts urbains.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
    ),
  },
  {
    title: 'Travail soigné',
    description:
      'Nous apportons un soin particulier à chaque intervention. Votre satisfaction est notre priorité, et nous ne quittons jamais un chantier sans votre validation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: 'Intervention locale rapide',
    description:
      'Basés à Paris, nous intervenons rapidement dans tout Paris intra-muros et la petite couronne (92, 93, 94). Disponibilité et réactivité garanties.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    title: 'Devis gratuit & transparent',
    description:
      'Nous établissons un devis clair et détaillé, sans surprise. Le prix annoncé est le prix final. Pas de frais cachés.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>
    ),
  },
]

export default function WhyUs() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <ScrollAnimator animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Pourquoi choisir Unity Vert ?
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Un service de jardinage professionnel et humain, au plus proche de vos
              besoins.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <ScrollAnimator
              key={index}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="text-center group">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">
                  {reason.title}
                </h3>
                <p className="text-text-light text-sm">{reason.description}</p>
              </div>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  )
}
