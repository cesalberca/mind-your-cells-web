import { Header } from '@/components/sections/Header'
import { Hero } from '@/components/sections/Hero'
import { TheProblem } from '@/components/sections/TheProblem'
import { AboutAdriana } from '@/components/sections/AboutAdriana'
import { Packages } from '@/components/sections/Packages'
import { Guarantees } from '@/components/sections/Guarantees'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { BookCallSection } from '@/components/sections/BookCallSection'
import { Footer } from '@/components/sections/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      <Header />

      <Hero />

      <TheProblem />

      <AboutAdriana />

      <Packages />

      <Guarantees />

      <Testimonials />

      <FAQ />

      <BookCallSection />

      <Footer />
    </main>
  )
}
