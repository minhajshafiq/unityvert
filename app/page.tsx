import Hero from '@/components/Hero'
import Services from '@/components/Services'
import WhyUs from '@/components/WhyUs'
import GalleryPreview from '@/components/GalleryPreview'
import Testimonials from '@/components/Testimonials'
import ServiceArea from '@/components/ServiceArea'
import CTASection from '@/components/CTASection'
import { getHeroData, getFeaturedWorks } from '@/lib/sanity'

export const runtime = 'edge'

export default async function Home() {
  // Récupérer les données depuis Sanity
  const [heroData, featuredWorks] = await Promise.all([
    getHeroData(),
    getFeaturedWorks(),
  ])

  return (
    <>
      <Hero
        heroImage={heroData?.imageUrl}
        heroImageAlt={heroData?.imageAlt}
        experience={heroData?.experience}
      />
      <Services />
      <WhyUs />
      <GalleryPreview featuredWorks={featuredWorks} />
      <Testimonials />
      <ServiceArea />
      <CTASection />
    </>
  )
}
