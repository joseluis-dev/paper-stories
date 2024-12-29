import { useCart } from '@/hooks/useCart'
import { CartSummary } from '@/layouts/cartSummary/CartSummary'
import { EmptyCartAlert } from '@/layouts/emptyCartAlert/EmptyCartAlert'

export const Cart = () => {
  const { cart, total } = useCart()
  
  return (
    <>{cart.length > 0
      ? (<CartSummary cart={cart} total={total} />
      )
      : (
        <EmptyCartAlert />
      )}
    </>
  )
}
