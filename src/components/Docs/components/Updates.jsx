import React from "react";

const Updates = () => {
  return (
    <>
      <p className="mb-2 font-bold text-md ">Follow for updates</p>
      <div
        id="updates"
        className="flex items-center gap-2 hover:text-sky-700 group"
      >
        <div className="hidden group-hover:block">|</div>
        <a
          className="text-sm text-slate-700 hover:text-sky-700 hover:font-bold"
          target="_blank"
          href="https://x.com/xsh_shahab"
        >
          Twitter @xsh_shahab
        </a>
      </div>
    </>
  );
};

export default Updates;
