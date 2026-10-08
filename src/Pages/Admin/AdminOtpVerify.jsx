import React, { useState } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { otpVerificationRequest } from "../../../services/adminService";

export default function AdminOtpVerify() {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve email and action type passed from Register or Booking page
  const email = location.state?.email || "";
  const type = location.state?.type || "registration";

  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [msg, setMsg] = useState({ type: "", text: "" });

  const handleVerify = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMsg({ type: "", text: "" });

    try {
      const response = await otpVerificationRequest({
        credentials: { email, otp, type, role: "admin" },
      });

      if (response.data.success) {
        setMsg({
          type: "success",
          text: response.data.message || "OTP verified successfully!",
        });

        // Redirect to Login page after successful registration verification
        setTimeout(() => {
          navigate("/admin/login");
        }, 1500);
      }
    } catch (error) {
      setMsg({
        type: "error",
        text: error.response?.data?.message || "Invalid or expired OTP code.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--color-primary-2)] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md bg-[var(--color-primary-3)] border border-[var(--color-dark-text)]/20 p-8 rounded-lg shadow-2xl text-center">
        <h1 className="logo text-3xl font-bold mb-2">Relishly</h1>
        <h2 className="sub-heading-3 uppercase tracking-wider mb-2">
          Verify OTP Code
        </h2>

        <p className="paragraph-2 text-xs mb-6">
          Verification code sent to{" "}
          <span className="text-[var(--color-secondary)]">
            {email || "your email"}
          </span>
        </p>

        {msg.text && (
          <div
            className={`mb-6 p-3 text-xs rounded text-center border ${
              msg.type === "error"
                ? "bg-red-500/20 border-red-500/50 text-red-300"
                : "bg-green-500/20 border-green-500/50 text-green-300"
            }`}
          >
            {msg.text}
          </div>
        )}

        <form onSubmit={handleVerify} className="flex flex-col gap-6">
          <input
            type="text"
            required
            maxLength="6"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="123456"
            className="w-full text-center text-3xl tracking-widest bg-[var(--color-primary-2)] border border-[var(--color-dark-text)]/30 py-3 rounded text-[var(--color-primary)] focus:border-[var(--color-secondary)] outline-none"
          />

          <button
            type="submit"
            disabled={isSubmitting || !otp}
            className="button-1 w-full justify-center disabled:opacity-50"
          >
            {isSubmitting ? "Verifying..." : "Verify OTP"}
          </button>
        </form>

        <div className="mt-6">
          <button
            onClick={() => navigate("/admin/login")}
            className="button-3 cursor-pointer"
          >
            Back to Login
          </button>
        </div>
      </div>
    </div>
  );
}
