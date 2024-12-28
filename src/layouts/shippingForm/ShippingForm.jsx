import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { CreditCard } from 'lucide-react'

export const ShippingForm = () => {
  return (
    <div className='w-full h-full flex flex-col gap-4'>
      <h1>Información de Envío</h1>
      <form className='flex flex-col gap-2'>
        <Input type="text" placeholder="Nombre"/>
        <Input type="text" placeholder="Apellido"/>
        <Input type="email" placeholder="Email"/>
        <Input type="text" placeholder="Dirección"/>
        <Input type="text" placeholder="Ciudad"/>
        <Input type="text" placeholder="Código Postal"/>
        <Input type="text" placeholder="Teléfono"/>
        <Button>
          <CreditCard /> Pagar
        </Button>
      </form>
    </div>
  )
}
