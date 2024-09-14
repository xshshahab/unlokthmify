import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative h-screen w-full bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
      <div className="flex flex-col items-center justify-center h-full p-4 space-y-6 text-center text-black">
        <div className="flex items-center px-2 mb-2 space-x-2 bg-transparent border border-gray-300 rounded-full shadow-lg">
          <span className="text-[13px]">New Collection ⚡️</span>
          <Link
            to="/pages/docs"
            className={`flex items-center py-1 text-[13px] ${
              isHovered ? "font-bold underline text-sky-600" : ""
            }`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="mr-1">Read more</span>
            {isHovered ? (
              <FiArrowUpRight size={16} />
            ) : (
              <FaArrowRight size={14} />
            )}
          </Link>
        </div>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
          Discover Our Exclusive Collection of Buttons and{" "}
          <span className="text-transparent bg-gradient-to-r from-slate-600 via-slate-500 to-stone-400 bg-clip-text">
            Background Templates
          </span>
          .
        </h1>
        <p className="max-w-lg text-base text-slate-600 md:text-lg">
          Enhance your site with standout buttons and backgrounds, designed to
          elevate your look.
        </p>
        <div className="flex flex-col justify-center mt-4 space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <a
            href="https://github.com/your-repo-link" // Replace with your actual GitHub link
            className="flex items-center px-6 py-3 text-white transition duration-300 rounded-md bg-neutral-950 hover:bg-neutral-800"
          >
            Go to Github <FaArrowRight className="ml-2" />
          </a>
          <Link
            to="/pages/buttons"
            className="flex items-center px-6 py-3 text-black transition duration-300 border rounded-md hover:bg-slate-200"
          >
            Explore Buttons
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
