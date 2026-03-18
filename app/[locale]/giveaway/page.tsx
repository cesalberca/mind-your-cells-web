'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import usePartySocket from 'partysocket/react'
import { v4 as uuid } from 'uuid'
import { Link } from '@/i18n/routing'
import { Button } from '@/components/ui/button'
import { CountdownOverlay } from './_components/countdown-overlay'
import { WinnerScreen } from './_components/winner-screen'
import type { ClientMessage, Participant, ServerMessage } from '@/party/types'

const ROOM = 'main'

export default function GiveawayPage() {
  const t = useTranslations('giveaway')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [participants, setParticipants] = useState<Participant[]>([])
  const [winner, setWinner] = useState<Participant | null>(null)
  const [countdownStartedAt, setCountdownStartedAt] = useState<number | null>(null)
  const [myId, setMyId] = useState<string | null>(null)
  const [joined, setJoined] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const socket = usePartySocket({
    host: process.env.NEXT_PUBLIC_PARTYKIT_HOST ?? 'localhost:1999',
    room: ROOM,
    onMessage(event) {
      const msg: ServerMessage = JSON.parse(event.data)
      setParticipants(msg.participants)
      setWinner(msg.winner)
      setCountdownStartedAt(msg.countdownStartedAt)
    },
  })

  useEffect(() => {
    const storedId = localStorage.getItem('giveaway_id')
    if (storedId) setMyId(storedId)
  }, [])

  useEffect(() => {
    if (!myId) return
    if (participants.find((p) => p.id === myId)) {
      setJoined(true)
    } else if (joined) {
      // Removed by admin — treat the same as withdrawing
      localStorage.removeItem('giveaway_id')
      setMyId(null)
      setJoined(false)
      setName('')
      setEmail('')
    }
  }, [myId, participants, joined])

  function send(msg: ClientMessage) {
    socket.send(JSON.stringify(msg))
  }

  async function handleJoin(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setSubmitting(true)

    const id = uuid()
    localStorage.setItem('giveaway_id', id)
    setMyId(id)
    send({ type: 'join', id, name: name.trim(), email: email.trim() })

    fetch('/api/newsletter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.trim() }),
    }).catch(() => {})

    setJoined(true)
    setSubmitting(false)
  }

  function handleLeave() {
    if (!myId) return
    send({ type: 'leave', id: myId })
    localStorage.removeItem('giveaway_id')
    setMyId(null)
    setJoined(false)
    setName('')
    setEmail('')
  }

  if (winner) {
    return (
      <WinnerScreen
        winner={winner}
        footer={
          <Button
            variant="outline"
            asChild
            className="border-crude-ceramic/30 text-crude-ceramic bg-transparent hover:bg-stone-light hover:text-ceramic"
          >
            <Link href="/">{t('winner.backHome')}</Link>
          </Button>
        }
      />
    )
  }

  return (
    <main className="min-h-screen bg-ceramic text-stone">
      {countdownStartedAt && <CountdownOverlay startedAt={countdownStartedAt} />}

      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="mb-12 text-center">
          <Image src="/logo.svg" alt="Mind Your Cells" width={273} height={23} className="mx-auto mb-8" />
          <h1 className="text-4xl font-light mb-4">{t('title')}</h1>
          <p className="text-crude-ceramic">{t('subtitle')}</p>
        </div>

        {!joined ? (
          <div className="bg-white rounded-xl p-8 mb-10 shadow-sm">
            <form onSubmit={handleJoin} className="space-y-4">
              <div>
                <label htmlFor="giveaway-name" className="block text-sm mb-1.5">
                  {t('form.name')}
                </label>
                <input
                  id="giveaway-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('form.namePlaceholder')}
                  className="w-full px-4 py-3 rounded-lg border border-crude-ceramic/30 bg-ceramic/30 text-stone placeholder:text-crude-ceramic focus:outline-none focus:ring-2 focus:ring-terracotta/30"
                />
              </div>
              <div>
                <label htmlFor="giveaway-email" className="block text-sm mb-1.5">
                  {t('form.email')}
                </label>
                <input
                  id="giveaway-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('form.emailPlaceholder')}
                  className="w-full px-4 py-3 rounded-lg border border-crude-ceramic/30 bg-ceramic/30 text-stone placeholder:text-crude-ceramic focus:outline-none focus:ring-2 focus:ring-terracotta/30"
                />
              </div>
              <Button type="submit" disabled={submitting} className="w-full">
                {t('form.submit')}
              </Button>
              <p className="text-xs text-crude-ceramic leading-relaxed">{t('form.finePrint')}</p>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-xl p-8 mb-10 shadow-sm text-center">
            <p className="text-lg mb-2">{t('joined.title')}</p>
            <p className="text-crude-ceramic text-sm mb-5">{t('joined.subtitle')}</p>
            <Button variant="link" onClick={handleLeave} className="text-crude-ceramic">
              {t('joined.leave')}
            </Button>
          </div>
        )}

        <div>
          <h2 className="text-lg font-light mb-4">{t('participants.title', { count: participants.length })}</h2>
          {participants.length === 0 ? (
            <p className="text-crude-ceramic text-sm">{t('participants.empty')}</p>
          ) : (
            <ul className="space-y-2">
              {participants.map((p) => (
                <li key={p.id} className="flex items-center justify-between px-4 py-3 rounded-lg bg-white">
                  <span>{p.name}</span>
                  {p.id === myId && !countdownStartedAt && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleLeave}
                      className="text-crude-ceramic hover:text-terracotta"
                    >
                      {t('participants.leave')}
                    </Button>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  )
}
