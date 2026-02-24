import { Playfair_Display } from 'next/font/google'
import '../globals.css'

const playfair = Playfair_Display({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
