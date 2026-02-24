import { useTranslations } from 'next-intl'
import { BookCallLink } from '@/components/BookCallLink'

export function BookCallSection() {
  const t = useTranslations('bookCall')

  return (
    <section id="book-call" className="relative min-h-[50vh] flex items-center justify-center overflow-hidden px-6 py-28 bg-stone">
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-ceramic mb-6">{t('heading')}</h2>
        <p className="text-ceramic/50 text-base sm:text-lg mb-12 leading-relaxed font-sans font-light max-w-lg mx-auto">
          {t('subheading')}
        </p>
        <BookCallLink size="xl" variant="dark" goal="bookCallSection">
          {t('cta')}
        </BookCallLink>
        <p className="text-ceramic/25 text-xs font-sans mt-8 tracking-widest uppercase">{t('note')}</p>
      </div>
    </section>
  )
}
