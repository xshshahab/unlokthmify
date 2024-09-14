import React, { useState } from "react";
import Preview4 from "./Preview4";
import toast from "react-hot-toast";

const Card4 = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const openPreview = () => {
    setIsPreviewOpen(true);
  };

  const closePreview = () => {
    setIsPreviewOpen(false);
  };

  const copyCode = () => {
    const codeToCopy = ` <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>`;
    navigator.clipboard.writeText(codeToCopy).then(() => {
      toast.success("👏 Copied to clipboard!");
    });
  };

  return (
    <div className="relative w-64 overflow-hidden rounded-lg shadow-lg h-80 group">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
      </div>

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

      {isPreviewOpen && <Preview4 onClose={closePreview} />}
    </div>
  );
};

export default Card4;
