import { Hero } from '@/components/sections/hero'
import { Benefits } from '@/components/sections/benefits'
import { BrandManifesto } from '@/components/sections/brand-manifesto'
import { IndividualConsultation } from '@/components/sections/individual-consultation'
import { WhoIsItFor } from '@/components/sections/who-is-it-for'
import { Testimonials } from '@/components/sections/testimonials'
import { BookCallSection } from '@/components/sections/book-call-section'
import { Page } from '@/components/page'

interface Props {
  locale: string
}

export function HomePage({ locale }: Props) {
  return (
    <Page>
      <Hero />

      <Benefits />

      <BrandManifesto />

      <WhoIsItFor />

      <Testimonials />

      <BookCallSection />
    </Page>
  )
}
