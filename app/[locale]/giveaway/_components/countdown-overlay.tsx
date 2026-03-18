'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'

const COUNTDOWN_DURATION = 5

interface CountdownOverlayProps {
  startedAt: number
}

export function CountdownOverlay({ startedAt }: CountdownOverlayProps) {
  const t = useTranslations('giveaway.countdown')
  const [remaining, setRemaining] = useState(() => Math.max(0, COUNTDOWN_DURATION - (Date.now() - startedAt) / 1000))

  useEffect(() => {
    const interval = setInterval(() => {
      setRemaining(Math.max(0, COUNTDOWN_DURATION - (Date.now() - startedAt) / 1000))
    }, 50)
    return () => clearInterval(interval)
  }, [startedAt])

  const displayNum = Math.ceil(remaining)
  const r = 60
  const circumference = 2 * Math.PI * r
  const dashOffset = circumference * (1 - remaining / COUNTDOWN_DURATION)

  return (
    <div className="fixed inset-0 bg-stone/95 flex flex-col items-center justify-center z-50">
      <p className="text-xs uppercase tracking-widest text-soft-terracotta mb-12">{t('about')}</p>
      <div className="relative flex items-center justify-center">
        <svg width="160" height="160" className="-rotate-90" aria-hidden="true">
          <circle cx="80" cy="80" r={r} strokeWidth="3" className="stroke-crude-ceramic/20 fill-none" />
          <circle
            cx="80"
            cy="80"
            r={r}
            strokeWidth="3"
            className="fill-none stroke-terracotta"
            strokeDasharray={circumference}
            strokeDashoffset={dashOffset}
            style={{ transition: 'stroke-dashoffset 0.05s linear' }}
          />
        </svg>
        <span
          key={displayNum}
          className="absolute text-7xl font-light text-cream animate-winner-reveal"
          style={{ animationDuration: '0.3s' }}
        >
          {displayNum}
        </span>
      </div>
    </div>
  )
}
