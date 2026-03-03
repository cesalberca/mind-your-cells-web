'use client'

import { type FC, type PropsWithChildren } from 'react'
import NextLink from 'next/link'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

interface Props {
  href: string
  type?: 'default' | 'navigation' | 'invisible'
  className?: string
  onClick?: () => void
}

const linkVariants = cva(
  'no-underline inline box-decoration-clone shadow-[inset_0_-1px_0_0_currentColor] transition-shadow duration-300 hover:shadow-[inset_0_0_0_0_currentColor]',
  {
    variants: {
      type: {
        default: '',
        invisible: 'shadow-none hover:shadow-none',
        navigation: 'shadow-none hover:shadow-none',
      },
    },
    defaultVariants: {
      type: 'default',
    },
  },
)

export const Link: FC<PropsWithChildren<Props>> = ({ href, children, className, type, onClick }) => {
  const isExternal = /^http/.test(href)

  return (
    <NextLink
      href={href}
      {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
      className={cn(linkVariants({ type }), className)}
      onClick={onClick}
    >
      {children}
    </NextLink>
  )
}
