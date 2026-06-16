import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ToolList from '@/components/ToolList'
import Footer from '@/components/Footer'
import Background from '@/components/Background'

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main className="flex-1 flex items-center justify-center px-8 py-6">
        <div className="w-full max-w-[600px] flex flex-col gap-0">
          <Hero />
          <ToolList />
        </div>
      </main>
      <Footer />
    </>
  )
}
