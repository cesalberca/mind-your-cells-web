import { useTranslations } from 'next-intl'

type ProblemItem = {
  title: string
  description: string
}

export function TheProblem() {
  const t = useTranslations('problem')
  const items = t.raw('items') as ProblemItem[]

  return (
    <section className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-stone mb-4 text-center">
          {t('heading')}
        </h2>
        <p className="text-center text-stone/50 mb-16 text-base max-w-xl mx-auto font-sans leading-relaxed">
          {t('subheading')}
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-16">
          {items.map((item) => (
            <div
              key={item.title}
              className="border border-crude-ceramic/40 p-8 bg-white hover:border-soft-terracotta/40 transition-colors"
            >
              <h3 className="text-stone font-semibold text-lg mb-3">{item.title}</h3>
              <p className="text-stone/55 text-sm leading-relaxed font-sans">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="border-l-2 border-terracotta pl-8 max-w-2xl mx-auto">
          <p className="text-stone/80 text-lg leading-relaxed font-sans font-light italic">{t('solution')}</p>
        </div>
      </div>
    </section>
  )
}
