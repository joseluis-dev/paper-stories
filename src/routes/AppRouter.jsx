import App from '@/App'
import { Home } from '@/pages/home/Home'
import { Landing } from '@/pages/landing/Landing'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="home" element={<App />}>
          <Route index element={<Home />} />
          <Route path='cart' element={<div>Cart</div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
