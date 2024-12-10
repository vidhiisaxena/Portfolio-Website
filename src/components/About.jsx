import aboutimg from "../assets/about.jpg";

const About = () => {
  return (
    <div className="border-b border-zinc-50 pb-4 lg:mb-35">
      <h2 className="my-20 text-center text-4xl ">
        <span className="bg-gradient-to-r from-amber-900 via-sate-500 to-lime-800 bg-clip-text tracking-light text-transparent">
          About Me
        </span>
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex flex-col items-center justify-center lg-items-start">
            <img
              src={aboutimg}
              alt="about image"
              className="h-4/5 xs-justify-center"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6">
              Hello! I’m Vidhi Saxena, a tech enthusiast with a love for
              creating digital experiences that are both functional and visually
              captivating. My expertise lies in front-end development, where I
              craft responsive and intuitive websites using modern tools and
              frameworks. I’m also delving into AI and machine learning,
              exploring how data can enhance technology-driven solutions. With
              Python libraries like Matplotlib, Scikit-Learn, and Pandas, I’m
              uncovering new ways to innovate. Driven by curiosity and a passion
              for learning, I’m constantly refining my skills to stay ahead in
              this dynamic field. My goal? To merge creativity with technology
              and deliver meaningful solutions that make an impact.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
