import React, { useState } from "react";
import DarkPreview16 from "./DarkPreview16";
import toast from "react-hot-toast";

const Dark16 = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const openPreview = () => {
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  const copyCode = () => {
    const codeToCopy = `<div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#80808080_1px,transparent_1px),linear-gradient(to_bottom,#80808080_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
`;
    navigator.clipboard.writeText(codeToCopy).then(() => {
      toast.success("👏 Copied to clipboard!");
    });
  };

  return (
    <div className="relative w-64 overflow-hidden rounded-lg shadow-lg h-80 group">
      <div className="absolute inset-0 -z-10 h-full w-full bg-black bg-[linear-gradient(to_right,#80808080_1px,transparent_1px),linear-gradient(to_bottom,#80808080_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

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
      {isPreviewOpen && <DarkPreview16 onClose={closePreview} />}
    </div>
  );
};

export default Dark16;
