import React from 'react';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaEnvelope, FaWhatsapp, FaCode, FaMapMarkerAlt, FaPhoneAlt, FaArrowUp, FaRocket, FaHeart } from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B0F19] text-slate-300 py-16 px-4 sm:px-8 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-900 rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

      <div className="max-w-[1200px] mx-auto relative z-10 border border-slate-800 rounded-3xl p-8 sm:p-12 bg-slate-900/50 backdrop-blur-xl shadow-2xl">
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6 border-b border-slate-800 pb-12">
          
          {/* Column 1: Brand & Info */}
          <div className="lg:col-span-2 col-span-2 pr-0 lg:pr-8">
            <div className="flex items-center gap-3 mb-2">
              <FaCode size={28} className="text-blue-500" />
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Payal <span className="text-blue-500">Gupta</span></h3>
                <p className="text-blue-400 text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Frontend Developer & Social Media Manager</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 mt-6 max-w-sm">
              Building modern, scalable and impactful digital solutions that help businesses grow and succeed.
            </p>
            
            <div className="flex gap-3 mb-8">
              <a href="https://github.com/PayalGupta011" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all border border-slate-700">
                <FaGithub size={16} />
              </a>
              <a href="https://www.linkedin.com/in/payal-gupta-452642367/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all border border-slate-700">
                <FaLinkedin size={16} />
              </a>
              <a href="https://www.youtube.com/@logicverse-i2c" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-red-500 hover:text-white transition-all border border-slate-700">
                <FaYoutube size={16} />
              </a>
              <a href="https://www.instagram.com/payalgupta___21/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all border border-slate-700">
                <FaInstagram size={16} />
              </a>
              <a href="mailto:875payalgupta@gmail.com" className="w-9 h-9 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-500 hover:text-white transition-all border border-slate-700">
                <FaEnvelope size={16} />
              </a>
            </div>

            <a href="https://wa.me/919340391897" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-slate-700 rounded-full px-5 py-2.5 text-sm font-medium text-slate-300 hover:bg-green-500/10 hover:border-green-500/50 hover:text-green-400 transition-colors">
              <FaWhatsapp size={18} className="text-green-500" /> Chat on WhatsApp
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-6">QUICK LINKS</h4>
            <ul className="flex flex-col gap-3">
              {['Home', 'About Me', 'Skills', 'Projects', 'Services', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`/#${link.toLowerCase().replace(' ', '')}`} className="text-slate-400 hover:text-blue-400 text-sm flex items-center gap-2 transition-colors group">
                    <span className="text-slate-600 group-hover:text-blue-500 transition-colors">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-6">RESOURCES</h4>
            <ul className="flex flex-col gap-3">
              {['Resume', 'Case Studies', 'Certifications', 'FAQs'].map((link) => (
                <li key={link}>
                  <a href={`/#${link.toLowerCase().replace(' ', '')}`} className="text-slate-400 hover:text-blue-400 text-sm flex items-center gap-2 transition-colors group">
                    <span className="text-slate-600 group-hover:text-blue-500 transition-colors">›</span> {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Services & Connect */}
          <div className="flex flex-col gap-8">
            <div>
              <h4 className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-6">SERVICES</h4>
              <ul className="flex flex-col gap-3">
                {['Web Development', 'Social Media Management', 'Video Editing', 'Graphic Design'].map((link) => (
                  <li key={link}>
                    <a href="#services" className="text-slate-400 hover:text-blue-400 text-sm flex items-center gap-2 transition-colors group">
                      <span className="text-slate-600 group-hover:text-blue-500 transition-colors">›</span> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-blue-500 text-xs font-bold uppercase tracking-widest mb-6">LET'S CONNECT</h4>
              <p className="text-slate-400 text-sm mb-4 leading-relaxed">Let's build something <span className="text-blue-400 font-semibold">amazing together.</span></p>
              <ul className="flex flex-col gap-3">
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 border border-slate-700 flex-shrink-0">
                    <FaEnvelope size={12} />
                  </div>
                  <a href="mailto:875payalgupta@gmail.com" className="hover:text-blue-400 transition-colors truncate">875payalgupta@gmail.com</a>
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 border border-slate-700 flex-shrink-0">
                    <FaPhoneAlt size={12} />
                  </div>
                  +91 93403 91897
                </li>
                <li className="flex items-center gap-3 text-slate-400 text-sm">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-blue-400 border border-slate-700 flex-shrink-0">
                    <FaMapMarkerAlt size={12} />
                  </div>
                  India
                </li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
          <div className="flex items-start gap-3">
             <FaRocket className="text-blue-500 text-xl mt-1" />
             <div>
               <p className="text-white font-semibold text-sm">Code. Create. <span className="text-blue-400">Innovate.</span> Inspire.</p>
               <p className="text-slate-500 text-xs mt-1">Turning ideas into digital reality.</p>
             </div>
          </div>

          <div className="text-slate-500 text-xs flex flex-col items-center md:items-end gap-1">
            <p>© {currentYear} Payal Gupta. All rights reserved.</p>
            <p className="flex items-center gap-1">Built with <FaHeart className="text-red-500" size={10} /> using <span className="text-blue-400 font-semibold">React & Tailwind CSS.</span></p>
          </div>

          <button onClick={scrollToTop} className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all shadow-lg absolute bottom-8 right-8 sm:bottom-12 sm:right-12 md:static md:translate-x-0 group">
            <FaArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
