import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminRegister from "./Pages/Admin/AdminRegister";
import AdminOtpVerify from "./Pages/Admin/AdminOtpVerify";
import Home from "./Pages/Home";
import ProtectedRoute from "./Components/Admin/ProtectedRoute";
import TableManagement from "./Pages/Admin/TableManagement";
import CustomerBookings from "./Pages/Admin/CustomerBookings";
import DashboardOverview from "./Pages/Admin/AdminDashboard";

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
        {/* <Route
          element={<ProtectedRoute allowedRole={["admin", "superadmin"]} />}
        > */}
        <Route path="/admin/dashboard" element={<DashboardOverview />} />
        <Route path="/admin" element={<DashboardOverview />} />
        <Route path="/admin/tables" element={<TableManagement />} />
        <Route path="/admin/bookings" element={<CustomerBookings />} />
        {/* </Route> */}

        {/* Fallback / 404 Route */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
