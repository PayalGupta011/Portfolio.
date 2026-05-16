import React from 'react';
import { FaReact, FaHtml5, FaCss3Alt, FaBootstrap, FaGitAlt, FaGithub, FaFigma, FaHandshake, FaUsers, FaPhoneAlt, FaCogs, FaHashtag, FaPenFancy } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiVercel, SiNetlify } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const frontendSkills = [
  { name: 'React', icon: <FaReact color="#61DAFB" /> },
  { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss color="#06B6D4" /> },
  { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
  { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
  { name: 'Bootstrap', icon: <FaBootstrap color="#7952B3" /> },
];

const managementSkills = [
  { name: 'Social Media', icon: <FaHashtag color="#1DA1F2" /> },
  { name: 'Content Strategy', icon: <FaPenFancy color="#FF0000" /> },
  { name: 'Client Relations', icon: <FaHandshake color="#0A66C2" /> },
  { name: 'Team Management', icon: <FaUsers color="#4CAF50" /> },
  { name: 'Telecalling', icon: <FaPhoneAlt color="#FF9800" /> },
  { name: 'Operations', icon: <FaCogs color="#9C27B0" /> },
];

const toolSkills = [
  { name: 'Git', icon: <FaGitAlt color="#F05032" /> },
  { name: 'GitHub', icon: <FaGithub color="#181717" /> },
  { name: 'VS Code', icon: <VscVscode color="#007ACC" /> },
  { name: 'Vercel', icon: <SiVercel color="#000000" /> },
  { name: 'Netlify', icon: <SiNetlify color="#00C7B7" /> },
  { name: 'Figma', icon: <FaFigma color="#F24E1E" /> },
];

const otherTech = ['Canva', 'Leonardo AI', 'Ideogram', 'CapCut', 'Video Editing', 'Graphic Design'];

function SkillCard({ name, icon }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-gray-100 rounded-xl px-3 py-2.5 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-blue-200 transition-all duration-300 cursor-default group">
      <span className="text-lg group-hover:scale-110 transition-transform duration-300 flex items-center justify-center">{icon}</span>
      <span className="text-slate-700 text-sm font-medium group-hover:text-blue-600 transition-colors duration-300">{name}</span>
    </div>
  );
}

function CategoryColumn({ icon, title, description, skills, accentColor }) {
  return (
    <div className="bg-white/70 backdrop-blur rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 flex flex-col gap-4 flex-1 min-w-0 group">
      {/* Header */}
      <div className="flex items-center gap-3 mb-1">
        <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: accentColor + '18' }}>
          <span className="text-xl">{icon}</span>
        </div>
        <div>
          <h3 className="text-slate-800 font-bold text-base">{title}</h3>
          <p className="text-slate-400 text-xs leading-tight">{description}</p>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill) => (
          <SkillCard key={skill.name} name={skill.name} icon={skill.icon} />
        ))}
      </div>

      {/* Accent bar */}
      <div className="mt-2 h-0.5 rounded-full" style={{ backgroundColor: accentColor }}></div>
    </div>
  );
}

function Skills() {
  return (
    <div className="min-h-screen bg-[#F0F5FF] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden font-sans">
      {/* Background blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[35%] h-[35%] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[30%] bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>

      {/* Main Card */}
      <div className="bg-white/80 backdrop-blur-xl w-full max-w-[1200px] rounded-[40px] shadow-[0_8px_32px_rgba(0,0,0,0.05)] p-8 sm:p-10 relative overflow-hidden border border-white/50 flex flex-col">

        {/* Decorative dots */}
        <div className="absolute top-14 left-10 grid grid-cols-5 gap-2 opacity-15 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
          ))}
        </div>
        <div className="absolute bottom-14 right-10 grid grid-cols-5 gap-2 opacity-15 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
          ))}
        </div>

        {/* Page Title */}
        <div className="text-center mb-8 z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-3">
            Skills &amp; <span className="text-blue-500">Technologies</span>
          </h1>
          <div className="w-16 h-1 bg-blue-500 rounded-full mx-auto mb-4"></div>
          <p className="text-slate-400 text-sm">Technologies I use to build scalable, modern and efficient applications.</p>
        </div>

        {/* Three Columns */}
        <div className="flex flex-col lg:flex-row gap-5 z-10">
          <CategoryColumn
            icon="💻"
            title="Frontend"
            description="Building responsive and interactive user interfaces."
            skills={frontendSkills}
            accentColor="#3B82F6"
          />

          <CategoryColumn
            icon="🛠️"
            title="Tools &amp; Platforms"
            description="Tools and platforms that help me build faster and better."
            skills={toolSkills}
            accentColor="#3B82F6"
          />

          <CategoryColumn
            icon="📈"
            title="Management &amp; Social"
            description="Growing brands, managing teams and driving operations."
            skills={managementSkills}
            accentColor="#3B82F6"
          />
        </div>

        {/* Other Technologies Marquee */}
        <div className="mt-8 z-10">
          <h4 className="text-center text-slate-500 font-semibold text-sm mb-4">Other Skills &amp; Tools</h4>
          <div className="relative overflow-hidden">
            <div className="flex gap-3 animate-[marquee_18s_linear_infinite] whitespace-nowrap">
              {[...otherTech, ...otherTech].map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center bg-white border border-gray-100 rounded-full px-4 py-1.5 text-slate-600 text-sm font-medium shadow-sm flex-shrink-0"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Skills;
