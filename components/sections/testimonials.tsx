import { useTranslations } from 'next-intl'

type TestimonialItem = {
  quote: string
  name: string
  initials: string
}

export function Testimonials() {
  const t = useTranslations('testimonials')
  const items = t.raw('items') as TestimonialItem[]

  return (
    <section id="testimonials" className="relative py-24 px-6 overflow-hidden">
      <img
        src="/images/MYC29_1SVG.svg"
        alt=""
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl pointer-events-none select-none"
      />

      <div className="relative max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-stone mb-20 text-center max-w-2xl mx-auto leading-snug">
          {t('heading')}
        </h2>

        <div className="grid sm:grid-cols-3 gap-12">
          {items.map((item, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: static testimonial cards
            <div key={i} className="flex flex-col">
              <p className="text-stone/65 text-sm italic leading-relaxed mb-8 font-serif flex-1">{item.quote}</p>

              <p className="text-stone/35 text-[0.6rem] font-sans tracking-widest uppercase">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
