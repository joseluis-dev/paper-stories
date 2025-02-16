import { CartItemCard } from '../cartItemCard/CartItemCard'

export const CartList = ({ items = [] }) => {
  return (
    <ul className='flex flex-col'>
      {items.map((item) => (
        <CartItemCard key={item.id} item={item}/>
      ))}
    </ul>
  )
}
