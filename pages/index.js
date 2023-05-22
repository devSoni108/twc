import Head from 'next/head'
import Hero from '@/components/Hero'
import Industries from '@/components/Industries'
import Brands from '@/components/Brands'
import About from '@/components/About'
import Brag from '@/components/Brag'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <>
      <Head>
        <title>GTC Africa</title>
        <meta name="description" content='Drivetrain Component Specialists'></meta>
      </Head>
      <main>
        <Hero />
        <Industries />
        <Brands />
        <About />
        <Brag />
        <CTA />
      </main>
    </>
  )
}