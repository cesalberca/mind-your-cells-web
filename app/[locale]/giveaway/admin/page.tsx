'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import usePartySocket from 'partysocket/react'
import { Button } from '@/components/ui/button'
import { CountdownOverlay } from '../_components/countdown-overlay'
import { WinnerScreen } from '../_components/winner-screen'
import type { ClientMessage, Participant, ServerMessage } from '@/party/types'

const ROOM = 'main'

export default function GiveawayAdminPage() {
  const t = useTranslations('giveaway')
  const locale = useLocale()
  const router = useRouter()
  const [ready, setReady] = useState(false)
  const [participants, setParticipants] = useState<Participant[]>([])
  const [winner, setWinner] = useState<Participant | null>(null)
  const [countdownStartedAt, setCountdownStartedAt] = useState<number | null>(null)
  const prevWinner = useRef<Participant | null>(null)

  useEffect(() => {
    if (sessionStorage.getItem('giveaway_admin') !== 'true') {
      const prefix = locale === 'en' ? '' : `/${locale}`
      router.replace(`${prefix}/giveaway/login`)
    } else {
      setReady(true)
    }
  }, [router, locale])

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
    prevWinner.current = winner
  }, [winner])

  function send(msg: ClientMessage) {
    socket.send(JSON.stringify(msg))
  }

  function kick(id: string) {
    send({ type: 'kick', id })
  }

  function reset() {
    send({ type: 'reset' })
  }

  function draw() {
    send({ type: 'draw' })
  }

  function logout() {
    sessionStorage.removeItem('giveaway_admin')
    const prefix = locale === 'en' ? '' : `/${locale}`
    router.push(`${prefix}/giveaway/login`)
  }

  if (!ready) return null

  if (winner) {
    return (
      <WinnerScreen
        winner={winner}
        footer={
          <Button
            variant="outline"
            onClick={reset}
            className="border-crude-ceramic/30 text-crude-ceramic bg-transparent hover:bg-stone-light hover:text-ceramic"
          >
            {t('winner.reset')}
          </Button>
        }
      />
    )
  }

  return (
    <main className="min-h-screen bg-stone text-ceramic">
      {countdownStartedAt && <CountdownOverlay startedAt={countdownStartedAt} />}

      <div className="max-w-2xl mx-auto px-6 py-16">
        <div className="flex items-start justify-between mb-12">
          <div>
            <Image src="/logo.svg" alt="Mind Your Cells" width={273} height={23} className="mb-4 invert opacity-50" />
            <h1 className="text-2xl font-light">{t('admin.title')}</h1>
          </div>
          <Button variant="ghost" size="sm" onClick={logout} className="text-crude-ceramic hover:text-ceramic mt-1">
            {t('admin.logout')}
          </Button>
        </div>

        <div className="flex gap-3 mb-10">
          <Button
            variant="outline"
            onClick={reset}
            className="border-crude-ceramic/30 text-crude-ceramic bg-transparent hover:bg-stone-light hover:text-ceramic"
          >
            {t('admin.reset')}
          </Button>
          <Button onClick={draw} disabled={participants.length === 0 || !!countdownStartedAt}>
            {t('admin.draw')}
          </Button>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-crude-ceramic mb-4">
            {t('admin.participantsTitle', { count: participants.length })}
          </p>
          {participants.length === 0 ? (
            <p className="text-crude-ceramic text-sm">{t('admin.noParticipants')}</p>
          ) : (
            <ul className="space-y-2">
              {participants.map((p) => (
                <li key={p.id} className="flex items-center justify-between px-4 py-3 rounded-lg bg-stone-light">
                  <div>
                    <p className="text-ceramic text-sm">{p.name}</p>
                    <p className="text-crude-ceramic text-xs">{p.email}</p>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => kick(p.id)}
                    className="text-crude-ceramic hover:text-soft-terracotta ml-4 shrink-0"
                  >
                    {t('admin.kick')}
                  </Button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  )
}
