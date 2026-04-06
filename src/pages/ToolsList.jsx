import { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, SlidersHorizontal, ChevronRight, ChevronLeft } from 'lucide-react';
import { TOOLS, CATEGORIES } from '../data/tools';
import { Link } from 'react-router-dom';
import ToolCard from '../components/ToolCard';
import { motion, AnimatePresence } from 'framer-motion';

const ToolsList = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { search } = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(search);
    const cat = params.get('category');
    const q = params.get('search');
    
    if (cat) {
      setActiveCategory(cat);
      window.scrollTo(0, 0);
    }
    if (q) {
      setSearchQuery(q);
      window.scrollTo(0, 0);
    }
  }, [search]);

  const filteredTools = useMemo(() => {
    return TOOLS.filter(tool => {
      const matchCategory = activeCategory === 'all' || tool.category === activeCategory;
      const matchSearch = tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tool.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="pt-6 min-h-screen px-4 md:px-8 max-w-7xl mx-auto">
      <Link to="/" className="inline-flex items-center gap-2 font-bold text-slate-400 hover:text-primary-500 mb-8 transition-colors group">
        <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
      </Link>
      <div className="flex flex-col md:flex-row items-baseline justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black text-slate-800 dark:text-white mb-2">Our Tools Hub.</h1>
          <p className="text-slate-500 dark:text-slate-400 font-medium max-w-lg">
            Everything you need to automate your SEO workflow and content strategy.
          </p>
        </div>
        <div className="relative w-full md:w-96 group">
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Filter tools by name or purpose..." 
            className="w-full pl-12 pr-4 py-4 rounded-2xl bg-white dark:bg-brand-900 border border-slate-200 dark:border-white/10 focus:ring-2 focus:ring-primary-500/50 outline-none transition-all shadow-sm group-hover:shadow-md dark:text-white"
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400 group-focus-within:text-primary-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12 items-start">
        {/* Category Selection */}
        <aside className="lg:sticky lg:top-28 bg-slate-50 dark:bg-brand-900/50 p-4 md:p-6 rounded-3xl border border-slate-200 dark:border-white/5 lg:space-y-6">
          <div className="hidden lg:flex items-center justify-between px-2 mb-4">
            <h3 className="font-black text-slate-800 dark:text-white flex items-center gap-2">
              <SlidersHorizontal size={18} className="text-primary-500" /> Categories
            </h3>
            <span className="text-xs font-bold text-slate-400">{CATEGORIES.length} Total</span>
          </div>

          <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-hide">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex-shrink-0 flex items-center justify-between px-5 py-3 lg:px-4 lg:py-3 rounded-xl transition-all duration-300 font-bold group whitespace-nowrap ${
                    isActive 
                      ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/20' 
                      : 'bg-white lg:bg-transparent dark:bg-brand-900 lg:dark:bg-transparent hover:bg-slate-200 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 border border-slate-100 lg:border-transparent dark:border-white/5'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon size={18} className={isActive ? 'text-white' : 'text-slate-400 group-hover:text-primary-500'} />
                    {cat.name}
                  </div>
                  {isActive && <div className="hidden lg:block ml-2"><ChevronRight size={14} /></div>}
                </button>
              );
            })}
          </nav>
        </aside>

        {/* Tools Content Grid */}
        <main>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-black text-slate-800 dark:text-white capitalize">
              {activeCategory === 'all' ? 'All available' : activeCategory} Tools
            </h2>
            <div className="text-sm font-bold text-slate-400 px-4 py-1 bg-slate-100 dark:bg-white/5 rounded-full border border-slate-200 dark:border-white/10">
              Showing {filteredTools.length} tools
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]">
             <AnimatePresence mode="popLayout">
                {filteredTools.length > 0 ? (
                  filteredTools.map((tool) => (
                    <ToolCard key={tool.id} tool={tool} />
                  ))
                ) : (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="col-span-full flex flex-col items-center justify-center py-20 text-center glass-card rounded-3xl"
                  >
                    <Search className="size-16 text-slate-300 dark:text-white/10 mb-4" />
                    <h3 className="text-xl font-black text-slate-800 dark:text-white">No tools found matching your search.</h3>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Try searching for a different keyword or category.</p>
                    <button 
                      onClick={() => {setSearchQuery(''); setActiveCategory('all');}}
                      className="mt-6 font-bold text-primary-500 hover:underline"
                    >
                      Clear all filters
                    </button>
                  </motion.div>
                )}
             </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ToolsList;
