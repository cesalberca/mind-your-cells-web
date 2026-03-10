import { getTranslations } from 'next-intl/server'
import { Page } from '@/components/page'
import { Breadcrumb } from '@/components/breadcrumb'

type Section = { title: string; content: string }

interface Props {
  locale: string
}

export async function LegalPage({ locale }: Props) {
  const t = await getTranslations('legal')
  const sections = t.raw('sections') as Section[]

  return (
    <Page>
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

          <div className="space-y-8 text-stone/70 font-sans text-sm leading-relaxed">
            {sections.map((section) => (
              <section key={section.title} className="space-y-3">
                <h2 className="text-stone text-base font-medium">{section.title}</h2>
                <p style={{ whiteSpace: 'pre-line' }}>{section.content}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </Page>
  )
}
