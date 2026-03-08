import { LegalPage } from '@/features/legal/delivery/legal.page'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  return <LegalPage locale={locale} />
}
