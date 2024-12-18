import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Main/Home'
import Admin from './pages/Admin/Admin'
import EventDetail from './pages/Main/EventDetail'
import ClassList from './pages/Main/ClassList'
import History from './pages/History/History'
import HistoryDetail from './pages/History/HistoryDetail'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import AdminLogin from './pages/Auth/AdminLogin'

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/detail' element={<EventDetail />} />
            <Route path='/classlist' element={<ClassList />} />
            <Route path='/history' element={<History />} />
            <Route path='/history-detail' element={<HistoryDetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/admin-login' element={<AdminLogin />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App