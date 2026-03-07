import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Header } from '@/components/sections/Header'
import { Footer } from '@/components/sections/Footer'
import { BookCallLink } from '@/components/BookCallLink'
import { Link } from '@/components/Link'

const BOOK_CALL_URL = 'https://calendar.app.google/yytTRx1Xr5C17CtY8'

const TEAM_MEMBERS = ['juanJose', 'maria', 'estrella'] as const

export default function NosotrosPage() {
  const t = useTranslations('team')

  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      <Header />

      {/* Hero */}
      <section className="pt-28 pb-16 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <nav className="mb-12 text-[0.6rem] tracking-widest uppercase font-sans text-stone/30">
            <a href="/" className="hover:text-stone/50 transition-colors">Home</a>
            <span className="mx-2">›</span>
            <span>{t('breadcrumb')}</span>
          </nav>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h1 className="text-4xl xl:text-5xl leading-[1.05] tracking-tight text-stone">
                <span className="block">{t('hero.headline')}</span>
                <span className="block">{t('hero.headlineAccent')}</span>
              </h1>
              <p className="mt-6 text-stone/55 text-sm leading-relaxed max-w-sm font-sans">
                {t('hero.description')}
              </p>
              <div className="mt-12">
                <Link
                  href="/#programas"
                  className="text-soft-terracotta text-xs tracking-widest uppercase"
                >
                  {t('hero.cta')}
                </Link>
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <Image
                src="/images/hero-scutoid.png"
                alt="Scutoid — estructura celular"
                width={970}
                height={662}
                className="w-full max-w-sm"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Adriana */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="overflow-hidden rounded-sm aspect-[3/4] bg-ceramic/30 relative">
              <Image
                src="/images/home-1.png"
                alt="Adriana Blanco"
                fill
                className="object-cover object-top"
              />
            </div>

            <div className="space-y-5">
              <h2 className="text-3xl font-light text-stone">{t('adriana.name')}</h2>

              <div className="space-y-4">
                <p className="text-stone/80 text-sm leading-relaxed font-sans font-light">
                  {t('adriana.bio1')}
                </p>
                <p className="text-stone/65 text-sm leading-relaxed font-sans font-light">
                  {t('adriana.bio2')}
                </p>
                <p className="text-stone/65 text-sm leading-relaxed font-sans font-light">
                  {t('adriana.bio3')}
                </p>
                <p className="text-stone/65 text-sm leading-relaxed font-sans font-light">
                  {t('adriana.bio4')}
                </p>
              </div>

              <div className="pt-4">
                <Link
                  href={BOOK_CALL_URL}
                  className="text-soft-terracotta text-xs tracking-widest uppercase"
                >
                  {t('adriana.contactCta')}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other professionals */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-light text-stone leading-tight mb-16 max-w-lg">
            {t('others.heading')}
          </h2>

          <div className="grid sm:grid-cols-3 gap-10">
            {TEAM_MEMBERS.map((key) => (
              <div key={key} className="space-y-3">
                <div className="aspect-square bg-ceramic/50 rounded-sm overflow-hidden" />
                <p className="text-stone text-[0.65rem] tracking-widest uppercase font-sans font-medium pt-1">
                  {t(`others.members.${key}.name`)}
                </p>
                <p className="text-soft-terracotta text-[0.6rem] tracking-widest uppercase font-sans">
                  {t(`others.members.${key}.specialty`)}
                </p>
                <p className="text-stone/55 text-sm font-sans leading-relaxed">
                  {t(`others.members.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[60vh] flex items-center justify-center rounded-2xl overflow-hidden mx-4 mb-4">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('/images/home-3.png')" }}
        />
        <div className="absolute inset-0 bg-stone/70" />

        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-24">
          <p className="text-3xl sm:text-4xl md:text-5xl font-light text-ceramic leading-relaxed mb-10 font-display">
            {t('cta.quote1')}
            <br />
            {t('cta.quote2')}
          </p>

          <BookCallLink size="xl" variant="dark" goal="bookCallTeam">
            {t('cta.button')}
          </BookCallLink>

          <p className="text-ceramic/20 text-[0.6rem] tracking-widest uppercase font-sans mt-16">
            MYC
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
