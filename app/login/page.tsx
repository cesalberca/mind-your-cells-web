import { LoginPage } from '@/features/auth/delivery/login.page'

type Props = {
  searchParams: Promise<{ error?: string }>
}

export default async function Page({ searchParams }: Props) {
  const { error } = await searchParams
  return <LoginPage error={error} />
}
