import { useCart } from '@/hooks/useCart'

export const CheckoutDetail = () => {
  const { cart, total } = useCart()
  return (
    <div className='w-full h-full max-h-[384px] flex flex-col gap-4'>
      <h1 className='font-bold text-lg'>Detalle:</h1>
      <p className='self-end'>Total: ${total}</p>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>{item.title} - {item.quantity} - ${item.totalPrice}</li>
        ))}
      </ul>
    </div>
  )
}
