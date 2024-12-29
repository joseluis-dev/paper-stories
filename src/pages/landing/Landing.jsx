import { Header } from '@/layouts/header/Header'
import { Hero } from '@/layouts/hero/Hero'
import { Fotter } from '@/layouts/footer/Fotter'
import { Toaster } from '@/components/ui/toaster'
import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'

export const Landing = () => {
  const timerRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const events = ['mousemove', 'keydown', 'scroll', 'click']
    const handleEvent = () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
      timerRef.current = setTimeout(() => navigate('/store'), 5000)
    }
    events.forEach(event => window.addEventListener(event, handleEvent))

    return () => {
      events.forEach(event => window.removeEventListener(event, handleEvent))
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [navigate])

  return (
    <div className='main-layout min-h-screen items-center px-5'>
      <Header />
      <main className='flex flex-col h-full w-full max-w-5xl gap-2 items-center mx-auto'>
        <Hero />
      </main>
      <Fotter />
      <Toaster />
    </div>
  )
}
