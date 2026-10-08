import React from "react";

export default function TableManagement({ tables, onOpenAddTable }) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-dark-text)]/20 pb-6">
        <div>
          <h2 className="sub-heading-2">Table Management</h2>
          <p className="paragraph-2">
            Overview and layout control of all restaurant tables
          </p>
        </div>
        <button
          onClick={onOpenAddTable}
          className="button-1 self-start sm:self-auto cursor-pointer"
        >
          + Add New Table
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tables.map((table, idx) => (
          <div
            key={idx}
            className="bg-[var(--color-primary-3)] border border-[var(--color-dark-text)]/20 rounded-lg p-6 flex flex-col justify-between shadow-lg"
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="sub-heading-4 font-bold">{table.id}</h3>
                <p className="text-xs text-[var(--color-dark-text)] mt-1">
                  {table.location} • {table.seats} Seats
                </p>
              </div>
              <span
                className={`px-2.5 py-1 text-xs rounded-full font-semibold uppercase ${
                  table.status === "Available"
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30"
                    : table.status === "Reserved"
                      ? "bg-amber-500/10 text-amber-400 border border-amber-500/30"
                      : "bg-rose-500/10 text-rose-400 border border-rose-500/30"
                }`}
              >
                {table.status}
              </span>
            </div>

            <div className="flex gap-2 mt-6">
              <button className="flex-1 py-1.5 px-3 border border-[var(--color-dark-text)]/30 hover:border-[var(--color-secondary)] text-xs font-semibold rounded transition cursor-pointer">
                Edit
              </button>
              <button className="flex-1 py-1.5 px-3 bg-[var(--color-primary-2)] hover:bg-rose-900/50 hover:text-rose-300 text-xs font-semibold rounded transition cursor-pointer">
                Disable
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
