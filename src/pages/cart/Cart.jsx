import { useCart } from '@/hooks/useCart'
import { CartList } from '@/layouts/CartList/CartList'
import { CreditCard } from 'lucide-react'
import { Link } from 'react-router-dom'

export const Cart = () => {
  const { cart, total } = useCart()
  console.log(cart)
  return (
    <div className='flex flex-col py-6'>
      <CartList items={cart}/>
      <div className='flex justify-end my-4 p-6'>
        <div className='flex justify-between w-full max-w-[580px]'>
          <p className='text-2xl'>Total:</p>
          <p className='text-2xl'>${total}</p>
        </div>
      </div>
      <Link to={'/store/checkout'} className='flex items-center bg-primary rounded-lg p-2 text-text-dark dark:text-text-light justify-center gap-3 md:self-end w-full md:max-w-28 md:mx-6'>
        <CreditCard /> Pagar
      </Link>
    </div>
  )
}
