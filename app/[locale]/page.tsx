import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { Benefits } from '@/components/sections/Benefits'
import { BrandManifesto } from '@/components/sections/BrandManifesto'
import { IndividualConsultation } from '@/components/sections/IndividualConsultation'
import { ParaQuienEs } from '@/components/sections/ParaQuienEs'
import { Packages } from '@/components/sections/Packages'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { BookCallSection } from '@/components/sections/BookCallSection'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      <Header />

      <Hero />

      <Benefits />

      <BrandManifesto />

      <IndividualConsultation />

      <ParaQuienEs />

      <Packages />

      <Testimonials />

      <FAQ />

      <BookCallSection />

      <Footer />
    </main>
  )
}
