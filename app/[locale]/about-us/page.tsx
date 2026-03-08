import { AboutPage } from '@/features/about/delivery/about.page'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  return <AboutPage locale={locale} />
}
