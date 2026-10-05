import React, { useState, useEffect } from "react";
import axios from "axios";
import { bookingRequest } from "../../services/customerService";

export default function BookTable() {
  // Form State matching backend requirements
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    date: "",
    time: "",
    duration: 1, // default 1 hour
    people: 1,
    message: "",
  });

  // Table selection & status state
  const [availableTables, setAvailableTables] = useState([]);
  const [selectedTables, setSelectedTables] = useState([]);
  const [isLoadingTables, setIsLoadingTables] = useState(false);

  // OTP Verification Modal State
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [otp, setOtp] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMsg, setFeedbackMsg] = useState({ type: "", text: "" });

  // Fetch Available Tables from Backend
  useEffect(() => {
    const fetchTables = async () => {
      setIsLoadingTables(true);
      try {
        // Option to call admin/get-all-tables or customer endpoint
        const response = await bookingRequest({ credentials: formData });
        if (response.data.success) {
          // Filter only available tables
          const unbooked = response.data.data.filter(
            (table) => table.bookingStatus === "available",
          );
          setAvailableTables(unbooked);
        }
      } catch (error) {
        console.error("Failed to fetch available tables:", error);
      } finally {
        setIsLoadingTables(false);
      }
    };

    fetchTables();
  }, []);

  // Handle Text/Number Input Changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Toggle Table Selection
  const toggleTableSelection = (tableNumber) => {
    setSelectedTables((prev) =>
      prev.includes(tableNumber)
        ? prev.filter((num) => num !== tableNumber)
        : [...prev, tableNumber],
    );
  };

  // Step 1: Submit Booking Form & Request OTP
  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    setFeedbackMsg({ type: "", text: "" });

    if (selectedTables.length === 0) {
      setFeedbackMsg({
        type: "error",
        text: "Please select at least one table from the available grid.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        date: formData.date,
        time: formData.time,
        duration: Number(formData.duration),
        people: Number(formData.people),
        tableNumbers: selectedTables,
        message: formData.message,
      };

      const response = await axios.post(`${API_BASE_URL}/booking`, payload);

      if (response.data.success) {
        setFeedbackMsg({
          type: "success",
          text: response.data.message,
        });
        setShowOtpModal(true); // Open OTP Verification popup
      }
    } catch (error) {
      setFeedbackMsg({
        type: "error",
        text: error.response?.data?.message || "Failed to initiate booking.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Step 2: Verify OTP & Confirm Booking
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFeedbackMsg({ type: "", text: "" });

    try {
      const response = await axios.post(`${API_BASE_URL}/confirm-booking`, {
        email: formData.email,
        enterdOtp: otp,
      });

      if (response.data.success) {
        setFeedbackMsg({
          type: "success",
          text: "Booking confirmed successfully!",
        });
        setShowOtpModal(false);

        // Reset Form
        setFormData({
          name: "",
          email: "",
          mobile: "",
          date: "",
          time: "",
          duration: 1,
          people: 1,
          message: "",
        });
        setSelectedTables([]);
        setOtp("");
      }
    } catch (error) {
      setFeedbackMsg({
        type: "error",
        text: error.response?.data?.message || "Invalid OTP. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="BookTable"
      className="bg-primary-3 text-white px-6 md:px-20 mx-auto py-10 lg:py-20 relative"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10 text-center">
          <h3 className="sub-heading text-secondary font-semibold uppercase tracking-wider mb-2">
            Reservation
          </h3>
          <h2 className="sub-heading-2 text-3xl md:text-5xl font-bold">
            Book a Table
          </h2>
        </div>

        {/* Global Feedback Messages */}
        {feedbackMsg.text && (
          <div
            className={`max-w-3xl mx-auto mb-6 p-4 rounded text-center text-sm font-medium ${
              feedbackMsg.type === "error"
                ? "bg-red-500/20 text-red-300 border border-red-500/50"
                : "bg-green-500/20 text-green-300 border border-green-500/50"
            }`}
          >
            {feedbackMsg.text}
          </div>
        )}

        {/* Form Section */}
        <form onSubmit={handleBookingSubmit} className="flex flex-col gap-6">
          {/* User Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="border border-dark-text/30 bg-transparent py-3 px-4 rounded-none focus:border-secondary outline-none transition-all placeholder:text-gray-400 text-white"
            />
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="border border-dark-text/30 bg-transparent py-3 px-4 rounded-none focus:border-secondary outline-none transition-all placeholder:text-gray-400 text-white"
            />
            <input
              type="text"
              name="mobile"
              required
              value={formData.mobile}
              onChange={handleInputChange}
              placeholder="Your Phone (10 digits)"
              className="border border-dark-text/30 bg-transparent py-3 px-4 rounded-none focus:border-secondary outline-none transition-all placeholder:text-gray-400 text-white"
            />
          </div>

          {/* Booking Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <input
              type="date"
              name="date"
              required
              value={formData.date}
              onChange={handleInputChange}
              className="border border-dark-text/30 bg-transparent py-3 px-4 rounded-none focus:border-secondary outline-none transition-all text-gray-300"
            />
            <input
              type="time"
              name="time"
              required
              value={formData.time}
              onChange={handleInputChange}
              className="border border-dark-text/30 bg-transparent py-3 px-4 rounded-none focus:border-secondary outline-none transition-all text-gray-300"
            />
            <input
              type="number"
              name="duration"
              min="1"
              max="5"
              required
              value={formData.duration}
              onChange={handleInputChange}
              placeholder="Duration (Hours)"
              className="border border-dark-text/30 bg-transparent py-3 px-4 rounded-none focus:border-secondary outline-none transition-all placeholder:text-gray-400 text-white"
            />
            <input
              type="number"
              name="people"
              min="1"
              required
              value={formData.people}
              onChange={handleInputChange}
              placeholder="# of people"
              className="border border-dark-text/30 bg-transparent py-3 px-4 rounded-none focus:border-secondary outline-none transition-all placeholder:text-gray-400 text-white"
            />
          </div>

          {/* Interactive Table Picker */}
          <div className="flex flex-col gap-2 my-2">
            <label className="text-sm font-medium text-gray-300">
              Select Available Table(s):
            </label>
            {isLoadingTables ? (
              <p className="text-gray-400 text-sm">
                Loading available tables...
              </p>
            ) : availableTables.length === 0 ? (
              <p className="text-yellow-400 text-sm">
                No tables currently available.
              </p>
            ) : (
              <div className="flex flex-wrap gap-3">
                {availableTables.map((table) => {
                  const isSelected = selectedTables.includes(table.tableNumber);
                  return (
                    <button
                      type="button"
                      key={table._id}
                      onClick={() => toggleTableSelection(table.tableNumber)}
                      className={`py-2 px-4 border text-sm font-semibold transition-all ${
                        isSelected
                          ? "bg-secondary text-black border-secondary"
                          : "border-gray-500 text-gray-300 hover:border-secondary"
                      }`}
                    >
                      Table #{table.tableNumber} ({table.tableType} -{" "}
                      {table.size} seats)
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Special Requests / Message"
            className="w-full border border-dark-text/30 bg-transparent py-3 px-4 rounded-none focus:border-secondary outline-none transition-all placeholder:text-gray-400 text-white resize-none"
          ></textarea>

          <div className="flex justify-center mt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="button-1 bg-secondary text-black font-semibold px-8 py-3 transition-all hover:bg-opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? "Processing..." : "Book a Table"}
            </button>
          </div>
        </form>
      </div>

      {/* OTP Verification Modal Overlay */}
      {showOtpModal && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center p-4 z-50">
          <div className="bg-gray-900 border border-gray-700 p-8 rounded-lg max-w-md w-full text-center shadow-xl">
            <h3 className="text-2xl font-bold mb-2 text-white">
              Enter Verification Code
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              We sent a 6-digit OTP code to{" "}
              <span className="text-secondary">{formData.email}</span>
            </p>

            <form onSubmit={handleOtpSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                required
                maxLength="6"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="123456"
                className="w-full text-center text-2xl tracking-widest bg-gray-800 border border-gray-600 py-3 rounded text-white focus:border-secondary outline-none"
              />

              <div className="flex justify-end gap-3 mt-4">
                <button
                  type="button"
                  onClick={() => setShowOtpModal(false)}
                  className="px-4 py-2 text-gray-400 hover:text-white transition-all text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-secondary text-black font-semibold rounded text-sm hover:bg-opacity-90 transition-all disabled:opacity-50"
                >
                  {isSubmitting ? "Verifying..." : "Confirm Booking"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
