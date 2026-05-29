import React from 'react';
import { Code2, Palette, Megaphone, CheckCircle2, Users, Briefcase, Clock, HeadphonesIcon, Rocket } from 'lucide-react';

function Services() {
  const services = [
    {
      icon: <Code2 size={24} className="text-inherit" />,
      title: "Web Development",
      desc: "I build fast, responsive and modern websites that deliver great user experiences and drive results.",
      list: ["Custom Websites", "Responsive Design", "Performance Optimized"]
    },
    {
      icon: <Palette size={24} className="text-inherit" />,
      title: "Graphic Design",
      desc: "I design visually stunning and engaging graphics that elevate brand identity and captivate audiences.",
      list: ["UI/UX Design", "Brand Identity", "Social Media Graphics"]
    },
    {
      icon: <Megaphone size={24} className="text-inherit" />,
      title: "Social Media Management",
      desc: "I manage and grow online presence for global clients (Abu Dhabi, India) through strategic content and engagement.",
      list: ["International Client Management", "Content Strategy & Creation", "Brand Growth & Engagement"]
    }
  ];

  return (
    <div className="bg-[#F8FAFC] py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-blue-500 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">Services</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mt-4 mb-4">
            Solutions I <span className="text-blue-500">Provide</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-lg max-w-2xl mx-auto">
            High-quality services to help businesses grow, scale and succeed in the digital world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col hover:-translate-y-2 group cursor-default">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-inner shadow-blue-100 text-blue-500 group-hover:bg-blue-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-blue-500/30 transition-all duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 mb-3 text-center">{service.title}</h3>
              <p className="text-slate-500 text-xs text-center leading-relaxed mb-6 border-b border-gray-100 pb-6 flex-grow">
                {service.desc}
              </p>
              <ul className="space-y-3 mb-8">
                {service.list.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs text-slate-600">
                    <CheckCircle2 size={14} className="text-blue-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="text-blue-500 font-semibold text-xs flex items-center gap-1 hover:text-blue-600 transition-colors mt-auto">
                Explore More <span className="text-lg leading-none">→</span>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col md:flex-row items-center gap-6 lg:gap-16 justify-between">
          
          <div className="flex items-start gap-4 max-w-xs">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-500 flex-shrink-0 shadow-inner">
              <Rocket size={32} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-800 mb-1">From Idea to Impact,<br/><span className="text-blue-500">I Bring Visions to Life</span></h3>
              <p className="text-slate-500 text-[10px] leading-relaxed">Leveraging my diverse background in frontend development, design, and management to deliver complete digital solutions.</p>
            </div>
          </div>

          <div className="w-px h-16 bg-gray-100 hidden lg:block"></div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 flex-grow">
            <div className="flex flex-col gap-1 items-center md:items-start">
               <div className="flex items-center gap-2 text-blue-500 mb-1"><Users size={16}/><h4 className="text-xl font-bold text-slate-800">500+</h4></div>
               <p className="text-[10px] font-bold text-slate-700">People Assisted</p>
               <p className="text-[10px] text-slate-400 text-center md:text-left leading-tight">Students & clients I've guided.</p>
            </div>
            <div className="flex flex-col gap-1 items-center md:items-start">
               <div className="flex items-center gap-2 text-blue-500 mb-1"><Briefcase size={16}/><h4 className="text-xl font-bold text-slate-800">5+</h4></div>
               <p className="text-[10px] font-bold text-slate-700">Projects Built</p>
               <p className="text-[10px] text-slate-400 text-center md:text-left leading-tight">Web apps & digital assets.</p>
            </div>
            <div className="flex flex-col gap-1 items-center md:items-start">
               <div className="flex items-center gap-2 text-blue-500 mb-1"><Clock size={16}/><h4 className="text-xl font-bold text-slate-800">3+</h4></div>
               <p className="text-[10px] font-bold text-slate-700">Years Experience</p>
               <p className="text-[10px] text-slate-400 text-center md:text-left leading-tight">Across dev, design & ops.</p>
            </div>
            <div className="flex flex-col gap-1 items-center md:items-start">
               <div className="flex items-center gap-2 text-blue-500 mb-1"><HeadphonesIcon size={16}/><h4 className="text-xl font-bold text-slate-800">100%</h4></div>
               <p className="text-[10px] font-bold text-slate-700">Dedication</p>
               <p className="text-[10px] text-slate-400 text-center md:text-left leading-tight">Committed to quality work.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Services;
