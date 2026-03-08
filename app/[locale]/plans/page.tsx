import { PlansPage } from '@/features/plans/delivery/plans.page'

type Props = {
  params: Promise<{ locale: string }>
}

export default async function Page({ params }: Props) {
  const { locale } = await params
  return <PlansPage locale={locale} />
}
