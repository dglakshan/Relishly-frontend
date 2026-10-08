import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { registerRequest } from "../../../services/adminService";

export default function AdminRegister() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    mobile: "",
    password: "",
  });
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
      console.log(formData);
      const response = await registerRequest({ credentials: formData });
      if (response.data.success) {
        // Redirect to OTP verification passing state
        navigate("/admin/verify-otp", {
          state: { email: formData.email, type: "registration" },
        });
      }
    } catch (error) {
      setErrorMsg(
        error.response?.data?.message || "Registration failed. Try again.",
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
            Create Admin Account
          </h2>
        </div>

        {errorMsg && (
          <div className="mb-6 p-3 bg-red-500/20 border border-red-500/50 text-red-300 text-xs rounded text-center">
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="paragraph-2 text-xs uppercase block mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullname"
              required
              value={formData.fullname}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full bg-[var(--color-primary-2)] border border-[var(--color-dark-text)]/30 py-3 px-4 text-[var(--color-primary)] outline-none focus:border-[var(--color-secondary)] transition-all rounded-none placeholder:text-gray-600"
            />
          </div>

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
              Phone Number
            </label>
            <input
              type="text"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleChange}
              placeholder="0771234567"
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
            {isSubmitting ? "Registering..." : "Register & Send OTP"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="paragraph-2 text-xs">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/admin/login")}
              className="button-3 inline cursor-pointer text-[var(--color-secondary)]"
            >
              Sign In
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
