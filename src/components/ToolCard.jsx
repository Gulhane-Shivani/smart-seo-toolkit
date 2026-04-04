import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ToolCard({ tool }) {
  const Icon = tool.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="glass-card group p-6 rounded-3xl relative h-full flex flex-col justify-between overflow-hidden"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="bg-primary-500/10 dark:bg-primary-400/5 p-4 rounded-2xl group-hover:bg-primary-500/20 group-hover:scale-110 transition-all duration-300">
          <Icon className="size-8 text-primary-600 dark:text-primary-400 group-hover:text-primary-500 transition-colors" />
        </div>
        <div className="px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {tool.category}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-black mb-2 text-slate-800 dark:text-white flex items-center group-hover:text-primary-500 transition-colors">
          {tool.name}
        </h3>
        <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm line-clamp-3">
          {tool.description}
        </p>
      </div>

      <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/5 flex items-center justify-between">
        <span className="text-xs font-bold text-slate-400 dark:text-slate-500 flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-emerald-500"></span>
          Ready to use
        </span>
        <Link 
          to={`/tools/${tool.slug}`}
          className="flex items-center space-x-1 font-bold text-primary-600 dark:text-primary-400 hover:text-primary-500 group/btn transition-colors"
        >
          <span>Use Tool</span>
          <ChevronRight className="size-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
      
      {/* Glow Effect on hover */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none -mr-16 -mt-16"></div>
    </motion.div>
  );
}

