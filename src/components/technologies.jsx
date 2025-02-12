import {RiReactjsLine} from "react-icons/ri";
import { TbBrandPython } from "react-icons/tb";
import { RiHtml5Fill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";
import {animate, motion} from "framer-motion";

const iconVariants= (duration)=> ({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration: duration,
      ease:"linear",
      repeat:Infinity,
      repeatType: "reverse",
    }
  }
})
const technologies = () => {
  return (
    <div className="border-b border-zinc-50 pb-24">
      <motion.h1 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:0,y:-100}}
      transition={{duration:1.5}}
      className="my-20 text-center text-4xl">Technologies</motion.h1>
      <motion.div 
      whileInView={{opacity:1, x:0}}
      initial={{opacity:0, x:-100}}
      transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl m-2 p-1 bg-gradient-to-r from-amber-900 via-sate-500 to-lime-800"
        >
          <div className="rounded-2xl h-full w-full bg-amber-50 p-4">
            <RiReactjsLine className="text-5xl text-cyan-400" />
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl m-2 p-1 bg-gradient-to-r from-amber-900 via-sate-500 to-lime-800"
        >
          <div className="rounded-2xl h-full w-full bg-amber-50 p-4">
            <TbBrandPython className="text-5xl text-blue-800" />
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl m-2 p-1 bg-gradient-to-r from-amber-900 via-sate-500 to-lime-800"
        >
          <div className="rounded-2xl h-full w-full bg-amber-50 p-4">
            <RiHtml5Fill className="text-5xl text-orange-500" />
          </div>
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl m-2 p-1 bg-gradient-to-r from-amber-900 via-sate-500 to-lime-800"
        >
          <div className="rounded-2xl h-full w-full bg-amber-50 p-4">
            <DiCss3 className="text-5xl text-sky-600" />
          </div>
        </motion.div>
        <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" className="rounded-2xl m-2 p-1 bg-gradient-to-r from-amber-900 via-sate-500 to-lime-800">
          <div className="rounded-2xl h-full w-full bg-amber-50 p-4">
            <RiTailwindCssFill className="text-5xl text-cyan-500" />
          </div>
        </motion.div>
        <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate" className="rounded-2xl m-2 p-1 bg-gradient-to-r from-amber-900 via-sate-500 to-lime-800">
          <div className="rounded-2xl h-full w-full bg-amber-50 p-4">
            <TbBrandJavascript className="text-5xl text-yellow-400" />
          </div>
        </motion.div>
        <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate" className="rounded-2xl m-2 p-1 bg-gradient-to-r from-amber-900 via-sate-500 to-lime-800">
          <div className="rounded-2xl h-full w-full bg-amber-50 p-4">
            <FaJava className="text-5xl text-orange-700" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default technologies
