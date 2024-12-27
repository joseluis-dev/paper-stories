import { MyCarousel } from '@/components/myCarousel/MyCarousel'
import { ImageCardSkeleton } from '@/components/skeletons/ImageCardSkeleton'
import { SectionTitle } from '@/components/sectionTitle/SectionTitle'
import { CarouselItem } from '@/components/ui/carousel'
import { useBooks } from '@/hooks/useBooks'
import { ImageCard } from '@/layouts/imageCard/ImageCard'
import { useCart } from '@/hooks/useCart'
import { useCallback } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Check } from 'lucide-react'

export const CarouselSection = ({ title = '', icon = '', bookType = '' }) => {
  const { toast } = useToast()
  const { books, isLoading } = useBooks({ query: bookType })
  const { addToCart } = useCart()

  const handleAddToCart = useCallback((book) => {
    addToCart(book)
    toast({
      title: <div className='flex gap-2 items-center'>
        <Check className='text-green-600'/>
        <h2>Se añadió al carrito</h2>
      </div>,
      description: `Se ha agregado ${book.title} al carrito`
    })
  }, [addToCart, toast])
  // console.log(!books[bookType])
  return (
    <div className='flex flex-col gap-4'>
      <SectionTitle title={title} icon={icon} />
      <div className="flex justify-center">
        <MyCarousel items={books[bookType]}>
          {isLoading
            ? (_, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-[45%]">
                <ImageCardSkeleton />
              </CarouselItem>
            )
            : (book) => (
              <CarouselItem key={book.id} className="pl-1 md:basis-1/2 lg:basis-[45%]">
                <ImageCard book={book} action={handleAddToCart}/>
              </CarouselItem>
            )}
        </MyCarousel>
      </div>
    </div>
  )
}
