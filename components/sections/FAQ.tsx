'use client'

import { useTranslations } from 'next-intl'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'

type FAQItem = {
  question: string
  answer: string
}

export function FAQ() {
  const t = useTranslations('faq')
  const items = t.raw('items') as FAQItem[]

  return (
    <section id="faq" className="py-24 px-6 bg-ceramic">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-light text-stone mb-4 text-center">
          {t('heading')}
        </h2>
        <p className="text-center text-stone/50 mb-16 text-base font-sans">{t('subheading')}</p>

        <Accordion type="single" collapsible className="divide-y divide-crude-ceramic/30">
          {items.map((item) => (
            <AccordionItem
              key={item.question}
              value={item.question}
              className="border-none"
            >
              <AccordionTrigger className="text-stone hover:text-terracotta text-left font-sans font-medium text-sm py-5 [&[data-state=open]]:text-terracotta tracking-wide">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-stone/60 pb-5 leading-relaxed font-sans text-sm font-light">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
