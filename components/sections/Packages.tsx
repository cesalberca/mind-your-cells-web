import { useTranslations } from 'next-intl'
import { BookCallLink } from '@/components/BookCallLink'
import { CheckIcon } from 'lucide-react'

type PackageItem = {
  id: string
  name: string
  duration: string
  format: string
  price: string
  originalPrice?: string
  currency: string
  popular?: boolean
  note?: string
  features: string[]
  guarantee: string
}

export function Packages() {
  const t = useTranslations('packages')
  const items = t.raw('items') as PackageItem[]

  return (
    <section id="programas" className="py-24 px-6 bg-cream">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-stone mb-4 text-center">
          {t('heading')}
        </h2>
        <p className="text-center text-stone/50 mb-16 text-base font-sans">{t('subheading')}</p>

        <div className="grid md:grid-cols-3 gap-px bg-crude-ceramic/30">
          {items.map((pkg) => (
            <div
              key={pkg.id}
              className={`flex flex-col gap-6 p-8 transition-colors ${
                pkg.popular
                  ? 'bg-white'
                  : 'bg-cream hover:bg-white'
              }`}
            >
              <div>
                {pkg.popular && (
                  <span className="inline-block bg-terracotta text-cream text-[0.6rem] font-sans font-medium tracking-widest uppercase px-3 py-1 mb-3">
                    {t('popular')}
                  </span>
                )}
                <h3 className="text-stone font-semibold text-xl leading-snug mb-3">{pkg.name}</h3>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-soft-terracotta text-xs font-sans tracking-widest uppercase">
                    {pkg.duration}
                  </span>
                  <span className="text-stone/25">·</span>
                  <span className="text-stone/40 text-xs font-sans">{pkg.format}</span>
                </div>
              </div>

              <div className="border-t border-crude-ceramic/30 pt-6">
                <div className="flex items-end gap-2">
                  {pkg.originalPrice && (
                    <span className="text-stone/25 text-sm line-through mb-1 font-sans">
                      {pkg.originalPrice}{pkg.currency}
                    </span>
                  )}
                  <span className="text-4xl font-light text-stone" style={{ fontFamily: 'var(--font-display, serif)' }}>
                    {pkg.price}
                  </span>
                  <span className="text-stone/60 text-lg font-sans mb-1">{pkg.currency}</span>
                </div>
                {pkg.note && (
                  <p className="text-stone/35 text-xs font-sans mt-1">{pkg.note}</p>
                )}
              </div>

              <ul className="space-y-3 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckIcon className="w-3.5 h-3.5 text-soft-terracotta flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-stone/65 text-sm leading-snug font-sans">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="border-t border-crude-ceramic/20 pt-5">
                <p className="text-stone/30 text-xs leading-relaxed italic font-sans">{pkg.guarantee}</p>
              </div>

              <BookCallLink size="md" variant="light" goal="bookCallPackage" className="justify-center w-full text-center">
                {t('cta')}
              </BookCallLink>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
