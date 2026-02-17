import { getCityBySlug, getDepartmentBySlug, departments } from '@/lib/locations'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

interface PageProps {
  params: Promise<{
    department: string
    city: string
  }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { department, city: citySlug } = await params
  const city = getCityBySlug(department, citySlug)
  const dept = getDepartmentBySlug(department)

  if (!city || !dept) {
    return {
      title: 'Ville non trouvée',
    }
  }

  const title = `Jardinier Paysagiste à ${city.name} (${city.zip}) - Unity Vert`
  const description = `Jardinier paysagiste à ${city.name} (${city.zip}). Unity Vert : tonte, taille de haies, élagage, création de jardin, pose de clôtures, débroussaillage. -50% crédit d'impôt. Devis gratuit.`

  return {
    title,
    description,
    keywords: [
      `jardinier ${city.name}`,
      `paysagiste ${city.name}`,
      `jardinier ${city.zip}`,
      `élagage ${city.name}`,
      `taille de haie ${city.name}`,
      `tonte pelouse ${city.name}`,
      `entretien jardin ${city.zip}`,
      `création jardin ${city.name}`,
      `pose clôture ${city.name}`,
      `débroussaillage ${city.name}`,
      `jardinier ${dept.code}`,
    ],
    alternates: {
      canonical: `https://unityvert.fr/zones/${department}/${citySlug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://unityvert.fr/zones/${department}/${citySlug}`,
      siteName: 'Unity Vert',
      locale: 'fr_FR',
      type: 'website',
      images: [
        {
          url: '/images/Green_grass_lawn.webp',
          width: 1200,
          height: 630,
          alt: `Jardinier paysagiste ${city.name}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/Green_grass_lawn.webp'],
    },
  }
}

export async function generateStaticParams() {
  const params: { department: string; city: string }[] = []

  for (const dept of departments) {
    for (const city of dept.cities) {
      params.push({
        department: dept.slug,
        city: city.slug,
      })
    }
  }

  return params
}

export default async function CityPage({ params }: PageProps) {
  const { department, city: citySlug } = await params
  const city = getCityBySlug(department, citySlug)
  const dept = getDepartmentBySlug(department)

  if (!city || !dept) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Jardinier Paysagiste à ${city.name}`,
    description: `Services de jardinage et paysagisme à ${city.name} (${city.zip}). Tonte, taille, élagage, création de jardin, pose de clôtures, débroussaillage. 50% crédit d'impôt.`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Unity Vert',
      telephone: '+33743455349',
      email: 'unityvert@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '17 rue Béthisy',
        addressLocality: 'Noisy-le-Sec',
        postalCode: '93130',
        addressCountry: 'FR',
      },
      priceRange: '€€',
    },
    areaServed: {
      '@type': 'City',
      name: city.name,
      postalCode: city.zip,
    },
    serviceType: [
      'Tonte de pelouse',
      'Taille de haies',
      'Élagage',
      'Création de jardin',
      'Pose de clôtures',
      'Débroussaillage',
    ],
    offers: {
      '@type': 'Offer',
      description: '50% de crédit d\'impôt sur les prestations d\'entretien de jardin',
      eligibleRegion: {
        '@type': 'City',
        name: city.name,
      },
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[50vh] flex items-center bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/images/Green_grass_lawn.webp"
            alt={`Jardinier paysagiste ${city.name}`}
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
        </div>

        <div className="container-custom mx-auto section-padding relative z-10">
          <div className="text-sm uppercase tracking-wider mb-4 opacity-80">
            <Link href={`/zones/${dept.slug}`} className="hover:underline">
              {dept.name}
            </Link>
            {' > '}
            <span className="text-accent">{city.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Jardinier Paysagiste à <br />
            <span className="text-accent">{city.name} ({city.zip})</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            Unity Vert est votre expert en jardinage et paysagisme à {city.name}.
            Profitez de nos services professionnels avec 50% de crédit d&apos;impôt.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-cta hover:bg-cta-hover text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Obtenir un devis gratuit
            </Link>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">
              Nos services à {city.name}
            </h2>
            <div className="space-y-6 text-gray-600">
              <p>
                Vous habitez à {city.name} et vous cherchez un jardinier de confiance ?
                Unity Vert met son expertise à votre service pour embellir et entretenir vos espaces extérieurs.
              </p>
              <ul className="space-y-3 list-disc pl-5">
                <li><strong>Tonte de pelouse :</strong> Tonte régulière, scarification, regarnissage et entretien du gazon.</li>
                <li><strong>Taille de haies :</strong> Taille de haies, arbustes, rosiers et arbres fruitiers.</li>
                <li><strong>Élagage :</strong> Intervention sécurisée sur vos arbres, même difficiles d&apos;accès.</li>
                <li><strong>Création de jardin :</strong> Conception paysagère, création de massifs fleuris, plantations.</li>
                <li><strong>Pose de clôtures :</strong> Installation de clôtures, grillages, palissades et portails.</li>
                <li><strong>Débroussaillage :</strong> Nettoyage de terrains, évacuation des déchets verts.</li>
              </ul>
              <p className="mt-4 p-4 bg-accent/10 rounded-lg border-l-4 border-accent text-primary-dark font-medium">
                Bénéficiez de 50% de réduction d&apos;impôt sur nos prestations d&apos;entretien de jardin (Service à la Personne).
              </p>
            </div>

            <div className="mt-8">
              <Link href="/contact" className="text-primary font-bold hover:text-accent underline">
                Nous contacter pour une intervention à {city.name} →
              </Link>
            </div>
          </div>

          <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-xl">
             <Image
                src="/images/services_personne.webp"
                alt="Service à la personne jardinage"
                fill
                className="object-cover"
              />
          </div>
        </div>
      </section>

      {/* Other Cities nearby (simple links back to department for now) */}
      <section className="py-12 bg-gray-50 border-t border-gray-200">
        <div className="container-custom mx-auto text-center">
          <h3 className="text-xl font-bold text-primary mb-6">
            Nous intervenons aussi autour de {city.name}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {dept.cities
              .filter(c => c.slug !== city.slug)
              .slice(0, 5)
              .map(c => (
                <Link
                  key={c.slug}
                  href={`/zones/${dept.slug}/${c.slug}`}
                  className="text-gray-600 hover:text-primary underline"
                >
                  Jardinier {c.name}
                </Link>
              ))}
              <Link href={`/zones/${dept.slug}`} className="text-accent font-bold ml-4">
                Voir toutes les villes du {dept.code}
              </Link>
          </div>
        </div>
      </section>
    </>
  )
}
