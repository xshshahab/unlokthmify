import React from "react";
import { RxCopy } from "react-icons/rx";
import toast from "react-hot-toast";

const Btn37 = () => {
  const handleCopy = () => {
    const code = `<button className="relative px-6 py-3 font-semibold text-gray-900 transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-lg shadow-md group hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
          <span className="absolute inset-0 w-full h-full transition-transform transform scale-0 rounded-lg bg-gradient-to-r from-green-200 to-teal-300 group-hover:scale-100 opacity-30"></span>
          <span className="relative z-10">Hover me</span>
        </button>`;
    navigator.clipboard.writeText(code).then(() => {
      toast.success("👏 Copied to clipboard!");
    });
  };

  return (
    <div className="relative flex flex-col items-center justify-between show">
      <div
        id="buttonwrapper"
        className="bg-[#dadada2f] rounded-md flex items-center justify-center w-full h-36 md:w-full md:h-48 relative"
      >
        <button className="relative px-6 py-3 font-semibold text-gray-900 transition-all duration-300 ease-in-out bg-white border border-gray-300 rounded-lg shadow-md group hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400">
          <span className="absolute inset-0 w-full h-full transition-transform transform scale-0 rounded-lg bg-gradient-to-r from-green-200 to-teal-300 group-hover:scale-100 opacity-30"></span>
          <span className="relative z-10">Hover me</span>
        </button>

        <span
          onClick={handleCopy}
          className="absolute top-0 z-10 p-3 cursor-pointer hover:text-slate-950 text-slate-700 right-2 md:right-2"
        >
          <RxCopy size={20} />
        </span>
      </div>
    </div>
  );
};

export default Btn37;
