import React, { useState } from "react";
import DocsLeft from "./Left/DocsLeft";
import DocsRight from "./Right/DocsRight";
import { BiMenuAltLeft } from "react-icons/bi"; // Importing the react icon
import { Outlet } from "react-router-dom";

const Docs = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="container flex flex-col min-h-screen mx-10">
      {/* Space below the navbar */}
      <div className="relative flex flex-1 mt-12">
        {/* Menu icon for mobile view */}
        <div className="fixed left-0 z-20 sm:hidden top-12 bottom-2 ">
          <button
            onClick={toggleSidebar}
            className="p-2 text-gray-800 focus:outline-none"
          >
            {/* React Icon */}
            <BiMenuAltLeft className="w-6 h-6" />
          </button>
        </div>

        {/* DocsLeft (Sidebar) */}
        <DocsLeft isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* DocsRight (Content) */}
        {/* <DocsRight isSidebarOpen={isSidebarOpen} /> */}
        <div className="flex-1">
          <Outlet />{" "}
          {/* This will dynamically load the content based on the nested route */}
        </div>
      </div>
    </div>
  );
};

export default Docs;
