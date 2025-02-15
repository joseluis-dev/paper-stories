import { MyHoverCard } from '@/components/myHoverCard/MyHoverCard'
import { Button } from '@/components/ui/button'
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
import { ShoppingCart } from 'lucide-react'
import { HoverCartSummary } from '../hoverCartSummary/HoverCartSummary'
import { useNavigate } from 'react-router-dom'
import { useCart } from '@/hooks/useCart'

export const CartHoverButton = () => {
  const { totalItems } = useCart()
  const navigate = useNavigate()

  return (
    <MyHoverCard
      trigger={
        <Button
          id='cart_button'
          variant="link"
          className={`${navigationMenuTriggerStyle()} text-blue-500 relative`}
          onClick={() => navigate('/store/cart')}
        >
          <ShoppingCart />
          <span id='cart_count' className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-blue-100 transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">
            {totalItems}
          </span>
        </Button>
      }
    >
      <HoverCartSummary />
    </MyHoverCard>
  )
}
