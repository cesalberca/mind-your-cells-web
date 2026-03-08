import { getTranslations } from 'next-intl/server'
import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'
import { Breadcrumb } from '@/components/breadcrumb'

type Section = { title: string; content?: string; intro?: string; items?: string[] }

interface Props {
  locale: string
}

export async function PrivacyPage({ locale }: Props) {
  const t = await getTranslations('privacy')
  const sections = t.raw('sections') as Section[]

  return (
    <main className="min-h-screen bg-cream overflow-x-hidden">
      <Header />

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb
            items={[
              { label: 'Home', href: locale === 'es' ? '/es' : '/' },
              { label: t('breadcrumb') },
            ]}
            className="mb-10"
          />

          <h1 className="text-4xl sm:text-5xl font-light text-stone mb-12 leading-tight">
            {t('heading')}
          </h1>

          <div className="prose-stone space-y-8 text-stone/70 font-sans text-sm leading-relaxed">
            {sections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-stone">{section.title}</h2>
                {section.content && <p>{section.content}</p>}
                {section.intro && <p>{section.intro}</p>}
                {section.items && (
                  <ul className="list-disc list-inside space-y-1 pl-2">
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
