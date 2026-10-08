import React from "react";

export default function Sidebar({ activeTab, setActiveTab }) {
  const navLinks = [
    { id: "overview", label: "Dashboard Overview" },
    { id: "tables", label: "Table Management" },
    { id: "bookings", label: "Customer Bookings" },
  ];

  return (
    <aside className="w-full md:w-64 bg-[var(--color-primary-3)] border-r border-[var(--color-dark-text)]/20 p-6 flex flex-col justify-between">
      <div>
        <div className="mb-10">
          <h1 className="logo text-2xl font-bold tracking-wider">
            Relishly{" "}
            <span className="text-xs text-[var(--color-accent)] uppercase block font-sans">
              Admin Portal
            </span>
          </h1>
        </div>

        <nav className="flex flex-col gap-2">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => setActiveTab(link.id)}
              className={`w-full text-left py-3 px-4 rounded transition-all nav-text cursor-pointer ${
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
        <button className="button-3 mt-2 block cursor-pointer">Log Out</button>
      </div>
    </aside>
  );
}
