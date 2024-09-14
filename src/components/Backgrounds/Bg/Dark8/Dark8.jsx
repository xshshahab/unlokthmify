import React, { useState } from "react";
import DarkPreview8 from "./DarkPreview8";
import toast from "react-hot-toast";

const Dark8 = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const openPreview = () => {
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  const copyCode = () => {
    const codeToCopy = `<div className="relative h-full w-full bg-slate-950"><div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>`;
    navigator.clipboard.writeText(codeToCopy).then(() => {
      toast.success("👏 Copied to clipboard!");
    });
  };

  return (
    <div className="relative w-64 overflow-hidden rounded-lg shadow-lg h-80 group">
      <div className="relative h-full w-full bg-slate-950">
        <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute z-10 flex space-x-2 top-2 right-2">
          <div
            className="p-1 text-xs text-white bg-gray-900 rounded-md cursor-pointer"
            onClick={openPreview}
          >
            Preview
          </div>
          <div
            className="p-1 text-xs text-white bg-gray-900 rounded-md cursor-pointer"
            onClick={copyCode}
          >
            Copy Code
          </div>
        </div>

        <h2 className="absolute z-10 text-sm font-bold text-transparent bottom-2 left-2 group-hover:text-slate-500">
          Unlok Thmify
        </h2>
        {isPreviewOpen && <DarkPreview8 onClose={closePreview} />}
      </div>
    </div>
  );
};

export default Dark8;
