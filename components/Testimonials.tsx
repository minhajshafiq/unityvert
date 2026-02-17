'use client'

import ScrollAnimator from './ScrollAnimator'

const testimonials = [
  {
    name: 'Marie D.',
    location: 'Noisy-le-Sec (93)',
    text: 'Excellent travail ! Mon jardin n\'a jamais été aussi beau. L\'équipe est ponctuelle, professionnelle et très à l\'écoute. Je recommande vivement Unity Vert.',
    rating: 5,
  },
  {
    name: 'Jean-Pierre M.',
    location: 'Bondy (93)',
    text: 'Intervention rapide pour l\'élagage de mes arbres. Travail propre et soigné. Le devis était clair et le prix respecté. En plus la réduction d\'impôts c\'est super !',
    rating: 5,
  },
  {
    name: 'Sophie L.',
    location: 'Montreuil (93)',
    text: 'Je fais appel à Unity Vert pour l\'entretien mensuel de mon jardin depuis 2 ans. Toujours satisfaite de leur travail. Des professionnels de confiance.',
    rating: 5,
  },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-accent' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom mx-auto">
        <ScrollAnimator animation="fade-up">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Ce que disent nos clients
            </h2>
            <p className="text-text-light max-w-2xl mx-auto">
              La satisfaction de nos clients est notre meilleure récompense.
              Découvrez leurs témoignages.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollAnimator
              key={index}
              animation="fade-up"
              delay={index * 150}
            >
              <article className="bg-background rounded-xl p-6 border border-gray-100 hover-lift h-full group">
                <StarRating rating={testimonial.rating} />
                <blockquote className="mt-4 mb-6 text-text-light italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:scale-110">
                    <span className="text-primary font-semibold text-lg transition-colors group-hover:text-white">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-text">{testimonial.name}</p>
                    <p className="text-sm text-text-light">{testimonial.location}</p>
                  </div>
                </div>
              </article>
            </ScrollAnimator>
          ))}
        </div>
      </div>
    </section>
  )
}
