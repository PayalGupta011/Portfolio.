import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react';

function Navbar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="w-full px-6 sm:px-10 py-4 flex justify-between items-center bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm sticky top-0 z-50">
      {/* Logo */}
      <Link 
        to="/"
        onClick={() => setIsMobileMenuOpen(false)}
        className="group"
      >
        <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden border-[3px] border-blue-200 shadow-[0_2px_12px_rgba(59,130,246,0.3)] group-hover:scale-110 group-hover:border-blue-400 group-hover:shadow-[0_4px_20px_rgba(59,130,246,0.4)] transition-all duration-300 bg-blue-50">
          <img 
            src="/payal.png" 
            alt="Payal Gupta" 
            className="w-full h-full object-cover object-top"
          />
        </div>
      </Link>

      {/* Nav Links Desktop */}
      <nav className="hidden md:flex items-center gap-8">
        {links.map((link) => {
          // Exact match for Home (/), startsWith for others
          const isActive = link.to === "/" ? location.pathname === "/" : location.pathname.startsWith(link.to);
          
          return (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-semibold relative group py-1 transition-colors duration-300 ${
                isActive ? "text-blue-500" : "text-slate-500 hover:text-blue-500"
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-[2.5px] bg-blue-500 rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
            </Link>
          );
        })}
        <Link
          to="/contact"
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm px-6 py-2.5 rounded-lg font-bold transition-all shadow-md shadow-blue-500/20 active:scale-95"
        >
          Hire Me
        </Link>
      </nav>

      {/* Mobile hamburger */}
      <button 
        className="md:hidden text-slate-700 hover:text-blue-500 transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-4 sm:right-10 mt-2 w-56 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-2xl shadow-xl py-4 px-5 flex flex-col gap-2 md:hidden animate-in slide-in-from-top-2 duration-200 origin-top-right">
          {links.map((link) => {
            const isActive = link.to === "/" ? location.pathname === "/" : location.pathname.startsWith(link.to);
            return (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-sm font-semibold py-2.5 px-3 rounded-lg transition-colors duration-300 ${
                  isActive ? "bg-blue-50 text-blue-500" : "text-slate-600 hover:bg-slate-50 hover:text-blue-500"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="pt-2 mt-1 border-t border-gray-100">
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="bg-blue-500 hover:bg-blue-600 transition-colors text-white text-center text-sm px-6 py-2.5 rounded-lg font-bold shadow-md block w-full"
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;