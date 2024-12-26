import { NaviOptions } from '@/components/naviOptions/NaviOptions'
import { Separator } from '@/components/ui/separator'
import { navItemsLanding, navItemsIcons, navItemsStore } from '@/services/navItems'
import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { Moon, Sun } from 'lucide-react'

export const Header = () => {
  const location = useLocation()
  const path = location.pathname
  const [darkMode, setDarkMode] = useState(path === '/' ? false : true)

  useEffect(() => {
    const body = document.querySelector('body')
    body.classList.toggle('dark', darkMode)
  }, [darkMode])

  const [navItems, navItems2] = useMemo(() => {
    if (path === '/') {
      return [navItemsLanding, navItemsIcons]
    } else {
      return [navItemsStore, navItemsIcons]
    }
  }, [path])
  
  return (
    <header className="flex w-full justify-center sticky top-0 backdrop-blur-sm bg-white bg-opacity-80 dark:bg-black dark:bg-opacity-80 z-50">
      <div className='flex justify-between w-full max-w-3xl items-center py-4'>
        <h1 className='text-2xl font-semibold hidden md:block'>
          <Link to='/'>Relatos de Papel</Link>
        </h1>
        <h1 className='text-2xl font-semibold md:hidden'>
          <Link to='/'>RP</Link>
        </h1>
        <div className='hidden md:flex'>
          <NaviOptions items={navItems} className='bg-transparent'/>
          <Separator orientation='vertical' className='h-[36px] mx-2'/>
          <NaviOptions items={navItems2} className='bg-transparent'/>
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
