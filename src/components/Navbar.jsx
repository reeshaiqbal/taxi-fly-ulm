import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {
  return (
    <nav className="bg-yellow-500 fixed w-full z-20 top-0 start-0 border-b border-default">
      <div className="flex flex-wrap items-center justify-between mx-auto p-4">
        <NavLink to="/">
          <img src={assets.logo} alt="Logo" className="h-7" />
        </NavLink>
        <div className="flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : ""
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : ""
            }
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : ""
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : ""
            }
          >
            FAQ
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "underline text-red-500" : ""
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
