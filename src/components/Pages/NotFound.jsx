import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen p-2 text-center bg-white">
      <h1
        className="md:text-[15vw] leading-tight text-[10vh] font-extrabold text-transparent bg-clip-text"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/110854/pexels-photo-110854.jpeg?auto=compress&cs=tinysrgb&w=600')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        Oops!
      </h1>
      <p className="mb-2 text-3xl font-bold text-slate-700">
        404 - PAGE NOT FOUND
      </p>
      <p className="mb-3 font-semibold text-gray-500 text-md">
        The page you're looking for might have been removed,
        <br /> had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="px-6 py-3 font-bold text-white transition-all duration-300 bg-green-500 rounded-md hover:scale-105 hover:bg-green-600"
      >
        GO TO HOMEPAGE
      </Link>
    </div>
  );
};

export default NotFound;
