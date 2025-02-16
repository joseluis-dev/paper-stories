import { Link } from 'react-router-dom'
import { CartList } from '../CartList/CartList'
import { ScanBarcode } from 'lucide-react'

export const CartSummary = ({ cart, total }) => {
  return (
    <div className='flex flex-col py-6'>
      <CartList items={cart}/>
      <div className='flex justify-end my-4 p-6'>
        <div className='flex justify-between w-full max-w-[580px]'>
          <p className='text-2xl'>Total:</p>
          <p className='text-2xl'>${total}</p>
        </div>
      </div>
      <Link id='payment-button' data-testid='payment-button' to={'/store/checkout'} className='flex items-center bg-primary rounded-lg p-2 text-text-dark dark:text-text-light justify-center gap-2 md:self-end w-full md:max-w-fit md:mx-6 hover:bg-primary/90'>
        <ScanBarcode /> Proceder al pago
      </Link>
    </div>
  )
}
