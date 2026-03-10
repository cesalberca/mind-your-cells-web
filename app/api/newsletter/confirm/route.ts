import { Resend } from 'resend'
import { after, type NextRequest, NextResponse } from 'next/server'
import { verify } from 'jsonwebtoken'
import { performPostConfirmTasks } from '@/features/newsletter/confirm/post-confirm-tasks'

interface ConfirmationTokenPayload {
  email: string
}

export interface ConfirmResponseOk {
  success: true
  message: string
  alreadyConfirmed?: boolean
}

export interface ConfirmResponseKo {
  error: string
  success: false
}

export type ConfirmResponse = ConfirmResponseOk | ConfirmResponseKo

export async function POST(request: NextRequest): Promise<NextResponse<ConfirmResponse>> {
  const resend = new Resend(process.env.RESEND_API_KEY)
  try {
    const body: { token: string; email: string } = await request.json()
    const { token, email: emailParam } = body

    if (!token) {
      return NextResponse.json({ success: false, error: 'Missing confirmation token' }, { status: 400 })
    }

    if (!emailParam) {
      return NextResponse.json({ success: false, error: 'Missing email' }, { status: 400 })
    }

    const jwtSecret = process.env.JWT_SECRET
    if (!jwtSecret) {
      return NextResponse.json({ success: false, error: 'JWT secret not configured' }, { status: 500 })
    }

    let payload: ConfirmationTokenPayload
    try {
      payload = verify(token, jwtSecret) as ConfirmationTokenPayload
    } catch {
      return NextResponse.json({ success: false, error: 'Invalid or expired confirmation token' }, { status: 400 })
    }

    if (payload.email !== emailParam) {
      return NextResponse.json({ success: false, error: 'Email mismatch' }, { status: 400 })
    }

    const audienceId = process.env.RESEND_SEGMENT_ID
    if (!audienceId) {
      return NextResponse.json({ success: false, error: 'Segment not configured' }, { status: 500 })
    }

    // Check if already subscribed
    try {
      const existing = await resend.contacts.get({ email: payload.email })
      if (existing.data) {
        return NextResponse.json({ success: true, message: 'Already subscribed', alreadyConfirmed: true })
      }
    } catch {
      // Contact doesn't exist — continue
    }

    const result = await resend.contacts.create({ email: payload.email, audienceId, unsubscribed: false })

    if (result.error) {
      if (result.error.message?.toLowerCase().includes('already exists')) {
        return NextResponse.json({ success: true, message: 'Already subscribed', alreadyConfirmed: true })
      }
      return NextResponse.json({ success: false, error: result.error.message }, { status: 500 })
    }

    after(async () => {
      await performPostConfirmTasks(payload.email)
    })

    return NextResponse.json({ success: true, message: 'Subscription confirmed' }, { status: 200 })
  } catch (error) {
    console.error('Newsletter confirmation error:', error)
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 })
  }
}
