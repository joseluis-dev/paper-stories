import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

export const NaviOptions = ({ items = [] }) => {

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
          <Link to={item.link} className={navigationMenuTriggerStyle()}>
            {item.title}
          </Link>
        </NavigationMenuItem>
      )
    }
  }),[items])

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {menuItems}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
