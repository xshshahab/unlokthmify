import React from "react";
import { RxCopy } from "react-icons/rx";
import toast from "react-hot-toast";

const Btn05 = () => {
  const handleCopy = () => {
    const code = `<button className="relative inline-flex items-center justify-center h-12 px-6 overflow-hidden font-medium duration-500 rounded-md group bg-neutral-950 text-neutral-200"><div className="translate-x-0 transition group-hover:-translate-x-[150%]">Hover me</div><div className="absolute translate-x-[150%] transition group-hover:translate-x-0">Hover me</div></button>`;
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
        <button className="relative inline-flex items-center justify-center h-12 px-6 overflow-hidden font-medium duration-500 rounded-md group bg-neutral-950 text-neutral-200">
          <div className="translate-x-0 transition group-hover:-translate-x-[150%]">
            Hover me
          </div>
          <div className="absolute translate-x-[150%] transition group-hover:translate-x-0">
            Hover me
          </div>
        </button>
        <span
          onClick={handleCopy}
          className="absolute top-0 z-10 p-3 cursor-pointer text-slate-700 hover:text-slate-950 right-2 md:right-2"
        >
          <RxCopy size={20} />
        </span>
      </div>
    </div>
  );
};

export default Btn05;
