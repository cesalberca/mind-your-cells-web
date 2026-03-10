import { Mail, Instagram, Linkedin, Globe } from 'lucide-react'
import { Page } from '@/components/page'

const LINKS = [
  {
    title: 'mindyourcells.com',
    href: 'https://www.mindyourcells.com',
    icon: Globe,
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/mindyourcells/',
    icon: Instagram,
  },
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/adriana-blanco-duran/',
    icon: Linkedin,
  },
  {
    title: 'adriana@mindyourcells.com',
    href: 'mailto:adriana@mindyourcells.com',
    icon: Mail,
  },
]

export function LinksPage() {
  return (
    <Page>
      <div className="flex flex-col items-center justify-center px-6 py-16 pt-28">
        <div className="w-full max-w-sm flex flex-col gap-3">
          {LINKS.map(({ title, href, icon: Icon }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith('mailto:') ? undefined : '_blank'}
              rel={href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
              className="flex items-center gap-4 w-full bg-white rounded-2xl px-6 py-4 text-stone text-sm font-sans hover:bg-ceramic transition-colors shadow-sm"
            >
              <Icon size={16} className="text-soft-terracotta flex-shrink-0" />
              <span>{title}</span>
            </a>
          ))}
        </div>
      </div>
    </Page>
  )
}
