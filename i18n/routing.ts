import { defineRouting } from 'next-intl/routing'
import { createNavigation } from 'next-intl/navigation'
import { Locale } from '@/core/i18n/locale'
import { locales } from '@/core/i18n/locales'

export const routing = defineRouting({
  locales,
  defaultLocale: Locale.EN,
  // Default locale (EN) is served without a prefix at `/`, `/about-us`, etc.
  // Spanish uses its prefix: `/es/`, `/es/nosotros`, etc.
  localePrefix: 'as-needed',
  localeDetection: false,
  pathnames: {
    '/about-us': {
      es: '/nosotros',
    },
    '/plans': {
      es: '/planes',
    },
    '/privacy-policy': {
      es: '/privacidad',
    },
    '/legal-notice': {
      es: '/aviso-legal',
    },
    '/call': {
      es: '/reservar',
    },
  },
})

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing)
