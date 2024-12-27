import App from '@/App'
import { Cart } from '@/pages/cart/Cart'
import { Detail } from '@/pages/detail/Detail'
import { Home } from '@/pages/home/Home'
import { Landing } from '@/pages/landing/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="store" element={<App />}>
          <Route index element={<Home />} />
          <Route path='books/:id' element={<Detail />} />
          <Route path='cart' element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
