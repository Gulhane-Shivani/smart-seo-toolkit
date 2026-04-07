import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

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
            <Link to="/tools" className="flex items-center text-[15px] font-medium text-slate-800 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Tools <ChevronDown className="ml-1 size-4 opacity-50" />
            </Link>
            <a href="#" className="flex items-center text-[15px] font-medium text-slate-800 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              Category <ChevronDown className="ml-1 size-4 opacity-50" />
            </a>
            <a href="#" className="flex items-center text-[15px] font-medium text-slate-800 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
              About Us
            </a>
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
          <a href="#" className="flex items-center justify-between font-semibold py-2 text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-white/5">
            Category <ChevronDown className="size-4 opacity-50" />
          </a>
          <a href="#" className="flex items-center font-semibold py-2 text-slate-800 dark:text-slate-200 border-b border-slate-100 dark:border-white/5">
            About Us
          </a>
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

