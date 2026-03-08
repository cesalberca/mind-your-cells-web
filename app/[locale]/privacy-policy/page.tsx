import { PrivacyPage } from '@/features/privacy/delivery/privacy.page'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  return <PrivacyPage locale={locale} />
}
