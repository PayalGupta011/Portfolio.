import React from 'react';
import { Trophy, Users, GraduationCap, Award, CheckCircle2, ExternalLink, Medal } from 'lucide-react';

function Achievements() {
  const cards = [
    {
      icon: <Trophy size={32} className="text-blue-500" />,
      title: "Hackathons",
      desc: "Participated and won multiple hackathons by building innovative solutions under pressure.",
      list: ["1st Place - CodeStorm 2.0 (2024)", "Finalist - DevRush Hackathon (2023)", "Top 10 - HackOverflow 2023"]
    },
    {
      icon: <Users size={32} className="text-blue-500" />,
      title: "Clients Served",
      desc: "Worked with startups, businesses and individuals to deliver high-quality digital solutions.",
      list: ["20+ Happy Clients", "Projects delivered across 10+ industries", "Long-term client relationships & repeat collaborations"]
    },
    {
      icon: <GraduationCap size={32} className="text-blue-500" />,
      title: "Students Trained",
      desc: "Empowered aspiring developers by providing mentorship and practical industry-level training.",
      list: ["50+ Students Trained", "Hands-on projects & real-world learning", "Helped students get jobs & freelance clients"]
    },
    {
      icon: <Award size={32} className="text-blue-500" />,
      title: "Leadership Roles",
      desc: "Leading teams, communities and initiatives to build a strong tech and learning ecosystem.",
      list: ["Founder & Mentor at TechnoSkill", "CTO & Lead Developer at TechnoSoft", "Managed & guided teams on multiple projects"]
    }
  ];

  return (
    <div className="bg-[#F8FAFC] py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">Achievements</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mt-4 mb-4">
            Achievements & <span className="text-blue-500">Highlights</span>
          </h2>
          <p className="text-slate-500 text-lg">
            Milestones that reflect my journey of growth, impact and leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {cards.map((card, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all h-full flex flex-col">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3 text-center">{card.title}</h3>
              <p className="text-slate-500 text-xs text-center leading-relaxed mb-6 border-b border-gray-100 pb-6">
                {card.desc}
              </p>
              <ul className="space-y-4 flex-grow">
                {card.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-xs text-slate-600">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Banner */}
        <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm flex flex-wrap justify-between items-center gap-8 md:px-16">
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500"><Trophy size={20} /></div>
             <div><h4 className="text-2xl font-bold text-slate-800">5+</h4><p className="text-xs text-slate-500">Hackathons<br/>Participated</p></div>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500"><Users size={20} /></div>
             <div><h4 className="text-2xl font-bold text-slate-800">30+</h4><p className="text-xs text-slate-500">Happy<br/>Clients</p></div>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500"><GraduationCap size={20} /></div>
             <div><h4 className="text-2xl font-bold text-slate-800">50+</h4><p className="text-xs text-slate-500">Students<br/>Trained</p></div>
          </div>
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-blue-500"><Award size={20} /></div>
             <div><h4 className="text-2xl font-bold text-slate-800">3+</h4><p className="text-xs text-slate-500">Leadership<br/>Roles</p></div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <span className="text-blue-500 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">Certified</span>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-800 mt-4 mb-3">
              My <span className="text-blue-500">Certificates</span>
            </h3>
            <p className="text-slate-500 text-base">Verified credentials from recognized platforms & institutions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Certificate 1 - Java DSA */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all group flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Medal size={28} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 leading-tight">Java with DSA</h4>
                  <p className="text-sm text-slate-400 mt-0.5">Programming & Data Structures</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                  <CheckCircle2 size={13} /> Verified
                </span>
                <span className="text-xs text-slate-400">Certificate of Completion</span>
              </div>
              <a
                href="https://drive.google.com/file/d/1TLr836OE3nr9axVa-X6ftDc5dGEqi5TS/view"
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-md shadow-blue-500/20 active:scale-95"
              >
                View Certificate <ExternalLink size={15} />
              </a>
            </div>

            {/* Certificate 2 - Application of AI Tools */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all group flex flex-col gap-5">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors">
                  <Award size={28} className="text-blue-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-slate-800 leading-tight">Application of AI Tools</h4>
                  <p className="text-sm text-slate-400 mt-0.5">Artificial Intelligence & Productivity</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-600 bg-green-50 border border-green-100 px-3 py-1 rounded-full">
                  <CheckCircle2 size={13} /> Verified
                </span>
                <span className="text-xs text-slate-400">Certificate of Completion</span>
              </div>
              <a
                href="https://drive.google.com/file/d/1MzoRC6stEgGJzNpWeniwYYAmeGN_-PMo/view"
                target="_blank"
                rel="noreferrer"
                className="mt-auto inline-flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all shadow-md shadow-blue-500/20 active:scale-95"
              >
                View Certificate <ExternalLink size={15} />
              </a>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Achievements;
