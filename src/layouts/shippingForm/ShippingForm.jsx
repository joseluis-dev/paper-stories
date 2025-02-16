import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useCart } from '@/hooks/useCart'
import { CreditCard } from 'lucide-react'
import { useForm } from 'react-hook-form'

export const ShippingForm = ({ setSuccess, setOpen }) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const { cart } = useCart()

  const onSubmit = () => {
    if (cart.length > 0) {
      setSuccess(true)
      reset()
    } else {
      setSuccess(false)
    }
    setOpen(true)
  }

  return (
    <div className='w-full h-full flex flex-col gap-4'>
      <h1>Información de Envío</h1>
      <form className='flex flex-col gap-2' data-testid='shipping_form' onSubmit={handleSubmit(onSubmit)}>
        <Label htmlFor="name">Nombre</Label>
        <Input id='input_name' data-testid='input_name' type="text"  {...register('name', { required: { message: 'Obligatorio', value: true } })}/>
        {errors.name && <span className='text-red-500'>{errors.name.message}</span>}
        <Label htmlFor="lastname">Apellido</Label>
        <Input id='input_lastname' data-testid='input_lastname' type="text"  {...register('lastname', { required:{ message: 'Obligatorio', value: true } })}/>
        {errors.lastname && <span className='text-red-500'>{errors.lastname.message}</span>}
        <Label htmlFor="email">Email</Label>
        <Input id='input_email' data-testid='input_email' type="email"  {...register('email', { required:{ message: 'Obligatorio', value: true } })}/>
        {errors.email && <span className='text-red-500'>{errors.email.message}</span>}
        <Label htmlFor="direction">Dirección</Label>
        <Input id='input_direction' data-testid='input_direction' type="text"  {...register('direction', { required:{ message: 'Obligatorio', value: true } })}/>
        {errors.direction && <span className='text-red-500'>{errors.direction.message}</span>}
        <Label htmlFor="city">Ciudad</Label>
        <Input id='input_city' data-testid='input_city' type="text"  {...register('city', { required:{ message: 'Obligatorio', value: true } })}/>
        {errors.city && <span className='text-red-500'>{errors.city.message}</span>}
        <Label htmlFor="codPostal">Código Postal</Label>
        <Input id='input_codPostal' data-testid='input_codPostal' type="text" {...register('codPostal')}/>
        <Label htmlFor="phone">Teléfono</Label>
        <Input id='input_phone' data-testid='input_phone' type="text"  {...register('phone', { required:{ message: 'Obligatorio', value: true } })}/>
        {errors.phone && <span className='text-red-500'>{errors.phone.message}</span>}
        <Button id='button_pagar' data-testid='button_pagar' type='submit'>
          <CreditCard /> Pagar
        </Button>
      </form>
    </div>
  )
}
