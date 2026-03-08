import type { ReactElement } from 'react'
import { v4 as uuid } from 'uuid'
import { Resend } from 'resend'
import NewsletterWelcomeEmail from '@/emails/transactional/newsletter-welcome-email'

export async function performPostConfirmTasks(email: string): Promise<void> {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    await resend.emails.send({
      from: process.env.RESEND_EMAIL_FROM ?? 'Mind Your Cells <no-reply@mindyourcells.com>',
      to: email,
      subject: 'Welcome to Mind Your Cells',
      replyTo: process.env.RESEND_EMAIL_FROM,
      react: NewsletterWelcomeEmail({}) as ReactElement,
      headers: { 'X-Entity-Ref-ID': uuid() },
    })
  } catch (error) {
    console.error('Welcome email send error:', error)
  }
}
