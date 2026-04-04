import React, { useState, useEffect } from 'react';
import { Search, Sun, Moon, Menu, X, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className={`glass-header transition-all duration-300 w-full ${isScrolled ? 'py-3' : 'py-5'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="p-2 bg-primary-600 rounded-lg group-hover:bg-primary-500 transition-colors">
            <Zap className="text-white size-6" />
          </div>
          <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-primary-400 dark:from-white dark:to-primary-300">
            NexusSEO
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="Search tools..." 
              className="pl-10 pr-4 py-2 rounded-full bg-slate-100 dark:bg-brand-900 border border-slate-200 dark:border-white/10 focus:outline-none focus:ring-2 focus:ring-primary-500/50 transition-all w-64"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400 group-focus-within:text-primary-500 transition-colors" />
          </div>

          <Link to="/tools" className="font-semibold hover:text-primary-500 transition-colors">Tools</Link>
          <a href="#" className="font-semibold hover:text-primary-500 transition-colors">Pricing</a>
          <a href="#" className="font-semibold hover:text-primary-500 transition-colors">Blog</a>

          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
          >
            {darkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>

          <button className="px-6 py-2 bg-primary-600 text-white rounded-full font-bold hover:bg-primary-500 hover:shadow-lg hover:shadow-primary-600/30 transition-all scale-100 active:scale-95">
            Log In
          </button>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center space-x-4">
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
          >
            {darkMode ? <Sun className="size-5" /> : <Moon className="size-5" />}
          </button>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-brand-900 border-b border-slate-200 dark:border-white/10 p-4 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
           <div className="relative group">
            <input 
              type="text" 
              placeholder="Search tools..." 
              className="w-full pl-10 pr-4 py-2 rounded-lg bg-slate-100 dark:bg-brand-950 border border-slate-200 dark:border-white/10"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-slate-400" />
          </div>
          <Link to="/tools" className="block font-semibold py-2" onClick={() => setIsMenuOpen(false)}>All Tools</Link>
          <a href="#" className="block font-semibold py-2">Pricing</a>
          <a href="#" className="block font-semibold py-2">Blog</a>
          <button className="w-full py-3 bg-primary-600 text-white rounded-lg font-bold">Log In</button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

