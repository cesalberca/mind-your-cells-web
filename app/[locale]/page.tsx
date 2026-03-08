import { HomePage } from '@/features/home/delivery/home.page'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  return <HomePage locale={locale} />
}
