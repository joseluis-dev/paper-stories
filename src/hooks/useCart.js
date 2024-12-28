import { create } from 'zustand'

const useCartStore = create((set) => ({
  cart: [],
  total: 0,
  addToCart: (item) => set((state) => {
    if (state.cart.find((b) => b.id === item.id)) {
      return {
        cart: state.cart.map((b) => (b.id === item.id ? { ...b, quantity: ++b.quantity, totalPrice: (b.quantity * item.price).toFixed(2) } : b)),
        total: (parseFloat(state.total) + item.price).toFixed(2)
      }
    }
    return {
      cart: [...state.cart, { ...item, quantity: 1, totalPrice: (item.price).toFixed(2) }],
      total: (parseFloat(state.total) + item.price).toFixed(2)
    }
  }),
  removeFromCart: (item) => set((state) => ({
    cart: state.cart.filter((b) => b.id !== item.id),
    total: (parseFloat(state.total) - parseFloat(item.totalPrice)).toFixed(2)
  })),
  clearCart: () => set({ cart: [] }),
  updateCart: (item, quantity) => set((state) => ({
    cart: state.cart.map((b) => (b.id === item.id ? { ...b, quantity, totalPrice: (quantity * item.price).toFixed(2) } : b)),
    total: (parseFloat(state.total) + (quantity - item.quantity) * item.price).toFixed(2)
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