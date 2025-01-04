import { NaviOptions } from '@/components/naviOptions/NaviOptions'
import { Separator } from '@/components/ui/separator'
import { navItemsLanding, navItemsStore } from '@/services/navItems'
import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Moon, Search, Sun } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { BurgerMenu } from '@/layouts/burgerMenu/BurgerMenu'
import { CartHoverButton } from '@/layouts/cartHoverButton/CartHoverButton'

export const Header = () => {
  const location = useLocation()
  const path = location.pathname
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(path === '/' ? false : true)
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const body = document.querySelector('body')
    body.classList.toggle('dark', darkMode)
  }, [darkMode])

  const [navItems] = useMemo(() => {
    if (path === '/') {
      return [navItemsLanding]
    } else {
      return [navItemsStore]
    }
  }, [path])

  const handleSubmit = (e) => {
    e.preventDefault()
    filter && navigate(`/store/books?filter=${filter}`)
  }
  
  return (
    <header className="flex w-full justify-center sticky top-0 backdrop-blur-sm bg-background-80 z-50 px-5">
      <div className='flex justify-between w-full max-w-5xl items-center py-4 gap-2'>
        <h1 className='text-2xl font-semibold text-nowrap hidden md:block z-50'>
          <Link to='/'>Relatos de Papel</Link>
        </h1>
        <h1 className='text-2xl font-semibold md:hidden z-50'>
          <Link to='/'>RP</Link>
        </h1>
        {path !== '/' && (
          <form onSubmit={handleSubmit} className='w-full max-w-[300px] flex'>
            <Input type='text' placeholder='Buscar' className='' onChange={(e) => { setFilter(e.target.value) }}/>
            <Button variant='ghost' className='' onClick={() => filter && navigate(`/store/books?filter=${filter}`)}>
              <Search />
            </Button>
          </form>
        )}
        <div className='flex gap-4 md:hidden'>
          <CartHoverButton />
          <BurgerMenu navItems={navItems} />
        </div>
        <div className='hidden md:flex'>
          <NaviOptions items={navItems} className='bg-transparent'/>
          <Separator orientation='vertical' className='h-[36px] mx-2'/>
          <CartHoverButton />
          {path !== '/' && (
            <Button variant='ghost' className='mx-1 dark:text-white text-black' onClick={() => setDarkMode((prev) => !prev)}>
              {!darkMode ? <Moon /> : <Sun />}
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
