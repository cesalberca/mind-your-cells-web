import { useTranslations } from 'next-intl'
import { SocialLinks } from '@/components/SocialLinks'

export function Footer() {
  const t = useTranslations('footer')

  const navLinks = [
    { label: t('nav.individual'), href: '#consulta' },
    { label: t('nav.programs'), href: '#programas' },
    { label: t('nav.faq'), href: '#faq' },
  ]

  return (
    <footer className="py-16 px-6 bg-stone">
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid sm:grid-cols-3 gap-12 pb-12 border-b border-ceramic/8">
          {/* Brand column */}
          <div className="space-y-5">
            <img src="/logo.svg" alt="Mind Your Cells" className="h-[14px] invert opacity-50" />
            <p className="text-ceramic/25 text-[0.6rem] tracking-widest uppercase font-sans">
              {t('tagline')}
            </p>
            <p className="text-ceramic/20 text-xs font-sans leading-relaxed">
              {t('legal')}
            </p>
          </div>

          {/* Nav column */}
          <div className="space-y-5">
            <p className="text-ceramic/30 text-[0.6rem] tracking-widest uppercase font-sans">
              {t('nav.title')}
            </p>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-ceramic/40 hover:text-ceramic/70 text-sm font-sans transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div className="space-y-5">
            <p className="text-ceramic/30 text-[0.6rem] tracking-widest uppercase font-sans">
              {t('contact.title')}
            </p>
            <div className="space-y-1">
              <p className="text-ceramic/50 text-sm font-sans font-medium">{t('practitioner')}</p>
              <p className="text-ceramic/25 text-xs font-sans">{t('credential')}</p>
            </div>
            <SocialLinks variant="dark" />
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 text-center">
          <p className="text-ceramic/15 text-xs font-sans">
            {t('copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  )
}
