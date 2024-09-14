import React from "react";
import buttons from "../../data/ButtonData";

const BtnShowcase = () => {
  return (
    <div className="grid items-center justify-center grid-cols-1 gap-4 px-10 md:grid-cols-4 md:mb-10 ">
      {buttons.map((Button, index) => (
        <Button key={index} />
      ))}
    </div>
  );
};

export default BtnShowcase;
