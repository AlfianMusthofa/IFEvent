import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Main/Home'
import Admin from './pages/Admin/Events/Events'
import EventDetail from './pages/Main/EventDetail'
import ClassList from './pages/Main/ClassList'
import Report from './pages/Report/Report'
import HistoryDetail from './pages/Report/HistoryDetail'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import AdminLogin from './pages/Auth/AdminLogin'
import Events from './pages/Admin/Events/Events'
import Form from './pages/Admin/Events/Form'
import About from './pages/About/About'
import Partners from './pages/Partners/Partners'
import UserDashboard from './pages/UserDashboard/myEvent'
import Users from './pages/Admin/Users/Users'
import ReportAdmin from './pages/Admin/Report/Report'
import EventForm from './pages/Admin/Events/Form'
import ReportForm from './pages/Admin/Report/Form'
import MyProfile from './pages/UserDashboard/MyProfile'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/detail' element={<EventDetail />} />
            <Route path='/classlist' element={<ClassList />} />
            <Route path='/report' element={<Report />} />
            <Route path='/history-detail' element={<HistoryDetail />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/admin-login' element={<AdminLogin />} />
            <Route path='/dashboard' element={<ProtectedRoute> <Events /> </ProtectedRoute>} />
            <Route path='/dashboard/event/add' element={<Form />} />
            <Route path='/about' element={<About />} />
            <Route path='/partners' element={<Partners />} />
            <Route path='/user/dashboard' element={<UserDashboard />} />
            <Route path='/dashboard/users' element={<Users />} />
            <Route path='/dashboard/report' element={< ReportAdmin />} />
            <Route path='/dashboard/events/form' element={<EventForm />} />
            <Route path='/dashboard/history/form' element={<ReportForm />} />
            <Route path='/user/myprofile' element={<MyProfile />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App