export interface Participant {
  id: string
  name: string
  email: string
  joinedAt: number
}

export type ClientMessage =
  | { type: 'join'; id: string; name: string; email: string }
  | { type: 'leave'; id: string }
  | { type: 'kick'; id: string }
  | { type: 'reset' }
  | { type: 'draw' }

export type ServerMessage = {
  type: 'state'
  participants: Participant[]
  winner: Participant | null
  countdownStartedAt: number | null
}
