import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>My Next.js App</title>
        <meta name="description" content="Welcome to my Next.js application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Welcome to My Next.js App
        </h1>
        <p className="text-lg text-gray-600">
          This is a simple Next.js application with TypeScript and Tailwind CSS.
        </p>
      </main>
    </div>
  )
} 