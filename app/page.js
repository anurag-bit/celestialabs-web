import Hero from '@/components/Hero'
import Manifesto from '@/components/Manifesto'
import Sectors from '@/components/Sectors'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--void)] selection:bg-[var(--starlight)] selection:text-black">
      <Hero />
      <Manifesto />
      <Sectors />
      <Footer />
    </main>
  )
}
