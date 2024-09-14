import React from "react";
import UnlokThmify from "../../assets/UnlokThmify.png";

const Logo = ({ onClick }) => {
  return (
    <div onClick={onClick} className="flex items-center gap-2 cursor-pointer">
      <img src={UnlokThmify} alt="Thmify Logo" width={35} />
      <h1 className="hidden text-2xl font-bold md:block">Thmify</h1>
    </div>
  );
};

export default Logo;
