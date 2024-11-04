// Header/MobileMenu.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { RiMenu3Line } from "react-icons/ri";
import SocialLinks from "./SocialLinks";
import UnlokThmify from "../../assets/UnlokThmify.png";

const MobileMenu = ({
  isMobileMenuOpen,
  toggleMobileMenu,
  closeMobileMenu,
  handleLogoClick,
  isMobileMenu = false,
}) => {
  return (
    <>
      <div
        className={`fixed top-0 right-0 z-50 bg-white flex flex-col items-start p-4 transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "transform translate-x-0"
            : "transform translate-x-full"
        }`}
        style={{ width: "100%", height: "100vh" }}
      >
        <div className="flex items-center justify-between w-full">
          <div
            onClick={handleLogoClick}
            className="flex items-center gap-2 cursor-pointer"
          >
            <img src={UnlokThmify} alt="Thmify Logo" width={40} />
          </div>
          <button
            onClick={toggleMobileMenu}
            aria-label="Close Mobile Menu"
            className="text-3xl"
          >
            <FaTimes />
          </button>
        </div>
        <nav className="w-full mt-8">
          <NavLink
            to="/pages/docs"
            className={({ isActive }) =>
              `block mb-4 cursor-pointer ${
                isActive ? "text-sky-700 font-bold" : "hover:underline"
              }`
            }
            onClick={closeMobileMenu}
          >
            Docs
          </NavLink>
          <NavLink
            to="/pages/buttons"
            className={({ isActive }) =>
              `block mb-4 cursor-pointer ${
                isActive ? "text-sky-700 font-bold" : "hover:underline"
              }`
            }
            onClick={closeMobileMenu}
          >
            Buttons
          </NavLink>
          <NavLink
            to="/pages/background"
            className={({ isActive }) =>
              `block mb-4 cursor-pointer ${
                isActive ? "text-sky-700 font-bold" : "hover:underline"
              }`
            }
            onClick={closeMobileMenu}
          >
            Background
          </NavLink>
          <NavLink
            to="/pages/colors"
            className={({ isActive }) =>
              `block mb-4 cursor-pointer ${
                isActive ? "text-sky-700 font-bold" : "hover:underline"
              }`
            }
            onClick={closeMobileMenu}
          >
            Colors
          </NavLink>
        </nav>
        <div className="flex items-center gap-3 p-2 mt-auto">
          <SocialLinks />
        </div>
      </div>

      {isMobileMenu && (
        <div className="absolute top-0 right-0 flex items-center p-2 pr-8 md:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle Mobile Menu">
            {isMobileMenuOpen ? (
              <FaTimes className="text-3xl" />
            ) : (
              <RiMenu3Line className="text-4xl" />
            )}
          </button>
        </div>
      )}
    </>
  );
};

export default MobileMenu;
