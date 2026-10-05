import React, { useState } from "react";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  // Sample Analytics Metrics
  const stats = [
    { title: "Total Bookings", value: "128", change: "+12% this week" },
    { title: "Pending OTPs", value: "14", change: "Requires verification" },
    { title: "Active Tables", value: "18 / 24", change: "75% Occupancy" },
    { title: "Cancelled Bookings", value: "3", change: "-2% from last week" },
  ];

  // Sample Booking Table Data matching backend schemas
  const bookings = [
    {
      id: "BK-1092",
      customer: "Amara Perera",
      email: "amara@gmail.com",
      tables: ["Table #01", "Table #02"],
      date: "2026-10-06",
      time: "19:30",
      status: "confirmed",
    },
    {
      id: "BK-1093",
      customer: "Kavinda Silva",
      email: "kavinda@yahoo.com",
      tables: ["Table #05"],
      date: "2026-10-06",
      time: "20:00",
      status: "pending",
    },
    {
      id: "BK-1094",
      customer: "Sarah Jenkins",
      email: "sarah.j@outlook.com",
      tables: ["Table #12"],
      date: "2026-10-07",
      time: "18:00",
      status: "confirmed",
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--color-primary-2)] text-[var(--color-primary)] font-sans flex flex-col md:flex-row">
      {/* Sidebar Component */}
      <aside className="w-full md:w-64 bg-[var(--color-primary-3)] border-r border-[var(--color-dark-text)]/20 p-6 flex flex-col justify-between">
        <div>
          {/* Logo Brand */}
          <div className="mb-10">
            <h1 className="logo text-2xl font-bold tracking-wider">
              Relishly{" "}
              <span className="text-xs text-[var(--color-accent)] uppercase block font-sans">
                Admin Portal
              </span>
            </h1>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2">
            {[
              { id: "overview", label: "Dashboard Overview" },
              { id: "tables", label: "Table Management" },
              { id: "bookings", label: "Customer Bookings" },
              { id: "settings", label: "Settings" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => setActiveTab(link.id)}
                className={`w-full text-left py-3 px-4 rounded transition-all nav-text ${
                  activeTab === link.id
                    ? "bg-[var(--color-secondary)] text-[var(--color-primary-2)] font-semibold"
                    : "text-[var(--color-dark-text)] hover:bg-[var(--color-primary-2)] hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="pt-6 border-t border-[var(--color-dark-text)]/20">
          <p className="paragraph-2 text-xs">Logged in as Admin</p>
          <button className="button-3 mt-2 block cursor-pointer">
            Log Out
          </button>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 p-6 md:p-10 space-y-8 overflow-y-auto">
        {/* Top Bar Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-dark-text)]/20 pb-6">
          <div>
            <h2 className="sub-heading-2">System Analytics</h2>
            <p className="paragraph-2">
              Live overview of table reservations and system status
            </p>
          </div>
          <button className="button-1 self-start sm:self-auto">
            + Quick Add Table
          </button>
        </div>

        {/* 1. Analytics Cards Metric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-grid-gap)]">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[var(--color-primary-3)] border border-[var(--color-dark-text)]/20 p-6 rounded-lg shadow-lg flex flex-col justify-between"
            >
              <span className="paragraph-2 text-sm">{stat.title}</span>
              <div className="my-3">
                <span className="sub-heading-7">{stat.value}</span>
              </div>
              <span className="text-xs text-[var(--color-accent)] font-medium">
                {stat.change}
              </span>
            </div>
          ))}
        </div>

        {/* 2. Customer Bookings Table Widget */}
        <div className="bg-[var(--color-primary-3)] border border-[var(--color-dark-text)]/20 rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="sub-heading-4">Recent Reservation Requests</h3>
            <button className="button-3">View All</button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-[var(--color-dark-text)]/20 text-[var(--color-secondary)] uppercase text-xs tracking-wider">
                  <th className="py-3 px-4">Booking ID</th>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Reserved Tables</th>
                  <th className="py-3 px-4">Date & Time</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-dark-text)]/10 text-sm">
                {bookings.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-[var(--color-primary-2)]/50 transition-colors"
                  >
                    <td className="py-4 px-4 font-mono text-[var(--color-accent)]">
                      {item.id}
                    </td>
                    <td className="py-4 px-4">
                      <div className="font-semibold">{item.customer}</div>
                      <div className="text-xs text-[var(--color-dark-text)]">
                        {item.email}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-1 flex-wrap">
                        {item.tables.map((t, i) => (
                          <span
                            key={i}
                            className="bg-[var(--color-primary-2)] border border-[var(--color-dark-text)]/30 text-xs px-2 py-0.5 rounded"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div>{item.date}</div>
                      <div className="text-xs text-[var(--color-dark-text)]">
                        {item.time}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <span
                        className={`inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                          item.status === "confirmed"
                            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                            : "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-right">
                      <button className="button-4 border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-black transition-all rounded">
                        Manage
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
