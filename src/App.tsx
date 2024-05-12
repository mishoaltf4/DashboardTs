import './App.css'
import { Routes, Route} from 'react-router-dom'
import LayOut  from './components/LayOut.tsx'
import Dashboard  from './pages/Dashboard.tsx'
import Products from './pages/Products.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<LayOut />}>
          <Route index element={<Dashboard />} />
          <Route path='products' element={<Products />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
