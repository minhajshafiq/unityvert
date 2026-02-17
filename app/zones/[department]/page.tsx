import { getDepartmentBySlug, departments } from '@/lib/locations'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

interface PageProps {
  params: {
    department: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const dept = getDepartmentBySlug(params.department)

  if (!dept) {
    return {
      title: 'Département non trouvé',
    }
  }

  const title = `Jardinier Paysagiste ${dept.name} (${dept.code}) - Unity Vert`
  const description = `Unity Vert, jardinier paysagiste dans le ${dept.name} (${dept.code}). Tonte, taille de haies, élagage, création de jardin, pose de clôtures, débroussaillage. -50% crédit d'impôt. Devis gratuit.`

  return {
    title,
    description,
    keywords: [
      `jardinier ${dept.name}`,
      `paysagiste ${dept.name}`,
      `jardinier ${dept.code}`,
      `paysagiste ${dept.code}`,
      `élagage ${dept.name}`,
      `taille de haie ${dept.name}`,
      `tonte pelouse ${dept.code}`,
      `entretien jardin ${dept.code}`,
      `création jardin ${dept.name}`,
      `pose clôture ${dept.code}`,
      `débroussaillage ${dept.name}`,
    ],
    alternates: {
      canonical: `https://unityvert.fr/zones/${params.department}`,
    },
    openGraph: {
      title,
      description,
      url: `https://unityvert.fr/zones/${params.department}`,
      siteName: 'Unity Vert',
      locale: 'fr_FR',
      type: 'website',
      images: [
        {
          url: '/images/Green_grass_lawn.webp',
          width: 1200,
          height: 630,
          alt: `Jardinier paysagiste ${dept.name}`,
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
  return departments.map((dept) => ({
    department: dept.slug,
  }))
}

export default function DepartmentPage({ params }: PageProps) {
  const dept = getDepartmentBySlug(params.department)

  if (!dept) {
    notFound()
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `Jardinier Paysagiste ${dept.name}`,
    description: `Services de jardinage et paysagisme dans le ${dept.name} (${dept.code}). Tonte, taille, élagage, création de jardin, pose de clôtures, débroussaillage.`,
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
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: `${dept.name} (${dept.code})`,
    },
    serviceType: [
      'Tonte de pelouse',
      'Taille de haies',
      'Élagage',
      'Création de jardin',
      'Pose de clôtures',
      'Débroussaillage',
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden min-h-[60vh] flex items-center bg-primary">
        <div className="absolute inset-0">
          <Image
            src="/images/Green_grass_lawn.webp"
            alt={`Jardinier paysagiste ${dept.name}`}
            fill
            sizes="100vw"
            className="object-cover opacity-30"
            priority
          />
        </div>
        
        <div className="container-custom mx-auto section-padding relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Jardinier Paysagiste <br />
            <span className="text-accent">{dept.name} ({dept.code})</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mb-8">
            Unity Vert intervient dans l'ensemble du département {dept.name} pour vos travaux de jardinage et d'aménagement extérieur.
          </p>
          <div className="flex gap-4">
            <Link
              href="/contact"
              className="bg-cta hover:bg-cta-hover text-white font-semibold py-3 px-8 rounded-full transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="section-padding bg-white">
        <div className="container-custom mx-auto">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-primary mb-6">
              Nos zones d'intervention dans le {dept.code}
            </h2>
            <p className="text-gray-600">
              Notre équipe de jardiniers paysagistes professionnels se déplace dans toutes les communes du {dept.name}. 
              Retrouvez ci-dessous les principales villes où nous intervenons régulièrement.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dept.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/zones/${dept.slug}/${city.slug}`}
                className="group block p-4 bg-gray-50 rounded-lg hover:bg-primary hover:text-white transition-all duration-300"
              >
                <span className="font-semibold group-hover:text-accent transition-colors">
                  {city.name}
                </span>
                <span className="text-sm text-gray-500 block group-hover:text-white/80">
                  {city.zip}
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Votre ville n'est pas dans la liste ? Nous intervenons probablement quand même !
            </p>
            <Link
              href="/contact"
              className="text-primary font-semibold hover:text-accent underline"
            >
              Contactez-nous pour vérifier
            </Link>
          </div>
        </div>
      </section>

      {/* Services Summary */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom mx-auto">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">
            Nos services en {dept.name}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Tonte de Pelouse</h3>
              <p className="text-gray-600">Tonte régulière, scarification, regarnissage et entretien du gazon dans le {dept.code}.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Taille de Haies</h3>
              <p className="text-gray-600">Taille de haies, arbustes, rosiers et arbres fruitiers pour un jardin soigné.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Élagage</h3>
              <p className="text-gray-600">Taille douce, élagage de sécurité et abattage d'arbres dangereux dans le {dept.code}.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Création de Jardin</h3>
              <p className="text-gray-600">Conception et réalisation de jardins, création de massifs fleuris et plantations.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Pose de Clôtures</h3>
              <p className="text-gray-600">Installation de clôtures, grillages, palissades et portails pour sécuriser votre jardin.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-4">Débroussaillage</h3>
              <p className="text-gray-600">Nettoyage de terrains, débroussaillage, évacuation des déchets verts.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
