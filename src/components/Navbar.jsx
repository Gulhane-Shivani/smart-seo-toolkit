import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TOOLS, CATEGORIES } from '../data/tools';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`glass-header border-b border-slate-200 dark:border-white/10 transition-all duration-300 w-full ${isScrolled ? 'py-3 bg-white/90 dark:bg-brand-950/90' : 'py-5 bg-white dark:bg-brand-950'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        
        {/* Left Section: Logo & Nav Links */}
        <div className="flex items-center space-x-10">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-primary-600 rounded-lg">
              <Zap className="text-white size-5 fill-white" />
            </div>
            <span className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              SMART SEO
            </span>
          </Link>

          {/* Desktop Nav List */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Megamenu for Tools */}
            <div className="relative group">
              <Link to="/tools" className="flex items-center text-[15px] font-medium text-slate-800 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-4 -my-4 cursor-pointer">
                Tools <ChevronDown className="ml-1 size-4 opacity-50 block group-hover:rotate-180 transition-transform" />
              </Link>
              
              {/* Mega Menu Dropdown */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] bg-white dark:bg-brand-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top -translate-y-2 group-hover:translate-y-0 overflow-hidden">
                <div className="flex p-8">
                  <div className="grid grid-cols-3 gap-12 flex-1">
                     {/* Column 1: Categories */}
                     <div>
                       <h3 className="text-[15px] font-bold text-slate-900 dark:text-white mb-6">Explore Categories</h3>
                       <ul className="space-y-4">
                         {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                           <li key={cat.id}>
                             <Link to={`/tools?category=${cat.id}`} className="text-[14px] text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-500 font-medium transition-colors">
                               {cat.name}
                             </Link>
                           </li>
                         ))}
                       </ul>
                     </div>
                     
                     {/* Column 2: Top Tools */}
                     <div>
                       <h3 className="text-[15px] font-bold text-slate-900 dark:text-white mb-6">Top Toolkit Features</h3>
                       <ul className="space-y-4">
                         {TOOLS.slice(0, 5).map(tool => (
                           <li key={tool.id}>
                             <Link to={`/tools/${tool.slug}`} className="text-[14px] text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-500 font-medium transition-colors">
                               {tool.name}
                             </Link>
                           </li>
                         ))}
                       </ul>
                     </div>
                     
                     {/* Column 3: About Links */}
                     <div>
                       <h3 className="text-[15px] font-bold text-slate-900 dark:text-white mb-6">About Toolkit</h3>
                       <ul className="space-y-4">
                         <li><Link to="/about" className="text-[14px] text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-500 font-medium transition-colors">About Us</Link></li>
                         <li><Link to="/stats" className="text-[14px] text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-500 font-medium transition-colors">Stats and Facts</Link></li>
                         <li><Link to="/contact" className="text-[14px] text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-500 font-medium transition-colors">Contact Us</Link></li>
                       </ul>
                     </div>
                  </div>
                </div>
              </div>
            </div>
            <Link to="/about" className="flex items-center text-[15px] font-medium text-slate-800 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              About Us
            </Link>
          </div>
        </div>

        {/* Right Section: Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/login" className="px-5 py-2 border-2 border-slate-800 dark:border-white text-slate-800 dark:text-white rounded-full font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-sm">
            Log In
          </Link>
          
          <Link to="/signup" className="px-6 py-2.5 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-500 transition-all text-sm shadow-sm group">
            Sign Up
          </Link>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-800 dark:text-slate-200">
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-brand-950 border-b border-slate-200 dark:border-white/10 p-4 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-4 duration-300">
          <Link to="/tools" className="flex items-center justify-between font-semibold py-2 text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-white/5" onClick={() => setIsMenuOpen(false)}>
            Tools <ChevronDown className="size-4 opacity-50" />
          </Link>
          <Link to="/tools" onClick={() => setIsMenuOpen(false)} className="flex items-center justify-between font-semibold py-2 text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-white/5">
            Category <ChevronDown className="size-4 opacity-50" />
          </Link>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="flex items-center font-semibold py-2 text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-white/5">
            About Us
          </Link>
          <div className="pt-4 flex flex-col space-y-3">
            <Link to="/login" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 border-2 border-slate-800 dark:border-white text-slate-800 dark:text-white rounded-full font-bold text-sm">
              Log In
            </Link>
            <Link to="/signup" onClick={() => setIsMenuOpen(false)} className="w-full text-center py-3 bg-primary-600 text-white rounded-full font-bold text-sm">
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

