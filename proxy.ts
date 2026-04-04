import createMiddleware from 'next-intl/middleware'
import { routing } from './i18n/routing'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const CALENDAR_URL = 'https://calendar.app.google/yytTRx1Xr5C17CtY8'
const INFORMED_CONSENT_EN = 'https://mindyourcells.notion.site/32779f403f0880d9b633dc09bbb77fdc'
const INFORMED_CONSENT_ES = 'https://mindyourcells.notion.site/33379f403f0881748e65e02f6def1589'

const intlMiddleware = createMiddleware(routing)

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/chat') {
    return NextResponse.redirect(CALENDAR_URL)
  }

  if (pathname === '/new-patient') {
    return NextResponse.redirect('https://www.notion.so/mindyourcells/33779f403f0881158464d78da4364485?pvs=106')
  }

  if (pathname === '/nuevo-paciente') {
    return NextResponse.redirect('https://www.notion.so/mindyourcells/2c179f403f08810fa808c6d755171469?pvs=106')
  }

  if (pathname === '/informed-consent') {
    return NextResponse.redirect(INFORMED_CONSENT_EN)
  }

  if (pathname === '/consentimiento-informado') {
    return NextResponse.redirect(INFORMED_CONSENT_ES)
  }

  return intlMiddleware(request)
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
}
