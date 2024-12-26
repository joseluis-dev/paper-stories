import { useEffect, useState } from 'react'
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const defaultItems = [
  { id: 1, title: 'Item 1' },
  { id: 2, title: 'Item 2' },
  { id: 3, title: 'Item 3' },
  { id: 4, title: 'Item 4' },
  { id: 5, title: 'Item 5' },
  { id: 6, title: 'Item 6' },
  { id: 7, title: 'Item 7' },
  { id: 8, title: 'Item 8' },
  { id: 9, title: 'Item 9' },
  { id: 10, title: 'Item 10' },
]

export const MyCarousel = ({ items = defaultItems, children = null }) => {
  const [api, setApi] = useState()
  // console.log(items)
  useEffect(() => {
    if (!api) {
      return
    }

    api.on('select', () => {
      // Comportamiento al hacer click en las flechas
    })
  }, [api])

  return (
    <Carousel setApi={setApi} className="w-full max-w-[90%]">
      <CarouselContent className="-ml-1">
        {children && items.map((item, index) => children(item, index))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
