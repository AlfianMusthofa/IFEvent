import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Main/Home";
import EventDetail from "./pages/Main/EventDetail";
import ClassList from "./pages/Main/ClassList";
import History from "./pages/History/History";
import HistoryDetail from "./pages/History/HistoryDetail";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import About from "./pages/About/About";
import Partners from "./pages/Partners/Partners";
import UserDashboard from "./pages/UserDashboard/UserDashboard";
import ProtectedRoute from "./components/PrivateRoute";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/Admin/dashboard/Dashboard";
import Users from "./pages/Admin/users/Users";
import Events from "./pages/Admin/events/Events";
import Categories from "./pages/Admin/categories/Categories";
import Mentors from "./pages/Admin/mentors/Mentors";
import CreateEvent from "./pages/Admin/events/CreateEvent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:slug" element={<EventDetail />} />
        <Route path="/events" element={<ClassList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/blog" element={<History />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/me/profile" element={<UserDashboard />} />
          <Route path="/history-detail" element={<HistoryDetail />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="events" element={<Events />} />
          <Route path="categories" element={<Categories />} />
          <Route path="mentors" element={<Mentors />} />
        </Route>

        <Route path="/admin/event-form" element={<CreateEvent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
