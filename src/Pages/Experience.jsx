import React from 'react';
import { Rocket, Briefcase, Code2, GraduationCap, Users } from 'lucide-react';

const experiences = [
  {
    number: '01',
    period: '2025 - Present',
    company: 'Freelance / International',
    role: 'Social Media Manager',
    description: 'Managing online presence and social media for global and national clients.',
    icon: <Rocket size={20} className="text-blue-500" />,
    highlights: [
      'Managing Dr. Priyadarshini (Abu Dhabi, Dubai)',
      'Managing Miss Aayushi Jain (India)',
      'Content creation, strategy, and engagement',
    ],
  },
  {
    number: '02',
    period: 'Jul 2025 - Jan 2026',
    company: 'Technosoft',
    role: 'Junior Developer',
    description: 'Contributed to software development and coding tasks.',
    icon: <Code2 size={20} className="text-blue-500" />,
    highlights: [
      'Developed frontend features',
      'Collaborated with the development team',
      'Fixed bugs and optimized performance',
    ],
  },
  {
    number: '03',
    period: 'Dec 2024 - May 2025',
    company: 'Inspire Academy',
    role: 'Tele Caller',
    description: 'Managed communications and student inquiries.',
    icon: <Users size={20} className="text-blue-500" />,
    highlights: [
      'Counseled prospective students',
      'Handled daily inbound/outbound calls',
      'Maintained communication records',
    ],
  },
  {
    number: '04',
    period: 'Jan 2023 - Nov 2024',
    company: 'Indore Academy',
    role: 'Manager',
    description: 'Overseen academy operations and administration.',
    icon: <Briefcase size={20} className="text-blue-500" />,
    highlights: [
      'Managed daily operations and staff',
      'Coordinated schedules and events',
      'Ensured smooth functioning of the academy',
    ],
  },
];

const stats = [
  { icon: <Briefcase size={22} className="text-blue-500" />, value: '3+', label: 'Years Experience' },
  { icon: <Code2 size={22} className="text-blue-500" />, value: '5+', label: 'Projects Built' },
  { icon: <Users size={22} className="text-blue-500" />, value: '500+', label: 'Students Counselled' },
];

function Experience() {
  return (
    <div className="min-h-screen bg-[#F0F5FF] flex items-center justify-center p-4 sm:p-8 relative overflow-hidden font-sans">
      {/* Background blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[35%] h-[35%] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>

      {/* Main Card */}
      <div className="bg-white/80 backdrop-blur-xl w-full max-w-[1200px] rounded-[40px] shadow-[0_8px_32px_rgba(0,0,0,0.05)] p-8 sm:p-10 relative overflow-hidden border border-white/50 flex flex-col">

        {/* Decorative dots */}
        <div className="absolute top-14 right-10 grid grid-cols-5 gap-2 opacity-15 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
          ))}
        </div>

        {/* Section Tag */}
        <div className="mb-4">
          <span className="text-blue-500 font-semibold text-sm border border-blue-200 bg-blue-50 px-3 py-1 rounded-full">Experience</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 mb-2">
          Experience / Work <span className="text-blue-500">Journey</span>
        </h1>
        <p className="text-slate-400 text-sm mb-8">A journey of learning, building and leading with purpose.</p>

        {/* Timeline */}
        <div className="relative z-10 flex flex-col gap-0">
          {/* Vertical line aligned to the center of icons */}
          <div className="absolute left-[97px] sm:left-[137px] top-0 bottom-0 w-0.5 bg-blue-100 rounded-full z-0 overflow-hidden">
            <div 
              className="absolute w-full bg-gradient-to-b from-transparent via-blue-500 to-transparent"
              style={{
                height: '100px',
                animation: 'dropLine 3s linear infinite'
              }}
            >
              <style>
                {`
                  @keyframes dropLine {
                    0% { top: -100px; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                  }
                `}
              </style>
            </div>
          </div>

          {experiences.map((exp, idx) => (
            <div key={idx} className="flex gap-4 sm:gap-6 relative z-10 mb-6 last:mb-0 group cursor-default">
              {/* Left: number + period */}
              <div className="flex flex-col items-end w-[64px] sm:w-[96px] flex-shrink-0 pt-3">
                <span className="text-blue-400 font-bold text-sm leading-none mb-1 group-hover:text-blue-500 transition-colors duration-300">{exp.number}</span>
                <span className="text-slate-400 text-[10px] sm:text-xs text-right leading-tight group-hover:text-slate-500 transition-colors duration-300">{exp.period}</span>
              </div>

              {/* Center: icon dot */}
              <div className="flex flex-col items-center pt-3 z-10">
                <div className="w-9 h-9 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center shadow-sm group-hover:bg-blue-500 group-hover:border-blue-500 group-hover:text-white group-hover:scale-110 group-hover:shadow-blue-500/30 transition-all duration-300">
                  <div className="text-blue-500 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                    {exp.icon}
                  </div>
                </div>
              </div>

              {/* Right: card */}
              <div className="flex-1 grid md:grid-cols-2 gap-4 bg-white/60 border border-gray-100 rounded-2xl p-5 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 group-hover:bg-white group-hover:border-blue-100 transition-all duration-300">
                {/* Company Info */}
                <div>
                  <h3 className="text-slate-800 font-bold text-base mb-0.5">{exp.company}</h3>
                  <p className="text-blue-500 text-sm font-semibold mb-2">{exp.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">{exp.description}</p>
                </div>

                {/* Highlights */}
                <div className="flex flex-col gap-1.5 justify-center">
                  {exp.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <svg className="flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <circle cx="8" cy="8" r="8" fill="#EFF6FF"/>
                        <path d="M4.5 8L7 10.5L11.5 6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-slate-500 text-sm">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-8 grid grid-cols-3 gap-4 z-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-blue-50/60 border border-blue-100 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-11 h-11 bg-white rounded-xl flex items-center justify-center shadow-sm">
                {stat.icon}
              </div>
              <div>
                <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                <div className="text-slate-500 text-xs">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Experience;
