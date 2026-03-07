import { type ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface RoundedCardProps {
  children: ReactNode
  className?: string
  id?: string
}

export function RoundedCard({ children, className, id }: RoundedCardProps) {
  return (
    <div className="px-4 sm:px-6" id={id}>
      <div className={cn('rounded-3xl overflow-hidden', className)}>
        {children}
      </div>
    </div>
  )
}
