import { NaviOptions } from '@/components/navi_options/NaviOptions'
import { Separator } from '@/components/ui/separator'
import { navItemsLanding, navItemsIcons } from '@/services/navItems'
import { useMemo } from 'react'

export const Header = ({ path }) => {
  const [navItems, navItems2] = useMemo(() => {
    if (path === '/') {
      return [navItemsLanding, navItemsIcons]
    } else {
      return []
    }
  }, [path])
  
  return (
    <div>
      <header className='flex justify-between items-center py-4'>
        <h1 className='text-2xl font-semibold font-serif'>Relatos de Papel</h1>
        <div className='flex'>
          <NaviOptions items={navItems}/>
          <Separator orientation='vertical' className='h-[36px] mx-4'/>
          <NaviOptions items={navItems2}/>
        </div>
      </header>
    </div>
  )
}
