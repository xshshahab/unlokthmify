import React from "react";
import { FaTimes } from "react-icons/fa";

const Preview = ({ onClose }) => {
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
          {/* Bg Start Here */}
          <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#e0f7fa_0.3,transparent_0.3),linear-gradient(to_bottom,#e0f7fa_0.3,transparent_0.3)] bg-[size:6rem_4rem]">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#ffb3b3,transparent)]"></div>
          </div>
          {/* Bg Start End */}
          <p className="flex items-center justify-center w-full h-full text-sm text-center text-slate-400">
            Preview Content
          </p>
        </div>
      </div>
    </div>
  );
};

export default Preview;
