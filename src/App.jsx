import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Components/Admin/AdminLogin";
import AdminRegister from "./Components/Admin/AdminRegister";
import AdminOtpVerify from "./Components/Admin/AdminOtpVerify";
import AdminDashboard from "./Components/Admin/AdminDashboard";
import Home from "./Pages/Home";
import ProtectedRoute from "./Components/Admin/ProtectedRoute";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Customer Routes */}
        <Route path="/" element={<Home />} />
        {/* <Route path="/view-booking" element={<ViewBooking />} /> */}

        {/* Public Admin Auth Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={<AdminRegister />} />
        <Route path="/admin/verify-otp" element={<AdminOtpVerify />} />

        {/* Protected Admin Routes */}
        <Route element={<ProtectedRoute allowedRole="admin" />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Route>

        {/* Fallback / 404 Route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
