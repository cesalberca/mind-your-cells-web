import { sanitizeJsonLd } from './sanitize-json-ld'

export function jsonLd(data: Record<string, unknown>) {
  return sanitizeJsonLd(data)
}
