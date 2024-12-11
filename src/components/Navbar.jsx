import React from "react";
import logo from "../assets/VSlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="mb-12 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="h-20 w-auto" />
      </div>
      <div class="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href={"https://www.linkedin.com/in/vidhi-saxena-86150a243/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href={"https://github.com/vidhiisaxena"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href={"https://x.com/Vidhisaxena76"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSquareXTwitter />
        </a>
        <a
          href={"https://www.instagram.com/vidhiisaxena/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
