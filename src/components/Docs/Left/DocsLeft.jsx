import React from "react";
import Updates from "../components/Updates";
import { Link } from "react-router-dom";

const DocsLeft = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <>
      {/* Left Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0 fixed inset-y-0 top-14 left-0 w-60 md:w-1/4 md:mt-4 bg-gray-50 md:bg-white p-4 transform transition-transform duration-300 ease-in-out z-30 sm:static`}
      >
        <Updates />

        <ul className="mt-2 space-y-3">
          <li>
            <Link
              className="font-semibold text-slate-800"
              to="inspired"
              onClick={toggleSidebar}
            >
              Inspired
            </Link>
          </li>
          <li>
            <Link to="" onClick={toggleSidebar}>
              Getting Started
            </Link>
          </li>
        </ul>
      </div>

      {/* Overlay when sidebar is open */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-20 sm:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default DocsLeft;
