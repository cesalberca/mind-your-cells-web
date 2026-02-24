import { useTranslations } from 'next-intl'
import { BookCallLink } from '@/components/BookCallLink'
import { CheckIcon } from 'lucide-react'

export function IndividualConsultation() {
  const t = useTranslations('individualConsultation')
  const features = t.raw('session.features') as string[]

  return (
    <section className="py-24 px-6 bg-ceramic">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-stone mb-16 text-center">
          {t('heading')}
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Description */}
          <div className="space-y-6">
            <p className="text-stone/80 text-base leading-relaxed font-sans font-light">
              {t('intro')}
            </p>
            <p className="text-stone/65 text-base leading-relaxed font-sans font-light">
              {t('approach')}
            </p>
            <p className="text-terracotta text-base leading-relaxed italic" style={{ fontFamily: 'var(--font-display, serif)' }}>
              {t('combined')}
            </p>
            <p className="text-stone/65 text-base leading-relaxed font-sans font-light">
              {t('referral')}
            </p>
            <p className="text-stone/40 text-sm leading-relaxed font-sans border-t border-stone/10 pt-6">
              {t('purpose')}
            </p>
          </div>

          {/* Session card */}
          <div className="border border-stone/15 p-8 bg-cream flex flex-col gap-6">
            <h3 className="text-stone font-semibold text-xl" style={{ fontFamily: 'var(--font-display, serif)' }}>
              {t('session.title')}
            </h3>

            <ul className="space-y-3">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckIcon className="w-3.5 h-3.5 text-soft-terracotta flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-stone/65 text-sm font-sans">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="border-t border-stone/10 pt-5">
              <div className="flex items-end gap-1.5">
                <span className="text-4xl font-light text-stone" style={{ fontFamily: 'var(--font-display, serif)' }}>
                  {t('session.price')}
                </span>
                <span className="text-stone/60 text-base font-sans mb-1">
                  {t('session.currency')}{t('session.priceLabel')}
                </span>
              </div>
              <p className="text-stone/30 text-xs font-sans mt-2 tracking-wide">
                {t('session.booking')}
              </p>
            </div>

            <BookCallLink size="md" variant="light" goal="bookCallIndividual" className="justify-center text-center">
              {t('session.cta')}
            </BookCallLink>
          </div>
        </div>
      </div>
    </section>
  )
}
