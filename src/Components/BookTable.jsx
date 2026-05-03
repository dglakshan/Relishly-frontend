import React from "react";

export default function BookTable() {
  return (
    <section
      id="BookTable"
      className="bg-primary-3 text-white px-6 md:px-20 mx-auto py-10 lg:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-10">
          <div className="flex flex-col w-full justify-center items-center gap-4 mb-2">
            <h3 className="sub-heading">Reservation</h3>
            <div className="w-fit h-fit flex items-center justify-center gap-0">
              <div className="w-6 h-0.5 bg-secondary" />
              <div className="w-2 h-2 bg-secondary" />
              <div className="w-6 h-0.5 bg-secondary" />
            </div>
            <h2 className="sub-heading-2">Book a Table</h2>
          </div>
        </div>

        {/* Form Section */}
        <form className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className=" border border-dark-text/30 py-3 px-4 rounded-none focus:border-secondary outline-none transition-all placeholder:text-gray-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className=" border border-dark-text/30 py-3 px-4 rounded-none focus:border-secondary outline-none transition-all placeholder:text-gray-600"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className=" border border-dark-text/30 py-3 px-4 rounded-none focus:border-secondary outline-none transition-all placeholder:text-gray-600"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <input
              type="date"
              className="border border-dark-text/30 py-3 px-4 rounded-none focus:border-secondary outline-none transition-all text-gray-600 appearance-none"
            />
            <input
              type="time"
              className="border border-dark-text/30 py-3 px-4 rounded-none focus:border-secondary outline-none transition-all text-gray-600 appearance-none"
            />
            <input
              type="number"
              placeholder="# of people"
              className="border border-dark-text/30 py-3 px-4 rounded-none focus:border-secondary outline-none transition-all placeholder:text-gray-600"
            />
          </div>

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full border border-dark-text/30 py-3 px-4 rounded-none focus:border-secondary outline-none transition-all placeholder:text-gray-600 resize-none"
          ></textarea>

          <div className="flex justify-center mt-6">
            <button type="submit" className="button-1">
              Book a Table
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
