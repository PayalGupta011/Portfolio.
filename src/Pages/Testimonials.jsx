import React from 'react';
import { Quote, Star, CheckCircle } from 'lucide-react';
import { FaBookOpen, FaHammer, FaCode, FaChalkboardTeacher, FaRocket } from 'react-icons/fa';

function Testimonials() {
  const testimonials = [
    {
      content: "Payal has completely transformed my online presence. Her social media strategies and consistent engagement have grown my brand significantly. Highly reliable and creative!",
      name: "Dr. Priyadarshini",
      role: "Medical Professional, Abu Dhabi",
      badge: "Verified Client",
      avatar: "/dr-priyadarshini.jpg"
    },
    {
      content: "Working with Payal has been a game changer for my business. She manages the content seamlessly, brings innovative ideas, and always delivers on time. I couldn't be happier with the results.",
      name: "Miss Aayushi Jain",
      role: "Business Owner, India",
      badge: "Verified Client",
      avatar: "https://ui-avatars.com/api/?name=Aayushi+Jain&background=10B981&color=fff"
    },
    {
      content: "Payal has been an excellent contributor to our development team. Her frontend skills, dedication, and ability to deliver scalable features on time have greatly benefited our projects at Softonexa.",
      name: "Sanket Rahangdale",
      role: "CTO, Softonexa",
      badge: "Verified Client",
      avatar: "/sanket.png"
    }
  ];

  return (
    <div className="bg-white py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-60"></div>
      <div className="absolute bottom-0 right-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-60"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <span className="text-blue-500 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-800 mt-4 mb-4">
            What People <span className="text-blue-500">Say</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Real feedback from clients, students and collaborators who've worked with me.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white border border-gray-100 rounded-3xl p-8 shadow-lg shadow-blue-50/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 relative flex flex-col h-full">
              
              <div className="flex justify-between items-start mb-6">
                <Quote size={36} className="text-blue-200" fill="currentColor" />
                <div className="flex gap-1 text-blue-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" />
                  ))}
                </div>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-grow">
                {t.content}
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full border-2 border-blue-50" />
                <div>
                  <h4 className="text-slate-800 font-bold text-sm">{t.name}</h4>
                  <p className="text-slate-500 text-xs mb-1">{t.role}</p>
                  <div className="flex items-center gap-1 text-blue-500 bg-blue-50 w-fit px-2 py-0.5 rounded-full">
                    <CheckCircle size={10} fill="currentColor" className="text-white bg-blue-500 rounded-full" />
                    <span className="text-[10px] font-bold">{t.badge}</span>
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

export default Testimonials;
