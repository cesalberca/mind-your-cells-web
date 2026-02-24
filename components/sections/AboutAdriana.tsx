import { useTranslations } from 'next-intl'

type ApproachItem = {
  title: string
  description: string
}

export function AboutAdriana() {
  const t = useTranslations('about')
  const credentials = t.raw('credentials') as string[]
  const approachItems = t.raw('approachItems') as ApproachItem[]

  return (
    <section id="sobre-mi" className="py-24 px-6 bg-stone">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-ceramic mb-12 text-center">
          {t('heading')}
        </h2>

        <p className="text-center text-soft-terracotta text-lg italic font-light mb-16 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'var(--font-display, serif)' }}>
          {t('manifesto')}
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div className="space-y-5">
            <p className="text-base text-ceramic/70 leading-relaxed font-sans font-light">{t('bio1')}</p>
            <p className="text-base text-ceramic/70 leading-relaxed font-sans font-light">{t('bio2')}</p>
          </div>

          <div className="border border-ceramic/10 p-6 space-y-3">
            {credentials.map((credential) => (
              <div key={credential} className="flex items-center gap-4">
                <span className="w-1 h-1 rounded-full bg-soft-terracotta flex-shrink-0" aria-hidden="true" />
                <span className="text-ceramic/60 text-sm font-sans">{credential}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-light text-ceramic mb-10 text-center tracking-wide">{t('approachTitle')}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ceramic/10">
            {approachItems.map((item) => (
              <div
                key={item.title}
                className="p-8 bg-stone-light hover:bg-stone-light/80 transition-colors text-center"
              >
                <h4 className="text-ceramic/80 font-semibold mb-3 text-sm tracking-wide uppercase font-sans">{item.title}</h4>
                <p className="text-ceramic/45 text-sm leading-relaxed font-sans font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
