import type { MetadataRoute } from 'next'

const BASE_URL = 'https://www.mindyourcells.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ['', '/about-us', '/plans', '/privacy-policy', '/legal-notice', '/links']

  const entries: MetadataRoute.Sitemap = []

  for (const page of pages) {
    entries.push({
      url: `${BASE_URL}${page}`,
      alternates: {
        languages: {
          es: `${BASE_URL}/es${page}`,
          en: `${BASE_URL}${page}`,
        },
      },
    })
  }

  return entries
}
