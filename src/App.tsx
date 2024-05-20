import './App.css'
import { Routes, Route} from 'react-router-dom'
import LayOut  from './components/LayOut.tsx'
import Dashboard  from './pages/Dashboard.tsx'
import Products from './pages/Products.tsx'
import Favorites from './pages/Favorites.tsx'
import Orders from './pages/Orders.tsx'
import Pricing from './pages/Pricing.tsx'
import CalendarPage from './pages/Calendar.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayOut />}>
          <Route index element={<Dashboard />} />
          <Route path='products' element={<Products />} />
          <Route path='favorites' element={<Favorites />} />
          <Route path='order-list' element={<Orders />} />
          <Route path='pricing' element={<Pricing />} />
          <Route path='calendar' element={<CalendarPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
