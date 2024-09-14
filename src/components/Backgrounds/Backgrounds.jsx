import React, { useMemo } from "react";
import Pen from "../../assets/Pen.png";
import BgShowcase from "./BgShowcase";
import { Link } from "react-router-dom";

const Backgrounds = () => {
  const memoizedBgShowcase = useMemo(() => {
    return <BgShowcase />;
  }, []);

  return (
    <>
      <div className="flex justify-evenly container mx-auto flex-col-reverse md:flex-row items-center md:items-end px-4 md:px-8 pb-8 pt-4 md:pt-2 border-b border-slate-300 bg-[#fefefe]  w-full min-h-[75vh] md:h-[70vh]">
        <div
          id="left-container"
          className="mb-6 text-center md:text-left md:mb-0"
        >
          <p className="w-full pb-4 md:w-[30vw] text-[4vw] text-neutral-600 md:text-[1.6vw] leading-tight">
            Simplify your workflow with Tailwind CSS—just copy and paste <br />{" "}
            These ready-to-use background snippets.
          </p>
          <button className="relative inline-flex items-center justify-center h-12 px-3 overflow-hidden font-medium rounded-md group bg-neutral-950 text-neutral-200">
            <Link target="_blank" to="https://github.com">
              <span>Go to Github</span>
            </Link>
            <div className="ml-1 transition group-hover:translate-x-1">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                <path
                  d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
          </button>
        </div>

        <div
          id="right-box"
          className="font-bold pt-16 text-center md:text-end leading-[12vw] md:leading-[7.5vw] text-[10vw] md:text-9xl"
        >
          <h1 className="text-neutral-800">
            <div
              id="btn-style"
              className="flex items-center justify-center md:justify-end"
            >
              M
              <span className="flex items-center justify-center w-[35px] h-[35px] md:w-[90px] md:h-[90px] bg-green-600 rounded-full hover:-rotate-45 hover:cursor-pointer hover:bg-green-500 md:mx-0">
                <img src={Pen} alt="" className="w-4 md:w-9" />
              </span>
              DERN
            </div>
            VISUAL <br className="md:hidden" /> SNIPPETS{" "}
            <br className="md:hidden" />
          </h1>
        </div>
      </div>

      <div
        id="main-page"
        className="flex items-center justify-center w-full min-h-screen px-10 pt-4 "
      >
        {memoizedBgShowcase}
      </div>

      <div className="p-4 mx-8 mt-5 mb-24 bg-white sm:ml-16 md:ml-10 lg:ml-14">
        <p className="inline-block p-2 text-sm border border-gray-300 rounded-md sm:text-base md:text-sm text-slate-800 lg:text-sm">
          These backgrounds are crafted for full-page layouts. Click 'Preview'
          to see them in action.
          <br /> Adjust and refine them to suit your design needs.
        </p>
      </div>
    </>
  );
};

export default Backgrounds;
