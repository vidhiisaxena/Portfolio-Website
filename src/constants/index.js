import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
export const HERO_CONTENT = `I am a front-end developer skilled in HTML, CSS, JavaScript, Tailwind CSS, and React, with a focus on creating intuitive and engaging user interfaces. Proficient in UI/UX design, I craft seamless digital experiences. Currently exploring AI and ML, I utilize Python libraries and Frameworks to develop innovative, data-driven solutions, blending creativity with technical expertise.`;

export const EXPERIENCES = [
  {
    year: "Dec 2024 - Present",
    role: "Machine Learning Researcher",
    company: "Defence Research and Development Organization",
    description: `Worked under DRDO at CFEES Lab in the field of Machine Learning, applying algorithms for optimisation processes for the laboratory purposes.`,
    technologies: ["Python", "TensorFlow", "PyTorch", "Matplotlib", "LLMs"],
  },
  {
    year: "Oct 2024 - Present",
    role: "AWS Cloud Club Mentor",
    company: "AWS Cloud Club IGDTUW",
    description: `Mentored a team of 5 mentees to develope AQI-Predictor using Machine Learning Algorithms and Time Series and conducted cohort session on Web Development.`,
    technologies: ["Python", "XGBoost", "HTML", "CSS", "Bootstrap"],
  },
  {
    year: "June 2024 - August 2024",
    role: "Python and Machine Learning Intern",
    company: "Anveshan Foundation IGDTUW",
    description: `Designed and evaluated machine learning models for
network anomaly detection in IoT devices, optimizing
accuracy with feature selection and multi-metric analysis.`,
    technologies: [
      "Python",
      "Machine-Learning",
      "Extrapolitary Data Analysis",
      "Streamlit",
    ],
  },
];

export const PROJECTS = [
  {
    title: "CNN Image Classifier with Pretrained Models",
    link: "https://github.com/vidhiisaxena/CNN_image_classifier",
    image: project1,
    description:
      "The project implements an image classifier using three popular Convolutional Neural Network (CNN) architectures: ResNet-18, AlexNet, and VGG16.",
    technologies: ["Python", "CNN", "PIL", "Keras"],
  },
  {
    title: "Portfolio Website",
    link: "https://vidhi-saxena.vercel.app/",
    image: project2,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React.js", "Tailwind CSS"],
  },
  {
    title: "MeteoInsight",
    link: "https://meteo-insight.vercel.app/",
    image: project3,
    description:
      "A weather forecast website made using HTML, CSS and Javascript. It includes real-time data and changing background with changing weather conditions.",
    technologies: ["HTML", "CSS", "Javascript", "Web API"],
  },
];

export const CONTACT = {
  description:
    "With a passion for building intuitive digital experiences and exploring emerging technologies, I’m always eager to collaborate on exciting projects, share ideas, and grow alongside like-minded individuals. Feel free to connect with me on my socials or drop me an email—I’d love to network and explore opportunities together! Let’s create something amazing!",
  address: "Delhi-NCR",
  email: "vidhiisaxena076@gmail.com",
};
