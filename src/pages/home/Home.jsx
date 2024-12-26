import { CarouselSection } from '@/layouts/carouselSection/CarouselSection'
import { BookOpenCheckIcon } from 'lucide-react'

export const Home = () => {
  return (
    <div className='flex flex-col gap-4'>
      <CarouselSection title='Destacados' icon={<BookOpenCheckIcon />} bookType='award winning books'/>
      <CarouselSection title='Ficción' icon={<BookOpenCheckIcon />} bookType='ficción'/>
      <CarouselSection title='Novelas' icon={<BookOpenCheckIcon />} bookType='novela'/>
    </div>
  )
}
