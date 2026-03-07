import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Benefits } from '@/components/sections/Benefits'
import { BrandManifesto } from '@/components/sections/BrandManifesto'
import { IndividualConsultation } from '@/components/sections/IndividualConsultation'
import { WhoIsItFor } from '@/components/sections/WhoIsItFor'
import { Testimonials } from '@/components/sections/Testimonials'
import { BookCallSection } from '@/components/sections/BookCallSection'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
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
