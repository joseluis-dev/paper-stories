import { useCart } from '@/hooks/useCart'
import { TriangleAlert } from 'lucide-react'

export const CheckoutDetail = () => {
  const { cart, total } = useCart()
  
  return (
    <div className='w-full h-full flex flex-col gap-4'>
      <h1 className='font-bold text-lg'>Detalle:</h1>
      <p className='self-end pr-2'>Total: ${total}</p>
      <ul className='flex flex-col max-h-[384px] overflow-auto pr-2'>
        {cart.map((item) => (
          <li key={item.id} className='flex justify-between py-4 border-b-[1px]'>
            <div className='flex gap-2'>
              <span>{item.quantity}</span>
              <span>{item.title}</span>
            </div>
            <span>{item.totalPrice}</span>
          </li>
        ))}
      </ul>
      <p className='flex gap-2 bg-orange-600 dark:bg-orange-600 dark:text-text-light text-text-dark p-4 rounded-lg text-xs items-center'><TriangleAlert /> Sus libros digitales serán enviados a su correo electrónico cuando realice el pago.</p>
    </div>
  )
}
