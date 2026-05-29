import React from 'react';
import { Code2, Briefcase, Target, BookOpen, Rocket, Users, Megaphone, MonitorPlay } from 'lucide-react';

function About() {
  return (
    <div className="min-h-screen bg-[#F0F5FF] flex items-center justify-center px-4 py-10 sm:p-8 relative overflow-hidden">
      {/* Background blur blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>

      {/* Main Card */}
      <div className="bg-white/80 backdrop-blur-xl w-full max-w-[1200px] rounded-[40px] shadow-[0_8px_32px_rgba(0,0,0,0.05)] p-8 sm:p-12 relative overflow-hidden border border-white/50 flex flex-col">

        {/* Decorative Dotted Grids */}
        <div className="absolute top-16 right-12 grid grid-cols-5 gap-2 opacity-20 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div key={`dot-tr-${i}`} className="w-1 h-1 bg-gray-400 rounded-full"></div>
          ))}
        </div>
        <div className="absolute bottom-16 left-12 grid grid-cols-5 gap-2 opacity-20 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div key={`dot-bl-${i}`} className="w-1 h-1 bg-gray-400 rounded-full"></div>
          ))}
        </div>

        {/* Section Tag */}
        <div className="mb-6 z-10">
          <span className="text-blue-500 font-semibold text-sm border border-blue-200 bg-blue-50 px-3 py-1 rounded-full">About Me</span>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row items-center gap-12 z-10">

          {/* Left Content */}
          <div className="flex-1 max-w-xl text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mb-2 leading-tight">
              My Story. My Drive.
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-2">
              My Vision.
            </h2>
            <div className="w-12 h-1 bg-blue-500 rounded-full mb-6"></div>

            <p className="text-slate-500 text-base leading-relaxed mb-8">
              I don't just write code — I build digital experiences, manage global social media presence, and create impactful content.
            </p>

            {/* Journey Points */}
            <div className="space-y-6">
              {/* Point 1 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Briefcase size={20} className="text-blue-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-400 font-bold text-sm">01</span>
                    <h3 className="text-slate-800 font-bold text-base">The Beginning</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    My journey started with communication and management. Working as a Manager and Tele Caller taught me the immense value of client relations and operational problem-solving.
                  </p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Code2 size={20} className="text-blue-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-400 font-bold text-sm">02</span>
                    <h3 className="text-slate-800 font-bold text-base">Where I Am Now</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Today, I'm a Frontend Developer and Social Media Manager. I build scalable web applications, manage global clients, edit videos, and design creatives.
                  </p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Target size={20} className="text-blue-500" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-blue-400 font-bold text-sm">03</span>
                    <h3 className="text-slate-800 font-bold text-base">Where I'm Going</h3>
                  </div>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    My vision is to blend technical frontend skills with creative marketing to deliver comprehensive, high-converting digital solutions for brands worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image + Stats */}
          <div className="flex-1 flex flex-col items-center justify-center gap-12 sm:gap-16 relative">
            <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72">
              {/* Circle bg */}
              <div className="w-full h-full rounded-full bg-blue-100 overflow-hidden border-[6px] border-white shadow-[0_10px_40px_rgba(59,130,246,0.3)] transition-transform duration-500 hover:scale-105 relative z-10 cursor-pointer">
                <img
                  src="/payal.png"
                  alt="Payal Gupta"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#dbeafe,#bfdbfe)"><span style="font-size:4rem;font-weight:700;color:#3b82f6">PG</span></div>`;
                  }}
                />
              </div>

              {/* Floating dashed ring */}
              <div className="absolute -inset-6 border-[2px] border-dashed border-blue-200 rounded-full animate-[spin_60s_linear_infinite]"></div>

              {/* Stat Card - Years Experience */}
              <div className="absolute -top-4 -right-8 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100 flex items-center gap-3 z-20">
                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Briefcase size={18} className="text-blue-500" />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-800">3+</div>
                  <div className="text-xs text-slate-500">Years Exp.</div>
                </div>
              </div>

              {/* Stat Card - Projects */}
              <div className="absolute -bottom-4 -left-10 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100 flex items-center gap-3 z-20">
                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Code2 size={18} className="text-blue-500" />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-800">5+</div>
                  <div className="text-xs text-slate-500">Projects</div>
                </div>
              </div>

              {/* Stat Card - Clients/Students */}
              <div className="absolute -bottom-4 -right-8 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100 flex items-center gap-2 z-20">
                <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">
                  <Users size={18} className="text-blue-500" />
                </div>
                <div>
                  <div className="text-xl font-bold text-slate-800">500+</div>
                  <div className="text-xs text-slate-500">Clients</div>
                </div>
              </div>
            </div>

            {/* "I wear multiple hats" */}
            <div className="w-full text-center mt-8">
              <p className="text-slate-400 text-sm italic mb-3">I wear <span className="text-blue-500 font-semibold not-italic">multiple hats</span></p>
              <div className="flex justify-center gap-6">
                <div className="flex flex-col items-center gap-1">
                  <div className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center">
                    <Code2 size={18} className="text-blue-500" />
                  </div>
                  <span className="text-xs text-slate-600 font-medium">Developer</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center">
                    <Megaphone size={18} className="text-blue-500" />
                  </div>
                  <span className="text-xs text-slate-600 font-medium">Social Media</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <div className="w-9 h-9 bg-blue-50 rounded-full flex items-center justify-center">
                    <MonitorPlay size={18} className="text-blue-500" />
                  </div>
                  <span className="text-xs text-slate-600 font-medium">Video Editor</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default About;