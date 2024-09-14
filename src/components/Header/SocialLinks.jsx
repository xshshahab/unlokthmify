import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub } from "react-icons/fi";

const SocialLinks = () => {
  return (
    <>
      <a
        href="https://twitter.com/xsh_shahab"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-semibold cursor-pointer hover:underline"
      >
        <FaXTwitter size={22} />
      </a>
      <a
        href="https://github.com/xshshahab/unlokthmify"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xl font-semibold cursor-pointer hover:underline"
      >
        <FiGithub size={22} />
      </a>
    </>
  );
};

export default SocialLinks;
