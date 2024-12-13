import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Main/Home'
import Admin from './pages/Admin/Admin'
import EventDetail from './pages/Main/EventDetail'

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/detail' element={<EventDetail />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App