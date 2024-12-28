import { ImageLoader } from '@/components/imageLoader/ImageLoader'
import { MyCard } from '@/components/myCard/MyCard'
import { Button } from '@/components/ui/button'
import { CardDescription, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useCart } from '@/hooks/useCart'
import { Trash } from 'lucide-react'

export const CartItemCard = ({ item }) => {
  const { updateCart, removeFromCart } = useCart()
  const handleChange = (e) => {
    const value = e.target.value === '' ? 1 : parseInt(e.target.value)
    const quantity = value === 0 ? 1 : value
    updateCart(item, quantity)
  }

  const handleRemove = () => {
    removeFromCart(item)
  }
  return (
    <div className='flex gap-4 py-4 border-b-[1px]'>
      <ImageLoader src={item.image} alt={`Imagen de ${item.title}`} className={'min-h-[192px] max-h-[192px] w-full max-w-[128px] rounded-md'}/>
      <MyCard
        classNames={{
          card: 'w-full border-none'
        }}
        cardHeader={() => (
          <>
            <CardTitle className={'md:text-2xl flex justify-between items-center gap-2'}>
              <h2>{item.title}</h2>
              <span>${item.totalPrice}</span>
            </CardTitle>
            <CardDescription className={'border-b-[1px] pb-4 '}>
              <span className='text-green-600'>En Stock</span>
            </CardDescription>
          </>
        )}
        cardContent={() => (
          <>
            <div className='flex justify-between items-center'>
              <div className='flex md:flex-nowrap items-center gap-4 max-w-[30%]'>
                <p className='flex font-bold'>Cantidad: </p>
                <Input
                  className='w-full'
                  type='number'
                  value={item.quantity}
                  onChange={handleChange}
                  min={1}
                  max={10}
                />
              </div>
              <Button variant='secondary' onClick={handleRemove}>
                <Trash className='text-red-600'/>
              </Button>
            </div>
          </>
        )}
      />
    </div>
  )
}
