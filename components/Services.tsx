'use client'

import ScrollAnimator from './ScrollAnimator'

const services = [
  {
    id: 'tonte',
    title: 'Tonte de pelouse',
    description:
      'Tonte régulière de votre pelouse pour un gazon toujours impeccable. Nous adaptons la hauteur de coupe selon la saison.',
    benefit: 'Une pelouse verte et soignée toute l\'année',
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
    id: 'taille',
    title: 'Taille de haies & arbustes',
    description:
      'Taille précise et soignée de vos haies et arbustes. Nous redonnons forme et vigueur à vos végétaux pour un extérieur net et structuré.',
    benefit: 'Des haies parfaitement taillées',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14.121 14.121L19 19m-7-7l7-7m-7 7l-2.879 2.879M12 12L9.121 9.121m0 5.758a3 3 0 10-4.243 4.243 3 3 0 004.243-4.243zm0-5.758a3 3 0 10-4.243-4.243 3 3 0 004.243 4.243z"
        />
      </svg>
    ),
  },
  {
    id: 'elagage',
    title: 'Élagage',
    description:
      'Élagage professionnel de vos arbres pour leur santé et votre sécurité. Nous intervenons sur les branches dangereuses et favorisons une croissance harmonieuse.',
    benefit: 'Des arbres en bonne santé et un jardin sécurisé',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    id: 'creation',
    title: 'Création de jardin',
    description:
      'Création et aménagement de jardins sur mesure. Plantations, massifs, allées... Nous concrétisons votre projet paysager.',
    benefit: 'Un jardin unique qui vous ressemble',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
        />
      </svg>
    ),
  },
  {
    id: 'debroussaillage',
    title: 'Débroussaillage & désherbage',
    description:
      'Remise en état de terrains en friche, débroussaillage, désherbage manuel ou mécanique. Nous rendons vos espaces à nouveau exploitables.',
    benefit: 'Récupérez vos espaces envahis',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
        />
      </svg>
    ),
  },
  {
    id: 'clotures',
    title: 'Pose de clôtures',
    description:
      'Installation de clôtures de tous types : grillage, bois, PVC, aluminium. Délimitez et sécurisez votre propriété.',
    benefit: 'Une propriété délimitée et sécurisée',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
        />
      </svg>
    ),
  },
]

const otherServices = [
  'Plantations',
  'Arrosage automatique',
  'Évacuation des déchets verts',
]

export default function Services() {
  return (
    <section id="prestations" className="section-padding bg-background-alt">
      <div className="container-custom mx-auto">
        <ScrollAnimator animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Nos prestations de jardinage
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              Des services complets pour l'entretien et l'aménagement de vos espaces
              verts. Nous intervenons à Noisy-le-Sec et dans toute l'Île-de-France.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimator
              key={service.id}
              animation="fade-up"
              delay={index * 100}
            >
              <article className="bg-background rounded-xl p-6 hover-lift border border-gray-100 group h-full">
                <div className="w-14 h-14 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-text mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-light mb-4">{service.description}</p>
                <div className="flex items-start space-x-2 text-primary">
                  <svg
                    className="w-5 h-5 flex-shrink-0 mt-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-sm font-medium">{service.benefit}</span>
                </div>
              </article>
            </ScrollAnimator>
          ))}
        </div>

        {/* Other services */}
        <ScrollAnimator animation="fade-up" delay={600}>
          <div className="mt-12 text-center">
            <p className="text-text-light mb-4">Et aussi :</p>
            <div className="flex flex-wrap justify-center gap-3">
              {otherServices.map((service, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-all duration-300 cursor-default"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}
