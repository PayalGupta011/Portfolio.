import React from 'react';
import { Rocket, Briefcase, Code2, Users } from 'lucide-react';

const experiences = [
  {
    number: '01',
    period: '2025 - Present',
    company: 'Freelance / International',
    role: 'Social Media Manager',
    description: 'Managing online presence and social media for global and national clients.',
    icon: <Rocket size={22} className="text-blue-500" />,
    highlights: [
      'Managing Dr. Priyadarshini (Abu Dhabi, Dubai)',
      'Managing Miss Aayushi Jain (India)',
      'Content creation, strategy, and engagement',
    ],
    color: 'bg-blue-50',
    borderColor: 'border-blue-200',
  },
  {
    number: '02',
    period: 'Jul 2025 - Jan 2026',
    company: 'Technosoft',
    role: 'Junior Developer',
    description: 'Contributed to software development and coding tasks.',
    icon: <Code2 size={22} className="text-purple-500" />,
    highlights: [
      'Developed frontend features',
      'Collaborated with the development team',
      'Fixed bugs and optimized performance',
    ],
    color: 'bg-purple-50',
    borderColor: 'border-purple-200',
  },
  {
    number: '03',
    period: 'Dec 2024 - May 2025',
    company: 'Inspire Academy',
    role: 'Tele Caller',
    description: 'Managed communications and student inquiries.',
    icon: <Users size={22} className="text-emerald-500" />,
    highlights: [
      'Counseled prospective students',
      'Handled daily inbound/outbound calls',
      'Maintained communication records',
    ],
    color: 'bg-emerald-50',
    borderColor: 'border-emerald-200',
  },
  {
    number: '04',
    period: 'Jan 2023 - Nov 2024',
    company: 'Indore Academy',
    role: 'Manager',
    description: 'Overseen academy operations and administration.',
    icon: <Briefcase size={22} className="text-amber-500" />,
    highlights: [
      'Managed daily operations and staff',
      'Coordinated schedules and events',
      'Ensured smooth functioning of the academy',
    ],
    color: 'bg-amber-50',
    borderColor: 'border-amber-200',
  },
];

const stats = [
  { icon: <Briefcase size={20} className="text-blue-500" />, value: '3+', label: 'Years Experience' },
  { icon: <Code2 size={20} className="text-blue-500" />, value: '5+', label: 'Projects Built' },
  { icon: <Users size={20} className="text-blue-500" />, value: '500+', label: 'Students Counselled' },
];

function Experience() {
  return (
    <div className="min-h-screen bg-[#F0F5FF] px-4 py-12 sm:px-8 sm:py-16 relative overflow-hidden font-sans">
      {/* Background blobs */}
      <div className="absolute top-[-10%] right-[-10%] w-[35%] h-[35%] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[30%] bg-blue-200 rounded-full mix-blend-multiply filter blur-[100px] opacity-40 pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">

        {/* Section Tag + Title */}
        <div className="mb-8 sm:mb-12 text-center">
          <span className="text-blue-500 font-semibold text-sm border border-blue-200 bg-blue-50 px-3 py-1 rounded-full">
            Experience
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 mt-4 mb-2">
            Work <span className="text-blue-500">Journey</span>
          </h1>
          <p className="text-slate-400 text-sm max-w-md mx-auto">
            A journey of learning, building and leading with purpose.
          </p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {stats.map((stat, i) => (
            <div key={i} className="bg-white/80 backdrop-blur border border-gray-100 rounded-2xl p-3 sm:p-5 flex flex-col sm:flex-row items-center gap-2 sm:gap-4 shadow-sm text-center sm:text-left">
              <div className="w-9 h-9 sm:w-11 sm:h-11 bg-blue-50 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0">
                {stat.icon}
              </div>
              <div>
                <div className="text-lg sm:text-2xl font-bold text-slate-800">{stat.value}</div>
                <div className="text-slate-500 text-[10px] sm:text-xs leading-tight">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4 group cursor-default"
            >
              {/* Card Header */}
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 rounded-xl ${exp.color} border ${exp.borderColor} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                    {exp.icon}
                  </div>
                  <div>
                    <h3 className="text-slate-800 font-bold text-sm sm:text-base leading-tight">{exp.company}</h3>
                    <p className="text-blue-500 text-xs sm:text-sm font-semibold">{exp.role}</p>
                  </div>
                </div>
                <span className="text-[10px] sm:text-xs text-slate-400 bg-slate-50 border border-slate-100 px-2 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                  {exp.period}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-500 text-xs sm:text-sm leading-relaxed border-t border-gray-50 pt-3">
                {exp.description}
              </p>

              {/* Highlights */}
              <div className="flex flex-col gap-2">
                {exp.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <svg className="flex-shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="8" fill="#EFF6FF"/>
                      <path d="M4.5 8L7 10.5L11.5 6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-slate-500 text-xs sm:text-sm">{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default Experience;
