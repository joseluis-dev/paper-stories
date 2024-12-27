import { Header } from '@/layouts/header/Header'
import { Hero } from '@/layouts/hero/Hero'
import { Fotter } from '@/layouts/footer/Fotter'
import { Toaster } from '@/components/ui/toaster'

export const Landing = () => {
  return (
    <div className='main-layout min-h-screen items-center px-5'>
      <Header />
      <main className='flex flex-col h-full w-full max-w-3xl gap-2 items-center mx-auto'>
        <Hero />
      </main>
      <Fotter />
      <Toaster />
    </div>
  )
}
