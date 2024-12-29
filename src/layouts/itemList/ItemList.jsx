import { useCart } from '@/hooks/useCart'
import { ImageCard } from '../imageCard/ImageCard'
import { useCallback } from 'react'
import { useToast } from '@/hooks/use-toast'
import { Check } from 'lucide-react'

export const ItemList = ({ items }) => {
  const { addToCart } = useCart()
  const { toast } = useToast()
  
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
  return (
    <ul className='flex w-full flex-wrap gap-2 justify-center'>
      {items.map((item) => (
        <div key={item.id} className='md:basis-[49%] lg:basis-[32.29%]'>
          <ImageCard book={item} action={handleAddToCart}/>
        </div>
      ))}
    </ul>
  )
}
