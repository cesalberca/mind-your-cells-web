import { useTranslations } from 'next-intl'

export function BrandManifesto() {
  const t = useTranslations('brandManifesto')

  return (
    <section className="py-28 px-6 bg-stone relative overflow-hidden">
      {/* Pill decoration */}
      <div className="absolute right-12 top-1/2 -translate-y-1/2 opacity-10 pointer-events-none select-none hidden md:block">
        <img src="/pill.svg" alt="" aria-hidden="true" className="h-64" />
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <img
          src="/logo.svg"
          alt="Mind Your Cells"
          className="h-5 mx-auto mb-6 invert opacity-50"
        />

        <p className="text-ceramic/25 text-[0.6rem] tracking-widest uppercase font-sans mb-14">
          {t('tagline')}
        </p>

        <p className="text-ceramic/70 text-xl sm:text-2xl font-light leading-relaxed font-sans max-w-2xl mx-auto">
          {t('body')}
        </p>

        <p className="text-ceramic/30 text-xs font-sans mt-12 tracking-wide">
          {t('credentials')}
        </p>
      </div>
    </section>
  )
}
