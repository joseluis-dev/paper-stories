import { Outlet } from 'react-router-dom'
import { Header } from './layouts/header/Header'
import { Fotter } from './layouts/footer/Fotter'

function App () {

  return (
    <div className='flex flex-col min-h-screen items-center px-5 gap-2'>
      <Header />
      <main className='flex flex-col h-full w-full max-w-3xl gap-2 mb-auto'>
        <Outlet />
      </main>
      <Fotter />
    </div>
  )
}

export default App
