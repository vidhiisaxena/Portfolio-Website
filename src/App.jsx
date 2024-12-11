import React from 'react'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Technologies from './components/technologies';
import Experience from './components/Experience';
import Projects from "./components/projects";
import Contact from "./components/contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-amber-900 antialiased selection:bg-amber-900 selection:text-orange-200">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="bg-fixed absolute top-0 z-[-2] h-screen w-screen rotate-180 transform bg-fixed bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(250,237,205,.5)_100%)]"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App
