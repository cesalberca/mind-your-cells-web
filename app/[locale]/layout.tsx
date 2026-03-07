import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import { FathomAnalytics } from '@/components/Fathom'
import '../globals.css'
import type { ReactNode } from 'react'

const mellow = localFont({
  src: [
    { path: '../fonts/mellow/MADEMellowPERSONALUSE-Light.otf', weight: '300', style: 'normal' },
    { path: '../fonts/mellow/MADEMellowPERSONALUSE-Regular.otf', weight: '400', style: 'normal' },
    { path: '../fonts/mellow/MADEMellowPERSONALUSE-Medium.otf', weight: '500', style: 'normal' },
    { path: '../fonts/mellow/MADEMellowPERSONALUSE-SemiBold.otf', weight: '600', style: 'normal' },
    { path: '../fonts/mellow/MADEMellowPERSONALUSE-Bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-heading',
})

const satoshi = localFont({
  src: [
    { path: '../fonts/satoshi/Satoshi-Variable.woff2', weight: '300 900', style: 'normal' },
    { path: '../fonts/satoshi/Satoshi-VariableItalic.woff2', weight: '300 900', style: 'italic' },
  ],
  variable: '--font-body',
})

const playfair = localFont({
  src: [{ path: '../fonts/playfair/PlayfairDisplay-Italic-VariableFont_wght.ttf', weight: '400 900', style: 'italic' }],
  variable: '--font-display',
})

type Props = {
  children: ReactNode
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'header' })
  const isEs = locale === 'es'

  return {
    metadataBase: new URL('https://www.mindyourcells.es/'),
    title: isEs
      ? 'Mind Your Cells | Optimización Celular — Adriana Blanco Durán'
      : 'Mind Your Cells | Cellular Optimization — Adriana Blanco Durán',
    description: isEs
      ? 'Acompañamiento integrativo personalizado que convierte tu protocolo de salud en cambios reales y sostenibles. Fisioterapeuta, PNIE, Osteopatía y Coaching. Adriana Blanco Durán.'
      : 'Personalized integrative support that turns your health protocol into real, sustainable changes. Physiotherapist, PNEI, Osteopathy and Coaching. Adriana Blanco Durán.',
    keywords: isEs
      ? [
          'Mind Your Cells',
          'Adriana Blanco Durán',
          'optimización celular',
          'salud integrativa',
          'PNIE',
          'fisioterapeuta',
          'osteopatía',
          'crononutrición',
          'inflamación crónica',
          'bienestar celular',
          'coaching salud',
          'hábitos saludables',
        ]
      : [
          'Mind Your Cells',
          'Adriana Blanco Durán',
          'cellular optimization',
          'integrative health',
          'PNEI',
          'physiotherapist',
          'osteopathy',
          'chrononutrition',
          'chronic inflammation',
          'cellular wellbeing',
          'health coaching',
        ],
    authors: [{ name: 'Adriana Blanco Durán' }],
    creator: 'Adriana Blanco Durán',
    openGraph: {
      title: isEs ? 'Mind Your Cells | Optimización Celular' : 'Mind Your Cells | Cellular Optimization',
      description: isEs
        ? 'Acompañamiento integrativo personalizado. Fisioterapeuta, PNIE, Osteopatía. Adriana Blanco Durán.'
        : 'Personalized integrative support. Physiotherapist, PNEI, Osteopathy. Adriana Blanco Durán.',
      url: `https://www.mindyourcells.es/${locale}`,
      siteName: t('brand'),
      locale: isEs ? 'es_ES' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mind Your Cells | Adriana Blanco Durán',
      description: isEs
        ? 'Optimización Celular · Salud Integrativa · PNIE'
        : 'Cellular Optimization · Integrative Health · PNEI',
    },
    robots: {
      index: false,
      follow: false,
    },
    alternates: {
      canonical: `https://www.mindyourcells.es/${locale}`,
      languages: {
        es: 'https://www.mindyourcells.es/es',
        en: 'https://www.mindyourcells.es/en',
      },
    },
  }
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  const messages = await getMessages()

  return (
    <html lang={locale}>
      <head>
        <link rel="canonical" href={`https://www.mindyourcells.es/${locale}`} />
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD structured data
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Adriana Blanco Durán',
              jobTitle: 'Fisioterapeuta, Especialista en Optimización Celular',
              url: 'https://www.mindyourcells.es/',
              sameAs: [
                'https://www.linkedin.com/in/adriana-blanco-duran/',
                'https://www.instagram.com/mindyourcells',
                'https://www.instagram.com/ablancoduran',
              ],
              offers: {
                '@type': 'Service',
                name: 'Mind Your Cells — Optimización Celular',
                provider: {
                  '@type': 'Person',
                  name: 'Adriana Blanco Durán',
                },
                description: 'Acompañamiento integrativo personalizado para optimización celular y salud integrativa.',
              },
            }),
          }}
        />
      </head>
      <body className={`${mellow.variable} ${satoshi.variable} ${playfair.variable} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          <FathomAnalytics />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
