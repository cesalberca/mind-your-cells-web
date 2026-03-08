import { Link } from '@/components/link'
import { cn } from '@/lib/utils'

type BreadcrumbItem = {
  label: string
  href?: string
}

interface Props {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: Props) {
  return (
    <nav
      className={cn(
        'text-[0.6rem] tracking-widest uppercase font-sans text-stone/35',
        className,
      )}
    >
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span className="mx-2">›</span>}
          {item.href ? (
            <Link href={item.href} type="invisible" className="hover:text-stone/60 transition-colors">
              {item.label}
            </Link>
          ) : (
            <span>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  )
}
