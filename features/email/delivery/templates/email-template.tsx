import { Body, Container, Head, Html, Preview, Section, Text } from '@react-email/components'
import type { FC, PropsWithChildren, ReactElement } from 'react'

interface EmailTemplateProps {
  title: string
  description: string
  footer?: ReactElement
}

export const EmailTemplate: FC<PropsWithChildren<EmailTemplateProps>> = ({
  description,
  title,
  children,
  footer,
}) => {
  return (
    <Html>
      <Head />
      <Preview>{description}</Preview>
      <Body style={{ fontFamily: 'Georgia, serif', backgroundColor: '#f5f0eb', margin: 0, padding: 0 }}>
        <Container style={{ maxWidth: '600px', margin: '0 auto', backgroundColor: '#f5f0eb' }}>
          {/* Header */}
          <Section style={{ padding: '40px 32px 0', textAlign: 'center' }}>
            <Text
              style={{
                fontSize: '16px',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#333233',
                margin: 0,
                fontFamily: 'Georgia, serif',
              }}
            >
              Mind Your Cells
            </Text>
            <Text
              style={{
                fontSize: '10px',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#a67d7b',
                marginTop: '4px',
                fontFamily: 'sans-serif',
              }}
            >
              Finessing your Cellular Health
            </Text>
          </Section>

          {/* Main Content */}
          <Section style={{ padding: '32px' }}>
            <Text
              style={{
                fontSize: '28px',
                fontWeight: '300',
                color: '#333233',
                lineHeight: '1.3',
                margin: '0 0 24px',
                fontFamily: 'Georgia, serif',
              }}
            >
              {title}
            </Text>
            {children}
          </Section>

          {/* Footer */}
          <Section
            style={{
              backgroundColor: '#dedbd5',
              padding: '24px 32px',
              textAlign: 'center',
            }}
          >
            {footer}
            <Text style={{ fontSize: '10px', color: '#333233', opacity: 0.4, margin: 0, fontFamily: 'sans-serif' }}>
              © {new Date().getFullYear()} Mind Your Cells · Adriana Blanco Durán
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}
