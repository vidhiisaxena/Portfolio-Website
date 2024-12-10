import { HERO_CONTENT} from "../constants";
import profilePic from "../assets/profile.jpg";
const Hero = () => {
  return (
    <div className="border-b border-zinc-50 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg-items-start">
            <h1 className="pb-16 text-6xl font-thin traching-tight lg:mt-16 lg:text-8kl ">
              Vidhi Saxena
            </h1>
            <span className="bg-gradient-to-r from-amber-900 via-sate-500 to-lime-800 bg-clip-text text-3xl sm:text-2xl xs:text-2xl lg:text-3xl tracking-light text-transparent">
              Front-end Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tigher">{HERO_CONTENT}</p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center ms-5 mt-10">
                <img src={profilePic} className="h-96 w-auto" alt="Profile Picture"/>            
            </div>        
        </div>
      </div>
    </div>
  );
}

export default Hero
