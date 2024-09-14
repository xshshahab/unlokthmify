import React from "react";
import { FaTimes } from "react-icons/fa";

const Preview1 = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 bg-opacity-90 transition-opacity duration-300">
      <div className="relative w-[80%] h-[90vh] p-6 bg-slate-700 rounded-lg shadow-lg">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-400 transition-colors duration-300"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        <div className="relative z-[99] rounded-lg shadow-lg overflow-hidden group w-full h-full">
          <div className="absolute inset-0 z-[-1] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
          <p className="flex w-full h-full text-center items-center justify-center text-slate-400 text-sm">
            Preview Content
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preview1;
