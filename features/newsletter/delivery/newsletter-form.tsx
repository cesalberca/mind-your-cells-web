'use client'

import { type FormEvent, useState } from 'react'
import { useTranslations } from 'next-intl'

export function NewsletterForm() {
  const t = useTranslations('footer.newsletter')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('submitting')

    try {
      const res = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      if (!res.ok) throw new Error('Failed')

      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={t('placeholder')}
        required
        disabled={status === 'submitting' || status === 'success'}
        className="w-full bg-transparent border-b border-stone/25 pb-2 text-sm font-sans text-stone placeholder:text-stone/30 focus:outline-none focus:border-stone/50 transition-colors disabled:opacity-50"
      />

      {status === 'success' ? (
        <p className="text-stone/60 text-[0.65rem] tracking-widest uppercase font-sans">
          {t('successMessage')}
        </p>
      ) : (
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="text-stone/50 text-[0.65rem] tracking-widest uppercase font-sans hover:text-stone transition-colors disabled:opacity-50"
        >
          {status === 'submitting' ? t('submitting') : t('cta')}
        </button>
      )}

      {status === 'error' && (
        <p className="text-soft-terracotta text-xs font-sans">
          {t('errorMessage')}
        </p>
      )}
    </form>
  )
}
