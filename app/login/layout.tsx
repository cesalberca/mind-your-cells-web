import localFont from 'next/font/local'
import '../globals.css'

const mellow = localFont({
  src: [
    { path: '../fonts/mellow/MADEMellowPERSONALUSE-Light.otf', weight: '300', style: 'normal' },
    { path: '../fonts/mellow/MADEMellowPERSONALUSE-Regular.otf', weight: '400', style: 'normal' },
    { path: '../fonts/mellow/MADEMellowPERSONALUSE-Medium.otf', weight: '500', style: 'normal' },
    { path: '../fonts/mellow/MADEMellowPERSONALUSE-SemiBold.otf', weight: '600', style: 'normal' },
    { path: '../fonts/mellow/MADEMellowPERSONALUSE-Bold.otf', weight: '700', style: 'normal' },
  ],
  variable: '--font-mellow',
})

const satoshi = localFont({
  src: [
    { path: '../fonts/satoshi/Satoshi-Variable.woff2', weight: '300 900', style: 'normal' },
    { path: '../fonts/satoshi/Satoshi-VariableItalic.woff2', weight: '300 900', style: 'italic' },
  ],
  variable: '--font-satoshi',
})

const playfair = localFont({
  src: [
    { path: '../fonts/playfair/PlayfairDisplay-Italic-VariableFont_wght.ttf', weight: '400 900', style: 'italic' },
  ],
  variable: '--font-playfair',
})

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${mellow.variable} ${satoshi.variable} ${playfair.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
