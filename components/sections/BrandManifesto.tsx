import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { RoundedCard } from '@/components/RoundedCard'

export function BrandManifesto() {
  const t = useTranslations('brandManifesto')

  return (
    <section className="py-8">
      <RoundedCard className="bg-stone py-32 px-8">
        <div className="max-w-lg mx-auto text-center flex flex-col items-center">
          <img src="/pill.svg" alt="Mind Your Cells" className="h-24 mx-auto mb-12 invert opacity-60" />

          <p className="text-ceramic/60 text-[0.6rem] tracking-[0.25em] uppercase font-sans mb-8">{t('tagline')}</p>

          <p className="text-ceramic/80 text-base font-light leading-relaxed font-sans">{t('body')}</p>

          <Link
            href="#programas"
            className="mt-16 text-soft-terracotta text-[0.6rem] tracking-[0.25em] uppercase font-sans underline underline-offset-4 hover:text-white transition-colors"
          >
            {t('cta')}
          </Link>
        </div>
      </RoundedCard>
    </section>
  )
}
