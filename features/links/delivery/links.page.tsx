import { Mail, Instagram, Linkedin, Globe } from 'lucide-react'
import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import { Page } from '@/components/page'
import { ShareButton } from './share-button'

export async function LinksPage() {
  const t = await getTranslations('links')

  const LINKS = [
    { title: t('links.website'), href: 'https://www.mindyourcells.com', icon: Globe },
    { title: t('links.instagram'), href: 'https://www.instagram.com/mindyourcells/', icon: Instagram },
    { title: t('links.linkedin'), href: 'https://www.linkedin.com/in/adriana-blanco-duran/', icon: Linkedin },
    { title: t('links.email'), href: 'mailto:adriana@mindyourcells.com', icon: Mail },
  ]

  return (
    <Page>
      <div className="relative flex flex-col items-center px-6 pt-24 pb-16">
        {/* Share button */}
        <div className="fixed top-20 right-4 z-30">
          <ShareButton label={t('share')} />
        </div>

        {/* Profile */}
        <div className="w-24 h-24 rounded-full overflow-hidden mb-5 ring-2 ring-crude-ceramic/30">
          <Image
            src="/images/adriana.png"
            alt="Adriana Blanco Durán"
            width={96}
            height={96}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <h1 className="text-xl font-light text-stone mb-2">Adriana Blanco Durán</h1>

        <p className="text-stone/55 text-sm font-sans text-center leading-relaxed max-w-xs mb-10">
          {t('description')}
        </p>

        {/* Links */}
        <div className="w-full max-w-sm flex flex-col gap-3">
          {LINKS.map(({ title, href, icon: Icon }) => (
            <a
              key={href}
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
