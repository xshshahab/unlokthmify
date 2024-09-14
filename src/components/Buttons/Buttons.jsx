import React from "react";
import Pen from "../../assets/Pen.png";
import BtnShowcase from "./BtnShowcase";

const Buttons = () => {
  return (
    <div className="px-4 md:px-8">
      <div
        id="page1"
        className="flex flex-col-reverse md:flex-row items-center md:items-end px-4 md:px-8 pb-8 pt-4 md:pt-2 border-b border-slate-300 bg-[#fefefe] justify-around w-full min-h-[75vh] md:h-[70vh]"
      >
        <div
          id="left-container"
          className="mb-6 text-center md:text-left md:mb-0"
        >
          <p className="w-full md:w-[30vw] text-[4vw] text-neutral-600 md:text-[1.6vw] leading-tight">
            Check out a modern collection of Tailwind CSS buttons to elevate
            your site's design. Easy to integrate—just copy-paste, no JavaScript
            required.
          </p>
        </div>
        <div
          id="right-box"
          className="font-bold pt-16 text-center md:text-end leading-[12vw] md:leading-[7.5vw] text-[10vw] md:text-9xl"
        >
          <h1 className="text-neutral-800">
            DESIGN <br className="md:hidden" /> WITH{" "}
            <br className="md:hidden" />
            <div
              id="btn-style"
              className="flex items-center justify-center md:justify-end"
            >
              BUTT
              <span className="flex items-center justify-center w-[35px] h-[35px] md:w-[90px] md:h-[90px] bg-green-600 rounded-full hover:-rotate-45 hover:cursor-pointer hover:bg-green-500 md:mx-0">
                <img src={Pen} alt="" className="w-4 md:w-9" />
              </span>
              NS
            </div>
          </h1>
        </div>
      </div>

      <div id="page2" className="min-h-screen bg-[#fefefe] px-4 pt-10 md:px-8">
        <BtnShowcase />
      </div>
    </div>
  );
};

export default Buttons;
