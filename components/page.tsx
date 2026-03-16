import type { FC, PropsWithChildren } from 'react'
import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'

export const Page: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-h-screen bg-ceramic overflow-x-hidden flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
