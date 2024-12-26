import { SiFacebook, SiInstagram, SiX } from '@icons-pack/react-simple-icons'

export const Fotter = () => {
  return (
    <footer className='flex justify-center gap-2 w-full max-w-3xl items-center py-3 flex-wrap sm:justify-between mx-auto'>
      <p className='w-full sm:w-fit text-center text-sm text-gray-500 dark:text-gray-400'>
              &copy; 2024 Todos los derechos reservados.
      </p>
      <div className="flex items-center flex-wrap justify-center gap-2 sm:gap-0 sm:justify-normal">
        <div className="flex items-center">
          <a href="#" className="px-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm border-r border-r-gray-400 text-nowrap">Privacy Policy</a>
          <a href="#" className="px-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary text-sm border-r border-r-gray-400 text-nowrap">Terms of Service</a>
        </div>
        <div className="flex gap-1 items-center">
          <a href="https://www.facebook.com" target='_blank' className="px-2 text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary"><SiFacebook size={20}/></a>
          <a href="https://www.x.com" target='_blank' className="px-2 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"><SiX size={20}/></a>
          <a href="https://www.instagram.com" target='_blank' className="px-2 text-gray-500 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-600"><SiInstagram size={20}/></a>
        </div>
      </div>
    </footer>
  )
}
