import React from 'react';
import { Mail, MessageCircle, MapPin, Clock, Send, ShieldCheck, Zap, ThumbsUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';

function Contact() {
  return (
    <div className="bg-[#F8FAFC] py-20 px-4 sm:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[150px] opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-100 rounded-full mix-blend-multiply filter blur-[120px] opacity-40"></div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <span className="text-blue-500 font-bold text-sm bg-blue-50 px-3 py-1 rounded-full flex items-center justify-center w-fit mx-auto gap-2">
            <Send size={14} className="text-blue-500" /> Get In Touch
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-slate-800 mt-4 mb-4">
            Let's Build Something<br />
            Amazing <span className="text-blue-500">Together</span>
          </h2>
          <p className="text-slate-500 text-sm sm:text-lg max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-[30px] sm:rounded-[40px] shadow-xl shadow-blue-50/50 p-5 sm:p-8 lg:p-10 mb-8 sm:mb-12 border border-gray-100">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
            
            {/* Left Column: Let's Connect */}
            <div className="lg:w-[30%] flex flex-col">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Let's Connect</h3>
              
              <div className="flex flex-col gap-6 mb-8 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-slate-800 font-bold text-sm">Email</p>
                    <a href="mailto:875payalgupta@gmail.com" className="text-slate-500 text-xs hover:text-blue-500 transition-colors">875payalgupta@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
                    <MessageCircle size={18} />
                  </div>
                  <div>
                    <p className="text-slate-800 font-bold text-sm">WhatsApp</p>
                    <p className="text-slate-500 text-xs">+91 93403 91897</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-slate-800 font-bold text-sm">Location</p>
                    <p className="text-slate-500 text-xs">India</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 flex-shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-slate-800 font-bold text-sm">Response Time</p>
                    <p className="text-slate-500 text-xs">Within 24 Hours</p>
                  </div>
                </div>
              </div>

              <a href="https://wa.me/919340391897" target="_blank" rel="noreferrer" className="w-full bg-white border-2 border-blue-100 hover:border-blue-500 hover:bg-blue-50 text-blue-500 font-bold py-3.5 rounded-2xl flex items-center justify-center gap-2 transition-all shadow-sm">
                <FaWhatsapp size={20} /> Chat on WhatsApp<br/><span className="text-[10px] font-normal absolute mt-8 text-slate-400 hidden lg:block group-hover:text-blue-400">Let's discuss your project</span>
              </a>
            </div>

            {/* Middle Column: Send Me a Message */}
            <div className="lg:w-[40%] flex flex-col border-y lg:border-y-0 lg:border-x border-gray-100 py-8 lg:py-0 lg:px-10">
              <h3 className="text-xl font-bold text-slate-800 mb-6">Send Me a Message</h3>
              
              <form className="flex flex-col gap-4 flex-grow">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <div className="absolute left-4 top-3.5 text-slate-400"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></div>
                    <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all text-slate-700" />
                  </div>
                  <div className="flex-1 relative">
                    <div className="absolute left-4 top-3.5 text-slate-400"><Mail size={16} /></div>
                    <input type="email" placeholder="Your Email" className="w-full bg-slate-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all text-slate-700" />
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute left-4 top-3.5 text-slate-400"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg></div>
                  <input type="text" placeholder="Subject (Optional)" className="w-full bg-slate-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all text-slate-700" />
                </div>
                
                <div className="relative flex-grow">
                  <div className="absolute left-4 top-3.5 text-slate-400"><MessageCircle size={16} /></div>
                  <textarea placeholder="Your Message" rows="5" className="w-full h-full min-h-[120px] bg-slate-50 border border-gray-200 rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all text-slate-700 resize-none"></textarea>
                </div>
                
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/30">
                  <Send size={16} /> Send Message<br/><span className="hidden">I'll get back to you as soon as possible!</span>
                </button>
              </form>
            </div>

            {/* Right Column: Illustration - hidden on mobile */}
            <div className="lg:w-[30%] hidden lg:flex bg-blue-50/50 rounded-3xl p-8 flex-col justify-center border border-blue-100/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-[20px] opacity-60"></div>
              
              <div className="relative w-full h-40 mb-6 flex items-center justify-center">
                {/* 3D Envelope Placeholder Visual */}
                <div className="w-32 h-24 bg-blue-200 rounded-lg shadow-xl relative transform -rotate-6">
                  <div className="absolute inset-0 border-t-[48px] border-l-[64px] border-r-[64px] border-b-0 border-t-blue-100 border-l-transparent border-r-transparent rounded-t-lg"></div>
                  <div className="absolute inset-0 border-b-[60px] border-l-[64px] border-r-[64px] border-t-0 border-b-blue-400 border-l-transparent border-r-transparent rounded-b-lg drop-shadow-md"></div>
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-500 transform rotate-12">
                    <Send size={20} className="-ml-1 mt-1" />
                  </div>
                  <div className="absolute -left-4 top-1/2 w-6 h-6 bg-yellow-400 rounded-full shadow-sm"></div>
                  <div className="absolute top-0 right-8 w-4 h-4 bg-purple-400 rounded-full shadow-sm"></div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-800 mb-2 leading-snug">Let's turn your ideas<br/>into <span className="text-blue-500">real-world solutions.</span></h3>
              <p className="text-slate-500 text-xs leading-relaxed mb-6">Whether it's a website, app or a product idea, I'm here to help you bring it to life.</p>
              
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col items-center gap-1">
                  <Zap size={16} className="text-blue-500" />
                  <span className="text-[9px] font-bold text-slate-600 text-center">Fast<br/>Response</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ShieldCheck size={16} className="text-blue-500" />
                  <span className="text-[9px] font-bold text-slate-600 text-center">Secure<br/>Communication</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <ThumbsUp size={16} className="text-blue-500" />
                  <span className="text-[9px] font-bold text-slate-600 text-center">100%<br/>Satisfaction</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Socials Row */}
        <div className="text-center">
          <h4 className="text-slate-800 font-bold mb-6 text-sm">Connect With Me</h4>
          <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-8">
            <a href="https://github.com/PayalGupta011" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 px-4 py-2.5 rounded-xl transition-all shadow-sm">
              <FaGithub size={20} className="text-slate-700" />
              <div className="text-left hidden sm:block">
                <p className="text-[10px] text-slate-400 leading-none">GitHub</p>
                <p className="text-xs font-bold text-slate-700 leading-none mt-1">@PayalGupta011</p>
              </div>
            </a>
            <a href="https://www.linkedin.com/in/payal-gupta-452642367/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white border border-gray-200 hover:border-blue-200 hover:bg-blue-50 px-4 py-2.5 rounded-xl transition-all shadow-sm">
              <FaLinkedin size={20} className="text-[#0A66C2]" />
              <div className="text-left hidden sm:block">
                <p className="text-[10px] text-slate-400 leading-none">LinkedIn</p>
                <p className="text-xs font-bold text-slate-700 leading-none mt-1">in/payal-gupta</p>
              </div>
            </a>

            <a href="https://www.instagram.com/payalgupta___21/" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white border border-gray-200 hover:border-pink-200 hover:bg-pink-50 px-4 py-2.5 rounded-xl transition-all shadow-sm">
              <FaInstagram size={20} className="text-[#E1306C]" />
              <div className="text-left hidden sm:block">
                <p className="text-[10px] text-slate-400 leading-none">Instagram</p>
                <p className="text-xs font-bold text-slate-700 leading-none mt-1">@payalgupta___21</p>
              </div>
            </a>
            <a href="https://www.youtube.com/@logicverse-i2c" target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-white border border-gray-200 hover:border-red-200 hover:bg-red-50 px-4 py-2.5 rounded-xl transition-all shadow-sm">
              <FaYoutube size={20} className="text-[#FF0000]" />
              <div className="text-left hidden sm:block">
                <p className="text-[10px] text-slate-400 leading-none">YouTube</p>
                <p className="text-xs font-bold text-slate-700 leading-none mt-1">logic_verse</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Contact;