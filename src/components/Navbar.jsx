import React from "react";
import logo from "../assets/VSlogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import {motion} from "framer-motion";

const Navbar = () => {
  return (
    <nav className="stickymb-12 flex items-center justify-between py-2">
      <div className="flex flex-shrink-0 items-center">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          src={logo}
          alt="logo"
          className="h-20 w-auto"
        />
      </div>
      <motion.div 
      initial={{y:-100, opacity:0.1}}
      animate={{y:0,opacity:1}}
      transition={{duration:1, delay:0.2}}
      class="m-8 flex items-center justify-center gap-4 text-2xl">
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
      </motion.div>
    </nav>
  );
};

export default Navbar;
