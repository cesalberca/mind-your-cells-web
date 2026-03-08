import type { FC, PropsWithChildren } from 'react'
import { Button as BaseButton } from '@react-email/components'

export const EmailButton: FC<PropsWithChildren<{ link?: string }>> = ({ link, children }) => {
  return (
    <BaseButton
      href={link}
      style={{
        backgroundColor: '#682e2c',
        color: '#f5f0eb',
        padding: '12px 24px',
        fontSize: '11px',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        fontFamily: 'sans-serif',
        textDecoration: 'none',
        display: 'inline-block',
      }}
    >
      {children}
    </BaseButton>
  )
}
