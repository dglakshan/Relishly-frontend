import React, { useState } from "react";

export default function AddTableModal({ isOpen, onClose, onAddTable }) {
  const [newTable, setNewTable] = useState({
    id: "",
    seats: 2,
    location: "Indoor",
    status: "Available",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newTable.id.trim()) return;

    const formattedId = newTable.id.toLowerCase().includes("table")
      ? newTable.id
      : `Table #${newTable.id.padStart(2, "0")}`;

    onAddTable({
      ...newTable,
      id: formattedId,
      seats: Number(newTable.seats),
    });

    setNewTable({ id: "", seats: 2, location: "Indoor", status: "Available" });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex justify-center items-center z-50 p-4">
      <div className="bg-[var(--color-primary-3)] border border-[var(--color-dark-text)]/30 rounded-lg p-6 w-full max-w-md shadow-2xl space-y-6">
        <div className="flex justify-between items-center border-b border-[var(--color-dark-text)]/20 pb-4">
          <h3 className="sub-heading-4 font-bold text-[var(--color-secondary)]">
            Add New Table
          </h3>
          <button
            onClick={onClose}
            className="text-[var(--color-dark-text)] hover:text-white font-bold text-lg cursor-pointer"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wider mb-2 text-[var(--color-dark-text)]">
              Table Number / Name
            </label>
            <input
              type="text"
              placeholder="e.g. 06 or Table #06"
              value={newTable.id}
              onChange={(e) => setNewTable({ ...newTable, id: e.target.value })}
              required
              className="w-full bg-[var(--color-primary-2)] border border-[var(--color-dark-text)]/30 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-secondary)] text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider mb-2 text-[var(--color-dark-text)]">
                Seats Capacity
              </label>
              <input
                type="number"
                min="1"
                max="20"
                value={newTable.seats}
                onChange={(e) =>
                  setNewTable({ ...newTable, seats: e.target.value })
                }
                required
                className="w-full bg-[var(--color-primary-2)] border border-[var(--color-dark-text)]/30 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-secondary)] text-white"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider mb-2 text-[var(--color-dark-text)]">
                Location Area
              </label>
              <select
                value={newTable.location}
                onChange={(e) =>
                  setNewTable({ ...newTable, location: e.target.value })
                }
                className="w-full bg-[var(--color-primary-2)] border border-[var(--color-dark-text)]/30 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-secondary)] text-white"
              >
                <option value="Indoor">Indoor</option>
                <option value="Outdoor">Outdoor</option>
                <option value="VIP Room">VIP Room</option>
                <option value="Terrace">Terrace</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider mb-2 text-[var(--color-dark-text)]">
              Initial Status
            </label>
            <select
              value={newTable.status}
              onChange={(e) =>
                setNewTable({ ...newTable, status: e.target.value })
              }
              className="w-full bg-[var(--color-primary-2)] border border-[var(--color-dark-text)]/30 rounded px-4 py-2.5 text-sm focus:outline-none focus:border-[var(--color-secondary)] text-white"
            >
              <option value="Available">Available</option>
              <option value="Reserved">Reserved</option>
              <option value="Maintenance">Maintenance</option>
            </select>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-[var(--color-dark-text)]/20">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold border border-[var(--color-dark-text)]/30 rounded hover:bg-[var(--color-primary-2)] transition cursor-pointer text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="button-1 px-5 py-2 text-xs font-semibold rounded cursor-pointer"
            >
              Save Table
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
