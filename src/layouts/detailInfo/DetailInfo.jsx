import { DompurifyContainer } from '@/components/dompurifyContainer/DompurifyContainer'
import { ImageLoader } from '@/components/imageLoader/ImageLoader'
import { MyCard } from '@/components/myCard/MyCard'
import { Button } from '@/components/ui/button'
import { CardDescription, CardTitle } from '@/components/ui/card'
import { useCart } from '@/hooks/useCart'
import { ShoppingCart, Star } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { Check } from 'lucide-react'

export const DetailInfo = ({ book }) => {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart(book)
    toast({
      title: <div className='flex gap-2 items-center'>
        <Check className='text-green-600'/>
        <h2>Se añadió al carrito</h2>
      </div>,
      description: `Se ha agregado ${book.title} al carrito`
    })
  }
  
  return (
    <div className='flex flex-col min-h-full gap-2 justify-center items-center'>
      <div className="flex gap-4 items-center w-full max-w-[483px] md:max-w-full">
        <div className="flex-col hidden md:flex gap-2 w-full min-w-[269px] max-w-[269px] justify-center">
          <ImageLoader className={'h-[400px] bg-cover rounded-md'} alt={'Book Image'} src={book.image}/>
          <p className='font-bold mt-4'>Categorías: </p>
          <p>{book.categories?.join(', ')}</p>
        </div>
        <MyCard
          cardHeader={() => (
            <>
              <CardTitle className='min-h-[64px] w-full text-2xl'>{book.title}</CardTitle>
              <CardDescription className='border-b-[1px] pb-4'>
                <div className='flex justify-between items-center gap-2'>
                  <span>{book.date}</span>
                  <span className='flex gap-2 items-center'>{book.rate} <Star className='text-yellow-500 dark:text-yellow-400' size={18}/></span>
                </div>
                <p>
                  <span className='font-bold'>Autores: </span> {book.authors}
                </p>
                <p>
                  <span className='font-bold'>Editorial: </span> {book.publisher}
                </p>
              </CardDescription>
            </>
          )}
          cardContent={() => (
            <div className="flex flex-col items-center gap-2 min-w-[430px]">
              <ImageLoader className={'w-full h-[400px] max-w-[269px] bg-cover block md:hidden rounded-md'} alt={'Book Image'} src={book.image}/>
              <span className='font-bold self-start'>Descripción: </span>
              <div className="flex flex-col w-full gap-2 overflow-auto h-full md:min-h-[350px] max-h-[350px] md:min-w-[430px]">
                <DompurifyContainer html={book.description} />
              </div>
            </div>
          )}
          cardFooter={() => (
            <Button className="w-full" onClick={() => handleAddToCart(book)}>
              <ShoppingCart /> Add to cart {book.price && `($${book.price})`}
            </Button>
          )}
        />
      </div>
    </div>
  )
}
