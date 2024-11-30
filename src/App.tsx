import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Admin />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App