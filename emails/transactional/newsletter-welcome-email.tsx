import type { FC } from 'react'
import { EmailTemplate } from '@/features/email/delivery/templates/email-template'
import { Text } from '@react-email/components'
import { EmailLink } from '@/features/email/delivery/components/link/email-link'
import { baseUrl } from '@/core/utils/base-url'

const NewsletterWelcomeEmail: FC = () => {
  return (
    <EmailTemplate
      title="Welcome to Mind Your Cells"
      description="You're in. Reflections on cellular health, habits and lasting change — coming your way."
    >
      <Text style={{ fontSize: '14px', color: '#333233', lineHeight: '1.7', fontFamily: 'sans-serif' }}>
        Thank you for confirming your subscription.
      </Text>
      <Text style={{ fontSize: '14px', color: '#333233', lineHeight: '1.7', fontFamily: 'sans-serif' }}>
        You&apos;ll receive reflections on cellular health, chrononutrition, stress, habits, and the small changes
        that lead to lasting transformation.
      </Text>
      <Text style={{ fontSize: '14px', color: '#333233', lineHeight: '1.7', fontFamily: 'sans-serif' }}>
        To make sure you receive every edition, reply to this email with &ldquo;Hello&rdquo; or{' '}
        <EmailLink href={`${baseUrl}/about-us`}>add Adriana as a contact</EmailLink>.
      </Text>
      <Text style={{ fontSize: '14px', color: '#333233', lineHeight: '1.7', fontFamily: 'sans-serif' }}>
        — Adriana Blanco Durán
      </Text>
    </EmailTemplate>
  )
}

export default NewsletterWelcomeEmail
