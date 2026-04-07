import { NavLink } from "react-router-dom";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 dark:bg-black/90 backdrop-blur-md shadow-sm">

      <div className="flex items-center justify-between px-4 md:px-8 py-4">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <img src={logo} className="w-8 h-8 rounded-full object-cover" />
          <div>
            <h1 className="text-sm md:text-lg font-semibold">Goa Cab</h1>
            <p className="text-[10px] md:text-xs text-gray-500 dark:text-gray-400">
              📍 Candolim, North Goa
            </p>
          </div>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <NavLink to="/" end>About</NavLink>
          <NavLink to="/places">Places</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">

          <ThemeToggle />

          <a
            href="https://wa.me/919823771051"
            className="hidden md:block border border-black dark:border-white px-4 py-1.5 rounded-full text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Book Now
          </a>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-xl"
          >
            ☰
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-black px-6 py-6 space-y-4 text-center shadow-md">

          <NavLink to="/" onClick={() => setMenuOpen(false)}>About</NavLink>
          <NavLink to="/places" onClick={() => setMenuOpen(false)}>Places</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink>

          <a
            href="https://wa.me/919823771051"
            className="block border border-black dark:border-white py-2 rounded-full mt-4"
          >
            Book Now
          </a>

        </div>
      )}
    </nav>
  );
};

export default Navbar;