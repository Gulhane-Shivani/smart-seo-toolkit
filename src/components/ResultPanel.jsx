import { motion } from 'framer-motion';
import { Copy, Check, Download, Share2 } from 'lucide-react';
import { useState } from 'react';

export default function ResultPanel({ title, children, actions = true }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    // Basic copy logic
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="glass-card rounded-3xl p-8 sticky top-24 border-primary-500/20 dark:border-primary-400/10 shadow-emerald-500/10 dark:shadow-primary-500/10 shadow-2xl"
    >
      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-200 dark:border-white/10">
        <h2 className="text-xl font-black text-slate-800 dark:text-white flex items-center gap-3">
          <div className="size-3 rounded-full bg-emerald-500 animate-pulse"></div>
          {title || 'Analysis Results'}
        </h2>
        {actions && (
          <div className="flex items-center space-x-2">
            <button 
              onClick={handleCopy}
              className={`p-2 rounded-xl transition-all duration-300 flex items-center gap-2 text-sm font-bold ${
                copied 
                  ? 'bg-emerald-500/10 text-emerald-500' 
                  : 'hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400'
              }`}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
            <button className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 transition-all duration-300">
              <Download size={18} />
            </button>
            <button className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 text-slate-500 dark:text-slate-400 transition-all duration-300">
              <Share2 size={18} />
            </button>
          </div>
        )}
      </div>

      <div className="space-y-6">
        {children}
      </div>

      {/* Decorative gradient corners */}
      <div className="absolute bottom-0 right-0 size-24 bg-primary-600/5 blur-3xl rounded-full translate-x-12 translate-y-12"></div>
      <div className="absolute top-0 left-0 size-24 bg-cyan-600/5 blur-3xl rounded-full -translate-x-12 -translate-y-12"></div>
    </motion.div>
  );
}

