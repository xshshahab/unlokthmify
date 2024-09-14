import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-3.5 text-center bg-gray-50">
      <p className="text-sm text-gray-600">
        Powered by{" "}
        <a
          href="404"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 underline hover:text-sky-800"
        >
          Unlok Dev
        </a>{" "}
        | Crafted with care by{" "}
        <a
          href="https://twitter.com/xsh_shahab"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-800 hover:text-sky-900"
        >
          @xsh_shahab
        </a>
      </p>
    </footer>
  );
};

export default Footer;
