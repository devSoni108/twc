import Head from 'next/head'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Greenleaf | Weed Club</title>
        <meta name="description" content='Members only Cannabis Club'></meta>
      </Head>
      <main>
        <Hero />
      </main>
    </>
  )
}