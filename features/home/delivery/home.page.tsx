import { Header } from '@/components/sections/header'
import { Hero } from '@/components/sections/hero'
import { Benefits } from '@/components/sections/benefits'
import { BrandManifesto } from '@/components/sections/brand-manifesto'
import { IndividualConsultation } from '@/components/sections/individual-consultation'
import { WhoIsItFor } from '@/components/sections/who-is-it-for'
import { Testimonials } from '@/components/sections/testimonials'
import { BookCallSection } from '@/components/sections/book-call-section'
import { Footer } from '@/components/sections/footer'

interface Props {
  locale: string
}

export function HomePage({ locale }: Props) {
  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      <Header />

      <Hero />

      <Benefits />

      <BrandManifesto />

      <WhoIsItFor />

      <Testimonials />

      <BookCallSection />

      <Footer />
    </main>
  )
}
