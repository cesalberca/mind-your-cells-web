'use client'

import { trackEvent } from 'fathom-client'

export const FATHOM_GOALS = {
  bookCallHero: 'bookCallHero',
  bookCallHeader: 'bookCallHeader',
  bookCallSection: 'bookCallSection',
  bookCallPackage: 'bookCallPackage',
} as const

export function trackGoal(goal: keyof typeof FATHOM_GOALS) {
  const goalId = FATHOM_GOALS[goal]
  if (!goalId) return
  trackEvent(goalId)
}
