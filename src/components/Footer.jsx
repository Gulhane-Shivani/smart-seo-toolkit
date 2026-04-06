import { Zap, Twitter, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-50 dark:bg-brand-950 border-t border-slate-200 dark:border-white/10 pt-20 pb-10 mt-20 relative overflow-hidden">
      {/* Decorative Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary-600/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 relative z-10">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center space-x-2 group mb-6">
            <div className="p-2 bg-primary-600 rounded-lg">
              <Zap className="text-white size-5 fill-white" />
            </div>
            <span className="text-2xl font-black dark:text-white">Smart SEO Toolkit</span>
          </Link>
          <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-6">
            The all-in-one SEO workspace for content creators and marketers. Drive more traffic, faster.
          </p>
          <div className="flex items-center space-x-4">
            <a href="#" className="p-2 rounded-lg bg-slate-200 dark:bg-white/5 hover:bg-primary-500/10 hover:text-primary-500 transition-all"><Twitter size={20} /></a>
            <a href="#" className="p-2 rounded-lg bg-slate-200 dark:bg-white/5 hover:bg-primary-500/10 hover:text-primary-500 transition-all"><Github size={20} /></a>
            <a href="#" className="p-2 rounded-lg bg-slate-200 dark:bg-white/5 hover:bg-primary-500/10 hover:text-primary-500 transition-all"><Linkedin size={20} /></a>
          </div>
        </div>

        <div>
          <h4 className="font-extrabold text-slate-800 dark:text-white mb-6 uppercase tracking-wider text-sm">Tools</h4>
          <ul className="space-y-4 text-slate-500 dark:text-slate-400">
            <li><Link to="/tools/keyword-density-checker" className="hover:text-primary-500 transition-colors">Keyword Density</Link></li>
            <li><Link to="/tools/meta-tag-generator" className="hover:text-primary-500 transition-colors">Meta Generator</Link></li>
            <li><Link to="/tools/word-counter" className="hover:text-primary-500 transition-colors">Word Counter</Link></li>
            <li><Link to="/tools/basic-seo-audit" className="hover:text-primary-500 transition-colors">SEO Audit</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="font-extrabold text-slate-800 dark:text-white mb-6 uppercase tracking-wider text-sm">Categories</h4>
          <ul className="space-y-4 text-slate-500 dark:text-slate-400">
            <li><Link to="/tools?category=analysis" className="hover:text-primary-500 transition-colors">SEO Analysis</Link></li>
            <li><Link to="/tools?category=content" className="hover:text-primary-500 transition-colors">Generators</Link></li>
            <li><Link to="/tools?category=keywords" className="hover:text-primary-500 transition-colors">Keyword Tools</Link></li>
            <li><Link to="/tools?category=checkers" className="hover:text-primary-500 transition-colors">Checkers</Link></li>
          </ul>
        </div>

        <div>
           <h4 className="font-extrabold text-slate-800 dark:text-white mb-6 uppercase tracking-wider text-sm">Support & FAQ</h4>
          <ul className="space-y-4 text-slate-500 dark:text-slate-400">
            <li><Link to="/#audit-info" className="hover:text-primary-500 transition-colors">Smart-Audit Info</Link></li>
            <li><Link to="/#ai-opt" className="hover:text-primary-500 transition-colors">AI Optimization</Link></li>
            <li><Link to="/#agency-rep" className="hover:text-primary-500 transition-colors">Agency Reporting</Link></li>
            <li><Link to="/#perf-metrics" className="hover:text-primary-500 transition-colors">Performance Metrics</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-extrabold text-slate-800 dark:text-white mb-6 uppercase tracking-wider text-sm">Newsletter</h4>
          <p className="text-slate-500 dark:text-slate-400 mb-6 font-medium">Get SEO tips and updates delivered to your inbox.</p>
          <div className="flex items-center gap-2 p-1 rounded-xl bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 group focus-within:ring-2 focus-within:ring-primary-500/50 transition-all">
            <input 
              type="text" 
              placeholder="Your email" 
              className="bg-transparent border-none outline-none pl-3 pr-2 py-2 text-sm flex-grow"
            />
            <button className="bg-primary-600 hover:bg-primary-500 p-2 rounded-lg transition-colors">
              <Mail className="text-white size-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-20 pt-8 border-t border-slate-200 dark:border-white/5 text-center text-slate-500 dark:text-slate-400 text-sm font-medium">
        <p>&copy; {new Date().getFullYear()} Smart SEO Toolkit Hub. All rights reserved.</p>
      </div>
    </footer>
  );
}
