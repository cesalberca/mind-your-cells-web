'use client'

import type React from 'react'
import { trackGoal, type FathomGoal } from '@/lib/fathom-goals'

const DISCOVERY_URL = 'https://calendar.app.google/yytTRx1Xr5C17CtY8'
const CONSULTATION_URL = 'https://calendar.app.google/mRrTpyirUuadiLq49'

const sizes = {
  sm: 'text-[0.65rem] tracking-widest px-4 py-2',
  md: 'text-xs tracking-widest px-6 py-3',
  lg: 'text-xs tracking-widest px-8 py-3',
  xl: 'text-xs tracking-widest px-10 py-4',
} as const

const variants = {
  dark: 'border border-soft-terracotta/60 text-soft-terracotta hover:bg-soft-terracotta/10 hover:border-soft-terracotta hover:text-white',
  light: 'border border-soft-terracotta text-soft-terracotta hover:bg-soft-terracotta hover:text-white',
  solid: 'bg-terracotta text-cream hover:bg-terracotta-light',
  text: 'text-soft-terracotta underline underline-offset-4 hover:text-stone',
} as const

type BookCallLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'> & {
  size?: keyof typeof sizes
  variant?: keyof typeof variants
  goal?: FathomGoal
  type?: 'discovery' | 'consultation'
}

export function BookCallLink({
  size = 'md',
  variant = 'dark',
  goal,
  type = 'discovery',
  onClick,
  className,
  ...rest
}: BookCallLinkProps) {
  const href = type === 'consultation' ? CONSULTATION_URL : DISCOVERY_URL

  const classes = [
    'uppercase tracking-widest font-medium transition-all duration-200 inline-flex items-center gap-2',
    sizes[size],
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (goal) trackGoal(goal)
    onClick?.(e)
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      onClick={handleClick}
      {...rest}
    />
  )
}
