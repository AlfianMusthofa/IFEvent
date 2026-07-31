import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Main/Home";
import ClassList from "./pages/Main/ClassList";
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
import EventDetailNew from "./pages/Main/EventDetailNew";
import CheckInPage from "./pages/Admin/CheckinPage/CheckInPage";
import Article from "./pages/Article/Article";
import ArticleAdmin from "./pages/Admin/article/ArticleAdmin";
import ArticleDetail from "./pages/Article/ArticleDetail";
import CommentsDash from "./pages/Admin/comments/CommentsDash";
import VerifyOtp from "./pages/Auth/VerifyOtp";
import OrganizerPage from "./pages/Organizer/Organizer";
import AboutOrg from "./pages/Organizer/components/About";
import EventsOrg from "./pages/Organizer/components/Events";
import OrganizerSignUp from "./pages/Auth/OrganizerSignUp";
import LoginPage from "./pages/Auth/LoginPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events/:slug" element={<EventDetailNew />} />
        <Route path="/events" element={<ClassList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-organizer" element={<OrganizerSignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/test" element={<EventDetailNew />} />
        <Route path="/checkin" element={<CheckInPage />} />
        <Route path="/article" element={<Article />} />
        <Route path="/article/:slug" element={<ArticleDetail />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/me/profile" element={<UserDashboard />} />
        </Route>

        <Route path="/organizer/:slug" element={<OrganizerPage />}>
          <Route index element={<Navigate to="about" replace />} />
          <Route path="about" element={<AboutOrg />} />
          <Route path="events" element={<EventsOrg />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="events" element={<Events />} />
          <Route path="categories" element={<Categories />} />
          <Route path="mentors" element={<Mentors />} />
          <Route path="article" element={<ArticleAdmin />} />
          <Route path="comments" element={<CommentsDash />} />
        </Route>

        <Route path="/admin/event-form" element={<CreateEvent />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
