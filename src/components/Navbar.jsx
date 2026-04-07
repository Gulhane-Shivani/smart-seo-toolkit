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
              <div className="absolute top-12 left-0 w-[800px] -ml-20 bg-white dark:bg-brand-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top -translate-y-2 group-hover:translate-y-0 overflow-hidden">
                <div className="flex p-10">
                  <div className="grid grid-cols-[1fr_200px] gap-16 flex-1">
                     {/* Column 1: Top Tools */}
                     <div>
                       <h3 className="text-[15px] font-bold text-slate-900 dark:text-white mb-6">Top Toolkit Features</h3>
                       <div className="grid grid-cols-2 gap-x-12 gap-y-4">
                         {TOOLS.slice(0, 6).map(tool => (
                           <Link key={tool.id} to={`/tools/${tool.slug}`} className="text-[14px] text-slate-600 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-500 font-medium transition-colors line-clamp-1">
                             {tool.name}
                           </Link>
                         ))}
                       </div>
                     </div>
                     
                     {/* Column 2: About Links */}
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

            {/* Category Mega Menu */}
            <div className="relative group">
              <Link to="/tools" className="flex items-center text-[15px] font-medium text-slate-800 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors py-4 -my-4 cursor-pointer">
                Category <ChevronDown className="ml-1 size-4 opacity-50 block group-hover:rotate-180 transition-transform" />
              </Link>
              
              <div className="absolute top-12 left-0 w-[550px] bg-white dark:bg-brand-900 border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top -translate-y-2 group-hover:translate-y-0 overflow-hidden">
                <div className="p-8">
                  <div className="grid grid-cols-2 gap-x-12 gap-y-8">
                    {CATEGORIES.filter(c => c.id !== 'all').map((cat) => (
                      <div key={cat.id} className="group/item">
                        <Link to={`/tools?category=${cat.id}`} className="flex items-center gap-2 mb-4 text-slate-900 dark:text-white hover:text-primary-600 transition-colors">
                          <ChevronDown className="size-3.5 opacity-40 group-hover/item:rotate-180 transition-transform" />
                          <h3 className="text-[15px] font-semibold">{cat.name}</h3>
                        </Link>
                        <ul className="space-y-2.5 pl-6">
                          {TOOLS.filter(t => t.category === cat.id).map(tool => (
                            <li key={tool.id}>
                              <Link to={`/tools/${tool.slug}`} className="text-[14px] text-slate-500 dark:text-slate-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors line-clamp-1">
                                {tool.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
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
          <Link to="/tools" className="flex items-center justify-between font-bold py-3 text-slate-900 dark:text-white border-b border-slate-100 dark:border-white/5 uppercase text-xs tracking-widest" onClick={() => setIsMenuOpen(false)}>
            Tools <ChevronDown className="size-4 opacity-50" />
          </Link>
          <div className="py-2">
            <p className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] mb-3 px-1">Categories</p>
            <div className="grid grid-cols-2 gap-2">
              {CATEGORIES.filter(c => c.id !== 'all').map(cat => (
                <Link 
                  key={cat.id} 
                  to={`/tools?category=${cat.id}`} 
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 dark:bg-white/5 text-[11px] font-bold text-slate-700 dark:text-slate-300"
                >
                  <ChevronDown className="size-3 text-slate-400" />
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
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

