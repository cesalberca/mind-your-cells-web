import { useTranslations } from 'next-intl'
import Link from 'next/link'
import { RoundedCard } from '@/components/rounded-card'
import Image from 'next/image'

export function BrandManifesto() {
  const t = useTranslations('brandManifesto')

  return (
    <section className="py-8">
      <RoundedCard className="bg-stone py-32 px-8">
        <div className="max-w-lg mx-auto text-center flex flex-col items-center">
          <Image
            width={200}
            height={200}
            src="/images/MYC52SVG.svg"
            alt="Mind Your Cells"
            className="w-48 mx-auto mb-6"
          />

          <p className="text-white text-[1.2rem] tracking-[0.25em] uppercase mb-8">{t('tagline')}</p>

          <p className="text-ceramic/80 text-base font-light leading-relaxed">{t('body')}</p>

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
