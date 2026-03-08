import type { FC, PropsWithChildren } from 'react'
import { Link as BaseLink } from '@react-email/components'

export const EmailLink: FC<PropsWithChildren<{ href?: string }>> = ({ href, children }) => {
  return (
    <BaseLink href={href} style={{ color: '#682e2c', textDecoration: 'underline' }}>
      {children}
    </BaseLink>
  )
}
