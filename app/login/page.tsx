import Link from 'next/link'
import { login } from './actions'
import Image from 'next/image'

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ message: string }>
}) {
  const { message } = await searchParams;
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 mx-auto mt-24">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>

      <div className="flex flex-col items-center mb-8">
        <div className="w-20 h-20 relative mb-4">
          <Image src="/images/logo.png" alt="Mutton Raja Logo" fill className="object-contain" />
        </div>
        <h1 className="text-3xl font-serif font-bold text-mutton">Staff Login</h1>
      </div>

      <form className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <label className="text-md font-bold text-stone-700" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6 border-stone-300"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md font-bold text-stone-700" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-md px-4 py-2 bg-inherit border mb-6 border-stone-300"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        
        <button
          formAction={login}
          className="bg-mutton hover:bg-mutton/90 text-white font-bold rounded-md px-4 py-3 text-foreground mb-2 shadow-md transition-colors"
        >
          Sign In
        </button>
        
        {message && (
          <p className="mt-4 p-4 bg-red-100 text-red-600 text-center rounded-md font-bold border border-red-200">
            {message}
          </p>
        )}
      </form>
    </div>
  )
}
