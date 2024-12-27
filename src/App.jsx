import { Outlet } from 'react-router-dom'
import { Header } from './layouts/header/Header'
import { Fotter } from './layouts/footer/Fotter'
import { Toaster } from './components/ui/toaster'

function App () {

  return (
    <div className='md:main-layout flex flex-col min-h-screen items-center px-5 gap-2'>
      <Header />
      <main className='flex flex-col h-full min-h-full w-full max-w-3xl gap-2 mx-auto'>
        <Outlet />
      </main>
      <Fotter />
      <Toaster />
    </div>
  )
}

export default App
