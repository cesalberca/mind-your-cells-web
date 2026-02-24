import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

async function authenticate(formData: FormData) {
  'use server'
  const password = formData.get('password') as string
  const SITE_PASSWORD = process.env.SITE_PASSWORD ?? 'myc2026'

  if (password === SITE_PASSWORD) {
    const cookieStore = await cookies()
    cookieStore.set('site-auth', SITE_PASSWORD, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: '/',
    })
    redirect('/es')
  }

  redirect('/login?error=1')
}

type Props = {
  searchParams: Promise<{ error?: string }>
}

export default async function LoginPage({ searchParams }: Props) {
  const { error } = await searchParams

  return (
    <main className="min-h-screen bg-stone flex items-center justify-center px-6">
      <div className="w-full max-w-xs">
        <div className="text-center mb-10">
          <h1
            className="text-ceramic font-semibold text-xl mb-1.5"
            style={{ fontFamily: 'var(--font-cormorant, serif)' }}
          >
            Mind Your Cells
          </h1>
          <p className="text-ceramic/30 text-[0.6rem] tracking-widest uppercase font-sans">
            Finessing your Cellular Health
          </p>
        </div>

        <form action={authenticate} className="space-y-3">
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            // biome-ignore lint/a11y/noAutofocus: intentional for a single-field login form
            autoFocus
            className="w-full bg-transparent border border-ceramic/20 text-ceramic placeholder:text-ceramic/25 text-sm font-sans px-4 py-3 outline-none focus:border-ceramic/50 transition-colors"
          />
          {error && (
            <p className="text-soft-terracotta text-xs font-sans">
              Contraseña incorrecta.
            </p>
          )}
          <button
            type="submit"
            className="w-full border border-ceramic/40 text-ceramic text-[0.65rem] tracking-widest uppercase font-sans font-medium px-4 py-3 hover:bg-ceramic/10 transition-colors"
          >
            Acceder
          </button>
        </form>
      </div>
    </main>
  )
}
