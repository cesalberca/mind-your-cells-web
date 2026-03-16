import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import { Page } from '@/components/page'
import { BookCallLink } from '@/components/book-call-link'
import { Link } from '@/components/link'
import { SubpageHero } from '@/components/sections/subpage-hero'

interface Props {
  locale: string
}

export async function AboutPage({ locale }: Props) {
  const t = await getTranslations('team')
  const homeHref = locale === 'es' ? '/es' : '/'
  const plansHref = locale === 'es' ? '/es/planes' : '/plans'
  const callHref = locale === 'es' ? '/es/reservar' : '/call'

  return (
    <Page>
      <SubpageHero
        variant="about"
        breadcrumb={[{ label: 'Home', href: homeHref }, { label: t('breadcrumb') }]}
        heading={t('hero.headline')}
        headingAccent={t('hero.headlineAccent')}
        subheading={t('hero.description')}
        ctaLabel={t('hero.cta')}
        ctaHref={plansHref}
      />

      {/* Adriana */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="overflow-hidden rounded-sm aspect-[3/4] bg-ceramic/30 relative">
              <Image src="/images/adriana-highres.png" alt="Adriana Blanco" fill className="object-cover object-center" />
            </div>

            <div className="space-y-5">
              <h2 className="text-3xl font-light text-stone">{t('adriana.name')}</h2>

              <div className="space-y-4">
                <p className="text-stone/80 text-sm leading-relaxed font-sans font-light">{t('adriana.bio1')}</p>
                <p className="text-stone/65 text-sm leading-relaxed font-sans font-light">{t('adriana.bio2')}</p>
                <p className="text-stone/65 text-sm leading-relaxed font-sans font-light">{t('adriana.bio3')}</p>
                <p className="text-stone/65 text-sm leading-relaxed font-sans font-light">{t('adriana.bio4')}</p>
              </div>

              <div className="pt-4">
                <Link href={callHref} className="text-soft-terracotta text-xs tracking-widest uppercase">
                  {t('adriana.contactCta')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[60vh] flex items-center justify-center rounded-2xl overflow-hidden mx-4 mb-4">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/home-3.png')" }} />
        <div className="absolute inset-0 bg-stone/70" />

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-24">
          <p className="text-3xl sm:text-4xl md:text-4xl font-light text-ceramic leading-relaxed mb-10 font-display">
            {t('cta.quote1')}
            <br />
            {t('cta.quote2')}
          </p>

          <BookCallLink size="xl" variant="dark" goal="bookCallTeam">
            {t('cta.button')}
          </BookCallLink>

          <p className="text-ceramic/20 text-[0.6rem] tracking-widest uppercase font-sans mt-16">MYC</p>
        </div>
      </section>
    </Page>
  )
}
