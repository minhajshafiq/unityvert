import { Metadata } from 'next'
import ContactContent from '@/components/ContactContent'

export const metadata: Metadata = {
  title: 'Contact | Demandez un devis gratuit',
  description:
    'Contactez Unity Vert pour un devis gratuit. Jardinier paysagiste à Noisy-le-Sec, intervention sur toute l\'Île-de-France. Appelez le 07 43 45 53 49 ou remplissez notre formulaire.',
  alternates: {
    canonical: 'https://unityvert.fr/contact',
  },
  openGraph: {
    title: 'Contactez Unity Vert - Devis gratuit jardinier Île-de-France',
    description:
      'Demandez votre devis gratuit pour l\'entretien ou l\'aménagement de votre jardin à Noisy-le-Sec et sur l\'ensemble de l\'Île-de-France.',
    url: 'https://unityvert.fr/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contactez Unity Vert - Devis gratuit',
    description: 'Demandez votre devis gratuit pour l\'entretien de votre jardin en Île-de-France.',
  },
}

export default function ContactPage() {
  return <ContactContent />
}
