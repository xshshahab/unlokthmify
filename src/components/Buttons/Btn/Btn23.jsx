import React from "react";
import { RxCopy } from "react-icons/rx";
import toast from "react-hot-toast";

const Btn23 = () => {
  const handleCopy = () => {
    const code = `<button className="group relative z-0 h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 hover:text-black hover:font-bold px-8 py-2 text-neutral-50">
          <span className="relative z-10">Hover Me</span>
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-green-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
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
        <button className="group relative z-0 h-12 overflow-hidden overflow-x-hidden rounded-md bg-neutral-950 hover:text-black hover:font-bold px-8 py-2 text-neutral-50">
          <span className="relative z-10">Hover Me</span>
          <span className="absolute inset-0 overflow-hidden rounded-md">
            <span className="absolute left-0 aspect-square w-full origin-center translate-x-full rounded-full bg-green-500 transition-all duration-500 group-hover:-translate-x-0 group-hover:scale-150"></span>
          </span>
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

export default Btn23;
