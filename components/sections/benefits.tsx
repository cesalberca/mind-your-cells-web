import { useTranslations } from 'next-intl'
import { BookCallLink } from '@/components/book-call-link'

type BenefitItem = {
  id: string
  title: string
  items: string[]
}

export function Benefits() {
  const t = useTranslations('benefits')
  const items = t.raw('items') as BenefitItem[]

  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-light text-stone leading-snug max-w-xl mb-32">{t('heading')}</h2>

        <div className="grid md:grid-cols-4 gap-12">
          <div className="hidden md:block" />

          {items.map((item) => (
            <div key={item.id}>
              <h3 className="text-stone font-sans font-semibold text-[0.65rem] tracking-[0.2em] uppercase mb-8">
                {item.title}
              </h3>
              <ul className="space-y-5">
                {item.items.map((line, i) => (
                  <li key={i} className="text-stone/60 text-sm font-sans font-light leading-snug">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-32 text-center">
          <BookCallLink variant="text" size="sm" goal="benefits">
            {t('cta')}
          </BookCallLink>
        </div>
      </div>
    </section>
  )
}
