import { Outlet, useLocation } from 'react-router-dom'
import { Header } from './layouts/header/Header'
import { Fotter } from './layouts/footer/Fotter'

function App () {
  const location = useLocation()
  const path = location.pathname

  return (
    <div className='flex flex-col min-h-screen items-center px-5'>
      <Header path={path} />
      <main className='flex flex-col h-full w-full max-w-3xl gap-2 mb-auto'>
        <Outlet />
      </main>
      <Fotter />
    </div>
  )
}

export default App
