import { Resend } from 'resend'
import { type NextRequest, NextResponse } from 'next/server'
import type { ReactElement } from 'react'
import { sign } from 'jsonwebtoken'
import { v4 as uuid } from 'uuid'
import NewsletterConfirmationEmail from '@/emails/transactional/newsletter-confirmation-email'

interface SubscribeRequest {
  email: string
}

export async function POST(request: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body: SubscribeRequest = await request.json()
    const { email } = body

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 })
    }

    const jwtSecret = process.env.JWT_SECRET
    if (!jwtSecret) {
      return NextResponse.json({ error: 'JWT secret not configured' }, { status: 500 })
    }

    const confirmationToken = sign({ email }, jwtSecret, { expiresIn: '24h' })

    try {
      await resend.emails.send({
        from: process.env.RESEND_EMAIL_FROM ?? 'Mind Your Cells <no-reply@mindyourcells.com>',
        to: email,
        subject: 'Confirm your Mind Your Cells newsletter subscription',
        replyTo: process.env.RESEND_EMAIL_FROM,
        headers: { 'X-Entity-Ref-ID': uuid() },
        react: NewsletterConfirmationEmail({ confirmationToken, email }) as ReactElement,
      })
    } catch (error) {
      console.error('Confirmation email send error:', error)
      return NextResponse.json({ error: 'Failed to send confirmation email' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Confirmation email sent' }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
