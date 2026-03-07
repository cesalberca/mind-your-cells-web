'use client'

import { useState } from 'react'
import { useTranslations, useLocale } from 'next-intl'

export function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()
  const [email, setEmail] = useState('')

  const planesHref = locale === 'es' ? `/${locale}/planes` : `/${locale}/plans`

  return (
    <footer className="pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid md:grid-cols-3 gap-12 pb-12">
          {/* Column 1: Quote + nav + legal */}
          <div className="space-y-8">
            <p className="text-stone/50 text-sm font-sans font-light leading-relaxed max-w-xs">{t('quote')}</p>

            <nav className="space-y-2">
              <a
                href={`/${locale}`}
                className="block text-stone/60 text-sm font-sans hover:text-stone transition-colors"
              >
                {t('nav.home')}
              </a>
              <a href="#" className="block text-stone/60 text-sm font-sans hover:text-stone transition-colors">
                {t('nav.nosotros')}
              </a>
              <a href="#" className="block text-stone/60 text-sm font-sans hover:text-stone transition-colors">
                {t('nav.contacto')}
              </a>
              <a href={planesHref} className="block text-stone/60 text-sm font-sans hover:text-stone transition-colors">
                {t('nav.planes')}
              </a>
            </nav>

            <nav className="space-y-2">
              <a href="#" className="block text-stone/40 text-xs font-sans hover:text-stone/60 transition-colors">
                {t('legal.aviso')}
              </a>
              <a href="#" className="block text-stone/40 text-xs font-sans hover:text-stone/60 transition-colors">
                {t('legal.privacidad')}
              </a>
              <a href="#" className="block text-stone/40 text-xs font-sans hover:text-stone/60 transition-colors">
                {t('legal.accesibilidad')}
              </a>
              <a href="#" className="block text-stone/40 text-xs font-sans hover:text-stone/60 transition-colors">
                {t('legal.cookies')}
              </a>
            </nav>
          </div>

          {/* Column 2: Newsletter */}
          <div className="space-y-6">
            <p className="text-stone/55 text-sm font-sans font-light leading-relaxed">{t('newsletter.heading')}</p>

            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('newsletter.placeholder')}
                className="w-full bg-transparent border-b border-stone/25 pb-2 text-sm font-sans text-stone placeholder:text-stone/30 focus:outline-none focus:border-stone/50 transition-colors"
              />
              <button
                type="button"
                className="text-stone/50 text-[0.65rem] tracking-widest uppercase font-sans hover:text-stone transition-colors"
              >
                {t('newsletter.cta')}
              </button>
            </div>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6 text-right">
            <div className="space-y-1">
              <p className="text-stone/70 text-sm font-sans">{t('contact.name1')}</p>
              <p className="text-stone/70 text-sm font-sans">{t('contact.name2')}</p>
              <p className="text-stone/45 text-sm font-sans">{t('contact.email')}</p>
            </div>

            <div className="space-y-1">
              <p className="text-stone/45 text-sm font-sans">{t('contact.phone')}</p>
              <p className="text-stone/45 text-sm font-sans">{t('contact.location')}</p>
            </div>
          </div>
        </div>

        {/* Bottom: logo + tagline centered */}
        <div className="border-t border-stone/10 pt-8 text-center space-y-2">
          <img src="/logo.svg" alt="Mind Your Cells" className="h-[14px] mx-auto opacity-40" />
          <p className="text-stone/30 text-[0.6rem] tracking-widest uppercase font-sans">{t('tagline')}</p>
        </div>
      </div>
    </footer>
  )
}
