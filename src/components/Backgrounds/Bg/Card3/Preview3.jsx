import React from "react";
import { FaTimes } from "react-icons/fa";

const Preview3 = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 bg-gray-950 bg-opacity-90">
      <div className="relative w-[80%] h-[90vh] p-6 bg-slate-700 rounded-lg shadow-lg">
        <button
          className="absolute text-gray-600 transition-colors duration-300 top-2 right-2 hover:text-gray-400"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        <div className="relative z-[99] rounded-lg shadow-lg overflow-hidden group w-full h-full">
          <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
          <p className="flex items-center justify-center w-full h-full text-sm text-center text-slate-400">
            Preview Content
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preview3;
