import { useTranslations } from 'next-intl'

function BannerItem({ item }: { item: string }) {
  return (
    <span className="font-sans text-[0.65rem] tracking-widest uppercase flex items-center gap-8">
      <span>{item}</span>
      <span className="text-cream/30" aria-hidden="true">{'·'}</span>
    </span>
  )
}

export function Banner() {
  const t = useTranslations('banner')
  const items = t.raw('items') as string[]
  const doubled = [...items, ...items]

  return (
    <div className="bg-soft-terracotta text-cream overflow-hidden whitespace-nowrap py-3 relative">
      <div className="animate-scroll-banner inline-flex gap-8">
        {doubled.map((item, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static decorative banner with duplicate items
          <BannerItem key={i} item={item} />
        ))}
        {doubled.map((item, i) => (
          // biome-ignore lint/suspicious/noArrayIndexKey: static decorative banner with duplicate items
          <BannerItem key={`dup-${i}`} item={item} />
        ))}
      </div>
    </div>
  )
}
