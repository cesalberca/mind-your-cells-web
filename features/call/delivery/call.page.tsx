'use client'

import { useTranslations } from 'next-intl'
import { Page } from '@/components/page'
import { trackGoal } from '@/lib/fathom-goals'

const FREE_CALL_URL = 'https://calendar.app.google/yytTRx1Xr5C17CtY8'
const PAID_CALL_URL = 'https://calendar.app.google/mRrTpyirUuadiLq49'

export function CallPage() {
  const t = useTranslations('call')

  return (
    <Page>
      <section className="pt-32 pb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4 mb-16">
            <h1 className="text-4xl xl:text-5xl font-light text-stone leading-tight">
              <span className="block">{t('hero.heading')}</span>
              <span className="block">{t('hero.headingAccent')}</span>
            </h1>
            <p className="text-stone/55 text-sm font-sans font-light leading-relaxed max-w-sm">
              {t('hero.subheading')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Free 15-min call */}
            <div className="bg-white rounded-2xl p-8 flex flex-col gap-6 shadow-sm">
              <p className="text-stone/40 text-[0.6rem] tracking-widest uppercase font-sans">
                {t('free.tag')}
              </p>
              <div className="space-y-3 flex-1">
                <h2 className="text-2xl font-light text-stone">{t('free.heading')}</h2>
                <p className="text-stone/65 text-sm font-sans leading-relaxed">
                  {t('free.description')}
                </p>
              </div>
              <a
                href={FREE_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackGoal('bookCallFree')}
                className="self-start border border-soft-terracotta text-soft-terracotta text-[0.65rem] tracking-widest uppercase font-sans px-6 py-3 hover:bg-soft-terracotta hover:text-white transition-colors"
              >
                {t('free.cta')}
              </a>
            </div>

            {/* Paid 1-hour consultation */}
            <div className="bg-ceramic rounded-2xl p-8 flex flex-col gap-6">
              <p className="text-stone/40 text-[0.6rem] tracking-widest uppercase font-sans">
                {t('paid.tag')}
              </p>
              <div className="space-y-3 flex-1">
                <h2 className="text-2xl font-light text-stone">{t('paid.heading')}</h2>
                <p className="text-stone/65 text-sm font-sans leading-relaxed">
                  {t('paid.description')}
                </p>
              </div>
              <a
                href={PAID_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackGoal('bookCallPaid')}
                className="self-start border border-soft-terracotta text-soft-terracotta text-[0.65rem] tracking-widest uppercase font-sans px-6 py-3 hover:bg-soft-terracotta hover:text-white transition-colors"
              >
                {t('paid.cta')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </Page>
  )
}
