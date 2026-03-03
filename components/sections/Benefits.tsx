import { useTranslations } from 'next-intl'

type BenefitItem = {
  id: string
  title: string
  description: string
}

export function Benefits() {
  const t = useTranslations('benefits')
  const items = t.raw('items') as BenefitItem[]

  return (
    <section className="py-24 px-6 bg-ceramic">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-stone mb-20 text-center max-w-2xl mx-auto leading-snug">
          {t('heading')}
        </h2>

        <div className="grid md:grid-cols-3 gap-px bg-crude-ceramic/30">
          {items.map((item) => (
            <div key={item.id} className="p-10 bg-ceramic text-center">
              <h3 className="text-stone/40 font-sans font-semibold text-[0.65rem] tracking-widest uppercase mb-6">
                {item.title}
              </h3>
              <p className="text-stone/70 text-base font-sans font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
