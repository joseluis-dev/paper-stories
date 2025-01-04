import { DialogModal } from '@/components/dialogModal/DialogModal'
import { Separator } from '@/components/ui/separator'
import { useCart } from '@/hooks/useCart'
import { CheckoutDetail } from '@/layouts/ckeckoutDetail/CheckoutDetail'
import { ShippingForm } from '@/layouts/shippingForm/ShippingForm'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Checkout = () => {
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const [success, setSuccess] = useState(false)
  const { clearCart } = useCart()

  const handleOpenChange = (isOpen) => {
    setOpen(isOpen)
    if (!isOpen) {
      clearCart()
      success && navigate('/store')
    }
  }

  return (
    <div className='flex w-full h-full items-center'>
      <div className="flex w-full gap-4 md:flex-row flex-col justify-center items-center">
        <CheckoutDetail />
        <Separator orientation='vertical' className='h-96 hidden md:block' />
        <Separator orientation='horizontal' className='block md:hidden' />
        <ShippingForm setSuccess={setSuccess} setOpen={setOpen}/>
        <DialogModal open={open} onOpenChange={handleOpenChange} success={success}/>
      </div>
    </div>
  )
}
