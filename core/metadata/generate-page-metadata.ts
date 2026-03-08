import type { Metadata } from 'next'
import { Locale } from '@/core/i18n/locale'
import { baseUrl } from '@/core/utils/base-url'

interface PageMetadataOptions {
  title: string
  description: string
  path?: string
  locale?: string
  image?: string
  type?: 'article' | 'website'
}

export function generatePageMetadata({
  title,
  description,
  path = '',
  locale = Locale.EN,
  image,
  type = 'website',
}: PageMetadataOptions): Metadata {
  // With localePrefix:'as-needed', EN has no prefix (/about-us), ES has prefix (/es/nosotros)
  const enUrl = `${baseUrl}${path}`
  const esUrl = `${baseUrl}/es${path}`
  const url = locale === Locale.EN ? enUrl : esUrl

  const openGraph: NonNullable<Metadata['openGraph']> = {
    title,
    description,
    type,
    url,
    siteName: 'Mind Your Cells',
    locale: locale === Locale.ES ? 'es_ES' : 'en_US',
    alternateLocale: locale === Locale.ES ? 'en_US' : 'es_ES',
    ...(image && {
      images: [{ url: image, alt: title }],
    }),
  }

  const twitter: Metadata['twitter'] = {
    card: 'summary_large_image',
    title,
    description,
    ...(image && { images: [image] }),
  }

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: url,
      languages: {
        en: enUrl,
        es: esUrl,
        'x-default': enUrl,
      },
    },
    openGraph,
    twitter,
    authors: [{ name: 'Adriana Blanco Durán' }],
  }
}
