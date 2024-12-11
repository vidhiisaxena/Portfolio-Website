import { PROJECTS } from "../constants";

const projects = () => {
  return (
    <div className="border-b border-zinc-50 pb-4">
      <h1 className="my-20 text-center text-4xl">Projects</h1>
      <div className="">
        {PROJECTS.map((projects, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg-w:1/4">
              <img
                src={projects.image}
                width={150}
                height={150}
                alt={projects.title}
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg-w:3/4">
              <h6 className="mb-2 font-semibold">{projects.title}</h6>
              <p className="mb-4 text-zinc-500">{projects.description}</p>
              {projects.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-zinc-100 px-2 py-1 text-sm font-medium text-lime-900"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
