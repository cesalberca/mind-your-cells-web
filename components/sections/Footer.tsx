import { useTranslations } from 'next-intl'
import { SocialLinks } from '@/components/SocialLinks'

export function Footer() {
  const t = useTranslations('footer')

  return (
    <footer className="py-16 px-6 border-t border-ceramic/8 bg-stone flex justify-center">
      <div className="max-w-4xl mx-auto w-full space-y-8 flex flex-col items-center">
        <div className="text-center">
          <p className="text-ceramic font-semibold text-lg" style={{ fontFamily: 'var(--font-display, serif)' }}>{t('brand')}</p>
          <p className="text-ceramic/30 text-xs font-sans tracking-widest uppercase mt-1">{t('tagline')}</p>
        </div>

        <div className="text-center space-y-1">
          <p className="text-ceramic/50 text-sm font-sans font-medium">{t('practitioner')}</p>
          <p className="text-ceramic/25 text-xs font-sans">{t('credential')}</p>
        </div>

        <SocialLinks variant="dark" />

        <p className="text-ceramic/20 text-xs max-w-md mx-auto text-center leading-relaxed font-sans">
          {t('legal')}
        </p>

        <div className="border-t border-ceramic/8 w-full pt-6 text-center">
          <p className="text-ceramic/15 text-xs font-sans">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  )
}
