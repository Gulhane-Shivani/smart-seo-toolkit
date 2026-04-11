import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TOOLS } from '../data/tools';
import { ChevronLeft, Share2, Star, Clock, Info, AlertTriangle, CheckCircle2, X } from 'lucide-react';
import ResultPanel from '../components/ResultPanel';
import { seoApi } from '../api/seoApi';

// --- TOOL LOGIC COMPONENTS ---

import KeywordDensity from './tools/KeywordDensity';
import MetaTagGenerator from './tools/MetaTagGenerator';
import WordCounter from './tools/WordCounter';
import SEOAnalysis from './tools/SEOAnalysis';
import SEOAudit from './tools/SEOAudit';
import GoogleSerpPreview from './tools/GoogleSerpPreview';
import ToolGuide from './tools/ToolGuide';
import SitemapGenerator from './tools/SitemapGenerator';
import BacklinkChecker from './tools/BacklinkChecker';
import KeywordSuggestions from './tools/KeywordSuggestions';
import HealthChecker from './tools/HealthChecker';
import ToolInformation from './tools/ToolInformation';

// --- MAIN WRAPPER ---

const ToolDetail = () => {
  const { slug } = useParams();
  const [showGuide, setShowGuide] = useState(false);
  const tool = TOOLS.find(t => t.slug === slug);

  if (!tool) return <div className="text-center py-40 font-black text-slate-400">Tool not found</div>;

  const renderTool = () => {
    switch (tool.id) {
      case 'keyword-density': return <KeywordDensity />;
      case 'seo-analysis': return <SEOAnalysis />;
      case 'meta-tag-generator': return <MetaTagGenerator />;
      case 'word-counter': return <WordCounter />;
      case 'basic-seo-audit': return <SEOAudit />;
      case 'google-serp-preview': return <GoogleSerpPreview />;
      case 'site-health-checker': return <HealthChecker />;
      case 'keyword-suggestions': return <KeywordSuggestions />;
      case 'backlink-checker': return <BacklinkChecker />;
      case 'sitemap-generator': return <SitemapGenerator />;
      default: return <div className="text-center py-20 font-bold opacity-50">This tool is currently in maintenance. Check back soon!</div>;
    }
  };

  return (
    <div className="pt-6 min-h-screen max-w-7xl mx-auto px-4 md:px-8 pb-20">
      <Link to="/tools" className="inline-flex items-center gap-2 font-bold text-slate-400 hover:text-primary-500 mb-6 transition-colors group">
        <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Workspace
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 flex flex-col md:flex-row items-start justify-between gap-8"
      >
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-3">
            <span className="px-3 py-0.5 bg-primary-600/10 text-primary-600 text-[10px] font-black uppercase tracking-widest rounded-full">{tool.category}</span>
            <span className="flex items-center gap-1 text-amber-500 font-bold text-[10px]"><Star size={12} fill="currentColor" /> 4.9 (2k+ Users)</span>
            <span className="flex items-center gap-1 text-slate-400 font-bold text-[10px]"><Clock size={12} /> Instant Results</span>
          </div>
          <h1 className="text-2xl md:text-3xl font-black text-slate-800 dark:text-white mb-3 leading-tight select-none">{tool.name}</h1>
          <p className="text-base text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            {tool.description}
          </p>
        </div>

        <div className="flex gap-4">
            <button className="p-3 rounded-xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-all shadow-sm">
                <Share2 size={20} className="text-slate-500" />
            </button>
             <button 
                onClick={() => setShowGuide(true)}
                className="p-3 rounded-xl bg-primary-600 text-white shadow-lg shadow-primary-600/30 hover:bg-primary-500 transition-all font-black px-6 text-sm"
              >
                Guide Tool
            </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showGuide && <ToolGuide tool={tool} onClose={() => setShowGuide(false)} />}
      </AnimatePresence>

      <div className="relative">
        {renderTool()}
      </div>

      <ToolInformation tool={tool} />
    </div>
  );
};

export default ToolDetail;
