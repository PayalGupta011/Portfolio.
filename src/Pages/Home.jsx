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
      <section id="home" className="min-h-[calc(100vh-65px)] bg-[#F0F5FF] flex items-center justify-center px-4 py-10 sm:p-8 relative overflow-hidden">
        {/* Background blur blobs */}
        <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 pointer-events-none"></div>

        {/* Main Card */}
        <div className="bg-white/90 backdrop-blur-xl w-full max-w-[1000px] rounded-[24px] sm:rounded-[30px] shadow-[0_8px_32px_rgba(0,0,0,0.05)] p-6 sm:p-10 lg:p-16 relative overflow-hidden border border-white flex flex-col justify-center">

          {/* Decorative Dotted Grids — hidden on mobile */}
          <div className="hidden sm:block absolute top-10 left-10 opacity-20 pointer-events-none grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <div key={`dot-tl-${i}`} className="w-1 h-1 bg-gray-400 rounded-full"></div>
            ))}
          </div>
          <div className="hidden sm:block absolute bottom-20 right-10 opacity-20 pointer-events-none grid grid-cols-4 gap-2">
            {[...Array(16)].map((_, i) => (
              <div key={`dot-br-${i}`} className="w-1 h-1 bg-gray-400 rounded-full"></div>
            ))}
          </div>

          {/* Main Content Row — image on top on mobile, side by side on desktop */}
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-12 z-10 w-full">

            {/* Left Text Content */}
            <div className="flex-1 w-full text-center lg:text-left">
              <h2 className="text-slate-500 text-sm mb-2 font-medium tracking-wide">Hello, I'm</h2>
              <style>
                {`
                  @keyframes bgPan {
                    0% { background-position: 0% center; }
                    100% { background-position: -200% center; }
                  }
                  @keyframes textPop {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.03); }
                  }
                `}
              </style>
              <div className="inline-block" style={{ animation: 'textPop 3s ease-in-out infinite' }}>
                <h1
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-extrabold mb-3 tracking-tight leading-tight bg-clip-text text-transparent"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #2563eb, #06b6d4, #8b5cf6, #ec4899, #2563eb)',
                    backgroundSize: '200% auto',
                    animation: 'bgPan 4s linear infinite'
                  }}
                >
                  Payal Gupta
                </h1>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-slate-600 mb-4">
                Aspiring <span className="text-blue-500">Web Developer</span>
              </h3>
              <p className="text-slate-500 text-sm mb-6 max-w-xs mx-auto lg:mx-0 leading-relaxed">
                I build clean, responsive and user-friendly websites that bring ideas to life.
              </p>

              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                <Link
                  to="/projects"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all shadow-md shadow-blue-500/20 active:scale-95"
                >
                  View Projects
                </Link>
                <a
                  href="/Payal_Gupta_Resume.pdf"
                  download
                  className="flex items-center gap-1.5 border border-slate-200 hover:border-blue-400 text-slate-600 hover:text-blue-500 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all bg-white/80"
                >
                  <Download size={14} /> Resume
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center flex-shrink-0">
              <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 group">
                {/* Rotating ring */}
                <div className="absolute -inset-3 sm:-inset-5 z-0 animate-[spin_20s_linear_infinite]">
                  <div className="absolute inset-0 border-[1.5px] border-blue-200/60 rounded-full"></div>
                  <div className="absolute top-[14%] left-[14%] w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_10px_rgba(96,165,250,0.8)]"></div>
                  <div className="absolute bottom-[14%] right-[14%] w-2.5 h-2.5 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
                </div>

                {/* Main Image */}
                <div className="w-full h-full rounded-full bg-blue-50 overflow-hidden relative z-10 group-hover:scale-105 transition-transform duration-500 shadow-[0_10px_40px_rgba(59,130,246,0.3)] border-[5px] border-white">
                  <img
                    src="/payal.png"
                    alt="Payal Gupta"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Card Footer Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center w-full z-10 mt-10 gap-4 sm:gap-0">
            {/* Find me on */}
            <div className="text-center sm:text-left">
              <p className="text-slate-400 text-[10px] uppercase font-bold tracking-wider mb-2">Find me on</p>
              <div className="flex gap-2 justify-center sm:justify-start">
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
      <section id="blog"><Blog /></section>
      <section id="contact"><Contact /></section>
    </div>
  );
}

export default Home;