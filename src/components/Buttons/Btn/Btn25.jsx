import React from "react";
import { RxCopy } from "react-icons/rx";
import toast from "react-hot-toast";

const Btn25 = () => {
  const handleCopy = () => {
    const code = `<button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-green-500 px-6 font-medium text-neutral-50 hover:text-black hover:font-bold">
          <span className="absolute h-56 w-32 rounded-full bg-neutral-950 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
          <span className="relative">Hover me</span>
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
        <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-green-500 px-6 font-medium text-neutral-50 hover:text-black hover:font-bold">
          <span className="absolute h-56 w-32 rounded-full bg-neutral-950 transition-all duration-300 group-hover:h-0 group-hover:w-0"></span>
          <span className="relative">Hover me</span>
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

export default Btn25;
