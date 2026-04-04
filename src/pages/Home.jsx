import { ChevronRight, Search, BarChart3, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { TOOLS } from '../data/tools';
import ToolCard from '../components/ToolCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const popularTools = TOOLS.filter(tool => tool.popular);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-5 py-2 rounded-full bg-primary-500/10 text-primary-600 dark:text-primary-400 font-bold text-sm border border-primary-500/20 mb-8 inline-block shadow-lg shadow-primary-500/5">
              🚀 15+ Advanced Tools Ready for SEO Success
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-slate-800 dark:text-white leading-[1.1] mb-8 tracking-tight">
              Optimize for <span className="gradient-text">Humans</span>,<br /> 
              Rank for <span className="text-primary-600 dark:text-primary-400">Search Engines.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-12 font-medium">
              Join thousands of marketers using NexusSEO's premium tools toolkit to audit, check, and generate SEO-optimized content in seconds. 
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-2xl mx-auto"
          >
            <div className="relative w-full md:w-auto">
              <input 
                type="text" 
                placeholder="Paste URL or search tool..." 
                className="w-full md:w-[450px] pl-14 pr-6 py-5 rounded-2xl bg-white dark:bg-navy-900 border-2 border-slate-200 dark:border-white/10 text-lg shadow-2xl focus:border-primary-500 outline-none transition-all placeholder:text-slate-400 text-slate-800 dark:text-white"
              />
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 size-6 text-slate-400" />
            </div>
            <button className="w-full md:w-auto px-10 py-5 bg-primary-600 text-white rounded-2xl font-black text-lg hover:bg-primary-500 shadow-xl shadow-primary-600/30 transition-all scale-100 active:scale-95 flex items-center justify-center gap-2">
              Get Started <ChevronRight size={24} />
            </button>
          </motion.div>

          {/* Stats/Badges */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-20 flex flex-wrap justify-center gap-10 opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
          >
             <div className="flex items-center gap-3 font-bold text-slate-800 dark:text-slate-400 flex-shrink-0">
               <ShieldCheck className="text-emerald-500" /> Enterprise Secure
             </div>
             <div className="flex items-center gap-3 font-bold text-slate-800 dark:text-slate-400 flex-shrink-0">
               <TrendingUp className="text-primary-500" /> High Accuracy
             </div>
             <div className="flex items-center gap-3 font-bold text-slate-800 dark:text-slate-400 flex-shrink-0">
               <Sparkles className="text-amber-500" /> AI-Powered
             </div>
          </motion.div>
        </div>

        {/* Hero Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-screen h-screen -z-10 pointer-events-none opacity-50 dark:opacity-80">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary-600/10 blur-[150px] rounded-full"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-amber-600/10 blur-[150px] rounded-full"></div>
        </div>
      </section>

      {/* Popular Tools Section */}
      <section id="popular-tools" className="py-24 px-4 md:px-8 bg-slate-50/50 dark:bg-brand-950/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div className="max-w-xl text-left">
              <h2 className="text-4xl font-black text-slate-800 dark:text-white mb-4">Popular Tools.</h2>
              <p className="text-lg text-slate-500 dark:text-slate-400 font-medium">Explore the most used tools by SEO professionals to boost their rankings.</p>
            </div>
            <Link to="/tools" className="px-6 py-3 rounded-xl bg-white dark:bg-brand-900 border border-slate-200 dark:border-white/10 font-bold hover:bg-slate-50 dark:hover:bg-white/5 transition-all text-sm">
              View All Tools
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>

      {/* Category Grid Placeholder/Quick Filters */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card p-10 rounded-3xl hover:border-primary-500/50 transition-all cursor-pointer group">
            <BarChart3 className="size-12 text-primary-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black mb-2 dark:text-white">SEO Analysis</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Audit your website architecture and technical performance with deep insights.</p>
          </div>
          <div className="glass-card p-10 rounded-3xl hover:border-amber-500/50 transition-all cursor-pointer group">
            <TrendingUp className="size-12 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black mb-2 dark:text-white">Keywords</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Find profitable keywords and check density to rank higher in SERP positions.</p>
          </div>
          <div className="glass-card p-10 rounded-3xl hover:border-emerald-500/50 transition-all cursor-pointer group">
            <ShieldCheck className="size-12 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black mb-2 dark:text-white">Checkers</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Verify site health, mobile friendliness, and page experience scores.</p>
          </div>
          <div className="glass-card p-10 rounded-3xl hover:border-amber-500/50 transition-all cursor-pointer group">
            <Sparkles className="size-12 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black mb-2 dark:text-white">Generators</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Automatically generate meta tags, sitemaps, and content outlines with ease.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
