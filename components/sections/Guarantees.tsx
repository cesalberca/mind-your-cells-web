import { useTranslations } from 'next-intl'
import { CheckIcon, XIcon } from 'lucide-react'

export function Guarantees() {
  const t = useTranslations('guarantees')
  const doItems = t.raw('whatIDo.items') as string[]
  const dontItems = t.raw('whatIDontDo.items') as string[]

  return (
    <section className="py-24 px-6 bg-ceramic">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-stone mb-4 text-center">
          {t('heading')}
        </h2>
        <p className="text-center text-stone/50 mb-16 text-base max-w-xl mx-auto font-sans leading-relaxed">
          {t('subheading')}
        </p>

        <div className="grid sm:grid-cols-2 gap-px bg-crude-ceramic/40 mb-16">
          <div className="bg-ceramic p-8">
            <h3 className="text-stone font-semibold text-sm tracking-widest uppercase font-sans mb-6">{t('whatIDo.title')}</h3>
            <ul className="space-y-4">
              {doItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckIcon className="w-3.5 h-3.5 text-terracotta flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-stone/70 text-sm font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-ceramic p-8">
            <h3 className="text-stone/40 font-semibold text-sm tracking-widest uppercase font-sans mb-6">{t('whatIDontDo.title')}</h3>
            <ul className="space-y-4">
              {dontItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XIcon className="w-3.5 h-3.5 text-crude-ceramic flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-stone/35 text-sm font-sans">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-l-2 border-soft-terracotta pl-8 max-w-2xl mx-auto">
          <p className="text-stone/70 text-lg leading-relaxed italic font-light" style={{ fontFamily: 'var(--font-display, serif)' }}>{t('conclusion')}</p>
        </div>
      </div>
    </section>
  )
}
