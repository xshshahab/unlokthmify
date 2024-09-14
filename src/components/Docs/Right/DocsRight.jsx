import React from "react";
import { Outlet } from "react-router-dom"; // Import Outlet for nested routing

const DocsRight = ({ isSidebarOpen }) => {
  return (
    <div
      className={`w-full container mx-auto  mt-4 bg-white p-4 ${
        isSidebarOpen ? "z-10" : "mr-10"
      }`}
    >
      <Outlet /> {/* This will load the specific content based on the route */}
    </div>
  );
};

export default DocsRight;
