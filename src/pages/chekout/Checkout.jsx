import { Separator } from '@/components/ui/separator'
import { CheckoutDetail } from '@/layouts/ckeckoutDetail/CheckoutDetail'
import { ShippingForm } from '@/layouts/shippingForm/ShippingForm'

export const Checkout = () => {
  return (
    <div className='flex w-full h-full items-center'>
      <div className="flex w-full gap-4">
        <CheckoutDetail />
        <Separator orientation='vertical' className='h-96' />
        <ShippingForm />
      </div>
    </div>
  )
}
