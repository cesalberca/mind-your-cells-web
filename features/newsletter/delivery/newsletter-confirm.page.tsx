'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import type { ConfirmResponse } from '@/app/api/newsletter/confirm/route'

export function NewsletterConfirmPage() {
  const searchParams = useSearchParams()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const token = searchParams.get('token')
    const email = searchParams.get('email')

    if (!token || !email) {
      setStatus('error')
      setMessage('Invalid confirmation link.')
      return
    }

    fetch('/api/newsletter/confirm', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, email }),
    })
      .then((res) => res.json() as Promise<ConfirmResponse>)
      .then((data) => {
        if (data.success) {
          setStatus('success')
          setMessage(data.alreadyConfirmed ? 'You are already subscribed.' : 'Subscription confirmed. Welcome!')
        } else {
          setStatus('error')
          setMessage(data.error ?? 'Something went wrong.')
        }
      })
      .catch(() => {
        setStatus('error')
        setMessage('Something went wrong. Please try again.')
      })
  }, [searchParams])

  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="max-w-sm w-full text-center space-y-6">
        <img src="/logo.svg" alt="Mind Your Cells" className="h-[14px] mx-auto opacity-60" />

        {status === 'loading' && (
          <p className="text-stone/50 text-sm font-sans">Confirming your subscription…</p>
        )}

        {status === 'success' && (
          <div className="space-y-3">
            <p className="text-stone text-sm font-sans">{message}</p>
            <a
              href="/"
              className="inline-block text-soft-terracotta text-[0.65rem] tracking-widest uppercase font-sans underline underline-offset-4 hover:text-stone transition-colors"
            >
              Go to Mind Your Cells
            </a>
          </div>
        )}

        {status === 'error' && (
          <div className="space-y-3">
            <p className="text-soft-terracotta text-sm font-sans">{message}</p>
            <a
              href="/"
              className="inline-block text-stone/50 text-[0.65rem] tracking-widest uppercase font-sans underline underline-offset-4 hover:text-stone transition-colors"
            >
              Go to Mind Your Cells
            </a>
          </div>
        )}
      </div>
    </main>
  )
}
