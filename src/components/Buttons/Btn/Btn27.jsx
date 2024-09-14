import React from "react";
import { RxCopy } from "react-icons/rx";
import toast from "react-hot-toast";

const Btn27 = () => {
  const handleCopy = () => {
    const code = `<button className="relative h-12 overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-200 hover:bg-neutral-800 hover:ring-offset-2 active:ring-2 active:ring-neutral-800">
          Click me
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
        <button className="relative h-12 overflow-hidden rounded bg-neutral-950 px-5 py-2.5 text-white transition-all duration-200 hover:bg-neutral-800 hover:ring-offset-2 active:ring-2 active:ring-neutral-800">
          Click me
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

export default Btn27;
