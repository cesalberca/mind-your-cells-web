import { useTranslations } from 'next-intl'
import { BookCallLink } from '@/components/book-call-link'
import { RoundedCard } from '@/components/rounded-card'

export function BookCallSection() {
  const t = useTranslations('bookCall')

  return (
    <section id="book-call" className="py-8 bg-cream">
      <RoundedCard className="relative min-h-[70vh] flex items-center justify-center">
        {/* Parallax background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/home-3.png')" }}
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-stone/75" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-3xl mx-auto px-6 py-28">
          <p className="text-ceramic/30 text-[0.6rem] tracking-widest uppercase font-sans mb-10">
            Mind Your Cells
          </p>

          <blockquote className="text-3xl sm:text-4xl md:text-5xl font-light text-ceramic leading-relaxed mb-14 font-display">
            &ldquo;{t('quote')}&rdquo;
          </blockquote>

          <BookCallLink size="xl" variant="dark" goal="bookCallSection">
            {t('cta')}
          </BookCallLink>

          <p className="text-ceramic/25 text-xs font-sans mt-8 tracking-widest uppercase">
            {t('note')}
          </p>
        </div>
      </RoundedCard>
    </section>
  )
}
