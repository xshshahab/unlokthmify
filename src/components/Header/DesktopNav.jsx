import React from "react";
import { NavLink } from "react-router-dom";
import SocialLinks from "./SocialLinks";

const DesktopNav = () => {
  return (
    <div className="hidden md:flex items-center gap-5 text-md font-[500]">
      <NavLink
        to="/pages/docs"
        className={({ isActive }) =>
          `cursor-pointer ${
            isActive ? "text-sky-700 font-bold" : "hover:text-sky-700"
          }`
        }
      >
        Docs
      </NavLink>

      <NavLink
        to="/pages/buttons"
        className={({ isActive }) =>
          `cursor-pointer ${
            isActive ? "text-sky-700 font-bold" : "hover:text-sky-700"
          }`
        }
      >
        Buttons
      </NavLink>
      <NavLink
        to="/pages/background"
        className={({ isActive }) =>
          `cursor-pointer ${
            isActive ? "text-sky-700 font-bold" : "hover:text-sky-700"
          }`
        }
      >
        Background
      </NavLink>
      <div className="opacity-25 text-slate-900">|</div>
      <SocialLinks />
    </div>
  );
};

export default DesktopNav;
