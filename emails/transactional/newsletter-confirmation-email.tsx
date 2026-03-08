import { EmailTemplate } from '@/features/email/delivery/templates/email-template'
import { EmailButton } from '@/features/email/delivery/components/button/email-button'
import { EmailLink } from '@/features/email/delivery/components/link/email-link'
import { Text, Section } from '@react-email/components'
import { baseUrl } from '@/core/utils/base-url'

interface ConfirmationEmailProps {
  confirmationToken: string
  email: string
}

export default function NewsletterConfirmationEmail({ confirmationToken, email }: ConfirmationEmailProps) {
  const confirmationUrl = `${baseUrl}/newsletter/confirm?token=${confirmationToken}&email=${encodeURIComponent(email)}`

  return (
    <EmailTemplate
      title="Confirm your subscription"
      description="One click away from joining the Mind Your Cells newsletter."
    >
      <Text style={{ fontSize: '14px', color: '#333233', lineHeight: '1.7', fontFamily: 'sans-serif' }}>
        Hey!
      </Text>
      <Text style={{ fontSize: '14px', color: '#333233', lineHeight: '1.7', fontFamily: 'sans-serif' }}>
        Your email was submitted in the signup form at{' '}
        <EmailLink href={baseUrl}>mindyourcells.com</EmailLink>.
      </Text>
      <Text style={{ fontSize: '14px', color: '#333233', lineHeight: '1.7', fontFamily: 'sans-serif' }}>
        If you didn&apos;t sign up, you can safely ignore this email. No further emails will be sent.
      </Text>
      <Text style={{ fontSize: '14px', color: '#333233', lineHeight: '1.7', fontFamily: 'sans-serif' }}>
        If you did sign up and want to receive reflections on cellular health, habits, and lasting transformation
        — click the button below to confirm.
      </Text>

      <Section style={{ textAlign: 'center', margin: '32px 0' }}>
        <EmailButton link={confirmationUrl}>Confirm subscription</EmailButton>
        <Text style={{ fontSize: '11px', color: '#333233', opacity: 0.5, marginTop: '16px', fontFamily: 'sans-serif' }}>
          Or copy this link: <EmailLink href={confirmationUrl}>{confirmationUrl}</EmailLink>
        </Text>
      </Section>
    </EmailTemplate>
  )
}

NewsletterConfirmationEmail.PreviewProps = {
  confirmationToken: 'preview-token',
  email: 'adriana@mindyourcells.com',
} satisfies ConfirmationEmailProps
