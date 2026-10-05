import { useEffect, useState } from "react"; // 'use' ඉවත් කළා
import { DishIcon, MenuIcon } from "./icons";

const NavItems = [
  { name: "Home" },
  { name: "Offers" },
  { name: "About" },
  { name: "Menu" },
  { name: "Gallery" },
  { name: "Testimonials" },
];

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [hambugger, setHambugger] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleHambugger = () => {
    setHambugger(!hambugger);
  };

  return (
    <div
      className={`w-full h-fit py-3 px-6 md:px-20 mx-auto  flex items-center justify-between Nav-Effect  ${
        scrolled || hambugger
          ? "bg-primary-2 border-b border-secondary"
          : "bg-transparent"
      } Nav-Effect`}
    >
      {/* Logo */}
      <div className="logo flex items-center gap-2 justify-center">
        <a href="Home" className="logo">
          Relishly
        </a>
      </div>

      {/* Desktop Nav items */}
      <div className="hidden md:flex md:gap-x-8 lg:gap-x-12">
        {NavItems.map((item) => (
          <a
            key={item.name}
            href={`#${item.name}`}
            className="relative group w-fit hover:text-secondary nav-text Nav-Effect text-primary Capitalize tracking-widest"
          >
            {/* Hover bar at top */}
            <div className="absolute -top-2 w-full h-full flex justify-start">
              <div className="w-0 group-hover:w-5 h-0.5 bg-secondary  Nav-Effect" />
            </div>
            {item.name}
          </a>
        ))}
      </div>

      {/* Hamburger icon (Mobile Only) */}
      <button onClick={handleHambugger} className="md:hidden outline-none">
        <MenuIcon size={35} color="var(--color-secondary)" />
      </button>

      {/* Mobile Menu Dropdown */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden Nav-Effect ease-in-out ${
          hambugger ? "max-h-[400px] border-b border-secondary" : "max-h-0"
        }`}
      >
        <div className="w-full flex flex-col items-center justify-center gap-y-4 bg-primary-2 py-6 shadow-2xl">
          {NavItems.map((item) => (
            <a
              key={item.name}
              href={`#${item.name}`}
              onClick={() => setHambugger(false)}
              className=" group  justify-center hover:text-secondary  nav-text Nav-Effect text-white py-2 text-sm tracking-widest"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Action Button (Desktop Only) */}
      <div className="hidden md:flex">
        <a href="#BookTable" className="button-1">
          Book Table
        </a>
      </div>
    </div>
  );
}
