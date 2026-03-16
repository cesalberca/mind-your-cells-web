'use client'

import { Share2 } from 'lucide-react'

export function ShareButton({ label }: { label: string }) {
  const handleShare = async () => {
    const data = { title: 'Adriana Blanco Durán — Mind Your Cells', url: 'https://www.mindyourcells.com/links' }
    if (navigator.share) {
      await navigator.share(data)
    } else {
      await navigator.clipboard.writeText(data.url)
    }
  }

  return (
    <button
      type="button"
      onClick={handleShare}
      className="w-9 h-9 rounded-full bg-white shadow-sm flex items-center justify-center text-stone/50 hover:text-stone transition-colors"
      aria-label={label}
    >
      <Share2 size={15} />
    </button>
  )
}
