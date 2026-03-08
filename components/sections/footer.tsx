'use client'

import { useTranslations, useLocale } from 'next-intl'
import { NewsletterForm } from '@/features/newsletter/delivery/newsletter-form'

export function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()

  const isEs = locale === 'es'
  const homeHref = isEs ? '/es' : '/'
  const aboutHref = isEs ? '/es/nosotros' : '/about-us'
  const plansHref = isEs ? '/es/planes' : '/plans'
  const privacyHref = isEs ? '/es/privacidad' : '/privacy-policy'
  const legalHref = isEs ? '/es/aviso-legal' : '/legal-notice'
  const callHref = isEs ? '/es/reservar' : '/call'

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
                href={homeHref}
                className="block text-stone/60 text-sm font-sans hover:text-stone transition-colors"
              >
                {t('nav.home')}
              </a>
              <a href={aboutHref} className="block text-stone/60 text-sm font-sans hover:text-stone transition-colors">
                {t('nav.about')}
              </a>
              <a href={callHref} className="block text-stone/60 text-sm font-sans hover:text-stone transition-colors">
                {t('nav.contact')}
              </a>
              <a href={plansHref} className="block text-stone/60 text-sm font-sans hover:text-stone transition-colors">
                {t('nav.plans')}
              </a>
            </nav>

            <nav className="space-y-2">
              <a href={legalHref} className="block text-stone/40 text-xs font-sans hover:text-stone/60 transition-colors">
                {t('legal.notice')}
              </a>
              <a href={privacyHref} className="block text-stone/40 text-xs font-sans hover:text-stone/60 transition-colors">
                {t('legal.privacy')}
              </a>
            </nav>
          </div>

          {/* Column 2: Newsletter */}
          <div className="space-y-6">
            <p className="text-stone/55 text-sm font-sans font-light leading-relaxed">{t('newsletter.heading')}</p>
            <NewsletterForm />
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-6 text-right">
            <div className="space-y-1">
              <p className="text-stone/70 text-sm font-sans">{t('contact.name1')}</p>
              <a
                href={`mailto:${t('contact.email')}?subject=${encodeURIComponent(t('contact.emailSubject'))}`}
                className="text-stone/45 text-sm font-sans hover:text-stone/70 transition-colors"
              >
                {t('contact.email')}
              </a>
            </div>

            <div className="space-y-1">
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
