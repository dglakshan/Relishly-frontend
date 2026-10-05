import React from "react";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-primary-2 text-primary px-6 md:px-20 mx-auto py-10 lg:py-20 border-t border-dark-text/50">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Info */}
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-bold font-serif tracking-wider uppercase">
            Relishly
          </h2>
          <div className="text-gray-400 flex flex-col gap-2 text-sm italic">
            <p>No. 24, Galle Road,</p>
            <p>Colombo 03, 00300</p>
            <p>Sri Lanka</p>
            <p className="mt-4">
              <strong className="text-white not-italic">Phone:</strong> +94 11
              234 5678
            </p>
            <p>
              <strong className="text-white not-italic">Email:</strong>{" "}
              info@relishly.lk
            </p>
          </div>
          <div className="flex gap-3">
            <SocialIcon icon={<FaTwitter />} />
            <SocialIcon icon={<FaFacebookF />} />
            <SocialIcon icon={<FaInstagram />} />
            <SocialIcon icon={<FaLinkedinIn />} />
          </div>
        </div>

        {/* Column 2: Useful Links */}
        <div>
          <h4 className="text-lg font-bold mb-6 font-serif">Useful Links</h4>
          <ul className="flex flex-col gap-4 text-gray-400 text-sm">
            <a href="#Home">Home</a>
            <a href="#About">About</a>
            <a href="Menu">Menu</a>
            <a href="Gallery">Gallery</a>
            <a href="#Testimonials">Testimonials</a>
          </ul>
        </div>

        {/* Column 3: Our Services */}
        <div>
          <h4 className="text-lg font-bold mb-6 font-serif">Our Services</h4>
          <ul className="flex flex-col gap-4 text-gray-400 text-sm">
            <h4>Foods Delivery</h4>
            <h4>Online Reservation</h4>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div>
          <h4 className="text-lg font-bold mb-6 font-serif">Our Newsletter</h4>
          <p className="text-gray-400 text-sm mb-6 italic">
            Subscribe to our newsletter and receive the latest news about our
            products and services!
          </p>
          <form className="relative flex items-center">
            <input
              type="email"
              className="w-full bg-primary-3 border border-dark-text/10 py-2.5 px-4 rounded-full text-primary focus:outline-none focus:border-secondary transition-colors"
            />
            <button
              type="submit"
              className="absolute right-0 bg-secondary hover:bg-secondary/90 text- font-semibold py-2.5 px-6 rounded-full transition-all text-sm"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-20 pt-8 border-t border-gray-800/50 text-center text-sm">
        <p className="text-gray-400">
          © Copyright <strong className="text-white">Relishly</strong>. All
          Rights Reserved
        </p>
      </div>
    </footer>
  );
}

// Helper Components
const SocialIcon = ({ icon }) => (
  <a
    href="#"
    className="w-10 h-10 rounded-full bg-[#1a1814] flex items-center justify-center hover:bg-secondary hover:text-black transition-all border border-[#28251f]"
  >
    {icon}
  </a>
);
