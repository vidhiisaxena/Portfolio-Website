import {RiReactjsLine} from "react-icons/ri";
import { TbBrandPython } from "react-icons/tb";
import { RiHtml5Fill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCss3 } from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import { FaJava } from "react-icons/fa";


const technologies = () => {
  return (
    <div className="border-b border-zinc-50 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl m-2 p-1 bg-gradient-to-r from-amber-900 via-sate-500 to-lime-800">
          <div className="rounded-2xl h-full w-full bg-amber-50 p-4">
            <RiReactjsLine className="text-5xl text-cyan-400" />
          </div>
        </div>
        <div className="rounded-2xl m-2 p-1 bg-gradient-to-r from-amber-900 via-sate-500 to-lime-800">
          <div className="rounded-2xl h-full w-full bg-amber-50 p-4">
            <TbBrandPython className="text-5xl text-blue-800" />
          </div>
        </div>
        <div className="rounded-2xl m-2 p-1 bg-gradient-to-r from-amber-900 via-sate-500 to-lime-800">
          <div className="rounded-2xl h-full w-full bg-amber-50 p-4">
            <RiHtml5Fill className="text-5xl text-orange-500" />
          </div>
        </div>
        <div className="rounded-2xl m-2 p-1 bg-gradient-to-r from-amber-900 via-sate-500 to-lime-800">
          <div className="rounded-2xl h-full w-full bg-amber-50 p-4">
            <DiCss3 className="text-5xl text-sky-600" />
          </div>
        </div>
        <div className="rounded-2xl m-2 p-1 bg-gradient-to-r from-amber-900 via-sate-500 to-lime-800">
          <div className="rounded-2xl h-full w-full bg-amber-50 p-4">
            <RiTailwindCssFill className="text-5xl text-cyan-500" />
          </div>
        </div>
        <div className="rounded-2xl m-2 p-1 bg-gradient-to-r from-amber-900 via-sate-500 to-lime-800">
          <div className="rounded-2xl h-full w-full bg-amber-50 p-4">
            <TbBrandJavascript className="text-5xl text-yellow-400" />
          </div>
        </div>
        <div className="rounded-2xl m-2 p-1 bg-gradient-to-r from-amber-900 via-sate-500 to-lime-800">
          <div className="rounded-2xl h-full w-full bg-amber-50 p-4">
            <FaJava className="text-5xl text-orange-700" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default technologies
