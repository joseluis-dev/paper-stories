import { useCart } from '@/hooks/useCart'
import { CartList } from '@/layouts/CartList/CartList'

export const Cart = () => {
  const { cart, total } = useCart()
  console.log(cart)
  return (
    <div className='py-6'>
      <CartList items={cart}/>
      <div className='flex justify-end mt-4'>
        <p className='text-2xl'>Total: ${total.toFixed(2)}</p>
      </div>
    </div>
  )
}
