import React from 'react';
import { ExternalLink, HelpCircle, Target, AlertTriangle, Trophy } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

function CaseStudies() {
  const caseStudies = [
    {
      num: "01",
      title: "Gauri Collection",
      desc: "A premium full-stack e-commerce platform with real-time cart, wishlist and cinematic UI animations.",
      darkImage: true,
      problem: "Standard e-commerce templates lacked the premium feel required for a luxury brand, and user experience was often disjointed.",
      approach: "Built a custom storefront using React & Tailwind. Added Framer Motion for cinematic Ken Burns effects. Implemented persistent cart state.",
      challenges: ["Creating smooth, performant scroll animations", "Managing global state for cart & wishlist", "Ensuring responsiveness across all premium devices"],
      outcome: ["Highly engaging, luxury user experience", "Seamless cross-device shopping", "Increased time spent on page due to animations"],
      live: "https://gauri-five.vercel.app/",
      github: "https://github.com/PayalGupta011?tab=repositories",
      image: "/gauri-collection.png"
    },
    {
      num: "02",
      title: "Cricket Live",
      desc: "A real-time cricket scoring application providing instant match updates and comprehensive statistics.",
      darkImage: false,
      problem: "Cricket fans needed a fast, no-nonsense application to get real-time scores without heavy, intrusive ads.",
      approach: "Developed a responsive web app pulling data from live sports APIs. Prioritized speed and clear UI hierarchy.",
      challenges: ["Handling high-frequency real-time API polling", "Designing a clean UI that displays dense statistical data", "Optimizing performance to prevent browser lag"],
      outcome: ["Instantaneous score delivery", "Clean, ad-free user experience", "Highly reliable during peak match traffic"],
      live: "https://cricket-live-git-main-payals-projects-19ab004f.vercel.app/",
      github: "https://github.com/PayalGupta011?tab=repositories",
      image: "/cricket-live.png"
    }
  ];

  return (
    <div className="bg-[#F8FAFC] py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-30"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mt-4 mb-4">
            Projects <span className="text-blue-500">Case Studies</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Real problems. Thoughtful solutions. Impact that matters.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-[40px] p-8 shadow-sm flex flex-col lg:flex-row gap-8 lg:gap-12">
              
              {/* Left Image / UI Mockup */}
              <div className="w-full lg:w-[40%] rounded-3xl bg-blue-50/50 border border-blue-100 flex items-center justify-center min-h-[300px] overflow-hidden p-6">
                {study.image ? (
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover rounded-xl shadow-xl border border-gray-200"
                  />
                ) : study.darkImage ? (
                  <div className="w-full h-full bg-slate-900 rounded-xl shadow-xl border border-slate-800 flex overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-1/4 bg-slate-800 p-3 flex flex-col gap-3 border-r border-slate-700">
                      <div className="w-8 h-8 rounded bg-blue-500 mb-2"></div>
                      <div className="w-full h-3 bg-slate-700 rounded-full"></div>
                      <div className="w-full h-3 bg-slate-700 rounded-full"></div>
                      <div className="w-full h-3 bg-slate-700 rounded-full"></div>
                    </div>
                    {/* Main Content */}
                    <div className="w-3/4 p-4 flex flex-col gap-4">
                      <div className="w-1/2 h-4 bg-slate-800 rounded-full"></div>
                      <div className="flex gap-2">
                        <div className="flex-1 h-12 bg-slate-800 rounded-lg"></div>
                        <div className="flex-1 h-12 bg-slate-800 rounded-lg"></div>
                        <div className="flex-1 h-12 bg-slate-800 rounded-lg"></div>
                      </div>
                      <div className="flex-1 bg-slate-800 rounded-lg w-full relative overflow-hidden">
                         <svg className="absolute bottom-0 w-full h-full text-blue-500" preserveAspectRatio="none" viewBox="0 0 100 100"><path d="M0,100 L0,50 Q25,20 50,60 T100,30 L100,100 Z" fill="currentColor" opacity="0.2"/><path d="M0,100 L0,60 Q25,30 50,70 T100,40 L100,100 Z" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full bg-white rounded-xl shadow-xl border border-gray-200 flex flex-col overflow-hidden relative">
                    {/* Header */}
                    <div className="h-10 border-b border-gray-100 flex items-center px-4 justify-between">
                      <div className="text-blue-500 font-bold text-sm">ShopEase</div>
                      <div className="flex gap-2"><div className="w-4 h-1 bg-gray-200 rounded-full"></div><div className="w-4 h-1 bg-gray-200 rounded-full"></div></div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 bg-gray-50 p-4 flex relative overflow-hidden">
                       <div className="w-1/2 z-10">
                          <div className="w-3/4 h-6 bg-slate-200 rounded-md mb-2"></div>
                          <div className="w-1/2 h-6 bg-slate-200 rounded-md mb-4"></div>
                          <div className="w-1/3 h-8 bg-blue-500 rounded-md"></div>
                       </div>
                       <div className="absolute right-[-10%] bottom-[-10%] w-32 h-32 bg-gray-200 rounded-full shadow-lg border-4 border-white flex items-center justify-center">🎧</div>
                       <div className="absolute right-[20%] top-[10%] w-16 h-16 bg-gray-200 rounded-xl shadow-md border-2 border-white flex items-center justify-center">⌚</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Right Content */}
              <div className="w-full lg:w-[60%] flex flex-col justify-center">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 border-b border-gray-100 pb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-500 text-white font-bold rounded-xl flex items-center justify-center text-xl">
                      {study.num}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">{study.title}</h3>
                      <p className="text-slate-500 text-sm mt-1">{study.desc}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <a href={study.live} target="_blank" rel="noreferrer" className="bg-blue-500 text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 hover:bg-blue-600 transition-colors shadow-sm shadow-blue-500/20">
                      Live Demo <ExternalLink size={14} />
                    </a>
                    <a href={study.github} target="_blank" rel="noreferrer" className="bg-white text-slate-700 border border-gray-200 text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 hover:bg-gray-50 transition-colors shadow-sm">
                      <FaGithub size={14} /> GitHub
                    </a>
                  </div>
                </div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <HelpCircle size={16} className="text-blue-500" />
                      <h4 className="font-bold text-slate-800 text-sm">Problem</h4>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{study.problem}</p>
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Target size={16} className="text-blue-500" />
                      <h4 className="font-bold text-slate-800 text-sm">My Approach</h4>
                    </div>
                    <p className="text-slate-500 text-xs leading-relaxed">{study.approach}</p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <AlertTriangle size={16} className="text-blue-500" />
                      <h4 className="font-bold text-slate-800 text-sm">Challenges</h4>
                    </div>
                    <ul className="space-y-1">
                      {study.challenges.map((c, i) => (
                        <li key={i} className="text-slate-500 text-xs flex items-start gap-1.5 leading-relaxed">
                          <span className="text-blue-500 mt-0.5">•</span> {c}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Trophy size={16} className="text-blue-500" />
                      <h4 className="font-bold text-slate-800 text-sm">Final Outcome</h4>
                    </div>
                    <ul className="space-y-1">
                      {study.outcome.map((o, i) => (
                        <li key={i} className="text-slate-500 text-xs flex items-start gap-1.5 leading-relaxed">
                          <span className="text-blue-500 mt-0.5">•</span> {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default CaseStudies;
