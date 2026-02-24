import { useTranslations } from 'next-intl'

type TestimonialPlaceholder = {
  quote: string
  name: string
  detail: string
}

export function Testimonials() {
  const t = useTranslations('testimonials')
  const placeholders = t.raw('placeholders') as TestimonialPlaceholder[]

  return (
    <section id="testimonios" className="py-24 px-6 bg-cream">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-stone mb-4 text-center">
          {t('heading')}
        </h2>
        <p className="text-center text-stone/50 mb-16 text-base font-sans">{t('subheading')}</p>

        <div className="grid sm:grid-cols-3 gap-px bg-crude-ceramic/30">
          {placeholders.map((item, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: placeholder cards with static data
            <div
              key={i}
              className="bg-cream hover:bg-white transition-colors p-8 text-center"
            >
              <p className="text-stone/25 text-sm italic leading-relaxed mb-5 font-sans">{item.quote}</p>
              <p className="text-stone/20 text-xs font-sans tracking-widest uppercase">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
