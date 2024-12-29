import { AlertMessage } from '@/components/alertMessage/AlertMessage'
import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'

export const EmptyCartAlert = () => {
  return (
    <div className="flex h-full w-full justify-center items-center">
      <div className="flex content-fit">
        <AlertMessage
          title='Ups. !!'
          description={
            <div className='flex gap-4'>
              <div className='flex flex-col py-4'>
                <p>Aún no has añadido libros en tu carrito !!</p>
                <p>Ve a la tienda y agrega unos cuantos.</p>
              </div>
              <div className='flex justify-center items-center'>
                <Link to='/store' className='flex h-fit items-center bg-primary rounded-lg p-2 text-text-dark dark:text-text-light justify-center gap-2 hover:bg-primary/90'>
                  <ShoppingBag /> Ir a la tienda
                </Link>
              </div>
            </div>
          }
          icon={<ShoppingBag className="h-5 w-5 text-red-500"/>}
        />
      </div>
    </div>
  )
}
