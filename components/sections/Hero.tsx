import { useTranslations } from 'next-intl'
import { BookCallLink } from '@/components/BookCallLink'
import { SocialLinks } from '@/components/SocialLinks'

export function Hero() {
  const t = useTranslations('hero')
  const tHeader = useTranslations('header')

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-20 bg-stone">
      <div className="relative z-10 flex flex-col items-center gap-10 max-w-4xl mx-auto w-full text-center">
        <span className="text-[0.6rem] font-sans tracking-widest uppercase text-ceramic/40 border border-ceramic/15 px-5 py-2">
          {tHeader('tagline')}
        </span>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-light leading-[1.05] tracking-tight text-ceramic">
          <span className="block">{t('headline')}</span>
          <span className="block italic text-soft-terracotta">{t('headlineAccent')}</span>
        </h1>

        <p className="text-base sm:text-lg text-ceramic/55 leading-relaxed max-w-xl font-sans font-light">
          {t('subheadline')}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mt-2">
          <BookCallLink size="xl" variant="dark" goal="bookCallHero">
            {t('cta')}
          </BookCallLink>
        </div>

        <div className="flex flex-col items-center gap-1 mt-2">
          <p className="text-ceramic/60 font-sans text-sm font-medium">{t('credentialLabel')}</p>
          <p className="text-ceramic/30 text-xs font-sans tracking-wide">{t('credentials')}</p>
        </div>

        <SocialLinks className="mt-2" variant="dark" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-stone to-transparent pointer-events-none" />
    </section>
  )
}
