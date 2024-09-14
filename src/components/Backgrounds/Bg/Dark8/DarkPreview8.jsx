import React from "react";
import { FaTimes } from "react-icons/fa";

const DarkPreview8 = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 bg-gray-950 bg-opacity-90">
      <div className="relative w-[80%] h-[90vh] p-6 bg-slate-800 rounded-lg shadow-lg">
        <button
          className="absolute text-gray-400 transition-colors duration-300 top-2 right-2 hover:text-gray-200"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        <div className="relative z-[99] w-full h-full bg-slate-900 rounded-lg overflow-hidden">
          <div className="relative h-full w-full bg-slate-950">
            <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
            <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
          </div>
          <div className="relative flex items-center justify-center w-full h-full p-4">
            <p className="text-sm text-slate-400">Preview Content</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkPreview8;
