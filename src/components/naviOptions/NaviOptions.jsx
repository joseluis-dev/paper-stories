import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

export const NaviOptions = ({ items = [], className = '' }) => {

  const menuItems = useMemo(() => items.map((item, index) => {
    if (item.content) {
      return (
        <NavigationMenuItem key={index}>
          <NavigationMenuTrigger>{item.title}</NavigationMenuTrigger>
          <NavigationMenuContent>
            {item.content}
          </NavigationMenuContent>
        </NavigationMenuItem>
      )
    } else {
      return (
        <NavigationMenuItem key={index}>
          <Link id={`nav_${item.title}`} to={item.link} className={`${navigationMenuTriggerStyle()} ${className}`}>
            {item.title}
          </Link>
        </NavigationMenuItem>
      )
    }
  }),[items, className])

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
