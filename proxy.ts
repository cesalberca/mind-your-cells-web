import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const SITE_PASSWORD = process.env.SITE_PASSWORD ?? 'myc2026'
const CALENDAR_URL = 'https://calendar.app.google/yytTRx1Xr5C17CtY8'

const intlMiddleware = createMiddleware(routing)

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  // /chat → direct redirect to booking calendar, no auth required
  if (pathname === '/chat') {
    return NextResponse.redirect(CALENDAR_URL)
  }

  // Allow login page through without auth check
  if (pathname.startsWith('/login')) {
    return NextResponse.next()
  }

  // Check auth cookie
  const authCookie = request.cookies.get('site-auth')
  if (!authCookie || authCookie.value !== SITE_PASSWORD) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Authenticated — hand off to next-intl
  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
