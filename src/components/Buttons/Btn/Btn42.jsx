import React from "react";
import { RxCopy } from "react-icons/rx";
import toast from "react-hot-toast";

const Btn42 = () => {
  const handleCopy = () => {
    const code = `<button className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 ease-in-out border rounded-lg shadow-md border-slate-800 bg-gray-950 group hover:text-gray-900 focus:outline-none hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          <span className="absolute inset-0 transition-transform transform translate-x-full bg-green-500 group-hover:translate-x-0"></span>
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
        <button className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-black transition-all duration-300 ease-in-out bg-gray-100 border rounded-lg shadow-md border-slate-800 group hover:text-gray-900 focus:outline-none hover:border-green-500 focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
          <span className="absolute inset-0 transition-transform transform translate-x-full bg-green-500 group-hover:translate-x-0"></span>
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

export default Btn42;
