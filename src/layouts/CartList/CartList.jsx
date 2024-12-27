import { CartItemCard } from '../cartItemCard/CartItemCard'

export const CartList = ({ items = [] }) => {
  return (
    <div className='flex flex-col'>
      {items.map((item) => (
        <CartItemCard key={item.id} item={item}/>
      ))}
    </div>
  )
}
