import React from "react";
import { FaTimes } from "react-icons/fa";

const Preview13 = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 bg-gray-950 bg-opacity-90">
      <div className="relative w-[80%] h-[90vh] p-6 bg-white rounded-lg shadow-lg">
        <button
          className="absolute text-gray-600 transition-colors duration-300 top-2 right-2 hover:text-gray-400"
          onClick={onClose}
        >
          <FaTimes size={20} />
        </button>

        <div className="relative z-[99] w-full h-full rounded-lg overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
          <p className="flex items-center justify-center w-full h-full text-sm text-center text-slate-400">
            Preview Content
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preview13;
