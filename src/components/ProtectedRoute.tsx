import { Navigate } from 'react-router-dom'

const ProtectedRoute = ({ children }) => {
   const user = localStorage.getItem('admin');
   if (!user) return <Navigate to="/" replace />
   return children;
}

export default ProtectedRoute