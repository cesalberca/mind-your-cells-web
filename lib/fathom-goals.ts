'use client'

import { trackEvent } from 'fathom-client'

export const FATHOM_GOALS = {
  bookCallHero: 'bookCallHero',
  bookCallHeader: 'bookCallHeader',
  bookCallSection: 'bookCallSection',
  bookCallPackage: 'bookCallPackage',
  bookCallIndividual: 'bookCallIndividual',
} as const

export type FathomGoal = keyof typeof FATHOM_GOALS

export function trackGoal(goal: FathomGoal) {
  const goalId = FATHOM_GOALS[goal]
  if (!goalId) return
  trackEvent(goalId)
}
