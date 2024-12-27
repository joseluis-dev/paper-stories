import { create } from 'zustand'

const useCartStore = create((set) => ({
  cart: [],
  total: 0,
  addToCart: (item) => set((state) => {
    if (state.cart.find((b) => b.id === item.id)) {
      return {
        cart: state.cart.map((b) => (b.id === item.id ? { ...b, quantity: ++b.quantity, totalPrice: b.quantity * item.price } : b)),
        total: state.total + item.price
      }
    }
    return {
      cart: [...state.cart, { ...item, quantity: 1, totalPrice: item.price }],
      total: state.total + item.price
    }
  }),
  removeFromCart: (item) => set((state) => ({
    cart: state.cart.filter((b) => b.id !== item.id),
    total: state.total - item.totalPrice
  })),
  clearCart: () => set({ cart: [] }),
  updateCart: (item, quantity) => set((state) => ({
    cart: state.cart.map((b) => (b.id === item.id ? { ...b, quantity, totalPrice: quantity * item.price } : b)),
    total: state.total + (quantity - item.quantity) * item.price
  }))
}))

export const useCart = () => {
  const { cart, addToCart, removeFromCart, clearCart, updateCart, total } = useCartStore()

  return {
    cart,
    total,
    addToCart,
    removeFromCart,
    clearCart,
    updateCart
  }
}