import { MyCard } from '@/components/myCard/MyCard'
import { Button } from '@/components/ui/button'
import { CardDescription, CardTitle } from '@/components/ui/card'
import { ShoppingCart, Star } from 'lucide-react'
import { Link } from 'react-router-dom'

export const ImageCard = ({ book, action = () => {} }) => {
  return (
    <MyCard
      cardHeader={() => (
        <>
          <CardTitle className='h-full min-h-[32px] max-h-[32px] overflow-auto'>{book.title}</CardTitle>
          <CardDescription>
            <div className='flex justify-between items-center gap-2'>
              <span>{book.date}</span>
              <span className='flex gap-2 items-center'>{book.rate} <Star className='text-yellow-500 dark:text-yellow-400' size={18}/></span>
            </div>
          </CardDescription>
        </>
      )}
      cardContent={() => (
        <div className="flex flex-col items-center gap-2">
          <Link id={`link_img_${book.id}`} data-testid={`link_img_${book.id}`} to={`/store/books/${book.id}`}>
            <img src={book.image} alt={book.title} className="h-48 max-w-[200px] object-cover rounded-md" />
          </Link>
          <div className="flex flex-col w-full gap-2 overflow-auto min-h-[68px] max-h-[68px]">
            <p className="text-sm">
              <span className='font-bold'>Authors: </span> {book.authors}
            </p>
            <p className="text-sm">
              <span className='font-bold'>Description: </span>
              {book.description?.slice(0, 50)}{book.description?.slice(50, 51) && '...'}
            </p>
          </div>
        </div>
      )}
      cardFooter={() => (
        <>
          <Button id={`cart_button_${book.id}`} data-testid={'add_to_cart_button'} className="w-full" onClick={() => action(book)} disabled={!book.price}>
            <ShoppingCart /> Add to cart {book.price && `($${book.price})`}
          </Button>
        </>
      )}
    />
  )
}
