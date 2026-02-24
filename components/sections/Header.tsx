'use client'

import { useState, useEffect, useRef } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { BookCallLink } from '@/components/BookCallLink'

export function Header() {
  const t = useTranslations('header')
  const locale = useLocale()
  const [hidden, setHidden] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)

  const otherLocale = locale === 'es' ? 'en' : 'es'

  const NAV_ITEMS = [
    { label: t('nav.about'), href: '#sobre-mi' },
    { label: t('nav.programs'), href: '#programas' },
    { label: t('nav.testimonials'), href: '#testimonios' },
    { label: t('nav.faq'), href: '#faq' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY
      setHidden(currentY > lastScrollY.current && currentY > 100)
      setScrolled(currentY > 50)
      lastScrollY.current = currentY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${scrolled ? 'bg-stone/95 backdrop-blur-md border-b border-ceramic/10' : 'bg-transparent'}`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a href={`/${locale}`} className="leading-tight">
          <span className="block text-ceramic font-semibold text-sm" style={{ fontFamily: 'var(--font-display, serif)' }}>
            {t('brand')}
          </span>
          <span className="block text-[0.6rem] text-ceramic/35 font-sans tracking-widest uppercase">
            {t('tagline')}
          </span>
        </a>

        <nav className="hidden sm:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-ceramic/55 hover:text-ceramic text-xs tracking-wider uppercase px-3 py-1.5 transition-colors font-sans"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Language selector */}
          <div className="flex items-center gap-1.5 text-[0.6rem] tracking-widest uppercase font-sans">
            <span className="text-ceramic font-medium">{locale.toUpperCase()}</span>
            <span className="text-ceramic/20">/</span>
            <a
              href={`/${otherLocale}`}
              className="text-ceramic/35 hover:text-ceramic/70 transition-colors"
            >
              {otherLocale.toUpperCase()}
            </a>
          </div>

          <BookCallLink size="sm" variant="dark">{t('cta')}</BookCallLink>
        </div>
      </div>
    </header>
  )
}
