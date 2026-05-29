import React from 'react';
import { ArrowRight, BookOpen, Lightbulb, TrendingUp, MonitorPlay, Mail } from 'lucide-react';
import { FaReact, FaJsSquare, FaGlobe, FaBriefcase, FaCode, FaTools, FaHashtag, FaUsers, FaVideo, FaPalette } from 'react-icons/fa';

function Blog() {
  const posts = [
    {
      category: "SOCIAL MEDIA",
      time: "5 min read",
      title: "10 Social Media Strategies for Rapid Brand Growth",
      desc: "Learn how to build a strong brand presence and engage with global clients effectively.",
      author: "Payal Gupta",
      date: "May 20, 2024",
      color: "from-blue-400 to-indigo-500",
      icon: <FaHashtag size={48} className="text-white opacity-90" />
    },
    {
      category: "FRONTEND",
      time: "7 min read",
      title: "Building Responsive UI with React & Tailwind CSS",
      desc: "A developer's guide to creating stunning, fast, and user-friendly web applications.",
      author: "Payal Gupta",
      date: "May 10, 2024",
      color: "from-cyan-500 to-blue-600",
      icon: <FaReact size={48} className="text-white opacity-90" />
    },
    {
      category: "CAREER",
      time: "6 min read",
      title: "From Tele Calling to Tech: Leveraging Communication",
      desc: "Insights on how strong communication skills translate to better client relations and project success.",
      author: "Payal Gupta",
      date: "May 02, 2024",
      color: "from-purple-400 to-pink-500",
      icon: <FaBriefcase size={48} className="text-white opacity-90" />
    }
  ];

  const topics = [
    { name: "Social Media", count: 15, icon: <FaHashtag className="text-blue-500" /> },
    { name: "Frontend Dev", count: 12, icon: <FaReact className="text-cyan-500" /> },
    { name: "Client Relations", count: 8, icon: <FaUsers className="text-emerald-500" /> },
    { name: "Video Editing", count: 10, icon: <FaVideo className="text-purple-500" /> },
    { name: "Design & Tools", count: 7, icon: <FaPalette className="text-pink-500" /> },
    { name: "Career Advice", count: 5, icon: <FaBriefcase className="text-indigo-500" /> }
  ];

  return (
    <div className="bg-[#F8FAFC] py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-[-10%] w-[400px] h-[400px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[100px] opacity-40"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-40"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-blue-500 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">My Blog</span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mt-4 mb-4">
            Insights & <span className="text-blue-500">Knowledge</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-lg max-w-2xl mx-auto">
            Sharing knowledge, solving problems and helping developers grow.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content (Left) */}
          <div className="lg:w-2/3 flex flex-col gap-8">
            
            {/* Blog Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <div key={i} className="bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col hover:-translate-y-2">
                  <div className={`h-40 w-full bg-gradient-to-br ${post.color} flex items-center justify-center p-6 relative overflow-hidden`}>
                    <div className="absolute top-[-20%] right-[-20%] w-[100px] h-[100px] bg-white opacity-10 rounded-full"></div>
                    <div className="absolute bottom-[-20%] left-[-20%] w-[80px] h-[80px] bg-white opacity-10 rounded-full"></div>
                    {post.icon}
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">
                      <span className="text-blue-500 bg-blue-50 px-2 py-0.5 rounded-md">{post.category}</span>
                      <span className="flex items-center gap-1">⏱ {post.time}</span>
                    </div>
                    <h3 className="font-bold text-slate-800 text-lg mb-2 leading-snug hover:text-blue-500 transition-colors cursor-pointer">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-6 flex-grow">
                      {post.desc}
                    </p>
                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 mt-auto">
                      <div className="flex items-center gap-2">
                        <img src={`https://ui-avatars.com/api/?name=Payal+Gupta&background=0D8ABC&color=fff`} alt="Author" className="w-8 h-8 rounded-full" />
                        <div>
                          <p className="text-slate-800 font-bold text-[10px]">{post.author}</p>
                          <p className="text-slate-400 text-[10px]">{post.date}</p>
                        </div>
                      </div>
                      <a href="#" className="text-blue-500 text-xs font-bold flex items-center gap-1 hover:text-blue-600">
                        Read More <ArrowRight size={12} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Feature Boxes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-2 items-center text-center hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center text-blue-500"><BookOpen size={18} /></div>
                <h4 className="font-bold text-slate-800 text-xs">Practical Guides</h4>
                <p className="text-slate-400 text-[10px]">Step-by-step tutorials.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-2 items-center text-center hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-yellow-50 rounded-full flex items-center justify-center text-yellow-500"><Lightbulb size={18} /></div>
                <h4 className="font-bold text-slate-800 text-xs">Developer Tips</h4>
                <p className="text-slate-400 text-[10px]">Best practices for code.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-2 items-center text-center hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500"><TrendingUp size={18} /></div>
                <h4 className="font-bold text-slate-800 text-xs">Career Growth</h4>
                <p className="text-slate-400 text-[10px]">Advice to advance.</p>
              </div>
              <div className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-2 items-center text-center hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-500"><MonitorPlay size={18} /></div>
                <h4 className="font-bold text-slate-800 text-xs">Continuous Learning</h4>
                <p className="text-slate-400 text-[10px]">Latest tech and trends.</p>
              </div>
            </div>

            <div className="flex justify-center mt-2">
              <a href="#" className="bg-white border border-gray-200 text-blue-500 font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-gray-50 transition-colors shadow-sm text-sm">
                View All Articles <ArrowRight size={16} />
              </a>
            </div>

          </div>

          {/* Sidebar (Right) */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            
            {/* Explore Topics */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
              <h3 className="font-bold text-slate-800 mb-6 text-lg">Explore Topics</h3>
              <div className="flex flex-col gap-4">
                {topics.map((topic, index) => (
                  <a key={index} href="#" className="flex items-center justify-between group">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-50 transition-colors">
                        {topic.icon}
                      </div>
                      <span className="font-semibold text-slate-600 text-sm group-hover:text-blue-500 transition-colors">{topic.name}</span>
                    </div>
                    <span className="bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-1 rounded-md">{topic.count}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-sm text-center relative overflow-hidden flex flex-col items-center">
              <div className="absolute top-[-20%] right-[-20%] w-[150px] h-[150px] bg-blue-50 rounded-full mix-blend-multiply filter blur-[30px] opacity-60"></div>
              
              <div className="w-16 h-16 bg-blue-100 text-blue-500 rounded-full flex items-center justify-center mb-4 relative z-10">
                <Mail size={28} />
              </div>
              <h3 className="font-bold text-slate-800 text-lg mb-2 relative z-10">Stay Updated</h3>
              <p className="text-slate-500 text-xs mb-6 relative z-10 px-2">
                Get the latest articles and resources straight to your inbox.
              </p>
              
              <form className="w-full relative z-10 flex flex-col gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all text-center"
                />
                <button type="button" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-colors text-sm shadow-lg shadow-blue-500/30">
                  Subscribe Now
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
