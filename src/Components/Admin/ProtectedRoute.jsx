import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute({ allowedRole }) {
  // Retrieve token and user role from state/localStorage
  const token = localStorage.getItem("token");
  const userRole = localStorage.getItem("role"); // "admin" or "customer"

  if (!token) {
    // Redirect unauthenticated users to login
    return <Navigate to="/login" replace />;
  }

  if (userRole !== allowedRole) {
    // Redirect unauthorized customers to homepage or forbidden page
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
