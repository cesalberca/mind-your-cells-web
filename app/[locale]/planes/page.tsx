import { getTranslations, getLocale } from 'next-intl/server'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { Packages } from '@/components/sections/Packages'
import { IndividualConsultation } from '@/components/sections/IndividualConsultation'
import { FAQ } from '@/components/sections/FAQ'
import { BookCallLink } from '@/components/BookCallLink'
import Link from 'next/link'

type Step = { title: string; description: string }

export default async function PlanesPage() {
  const t = await getTranslations('planes')
  const locale = await getLocale()

  const individualFeatures = t.raw('options.individual.features') as string[]
  const premiumFeatures = t.raw('options.premium.features') as string[]
  const steps = t.raw('process.during.steps') as Step[]
  const afterItems = t.raw('process.after.items') as string[]

  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <p className="text-stone/35 text-[0.6rem] tracking-widest uppercase font-sans mb-10">
            <Link href={`/${locale}`} className="hover:text-stone/60 transition-colors">
              Home
            </Link>
            {' › '}
            <span>{t('breadcrumb')}</span>
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-stone leading-tight">
                {t('hero.heading')}
              </h1>
              <p className="text-stone/60 text-base font-sans font-light leading-relaxed max-w-sm">
                {t('hero.subheading')}
              </p>
              <a
                href="#planes"
                className="inline-block text-soft-terracotta text-[0.65rem] tracking-widest uppercase font-sans underline underline-offset-4 hover:text-stone transition-colors"
              >
                {t('hero.cta')}
              </a>
            </div>

            <div className="flex justify-center md:justify-end">
              <img
                src="/images/hero-scutoid.png"
                alt="Mind Your Cells"
                className="w-full max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Plans cards */}
      <section id="planes" className="py-24 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light text-stone mb-12">
            {t('options.heading')}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Individual */}
            <div className="bg-white rounded-2xl p-8 flex flex-col gap-6 shadow-sm">
              <p className="text-stone/40 text-[0.6rem] tracking-widest uppercase font-sans">
                {t('options.individual.tag')}
              </p>
              <p className="text-stone/70 text-sm font-sans leading-relaxed">
                {t('options.individual.intro')}
              </p>
              <ul className="space-y-2.5 flex-1">
                {individualFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-soft-terracotta flex-shrink-0 mt-2" aria-hidden="true" />
                    <span className="text-stone/65 text-sm font-sans">{f}</span>
                  </li>
                ))}
              </ul>
              <p className="text-stone/35 text-xs font-sans leading-relaxed italic">
                {t('options.individual.note')}
              </p>
              <BookCallLink size="sm" variant="light" goal="bookCallIndividual" className="self-end">
                {t('options.individual.cta')}
              </BookCallLink>
            </div>

            {/* Premium */}
            <div className="bg-ceramic rounded-2xl p-8 flex flex-col gap-6">
              <p className="text-stone/40 text-[0.6rem] tracking-widest uppercase font-sans">
                {t('options.premium.tag')}
              </p>
              <p className="text-stone/70 text-sm font-sans leading-relaxed">
                {t('options.premium.intro')}
              </p>
              <ul className="space-y-2.5 flex-1">
                {premiumFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <span className="w-1 h-1 rounded-full bg-soft-terracotta flex-shrink-0 mt-2" aria-hidden="true" />
                    <span className="text-stone/65 text-sm font-sans">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#programs"
                className="self-end text-soft-terracotta text-[0.65rem] tracking-widest uppercase font-sans underline underline-offset-4 hover:text-stone transition-colors"
              >
                {t('options.premium.cta')}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Packages />

      <IndividualConsultation />

      {/* Process */}
      <section className="py-24 px-6 bg-cream">
        <div className="max-w-5xl mx-auto space-y-16">
          <h2 className="text-3xl sm:text-4xl font-light text-stone">
            {t('process.heading')}
          </h2>

          {/* During */}
          <div className="space-y-10">
            <p className="text-stone/40 text-[0.6rem] tracking-widest uppercase font-sans">
              {t('process.during.label')}
            </p>

            {/* Timeline */}
            <div className="relative grid md:grid-cols-3 gap-8">
              {/* Line aligns with dot center: number(~14px) + gap(8px) + dot-half(6px) = 28px */}
              <div className="hidden md:block absolute top-7 left-0 right-0 h-px bg-soft-terracotta/30" />

              {steps.map((step, i) => (
                <div key={step.title} className="space-y-5">
                  <div className="space-y-2">
                    <span className="block text-stone/30 text-[0.6rem] font-sans tracking-wider">{i + 1}</span>
                    <div className="w-3 h-3 rounded-full border border-soft-terracotta bg-cream relative z-10" />
                  </div>
                  <h3 className="text-stone text-base font-light leading-snug pt-2">
                    {step.title}
                  </h3>
                  <p className="text-stone/50 text-sm font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* After */}
          <div className="space-y-4 border-t border-stone/10 pt-10">
            <p className="text-stone/40 text-[0.6rem] tracking-widest uppercase font-sans">
              {t('process.after.label')}
            </p>
            <div className="space-y-2">
              {afterItems.map((item) => (
                <p key={item} className="text-stone/60 text-sm font-sans leading-relaxed">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      {/* CTA dark section */}
      <section className="py-8 bg-cream">
        <div className="px-4 sm:px-6">
          <div className="rounded-3xl overflow-hidden relative min-h-[70vh] flex flex-col items-center justify-center">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/planes-cta.jpg')" }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-stone/70" />

            {/* Content */}
            <div className="relative z-10 text-center max-w-2xl mx-auto px-6 py-28 space-y-10">
              <blockquote className="text-3xl sm:text-4xl font-light text-ceramic leading-relaxed font-display">
                {t('cta.quote')}
              </blockquote>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <BookCallLink size="md" variant="dark" goal="bookCallPremium">
                  {t('cta.primaryCta')}
                </BookCallLink>
                <BookCallLink size="md" variant="text" goal="bookCallIndividual">
                  {t('cta.secondaryCta')}
                </BookCallLink>
              </div>
            </div>

            {/* MYC label at bottom */}
            <div className="relative z-10 pb-8">
              <p className="text-ceramic/20 text-xs font-sans tracking-[0.4em] uppercase">MYC</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
