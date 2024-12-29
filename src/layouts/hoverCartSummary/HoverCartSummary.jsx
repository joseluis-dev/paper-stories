import { useCart } from '@/hooks/useCart'

export const HoverCartSummary = () => {
  const { cart, totalItems, total } = useCart()
  
  return (
    <div className="p-4">
      <h2 className="font-semibold mb-2">Resumen del Carrito</h2>
      {totalItems > 0 ? (
        <ul className='flex flex-col max-h-[384px] overflow-auto pr-2 text-sm'>
          {cart.map((item) => (
            <li key={item.id} className='flex justify-between py-4 border-b-[1px]'>
              <div className='flex gap-4'>
                <span>{item.quantity}</span>
                <span>{item.title}</span>
              </div>
              <span>${item.totalPrice}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">Tu carrito está vacío</p>
      )}
      <div className="flex justify-between font-semibold text-sm mt-4">
        <span>Total:</span>
        <span>${total ?? 0}</span>
      </div>
    </div>
  )
}
