'use client'

import Link from 'next/link'
import Image from 'next/image'
import { departments } from '@/lib/locations'

const SOCIAL_LINKS = {
  facebook: 'https://www.facebook.com/unityvert',
  instagram: 'https://www.instagram.com/unityvert',
}

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container-custom mx-auto px-4 md:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & Description */}
          <div>
            <Link href="/" className="flex items-center space-x-2 mb-4 group w-fit">
              <div className="relative w-10 h-10 flex-shrink-0 bg-white rounded-lg p-1 transition-transform duration-300 group-hover:scale-110">
                <Image
                  src="/images/logo.webp"
                  alt="Unity Vert - Jardinier paysagiste"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">Unity Vert</span>
            </Link>
            <p className="text-white/70 text-sm mb-6 leading-relaxed">
              Expertise en aménagement et entretien d'espaces verts à Noisy-le-Sec et en Île-de-France.
            </p>
            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-cta hover:text-white transition-all duration-300"
                aria-label="Facebook Unity Vert"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-cta hover:text-white transition-all duration-300"
                aria-label="Instagram Unity Vert"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-cta text-lg mb-5">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-white/70 hover:text-cta transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#prestations" className="text-white/70 hover:text-cta transition-colors">
                  Nos prestations
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="text-white/70 hover:text-cta transition-colors">
                  Réalisations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/70 hover:text-cta transition-colors">
                  Contact & Devis
                </Link>
              </li>
            </ul>
          </div>

          {/* Zones */}
          <div>
            <h3 className="font-semibold text-cta text-lg mb-5">Zones d'intervention</h3>
            <ul className="space-y-2 text-white/70 text-sm">
              {departments.map((dept) => (
                <li key={dept.slug}>
                  <Link href={`/zones/${dept.slug}`} className="hover:text-cta transition-colors">
                    Jardinier {dept.name} ({dept.code})
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-cta text-lg mb-5">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-cta flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span className="text-white/70">17 rue Béthisy, 93130 Noisy-le-Sec</span>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-cta flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+33743455349" className="text-white/70 hover:text-cta transition-colors">
                  07 43 45 53 49
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-cta flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:unityvert@gmail.com" className="text-white/70 hover:text-cta transition-colors">
                  unityvert@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/60 text-sm">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <p>&copy; {new Date().getFullYear()} Unity Vert. Tous droits réservés.</p>
            <span className="hidden sm:inline">·</span>
            <p>
              Site créé par{' '}
              <a
                href="https://www.minhajshafiq.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cta hover:text-white transition-colors font-medium"
              >
                Minhaj
              </a>
            </p>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-cta transition-colors">
              Mentions légales
            </Link>
            <Link href="/mentions-legales#confidentialite" className="hover:text-cta transition-colors">
              Politique de confidentialité
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
