import React from 'react';
import { Download } from 'lucide-react';
import { FaGithub, FaLinkedin, FaEnvelope, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import CaseStudies from './CaseStudies';
import Services from './Services';
import Experience from './Experience';
import Testimonials from './Testimonials';
import Blog from './Blog';
import Contact from './Contact';

function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section id="home" className="min-h-[calc(100vh-65px)] bg-[#F0F5FF] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden">
        {/* Background blur blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>

        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-xl w-full max-w-[1000px] min-h-[550px] rounded-[30px] shadow-[0_8px_32px_rgba(0,0,0,0.05)] p-8 md:p-12 lg:p-16 relative overflow-hidden border border-white flex flex-col justify-center">

          {/* Decorative Dotted Grids */}
          <div className="absolute top-10 left-10 grid grid-cols-4 gap-2 opacity-20 pointer-events-none">
            {[...Array(16)].map((_, i) => (
              <div key={`dot-tl-${i}`} className="w-1 h-1 bg-gray-400 rounded-full"></div>
            ))}
          </div>
          <div className="absolute bottom-20 right-10 grid grid-cols-4 gap-2 opacity-20 pointer-events-none">
            {[...Array(16)].map((_, i) => (
              <div key={`dot-br-${i}`} className="w-1 h-1 bg-gray-400 rounded-full"></div>
            ))}
          </div>

          {/* Main Content Row */}
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 z-10 w-full mb-12">
            
            {/* Left Text Content */}
            <div className="flex-1 w-full max-w-md pt-8 lg:pt-0">
              <h2 className="text-slate-500 text-sm mb-2 font-medium tracking-wide">Hello, I'm</h2>
              <style>
                {`
                  @keyframes bgPan {
                    0% { background-position: 0% center; }
                    100% { background-position: -200% center; }
                  }
                  @keyframes textPop {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.03); text-shadow: 0 10px 20px rgba(37, 99, 235, 0.2); }
                  }
                `}
              </style>
              <div className="inline-block" style={{ animation: 'textPop 3s ease-in-out infinite' }}>
                <h1 
                  className="text-4xl md:text-5xl lg:text-[56px] font-extrabold mb-3 tracking-tight leading-none bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #2563eb, #06b6d4, #8b5cf6, #ec4899, #2563eb)',
                    backgroundSize: '200% auto',
                    animation: 'bgPan 4s linear infinite'
                  }}
                >
                  Payal Gupta
                </h1>
              </div>
              <h3 className="text-lg md:text-xl font-bold text-slate-600 mb-6">
                Aspiring <span className="text-blue-500">Web Developer</span>
              </h3>
              <p className="text-slate-500 text-xs md:text-sm mb-8 max-w-xs leading-relaxed">
                I build clean, responsive and user-friendly websites that bring ideas to life.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2.5 rounded-lg text-xs font-semibold transition-all shadow-md shadow-blue-500/20 active:scale-95"
                >
                  View My Work
                </Link>
                <a
                  href="https://drive.google.com/uc?export=download&id=1gdvrwA9E9vWMHFkShpHoO4TC-NyO75CG"
                  target="_blank"
                  rel="noreferrer"
                  className="border border-blue-500 text-blue-500 hover:bg-blue-50 px-6 py-2.5 rounded-lg text-xs font-semibold flex items-center gap-2 transition-all active:scale-95"
                >
                  Download CV <Download size={14} />
                </a>
              </div>
            </div>

            {/* Right Image Content */}
            <div className="flex justify-center relative mt-8 lg:mt-0">
              <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 group">
                {/* Rotating wrapper for ring and dots */}
                <div className="absolute -inset-4 md:-inset-6 z-0 animate-[spin_20s_linear_infinite]">
                  {/* Thin outer ring */}
                  <div className="absolute inset-0 border-[1.5px] border-blue-200/60 rounded-full"></div>
                  
                  {/* Floating dots on ring */}
                  <div className="absolute top-[14%] left-[14%] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
                  <div className="absolute bottom-[14%] right-[14%] w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                </div>

                {/* Main Image */}
                <div className="w-full h-full rounded-full bg-blue-50 overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-500 shadow-[0_10px_40px_rgba(59,130,246,0.3)] border-[6px] border-white">
                  <img
                    src="/payal.png"
                    alt="Payal Gupta"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-blue-200"><span class="text-6xl font-bold text-blue-400">PG</span></div>`;
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card Footer Row */}
          <div className="flex flex-col sm:flex-row justify-between items-end w-full z-10 mt-auto gap-6 sm:gap-0">
            {/* Find me on */}
            <div>
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-3">Find me on</p>
              <div className="flex gap-2.5">
                <a href="https://github.com/PayalGupta011" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-slate-800 hover:text-white transition-all border border-slate-100 shadow-sm">
                  <FaGithub size={14} />
                </a>
                <a href="https://www.linkedin.com/in/payal-gupta-452642367/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#0A66C2] hover:text-white transition-all border border-slate-100 shadow-sm">
                  <FaLinkedin size={14} />
                </a>
                <a href="https://www.youtube.com/@logicverse-i2c" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#FF0000] hover:text-white transition-all border border-slate-100 shadow-sm">
                  <FaYoutube size={14} />
                </a>
                <a href="https://www.instagram.com/payalgupta___21/" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-[#E1306C] hover:text-white transition-all border border-slate-100 shadow-sm">
                  <FaInstagram size={14} />
                </a>
                <a href="mailto:875payalgupta@gmail.com" className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-500 hover:bg-blue-500 hover:text-white transition-all border border-slate-100 shadow-sm">
                  <FaEnvelope size={14} />
                </a>
              </div>
            </div>

            {/* Available for work */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span className="text-[11px] font-semibold text-slate-500 tracking-wide">Available for work</span>
            </div>
          </div>

        </div>
      </section>

      {/* Render all other sections for the single-page experience */}
      <section id="about"><About /></section>
      <section id="experience"><Experience /></section>
      <section id="services"><Services /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="casestudies"><CaseStudies /></section>
      <section id="testimonials"><Testimonials /></section>
      <section id="insights"><Blog /></section>

      <section id="contact"><Contact /></section>
    </div>
  );
}

export default Home;