import { useEffect, useState } from 'react';
import { ChevronRight, Search, BarChart3, ShieldCheck, Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import { TOOLS } from '../data/tools';
import ToolCard from '../components/ToolCard';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Home = () => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const popularTools = TOOLS.filter(tool => tool.popular);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        // Automatically open the FAQ accordion
        const details = element.querySelector('details');
        if (details) {
          details.open = true;
        }
      }
    }
  }, [location]);

  const handleGetStarted = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Basic URL pattern detection
    const urlPattern = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
    
    if (urlPattern.test(inputValue)) {
      // If it looks like a URL, go to SEO Audit with that URL passed as param
      const formattedUrl = inputValue.startsWith('http') ? inputValue : `https://${inputValue}`;
      navigate(`/tools/basic-seo-audit?url=${encodeURIComponent(formattedUrl)}`);
    } else {
      // Otherwise, treat it as a search query for tools list
      navigate(`/tools?search=${encodeURIComponent(inputValue)}`);
    }
  };

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
            
            <h1 className="text-5xl md:text-4xl font-black text-slate-800 dark:text-white leading-[1.1] mb-8 tracking-tight">
              Optimize for <span className="gradient-text">Humans</span>,<br /> 
              Rank for <span className="text-primary-600 dark:text-primary-400">Search Engines.</span>
            </h1>
            <p className="max-w-3xl mx-auto text-xl text-slate-500 dark:text-slate-400 leading-relaxed mb-12 font-medium">
              Join thousands of marketers using Smart SEO Toolkit's  to audit, check, and generate SEO-optimized content in seconds. 
            </p>
          </motion.div>

          <motion.form 
            onSubmit={handleGetStarted}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-col md:flex-row items-center justify-center gap-4 max-w-2xl mx-auto"
          >
            <div className="relative w-full md:w-auto">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Paste URL or search tool..." 
                className="w-full md:w-[400px] pl-12 pr-6 py-4 rounded-xl bg-white dark:bg-navy-900 border-2 border-slate-200 dark:border-white/10 text-base shadow-2xl focus:border-primary-500 outline-none transition-all placeholder:text-slate-400 text-slate-800 dark:text-white"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
            </div>
            <button 
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-primary-600 text-white rounded-xl font-black text-base hover:bg-primary-500 shadow-xl shadow-primary-600/30 transition-all scale-100 active:scale-95 flex items-center justify-center gap-2"
            >
              Get Started <ChevronRight size={20} />
            </button>
          </motion.form>

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

      {/* Quick Filters Category Grid */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/tools?category=analysis" className="glass-card p-10 rounded-3xl hover:border-primary-500/50 transition-all cursor-pointer group">
            <BarChart3 className="size-12 text-primary-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black mb-2 dark:text-white">SEO Analysis</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Audit your website architecture and technical performance with deep insights.</p>
          </Link>
          <Link to="/tools?category=keywords" className="glass-card p-10 rounded-3xl hover:border-amber-500/50 transition-all cursor-pointer group">
            <TrendingUp className="size-12 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black mb-2 dark:text-white">Keywords</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Find profitable keywords and check density to rank higher in SERP positions.</p>
          </Link>
          <Link to="/tools?category=checkers" className="glass-card p-10 rounded-3xl hover:border-emerald-500/50 transition-all cursor-pointer group">
            <ShieldCheck className="size-12 text-emerald-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black mb-2 dark:text-white">Checkers</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Verify site health, mobile friendliness, and page experience scores.</p>
          </Link>
          <Link to="/tools?category=content" className="glass-card p-10 rounded-3xl hover:border-amber-500/50 transition-all cursor-pointer group">
            <Sparkles className="size-12 text-amber-500 mb-6 group-hover:scale-110 transition-transform" />
            <h3 className="text-2xl font-black mb-2 dark:text-white">Generators</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">Automatically generate meta tags, sitemaps, and content outlines with ease.</p>
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 md:px-8 bg-slate-50/50 dark:bg-brand-950/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-800 dark:text-white mb-4">Frequently Asked Questions.</h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 font-medium text-balance">Everything you need to know about Smart SEO Toolkit Hub.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                id: "audit-info",
                q: "Why is it called the 'Smart' SEO Toolkit?",
                a: "Our toolkit is 'smart' because it uses advanced AI and machine learning models to provide **predictive insights**. Instead of just showing you static numbers, we offer actionable suggestions that predict how your changes will impact your ranking."
              },
              {
                id: "ai-opt",
                q: "How does the AI-powered search tool work?",
                a: "Our smart search bar at the top of the home page automatically detects your intent. If you paste a URL, it triggers an audit; if you type a keyword, it filters our 50+ tools to find the perfect match for your needs."
              },
              {
                id: "agency-rep",
                q: "Can I use these tools for professional client reporting?",
                a: "Absolutely. Tools like the **Site Health Checker** and **SEO Audit** generate clean, comprehensive reports that are perfect for agencies and freelancers to share with their clients as proof of performance."
              },
              {
                q: "Is the Word Counter just for counting words?",
                a: "No. Our 'Smart' Word Counter also calculates reading time, character density, and identifies overused phrases to help you optimize for both human readability and search engine indexing."
              },
              {
                q: "Does the Meta Tag Generator follow the latest SEO standards?",
                a: "Yes, our algorithms are updated weekly to align with the latest **Google, X (Twitter), and Open Graph** standards, ensuring your website snippets look professional on every platform."
              },
              {
                q: "How accurate is the Keyword Density Checker?",
                a: "It provides 100% accurate, real-time feedback by scanning your text for specific word patterns and calculating their prominence against the total content volume to help you avoid keyword stuffing penalties."
              },
              {
                id: "perf-metrics",
                q: "How does the Site Health Checker measure Page Experience?",
                a: "It analyzes critical **Core Web Vitals** including LCP (Largest Contentful Paint) and CLS (Cumulative Layout Shift), providing a weighted health score based on Google’s high-performance standards."
              }
            ].map((faq, i) => (
              <div key={i} id={faq.id} className="glass-card rounded-2xl overflow-hidden border border-slate-200 dark:border-white/5 scroll-mt-24">
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="text-lg font-black text-slate-800 dark:text-white group-open:text-primary-600 transition-colors">{faq.q}</span>
                    <ChevronRight className="size-5 text-slate-400 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-500 dark:text-slate-400 leading-relaxed font-semibold">
                    {faq.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
