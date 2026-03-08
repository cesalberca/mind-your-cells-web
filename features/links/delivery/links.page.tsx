import Image from 'next/image'
import { Mail, Instagram, Linkedin } from 'lucide-react'

const LINKS = [
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
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-sm flex flex-col items-center gap-10">
        {/* Logo */}
        <Image src="/logo.svg" alt="Mind Your Cells" width={160} height={14} />

        {/* Links */}
        <div className="w-full flex flex-col gap-3">
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

        <p className="text-stone/25 text-[0.6rem] tracking-widest uppercase font-sans">MYC</p>
      </div>
    </main>
  )
}
