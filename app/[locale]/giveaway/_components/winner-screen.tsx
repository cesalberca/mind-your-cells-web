'use client'

import { useEffect, type ReactNode } from 'react'
import { useTranslations } from 'next-intl'
import confetti from 'canvas-confetti'
import type { Participant } from '@/party/types'

const CONFETTI_COLORS = ['#682e2c', '#a67d7b', '#dedbd5', '#f5f0eb', '#b1aa9f']

interface WinnerScreenProps {
  winner: Participant
  footer: ReactNode
}

export function WinnerScreen({ winner, footer }: WinnerScreenProps) {
  const t = useTranslations('giveaway.winner')

  useEffect(() => {
    const end = Date.now() + 4000
    const burst = () => {
      confetti({ particleCount: 4, angle: 60, spread: 55, origin: { x: 0 }, colors: CONFETTI_COLORS })
      confetti({ particleCount: 4, angle: 120, spread: 55, origin: { x: 1 }, colors: CONFETTI_COLORS })
      if (Date.now() < end) requestAnimationFrame(burst)
    }
    requestAnimationFrame(burst)
  }, [])

  return (
    <main className="min-h-screen bg-stone flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      <p className="text-xs uppercase tracking-widest text-soft-terracotta mb-8 animate-pulse">{t('label')}</p>
      <h2
        className="font-display font-light text-cream leading-none mb-16 animate-winner-reveal"
        style={{ fontSize: 'clamp(5rem, 18vw, 16rem)' }}
      >
        {winner.name}
      </h2>
      {footer}
    </main>
  )
}
