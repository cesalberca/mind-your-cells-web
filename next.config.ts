import createNextIntlPlugin from 'next-intl/plugin'
import type { NextConfig } from 'next'

const withNextIntl = createNextIntlPlugin('./i18n/request.ts')

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  async redirects() {
    return [
      {
        source: '/chat',
        destination: 'https://calendar.app.google/yytTRx1Xr5C17CtY8',
        permanent: true,
      },
      {
        source: '/detailed-medical-history',
        destination: 'https://mindyourcells.notion.site/33779f403f0881158464d78da4364485',
        permanent: true,
      },
      {
        source: '/historia-clinica-detallada',
        destination: 'https://mindyourcells.notion.site/2c179f403f08810fa808c6d755171469',
        permanent: true,
      },
      {
        source: '/informed-consent',
        destination: 'https://mindyourcells.notion.site/32779f403f0880d9b633dc09bbb77fdc',
        permanent: true,
      },
      {
        source: '/consentimiento-informado',
        destination: 'https://mindyourcells.notion.site/33379f403f0881748e65e02f6def1589',
        permanent: true,
      },
      {
        source: '/formulario-de-seguimiento',
        destination: 'https://mindyourcells.notion.site/34a79f403f0881a4a450ce2fadd34487',
        permanent: true,
      },
      {
        source: '/follow-up-form',
        destination: 'https://mindyourcells.notion.site/34a79f403f0881c7bef0da5d3636d596',
        permanent: true,
      },
    ]
  },
}

export default withNextIntl(nextConfig)
