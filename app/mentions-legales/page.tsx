import { Metadata } from 'next'
import MentionsLegalesContent from '@/components/MentionsLegalesContent'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description:
    'Mentions légales et politique de confidentialité du site Unity Vert, jardinier paysagiste à Noisy-le-Sec.',
  robots: {
    index: false,
    follow: true,
  },
}

export default function MentionsLegalesPage() {
  return <MentionsLegalesContent />
}
