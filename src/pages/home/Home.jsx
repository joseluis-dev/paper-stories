import { BookSection } from '@/layouts/bookSection/BookSection'
import { BookOpenCheckIcon } from 'lucide-react'

export const Home = () => {
  return (
    <div className='flex flex-col gap-4'>
      <BookSection title='Destacados' icon={<BookOpenCheckIcon />} bookType='award winning books'/>
      <BookSection title='Ficción' icon={<BookOpenCheckIcon />} bookType='ficción'/>
      <BookSection title='Novelas' icon={<BookOpenCheckIcon />} bookType='novela'/>
    </div>
  )
}
