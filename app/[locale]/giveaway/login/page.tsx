'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { Button } from '@/components/ui/button'

export default function GiveawayLoginPage() {
  const t = useTranslations('giveaway.login')
  const locale = useLocale()
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (password === 'myc2026') {
      sessionStorage.setItem('giveaway_admin', 'true')
      const prefix = locale === 'en' ? '' : `/${locale}`
      router.push(`${prefix}/giveaway/admin`)
    } else {
      setError(true)
    }
  }

  return (
    <main className="min-h-screen bg-stone flex items-center justify-center px-6">
      <div className="w-full max-w-sm">
        <div className="mb-10 text-center">
          <Image
            src="/logo.svg"
            alt="Mind Your Cells"
            width={273}
            height={23}
            className="mx-auto mb-8 invert opacity-50"
          />
          <h1 className="text-2xl font-light text-ceramic">{t('title')}</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
              setError(false)
            }}
            placeholder={t('passwordPlaceholder')}
            className="w-full px-4 py-3 rounded-lg bg-stone-light text-ceramic placeholder:text-crude-ceramic border border-crude-ceramic/20 focus:outline-none focus:ring-2 focus:ring-terracotta/40"
          />
          {error && <p className="text-sm text-soft-terracotta">{t('error')}</p>}
          <Button type="submit" className="w-full">
            {t('submit')}
          </Button>
        </form>
      </div>
    </main>
  )
}
