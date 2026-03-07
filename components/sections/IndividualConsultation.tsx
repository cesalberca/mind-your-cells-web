import { useTranslations } from 'next-intl'
import { BookCallLink } from '@/components/BookCallLink'
import { CheckIcon } from 'lucide-react'
import { ScutoidMask } from '@/components/ScutoidMask'

export function IndividualConsultation() {
  const t = useTranslations('individualConsultation')
  const features = t.raw('session.features') as string[]

  return (
    <section id="consultation" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text content */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl font-light text-stone leading-tight">{t('heading')}</h2>

            <p className="text-stone/80 text-base leading-relaxed font-sans font-light">{t('intro')}</p>
            <p className="text-stone/65 text-base leading-relaxed font-sans font-light">{t('approach')}</p>
            <p className="text-terracotta text-base leading-relaxed font-sans font-light">{t('combined')}</p>
            <p className="text-stone/65 text-base leading-relaxed font-sans font-light">{t('referral')}</p>
            <p className="text-stone/40 text-sm leading-relaxed font-sans border-t border-stone/10 pt-6">
              {t('purpose')}
            </p>

            {/* Session card */}
            <div className="border border-stone/15 p-6 bg-cream space-y-4 mt-2">
              <h3 className="text-stone font-semibold text-lg">{t('session.title')}</h3>

              <ul className="space-y-2.5">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className="w-3.5 h-3.5 text-soft-terracotta flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-stone/65 text-sm font-sans">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-stone/10 pt-4">
                <div className="flex items-end gap-1.5 mb-1">
                  <span className="text-3xl font-light text-stone">{t('session.price')}</span>
                  <span className="text-stone/60 text-sm font-sans mb-0.5">
                    {t('session.currency')}
                    {t('session.priceLabel')}
                  </span>
                </div>
                <p className="text-stone/30 text-xs font-sans tracking-wide">{t('session.booking')}</p>
              </div>

              <BookCallLink
                size="md"
                variant="light"
                goal="bookCallIndividual"
                className="justify-center text-center w-full"
              >
                {t('session.cta')}
              </BookCallLink>
            </div>
          </div>

          {/* Right: Masked image */}
          <div className="flex justify-center md:justify-end">
            <ScutoidMask
              src="/images/home-1.png"
              alt="Consulta individual Mind Your Cells"
              variant={1}
              className="w-full max-w-xs"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
