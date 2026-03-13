'use client'

import { useTranslations, useLocale } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/components/link'
import { trackGoal } from '@/lib/fathom-goals'

export function Hero() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const callHref = locale === 'es' ? '/es/reservar' : '/call'

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div className="@container">
            <h1 className="text-[clamp(1.5rem,8cqi,3.5rem)] leading-[1.05] text-stone">
              <span className="block">{t('headline')}</span>
              <span className="block">{t('headlineAccent')}</span>
            </h1>

            <p className="mt-8 text-base sm:text-lg text-stone/55 leading-relaxed max-w-md">
              {t.rich('subheadline', {
                em: (chunks) => <em key="em">{chunks}</em>,
              })}
            </p>

            <div className="mt-16">
              <Link
                href={callHref}
                className="text-soft-terracotta text-sm tracking-widest uppercase"
                onClick={() => trackGoal('bookCallHero')}
              >
                {t('cta')}
              </Link>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/hero-scutoid.png"
              alt="Scutoid — estructura celular"
              width={970}
              height={662}
              className="w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
