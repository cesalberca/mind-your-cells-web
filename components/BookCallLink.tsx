'use client'

import type React from 'react'

// TODO: Replace with actual booking URL (Calendly / Cal.com)
const BOOK_CALL_URL = '#book-call'

const sizes = {
  sm: 'text-[0.65rem] tracking-widest px-4 py-2',
  md: 'text-xs tracking-widest px-6 py-3',
  lg: 'text-xs tracking-widest px-8 py-3',
  xl: 'text-xs tracking-widest px-10 py-4',
} as const

const variants = {
  dark: 'border border-ceramic/70 text-ceramic hover:bg-ceramic/10 hover:border-ceramic',
  light: 'border border-stone/60 text-stone hover:bg-stone hover:text-cream',
  solid: 'bg-terracotta text-cream hover:bg-terracotta-light',
} as const

type BookCallLinkProps = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'target' | 'rel'> & {
  size?: keyof typeof sizes
  variant?: keyof typeof variants
}

export function BookCallLink({
  size = 'md',
  variant = 'dark',
  className,
  ...rest
}: BookCallLinkProps) {
  const classes = [
    'uppercase tracking-widest font-medium transition-all duration-200 inline-flex items-center gap-2',
    sizes[size],
    variants[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <a
      href={BOOK_CALL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={classes}
      {...rest}
    />
  )
}
