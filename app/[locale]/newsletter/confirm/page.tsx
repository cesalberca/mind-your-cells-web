import { Suspense } from 'react'
import { NewsletterConfirmPage } from '@/features/newsletter/delivery/newsletter-confirm.page'

export default function Page() {
  return (
    <Suspense>
      <NewsletterConfirmPage />
    </Suspense>
  )
}
