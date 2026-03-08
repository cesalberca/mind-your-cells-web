import { useTranslations } from 'next-intl'
import { BookCallLink } from '@/components/book-call-link'
import { ScutoidMask } from '@/components/scutoid-mask'

export function WhoIsItFor() {
  const t = useTranslations('whoIsItFor')
  const items = t.raw('items') as string[]

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Masked image */}
          <div className="flex justify-center order-2 md:order-1">
            <ScutoidMask
              src="/images/home-2.png"
              alt="Para quién es Mind Your Cells"
              variant={2}
              className="w-full max-w-sm"
            />
          </div>

          {/* Right: Content */}
          <div className="space-y-8 order-1 md:order-2">
            <h2 className="text-4xl sm:text-5xl text-stone">{t('heading')}</h2>

            <ul className="space-y-4 list-none">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-4 ">
                  <span className="text-stone/65 text-base font-sans font-light leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <BookCallLink size="md" variant="light" goal="bookCallSection">
              {t('cta')}
            </BookCallLink>
          </div>
        </div>
      </div>
    </section>
  )
}
