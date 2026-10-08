export default function DashboardOverview({
  stats = [],
  bookings = [],
  onOpenAddTable,
  onNavigateBookings,
}) {
  return (
    <div className="space-y-8">
      {/* Top Bar Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[var(--color-dark-text)]/20 pb-6">
        <div>
          <h2 className="sub-heading-2">System Analytics</h2>
          <p className="paragraph-2">
            Live overview of table reservations and system status
          </p>
        </div>
        <button
          onClick={onOpenAddTable}
          className="button-1 self-start sm:self-auto cursor-pointer"
        >
          + Quick Add Table
        </button>
      </div>

      {/* Analytics Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[var(--spacing-grid-gap)]">
        {stats?.map((stat, idx) => (
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

      {/* Recent Reservations Table */}
      <div className="bg-[var(--color-primary-3)] border border-[var(--color-dark-text)]/20 rounded-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h3 className="sub-heading-4">Recent Reservation Requests</h3>
          <button
            onClick={onNavigateBookings}
            className="button-3 cursor-pointer hover:underline text-xs"
          >
            View All
          </button>
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
              {bookings?.slice(0, 3).map((item) => (
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
                      {item.tables?.map((t, i) => (
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
                    <button className="button-4 border border-[var(--color-secondary)] text-[var(--color-secondary)] hover:bg-[var(--color-secondary)] hover:text-black transition-all rounded px-3 py-1">
                      Manage
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
