import { NaviOptions } from '@/components/naviOptions/NaviOptions'
import { Separator } from '@/components/ui/separator'
import { navItemsLanding, navItemsStore } from '@/services/navItems'
import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../../components/ui/button'
import { Moon, Search, ShoppingCart, Sun } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { MyHoverCard } from '@/components/myHoverCard/MyHoverCard'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { useCart } from '@/hooks/useCart'
import { HoverCartSummary } from '../hoverCartSummary/HoverCartSummary'

export const Header = () => {
  const location = useLocation()
  const path = location.pathname
  const navigate = useNavigate()
  const [darkMode, setDarkMode] = useState(path === '/' ? false : true)
  const [filter, setFilter] = useState('')
  const { totalItems } = useCart()

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
  
  return (
    <header className="flex w-full justify-center sticky top-0 backdrop-blur-sm bg-background-80 z-50">
      <div className='flex justify-between w-full max-w-5xl items-center py-4'>
        <h1 className='text-2xl font-semibold hidden md:block'>
          <Link to='/'>Relatos de Papel</Link>
        </h1>
        <h1 className='text-2xl font-semibold md:hidden'>
          <Link to='/'>RP</Link>
        </h1>
        {path !== '/' && (
          <div className='w-full max-w-[250px] hidden md:flex'>
            <Input type='text' placeholder='Buscar' className='' onChange={(e) => { setFilter(e.target.value) }}/>
            <Button variant='ghost' className='' onClick={() => filter && navigate(`/store/books?filter=${filter}`)}>
              <Search />
            </Button>
          </div>
        )}
        <div className='hidden md:flex'>
          <NaviOptions items={navItems} className='bg-transparent'/>
          <Separator orientation='vertical' className='h-[36px] mx-2'/>
          <MyHoverCard
            trigger={
              <Button
                variant="link"
                className={`${navigationMenuTriggerStyle()} text-blue-500 relative`}
                onClick={() => navigate('/store/cart')}
              >
                <ShoppingCart />
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-100 transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">
                  {totalItems}
                </span>
              </Button>
            }
          >
            <HoverCartSummary />
          </MyHoverCard>
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
