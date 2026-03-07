'use client'

import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/components/Link'
import { trackGoal } from '@/lib/fathom-goals'

const BOOK_CALL_URL = 'https://calendar.app.google/yytTRx1Xr5C17CtY8'

export function Hero() {
  const t = useTranslations('hero')

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20 pb-16">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div>
            <h1 className="text-4xl xl:text-5xl leading-[1.05] text-stone">
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
                href={BOOK_CALL_URL}
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
