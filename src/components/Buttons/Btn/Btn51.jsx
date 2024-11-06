import React from "react";
import { RxCopy } from "react-icons/rx";
import toast from "react-hot-toast";

const Btn51 = () => {
  const handleCopy = () => {
    const code = `<button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 font-medium"><div class="inline-flex h-12 translate-y-0 items-center justify-center bg-white px-6 text-neutral-950 transition group-hover:-translate-y-[150%]">Hover me</div><div class="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center bg-blue-500 px-6 text-neutral-50 transition duration-300 group-hover:translate-y-0">Hover me</div></button>`;
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
        <button class="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md border border-neutral-200 font-medium"><div class="inline-flex h-12 translate-y-0 items-center justify-center bg-white px-6 text-neutral-950 transition group-hover:-translate-y-[150%]">Hover me</div><div class="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center bg-blue-500 px-6 text-neutral-50 transition duration-300 group-hover:translate-y-0">Hover me</div></button>

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

export default Btn51;
