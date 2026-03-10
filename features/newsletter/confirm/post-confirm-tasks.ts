import type { ReactElement } from 'react'
import { v4 as uuid } from 'uuid'
import { Resend } from 'resend'
import NewsletterWelcomeEmail from '@/emails/transactional/newsletter-welcome-email'

export const timer = (callback: () => Promise<void> | void, delayInSeconds: number): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(async () => {
      try {
        await callback()
        resolve()
      } catch (error) {
        reject(error)
      }
    }, delayInSeconds * 1000)
  })
}

const resend = new Resend(process.env.RESEND_API_KEY)

// Resend has 2 requests per second limit
export const performPostConfirmTasks = async (email: string): Promise<void> => {
  await timer(async () => {
    try {
      // biome-ignore lint/style/noNonNullAssertion: exists
      await resend.contacts.segments.add({ email, segmentId: process.env.RESEND_SEGMENT_ID! })
    } catch (error) {
      console.error('Failed to add to segment:', error)
    }
  }, 1.1)

  await timer(async () => {
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
      console.error('Welcome email import/send error:', error)
    }
  }, 1)
}
