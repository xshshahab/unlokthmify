import React from "react";
import { FaTimes } from "react-icons/fa";

const Preview9 = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 bg-gray-950 bg-opacity-90">
      <div className="relative w-[80%] h-[90vh] p-6 bg-slate-700 rounded-lg shadow-lg">
        <button
          className="absolute text-gray-600 transition-colors duration-300 top-2 right-2 hover:text-gray-400"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        <div className="relative z-[99] w-full h-full bg-white rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
          <div className="relative flex items-center justify-center w-full h-full p-4">
            <p className="text-sm text-slate-400">Preview Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview9;
