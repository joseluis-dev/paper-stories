import { Header } from '@/layouts/header/Header'
import { Hero } from '@/layouts/hero/Hero'
import { useLocation } from 'react-router-dom'
import { Fotter } from '@/layouts/footer/Fotter'

export const Landing = () => {
  const location = useLocation()
  const path = location.pathname

  return (
    <div className='flex flex-col min-h-screen items-center px-5'>
      <Header path={path}/>
      <main className='flex flex-col h-full w-full max-w-3xl gap-2 items-center m-auto'>
        <Hero />
      </main>
      <Fotter />
    </div>
  )
}
