import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://unityvert.fr'),
  title: {
    default: 'Unity Vert - Jardinier Paysagiste à Noisy-le-Sec | Entretien & Aménagement',
    template: '%s | Unity Vert - Jardinier Noisy-le-Sec',
  },
  description:
    'Unity Vert, jardinier paysagiste à Noisy-le-Sec. Intervention sur toute l\'Île-de-France (Paris, 92, 93, 94, 95, 78, 91, 77). Tonte, taille de haies, élagage, création de jardin, pose de clôtures. Devis gratuit au 07 43 45 53 49. -50% réduction d\'impôts.',
  keywords: [
    'jardinier Noisy-le-Sec',
    'paysagiste Île-de-France',
    'entretien jardin Noisy-le-Sec',
    'taille haie 93',
    'élagage Seine-Saint-Denis',
    'jardinier 93',
    'jardinier 94',
    'jardinier Paris',
    'jardinier Yvelines',
    'jardinier Essonne',
    'jardinier Bondy',
    'jardinier Montreuil',
    'services à la personne jardinage',
  ],
  authors: [{ name: 'Unity Vert' }],
  creator: 'Unity Vert',
  alternates: {
    canonical: 'https://unityvert.fr',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://unityvert.fr',
    siteName: 'Unity Vert',
    title: 'Unity Vert - Jardinier Paysagiste à Noisy-le-Sec',
    description:
      'Votre jardinier paysagiste à Noisy-le-Sec et en Île-de-France. Entretien, taille, élagage, création de jardin. -50% réduction d\'impôts. Devis gratuit.',
    images: [
      {
        url: '/images/Green_grass_lawn.webp',
        width: 1200,
        height: 630,
        alt: 'Unity Vert - Jardinier Paysagiste à Noisy-le-Sec',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Unity Vert - Jardinier Paysagiste à Noisy-le-Sec',
    description:
      'Votre jardinier paysagiste à Noisy-le-Sec et en Île-de-France. Entretien, taille, élagage, création de jardin. -50% réduction d\'impôts.',
    images: ['/images/Green_grass_lawn.webp'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // verification: {
  //   google: 'REMPLACER_PAR_VOTRE_CODE_GOOGLE_SEARCH_CONSOLE',
  // },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/images/logo.webp" type="image/webp" />
        <meta name="geo.region" content="FR-93" />
        <meta name="geo.placename" content="Noisy-le-Sec" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {/* Skip to content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Aller au contenu principal
        </a>
        <Header />
        <main id="main-content" className="pt-16 md:pt-20">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              '@id': 'https://unityvert.fr',
              name: 'Unity Vert',
              description:
                'Jardinier paysagiste à Noisy-le-Sec. Intervention sur l\'ensemble de l\'Île-de-France (Paris, 92, 93, 94, 95, 78, 91, 77). Tonte, taille de haies, élagage, création de jardin, pose de clôtures. Services à la personne avec 50% de réduction d\'impôts.',
              url: 'https://unityvert.fr',
              telephone: '+33743455349',
              email: 'unityvert@gmail.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '17 rue Béthisy',
                addressLocality: 'Noisy-le-Sec',
                postalCode: '93130',
                addressCountry: 'FR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 48.8912,
                longitude: 2.4519,
              },
              areaServed: [
                { '@type': 'AdministrativeArea', name: 'Paris (75)' },
                { '@type': 'AdministrativeArea', name: 'Seine-Saint-Denis (93)' },
                { '@type': 'AdministrativeArea', name: 'Val-de-Marne (94)' },
                { '@type': 'AdministrativeArea', name: 'Hauts-de-Seine (92)' },
                { '@type': 'AdministrativeArea', name: 'Val-d\'Oise (95)' },
                { '@type': 'AdministrativeArea', name: 'Yvelines (78)' },
                { '@type': 'AdministrativeArea', name: 'Essonne (91)' },
                { '@type': 'AdministrativeArea', name: 'Seine-et-Marne (77)' },
              ],
              priceRange: '€€',
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  opens: '08:00',
                  closes: '19:00',
                },
              ],
              sameAs: [
                'https://www.facebook.com/profile.php?id=61573aborede532930',
                'https://www.instagram.com/unityvert/',
              ],
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Services de jardinage',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Tonte de pelouse',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Taille de haies et arbustes',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Élagage',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Création de jardin',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Pose de clôtures',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'Débroussaillage',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
