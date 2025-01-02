import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const BurgerMenu = ({ navItems }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Button
        variant="ghost"
        className="p-2 text-gray-700 dark:text-gray-300 z-50"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
      <div
        className={`absolute top-0 left-0 inset-0 bg-white/90 dark:bg-background/90 backdrop-blur-sm flex items-center justify-center h-screen w-full z-40 transform transition-transform duration-300 ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <ul className="flex flex-col items-center space-y-4">
          {navItems.map((item, index) => (
            <li key={index} className="text-center">
              <Link
                to={item.link}
                className="text-2xl text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                onClick={toggleMenu}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}