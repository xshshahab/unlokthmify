import React from "react";
import { RxCopy } from "react-icons/rx";
import toast from "react-hot-toast";

const Btn13 = () => {
  const handleCopy = () => {
    const code = `<button className="relative inline-flex items-center justify-center h-12 px-6 overflow-hidden font-medium transition rounded-md group bg-neutral-950 text-neutral-200 hover:scale-110"><span>Hover me</span><div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]"><div className="relative w-8 h-full bg-white/20"></div></div></button>`;
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
        <button className="relative inline-flex items-center justify-center h-12 px-6 overflow-hidden font-medium transition rounded-md group bg-neutral-950 text-neutral-200 hover:scale-110">
          <span>Hover me</span>
          <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(100%)]">
            <div className="relative w-8 h-full bg-white/20"></div>
          </div>
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

export default Btn13;
