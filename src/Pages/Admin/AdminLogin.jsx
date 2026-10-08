import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { loginRequest } from "../../../services/adminService";

export default function AdminLogin() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg("");

    try {
      const response = await loginRequest({ credentials: formData });
      if (response.data.success) {
        // Store JWT Auth Token and Admin Info
        localStorage.setItem("relishlyAuthToken", response.data.authToken);
        localStorage.setItem("relishlyAuthRole", "admin");
        localStorage.setItem("adminInfo", JSON.stringify(response.data.admin));

        // Navigate to Admin Dashboard
        navigate("/admin/dashboard");
      }
    } catch (error) {
      console.log(error);
      setErrorMsg(
        error.response?.data?.message ||
          "Invalid credentials. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-primary-2)] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-[var(--color-primary-3)] border border-[var(--color-dark-text)]/20 p-8 rounded-lg shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="logo text-3xl font-bold mb-2">Relishly</h1>
          <h2 className="sub-heading-3 uppercase tracking-wider">
            Admin Sign In
          </h2>
        </div>

        {errorMsg && (
          <div className="mb-6 p-3 bg-red-500/20 border border-red-500/50 text-red-300 text-xs rounded text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="paragraph-2 text-xs uppercase block mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="admin@relishly.com"
              className="w-full bg-[var(--color-primary-2)] border border-[var(--color-dark-text)]/30 py-3 px-4 text-[var(--color-primary)] outline-none focus:border-[var(--color-secondary)] transition-all rounded-none placeholder:text-gray-600"
            />
          </div>

          <div>
            <label className="paragraph-2 text-xs uppercase block mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full bg-[var(--color-primary-2)] border border-[var(--color-dark-text)]/30 py-3 px-4 text-[var(--color-primary)] outline-none focus:border-[var(--color-secondary)] transition-all rounded-none placeholder:text-gray-600"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="button-1 w-full justify-center mt-2 disabled:opacity-50"
          >
            {isSubmitting ? "Signing in..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="paragraph-2 text-xs">
            Need an admin account?{" "}
            <button
              onClick={() => navigate("/admin/register")}
              className="button-3 inline cursor-pointer text-[var(--color-secondary)]"
            >
              Register here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
