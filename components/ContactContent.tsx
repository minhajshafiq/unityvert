'use client'

import ScrollAnimator from './ScrollAnimator'
import ContactForm from './ContactForm'

export default function ContactContent() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom mx-auto">
        <ScrollAnimator animation="fade-up">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-4">
              Contactez-nous
            </h1>
            <p className="text-text-light max-w-2xl mx-auto">
              Besoin d'un devis ? Une question ? Remplissez le formulaire ci-dessous ou
              contactez-nous directement. Nous vous répondons sous 24h.
            </p>
          </div>
        </ScrollAnimator>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {/* Phone */}
            <ScrollAnimator animation="fade-right" delay={100}>
              <div className="bg-white rounded-xl p-6 border border-gray-100 hover-lift group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <svg
                      className="w-6 h-6"
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
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Telephone</h3>
                    <a
                      href="tel:+33743455349"
                      className="text-primary hover:underline text-lg font-medium block transition-colors hover:text-primary-dark"
                    >
                      07 43 45 53 49
                    </a>
                    <a
                      href="tel:+33659268502"
                      className="text-primary hover:underline font-medium transition-colors hover:text-primary-dark"
                    >
                      06 59 26 85 02
                    </a>
                    <p className="text-sm text-text-light mt-1">
                      Lun-Sam : 8h-19h
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimator>

            {/* Email */}
            <ScrollAnimator animation="fade-right" delay={200}>
              <div className="bg-white rounded-xl p-6 border border-gray-100 hover-lift group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Email</h3>
                    <a
                      href="mailto:unityvert@gmail.com"
                      className="text-primary hover:underline transition-colors hover:text-primary-dark"
                    >
                      unityvert@gmail.com
                    </a>
                    <p className="text-sm text-text-light mt-1">
                      Reponse sous 24h
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimator>

            {/* Address */}
            <ScrollAnimator animation="fade-right" delay={300}>
              <div className="bg-white rounded-xl p-6 border border-gray-100 hover-lift group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
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
                  </div>
                  <div>
                    <h3 className="font-semibold text-text mb-1">Adresse</h3>
                    <address className="not-italic text-text-light">
                      17 rue Béthisy<br />
                      93130 Noisy-le-Sec
                    </address>
                  </div>
                </div>
              </div>
            </ScrollAnimator>

            {/* Zone d'intervention */}
            <ScrollAnimator animation="fade-right" delay={400}>
              <div className="bg-primary text-white rounded-xl p-6 hover-lift">
                <h3 className="font-semibold mb-3">Zone d'intervention</h3>
                <p className="text-white/80 text-sm mb-3">
                  L'ensemble de l'Île-de-France
                </p>
                <ul className="space-y-2 text-white/90 text-sm">
                  {[
                    'Paris (75)',
                    'Seine-Saint-Denis (93)',
                    'Val-de-Marne (94)',
                    'Hauts-de-Seine (92)',
                    'Val-d\'Oise (95)',
                    'Yvelines (78)',
                    'Essonne (91)',
                    'Seine-et-Marne (77)',
                  ].map((zone, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>{zone}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollAnimator>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ScrollAnimator animation="fade-left" delay={200}>
              <div className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                <h2 className="text-2xl font-bold text-text mb-6">
                  Demander un devis gratuit
                </h2>
                <ContactForm />
              </div>
            </ScrollAnimator>
          </div>
        </div>

        {/* Google Maps */}
        <ScrollAnimator animation="fade-up" delay={500}>
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-text mb-6 text-center">
              Nous trouver
            </h2>
            <div className="aspect-video bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <iframe
                src="https://maps.google.com/maps?q=17+rue+Béthisy,+93130+Noisy-le-Sec,+France&t=&z=17&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Unity Vert - 17 rue Bethisy, 93130 Noisy-le-Sec"
              />
            </div>
          </div>
        </ScrollAnimator>
      </div>
    </section>
  )
}
