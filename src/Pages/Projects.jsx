import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub, FaReact, FaNodeJs, FaFigma, FaStripe } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress, SiFirebase } from 'react-icons/si';

function Projects() {
  const projects = [
    {
      num: "01",
      title: "Gauri Collection",
      description: "A premium full-stack e-commerce storefront with real-time cart, wishlist and animations.",
      tech: [<FaReact color="#61DAFB" />, <SiTailwindcss color="#06B6D4" />, <FaNodeJs color="#339933" />],
      color: "from-amber-50 to-yellow-50",
      image: "/gauri-collection.png",
      live: "https://gauri-five.vercel.app/",
      github: "https://github.com/PayalGupta011/Gauri-Collection"
    },
    {
      num: "02",
      title: "Finance Tracker",
      description: "An interactive dashboard to track income, expenses, and manage personal finances.",
      tech: [<FaReact color="#61DAFB" />, <SiTailwindcss color="#06B6D4" />],
      color: "from-slate-800 to-slate-900",
      image: "/finance-tracker.png",
      live: "https://payalgupta011.github.io/Finance-Tracker/",
      github: "https://github.com/PayalGupta011/Finance-Tracker"
    },
    {
      num: "03",
      title: "Cricket Live",
      description: "A real-time cricket scoring app providing live match updates and statistics.",
      tech: [<FaReact color="#61DAFB" />, <SiTailwindcss color="#06B6D4" />],
      color: "from-slate-900 to-slate-800",
      image: "/cricket-live.png",
      live: "https://cricket-live-git-main-payals-projects-19ab004f.vercel.app/",
      github: "https://github.com/PayalGupta011/Cricket-Live"
    }
  ];

  return (
    <div className="bg-white py-20 px-4 sm:px-8">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">My Work</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mt-4 mb-4">
            Featured <span className="text-blue-500">Projects</span>
          </h2>
          <p className="text-slate-500 text-lg">
            A collection of my best work that solves real-world problems.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {projects.map((project, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-3xl p-5 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group cursor-default">
              {/* Image Box */}
              <div className={`w-full h-40 rounded-2xl bg-gradient-to-br ${project.color} relative overflow-hidden mb-5 border border-gray-100 shadow-inner flex items-center justify-center`}>
                <div className="absolute top-0 left-0 z-20 bg-blue-500 text-white font-bold px-3 py-1 rounded-br-xl text-sm shadow-md">
                  {project.num}
                </div>
                {/* Actual screenshot or Mockup visual */}
                <div className="w-full h-full group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                  />
                ) : project.darkImage ? (
                  <div className="w-[80%] h-[70%] bg-slate-800 rounded-lg shadow-lg border border-slate-700 flex flex-col">
                    <div className="h-3 border-b border-slate-700 flex gap-1 p-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div><div className="w-1.5 h-1.5 rounded-full bg-yellow-400"></div><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                    </div>
                    <div className="flex-1 p-2 flex gap-2">
                       <div className="w-1/4 h-full bg-slate-700 rounded-sm"></div>
                       <div className="w-3/4 h-full bg-slate-700 rounded-sm flex flex-col gap-1"><div className="w-full h-1/2 bg-blue-500/20 rounded-sm"></div><div className="w-full h-1/2 bg-blue-500/20 rounded-sm"></div></div>
                    </div>
                  </div>
                ) : (
                  <div className="w-[80%] h-[70%] bg-white rounded-lg shadow-lg border border-gray-200 flex flex-col">
                     <div className="h-3 border-b border-gray-100 flex gap-1 p-1 bg-gray-50 rounded-t-lg">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div><div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                    </div>
                    <div className="flex-1 p-2 flex flex-col gap-2">
                       <div className="w-1/2 h-2 bg-blue-100 rounded-full"></div>
                       <div className="w-full h-8 bg-gray-50 rounded-md"></div>
                    </div>
                  </div>
                )}
                </div>
              </div>

              <h3 className="font-bold text-slate-800 text-lg mb-2 flex items-center gap-2 group-hover:text-blue-500 transition-colors duration-300">
                {project.title} <span className="text-blue-500 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
              </h3>
              <p className="text-slate-500 text-sm mb-6 flex-grow">{project.description}</p>
              
              <div className="flex gap-2 mb-6">
                {project.tech.map((icon, i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-lg shadow-sm">
                    {icon}
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto">
                <a href={project.live} target="_blank" rel="noreferrer" className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm shadow-blue-500/20">
                  Live Demo <ExternalLink size={16} />
                </a>
                <a href={project.github} target="_blank" rel="noreferrer" className="flex-1 bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 text-sm font-medium py-2.5 rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm">
                  <FaGithub size={16} /> GitHub
                </a>
              </div>
            </div>
          ))}
        </div>



      </div>
    </div>
  );
}

export default Projects;
