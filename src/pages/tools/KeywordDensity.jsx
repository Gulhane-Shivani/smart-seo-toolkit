import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, AlertTriangle, CheckCircle2, X, Star } from 'lucide-react';
import ResultPanel from '../../components/ResultPanel';
import { seoApi } from '../../api/seoApi';

const KeywordDensity = () => {
  const [text, setText] = useState('');
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyze = async () => {
    setLoading(true);
    try {
      const response = await seoApi.keywordDensity({ text, keyword });
      setResults(response.data);
    } catch (error) {
      console.error('API failed, using fallback:', error);
      const words = text.toLowerCase().match(/\b\w+\b/g) || [];
      const totalWords = words.length;
      const freq = {};
      words.forEach(w => freq[w] = (freq[w] || 0) + 1);
      
      const sorted = Object.entries(freq)
        .sort((a,b) => b[1] - a[1])
        .slice(0, 10)
        .map(([word, count]) => ({
          word,
          count,
          percentage: ((count / totalWords) * 100).toFixed(2)
        }));
      
      setResults({ totalWords, keywords: sorted });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
      <div className="space-y-6">
        <div className="glass-card p-6 rounded-2xl">
          <label className="text-lg font-black text-slate-800 dark:text-white mb-4 flex items-center gap-3">
            <Info size={18} className="text-primary-500" /> Content Analysis
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your content here to analyze keyword density..."
            className="w-full h-40 bg-slate-100 dark:bg-navy-950/50 rounded-xl p-4 border-2 border-transparent focus:border-primary-500 outline-none transition-all placeholder:text-slate-400 text-base leading-relaxed dark:text-white mb-4"
          />
          <div className="flex flex-col gap-2">
              <label className="text-sm font-black text-slate-800 dark:text-white">Target Keyword (Optional)</label>
              <input
                type="text"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                placeholder="e.g. SEO"
                className="w-full bg-slate-100 dark:bg-navy-950/50 rounded-xl p-4 border-2 border-transparent focus:border-primary-500 outline-none transition-all placeholder:text-slate-400 text-base dark:text-white"
              />
          </div>
          <button 
            onClick={analyze}
            disabled={!text || loading}
            className="w-full mt-4 py-3 bg-primary-600 text-white rounded-xl font-black text-lg hover:bg-primary-500 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
          >
            {loading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : 'Analyze Keywords'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {results && (
          <ResultPanel title="Density Report">
             <div className="bg-primary-500/10 p-4 rounded-2xl border border-primary-500/20 mb-6">
                <p className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-widest mb-1">Total Word Count</p>
                <h4 className="text-3xl font-black dark:text-white">{results.totalWords}</h4>
             </div>
             <div className="space-y-4">
                {results.keywords.map((kw, i) => (
                  <div key={i} className="flex flex-col gap-2 p-3 hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-colors">
                    <div className="flex justify-between items-center px-1">
                       <span className="font-black text-slate-800 dark:text-white capitalize">{kw.word}</span>
                       <span className="text-xs font-bold text-slate-400">{kw.count} times</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                       <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${kw.percentage}%` }}
                        className="h-full bg-primary-600 shadow-sm"
                       ></motion.div>
                    </div>
                    <div className="text-right text-[10px] font-black text-primary-500 uppercase">{kw.percentage}%</div>
                  </div>
                ))}
             </div>
          </ResultPanel>
        )}
      </AnimatePresence>
    </div>
  );
};

export default KeywordDensity;
