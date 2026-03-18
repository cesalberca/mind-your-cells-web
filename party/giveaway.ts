import type * as Party from 'partykit/server'
import type { ClientMessage, Participant, ServerMessage } from './types'

const COUNTDOWN_MS = 5000

export default class GiveawayServer implements Party.Server {
  constructor(readonly room: Party.Room) {}

  private async getParticipants(): Promise<Participant[]> {
    return (await this.room.storage.get<Participant[]>('participants')) ?? []
  }

  private async getWinner(): Promise<Participant | null> {
    return (await this.room.storage.get<Participant | null>('winner')) ?? null
  }

  private async getCountdownStartedAt(): Promise<number | null> {
    return (await this.room.storage.get<number | null>('countdownStartedAt')) ?? null
  }

  private async buildState(): Promise<ServerMessage> {
    const [participants, winner, countdownStartedAt] = await Promise.all([
      this.getParticipants(),
      this.getWinner(),
      this.getCountdownStartedAt(),
    ])
    return { type: 'state', participants, winner, countdownStartedAt }
  }

  private broadcast(msg: ServerMessage) {
    this.room.broadcast(JSON.stringify(msg))
  }

  async onConnect(conn: Party.Connection) {
    conn.send(JSON.stringify(await this.buildState()))
  }

  async onAlarm() {
    const countdownStartedAt = await this.getCountdownStartedAt()
    if (!countdownStartedAt) return

    const participants = await this.getParticipants()
    if (participants.length === 0) return

    const drawn = participants[Math.floor(Math.random() * participants.length)]
    await this.room.storage.put('winner', drawn)
    await this.room.storage.put('countdownStartedAt', null)
    this.broadcast({ type: 'state', participants, winner: drawn, countdownStartedAt: null })
  }

  async onMessage(message: string) {
    const data: ClientMessage = JSON.parse(message)
    const participants = await this.getParticipants()
    const winner = await this.getWinner()

    if (data.type === 'join') {
      const exists = participants.find((p) => p.email === data.email)
      if (!exists) {
        const updated = [...participants, { id: data.id, name: data.name, email: data.email, joinedAt: Date.now() }]
        await this.room.storage.put('participants', updated)
        const countdownStartedAt = await this.getCountdownStartedAt()
        this.broadcast({ type: 'state', participants: updated, winner, countdownStartedAt })
      }
      return
    }

    if (data.type === 'leave' || data.type === 'kick') {
      const updated = participants.filter((p) => p.id !== data.id)
      await this.room.storage.put('participants', updated)
      const countdownStartedAt = await this.getCountdownStartedAt()
      this.broadcast({ type: 'state', participants: updated, winner, countdownStartedAt })
      return
    }

    if (data.type === 'reset') {
      await this.room.storage.put('participants', [])
      await this.room.storage.put('winner', null)
      await this.room.storage.put('countdownStartedAt', null)
      await this.room.storage.deleteAlarm()
      this.broadcast({ type: 'state', participants: [], winner: null, countdownStartedAt: null })
      return
    }

    if (data.type === 'draw') {
      if (participants.length === 0) return
      const countdownStartedAt = Date.now()
      await this.room.storage.put('countdownStartedAt', countdownStartedAt)
      await this.room.storage.setAlarm(countdownStartedAt + COUNTDOWN_MS)
      this.broadcast({ type: 'state', participants, winner: null, countdownStartedAt })
    }
  }
}
