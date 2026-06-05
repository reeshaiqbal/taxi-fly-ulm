import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { FaPhoneAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-yellow-400 fixed w-full z-30 top-0">
      <div className="grid grid-cols-3 items-center mx-auto p-3">
        {/* Logo */}
        <div>
          <NavLink to="/" className="flex items-center">
            <img src={assets.logo} alt="Logo" className="h-10 w-auto mr-1" />
            <span className="text-xl font-bold tracking-tight">
              Taxi<span className="text-primary">Fly</span>Ulm
            </span>
          </NavLink>
        </div>

        {/* Nav Items Center */}
        <div className="flex justify-center space-x-6">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Services
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Contact
          </NavLink>
          <NavLink
            to="/reviews"
            className={({ isActive }) => (isActive ? "underline" : "")}
          >
            Reviews
          </NavLink>
        </div>
        {/* Right side buttons */}
        <div className="flex justify-end space-x-2">
          <a href="tel:+923048833023" className="bg-black text-white text-sm px-4 py-2 rounded-xl">
            Book Taxi
          </a>
          <a href="tel:+923048833023" className="flex items-center bg-black text-white text-sm px-4 py-2 rounded-xl space-x-2">
            <FaPhoneAlt className="w-4 h-4" />
            <span>Call Now</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
