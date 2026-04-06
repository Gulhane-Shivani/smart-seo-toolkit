import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { TOOLS } from '../data/tools';
import { ChevronLeft, Share2, Star, Clock, Info, AlertTriangle, CheckCircle2, X } from 'lucide-react';
import ResultPanel from '../components/ResultPanel';

// --- TOOL LOGIC COMPONENTS ---

const KeywordDensity = () => {
  const [text, setText] = useState('');
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);

  const analyze = () => {
    setLoading(true);
    setTimeout(() => {
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
      setLoading(false);
    }, 800);
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
      <div className="space-y-6">
        <div className="glass-card p-8 rounded-3xl">
          <label className="text-xl font-black text-slate-800 dark:text-white mb-6 flex items-center gap-3">
            <Info size={20} className="text-primary-500" /> Content Analysis
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste your content here to analyze keyword density..."
            className="w-full h-80 bg-slate-100 dark:bg-navy-950/50 rounded-2xl p-6 border-2 border-transparent focus:border-primary-500 outline-none transition-all placeholder:text-slate-400 text-lg leading-relaxed dark:text-white"
          />
          <button 
            onClick={analyze}
            disabled={!text || loading}
            className="w-full mt-6 py-5 bg-primary-600 text-white rounded-2xl font-black text-xl hover:bg-primary-500 disabled:opacity-50 transition-all flex items-center justify-center gap-2"
          >
            {loading ? <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div> : 'Analyze Keywords'}
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

const MetaTagGenerator = () => {
    const [meta, setMeta] = useState({ title: '', desc: '', keywords: '', author: '' });
    const [results, setResults] = useState(null);

    const generate = () => {
        const code = `<title>${meta.title}</title>\n<meta name="description" content="${meta.desc}">\n<meta name="keywords" content="${meta.keywords}">\n<meta name="author" content="${meta.author}">`;
        setResults(code);
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-8">
            <div className="glass-card p-8 rounded-3xl space-y-6">
                <div>
                    <label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-wider">Page Title</label>
                    <input 
                        type="text" 
                        value={meta.title}
                        onChange={e => setMeta({...meta, title: e.target.value})}
                        placeholder="e.g. My Awesome SEO Tools"
                        className="w-full p-4 bg-slate-100 dark:bg-navy-950/50 rounded-xl border border-transparent focus:border-primary-500 outline-none dark:text-white"
                    />
                </div>
                <div>
                     <label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-wider">Meta Description</label>
                    <textarea 
                        value={meta.desc}
                        onChange={e => setMeta({...meta, desc: e.target.value})}
                        placeholder="Describe your page here..."
                        className="w-full h-32 p-4 bg-slate-100 dark:bg-navy-950/50 rounded-xl border border-transparent focus:border-primary-500 outline-none dark:text-white"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-wider">Keywords</label>
                        <input 
                            type="text" 
                            value={meta.keywords}
                            onChange={e => setMeta({...meta, keywords: e.target.value})}
                            className="w-full p-4 bg-slate-100 dark:bg-navy-950/50 rounded-xl border border-transparent focus:border-primary-500 outline-none dark:text-white"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-wider">Author</label>
                        <input 
                            type="text" 
                            value={meta.author}
                            onChange={e => setMeta({...meta, author: e.target.value})}
                            className="w-full p-4 bg-slate-100 dark:bg-navy-950/50 rounded-xl border border-transparent focus:border-primary-500 outline-none dark:text-white"
                        />
                    </div>
                </div>
                <button 
                  onClick={generate}
                  className="w-full py-5 bg-primary-600 text-white rounded-2xl font-black text-xl hover:bg-primary-500"
                >
                  Generate Tags
                </button>
            </div>

            <AnimatePresence>
                {results && (
                  <ResultPanel title="HTML Output">
                    <pre className="p-6 bg-slate-900 rounded-2xl text-emerald-400 font-mono text-sm overflow-x-auto border-l-4 border-emerald-500">
                      <code>{results}</code>
                    </pre>
                  </ResultPanel>
                )}
            </AnimatePresence>
        </div>
    );
};

const WordCounter = () => {
    const [text, setText] = useState('');
    const stats = useMemo(() => {
        const words = text.trim() ? text.trim().split(/\s+/).length : 0;
        const chars = text.length;
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
        const readTime = Math.ceil(words / 200);
        return { words, chars, sentences, readTime };
    }, [text]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
            <div className="glass-card p-8 rounded-3xl">
                <textarea 
                    value={text} 
                    onChange={e => setText(e.target.value)}
                    placeholder="Enter text to count..."
                    className="w-full h-[400px] bg-slate-100 dark:bg-navy-950/50 rounded-2xl p-6 border-2 border-transparent focus:border-primary-500 outline-none dark:text-white text-lg"
                />
            </div>
            <ResultPanel title="Text Stats">
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl text-center border border-slate-200 dark:border-white/10 shadow-sm">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Words</p>
                        <p className="text-3xl font-black text-primary-600">{stats.words}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl text-center border border-slate-200 dark:border-white/10 shadow-sm">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Characters</p>
                        <p className="text-3xl font-black text-cyan-600">{stats.chars}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl text-center border border-slate-200 dark:border-white/10 shadow-sm">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Sentences</p>
                        <p className="text-3xl font-black text-indigo-600">{stats.sentences}</p>
                    </div>
                     <div className="bg-slate-50 dark:bg-white/5 p-6 rounded-2xl text-center border border-slate-200 dark:border-white/10 shadow-sm">
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Reading Time</p>
                        <p className="text-3xl font-black text-amber-600">{stats.readTime}m</p>
                    </div>
                </div>
            </ResultPanel>
        </div>
    );
};

const SEOAudit = () => {
    const [url, setUrl] = useState('');
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);

    const { search } = useLocation();

    const audit = () => {
        setLoading(true);
        setTimeout(() => {
            setResults({
                score: 84,
                issues: [
                    { type: 'error', msg: 'Missing alt tags on 4 images' },
                    { type: 'warning', msg: 'H1 tag character count is over 60' },
                    { type: 'success', msg: 'Page load speed is optimal' },
                    { type: 'success', msg: 'SSL Certificate is valid' }
                ]
            });
            setLoading(false);
        }, 1500);
    };

    useEffect(() => {
        const params = new URLSearchParams(search);
        const urlParam = params.get('url');
        if (urlParam) {
            setUrl(urlParam);
            // Auto run scan if URL is provided
            audit(); 
        }
    }, [search]);

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-8">
            <div className="glass-card p-10 rounded-3xl h-fit">
                <h3 className="text-2xl font-black dark:text-white mb-6">Website Scanner</h3>
                <div className="flex gap-4 mb-6">
                    <input 
                        type="url" 
                        placeholder="https://example.com" 
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        className="flex-grow p-4 bg-slate-100 dark:bg-navy-950/50 rounded-xl border border-transparent focus:border-primary-500 outline-none dark:text-white"
                    />
                    <button 
                        onClick={audit}
                        disabled={!url || loading}
                        className="px-8 bg-primary-600 text-white rounded-xl font-black hover:bg-primary-500 disabled:opacity-50"
                    >
                        {loading ? 'Scanning...' : 'Scan'}
                    </button>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-2xl flex items-start gap-4">
                    <Info size={24} className="text-amber-600 flex-shrink-0 mt-1" />
                    <p className="text-amber-800 dark:text-amber-200 text-sm leading-relaxed font-semibold">
                        This is a mock analysis. To get real-time deep crawling data, connect to our premium API in the settings panel.
                    </p>
                </div>
            </div>

            <AnimatePresence>
                {results && (
                  <ResultPanel title="SEO Health Check">
                    <div className="relative size-48 mx-auto mb-10">
                        <svg className="size-full" viewBox="0 0 100 100">
                          <circle className="text-slate-200 dark:text-white/5 stroke-current" strokeWidth="10" fill="transparent" r="40" cx="50" cy="50" />
                          <circle className="text-emerald-500 stroke-current transition-all duration-1000 ease-out" strokeWidth="10" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - results.score / 100)} strokeLinecap="round" fill="transparent" r="40" cx="50" cy="50" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-5xl font-black dark:text-white">{results.score}</span>
                            <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Health</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {results.issues.map((issue, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-200 dark:border-white/10">
                                {issue.type === 'error' && <AlertTriangle className="text-rose-500" size={20} />}
                                {issue.type === 'warning' && <AlertTriangle className="text-amber-500" size={20} />}
                                {issue.type === 'success' && <CheckCircle2 className="text-emerald-500" size={20} />}
                                <span className="text-sm font-bold text-slate-600 dark:text-slate-300">{issue.msg}</span>
                            </div>
                        ))}
                    </div>
                  </ResultPanel>
                )}
            </AnimatePresence>
        </div>
    );
};

const GoogleSerpPreview = () => {
    const [meta, setMeta] = useState({ title: '', desc: '', url: 'https://example.com' });

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-8">
            <div className="glass-card p-8 rounded-3xl space-y-6">
                <div>
                    <label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-wider">Page Title</label>
                    <input 
                        type="text" 
                        value={meta.title}
                        onChange={e => setMeta({...meta, title: e.target.value})}
                        placeholder="Smart SEO Toolkit | All-in-one SEO Workspace"
                        className="w-full p-4 bg-slate-100 dark:bg-navy-950/50 rounded-xl border border-transparent focus:border-primary-500 outline-none dark:text-white"
                    />
                </div>
                <div>
                     <label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-wider">Meta Description</label>
                    <textarea 
                        value={meta.desc}
                        onChange={e => setMeta({...meta, desc: e.target.value})}
                        placeholder="Experience the future of SEO with our premium tools..."
                        className="w-full h-32 p-4 bg-slate-100 dark:bg-navy-950/50 rounded-xl border border-transparent focus:border-primary-500 outline-none dark:text-white"
                    />
                </div>
                <div>
                    <label className="block text-sm font-black text-slate-500 mb-2 uppercase tracking-wider">Site URL</label>
                    <input 
                        type="text" 
                        value={meta.url}
                        onChange={e => setMeta({...meta, url: e.target.value})}
                        className="w-full p-4 bg-slate-100 dark:bg-navy-950/50 rounded-xl border border-transparent focus:border-primary-500 outline-none dark:text-white"
                    />
                </div>
            </div>

            <ResultPanel title="Google Search Preview">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm max-w-full overflow-hidden">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="size-7 bg-slate-100 rounded-full flex items-center justify-center text-[10px] text-slate-400 font-bold">G</div>
                        <div className="flex flex-col">
                            <span className="text-[14px] text-slate-900 leading-none">Google</span>
                            <span className="text-[12px] text-slate-500 truncate max-w-[200px]">{meta.url || 'https://example.com'}</span>
                        </div>
                    </div>
                    <h3 className="text-[20px] text-[#1a0dab] hover:underline cursor-pointer mb-1 truncate leading-tight mt-1">
                        {meta.title || 'Please enter a page title'}
                    </h3>
                    <p className="text-[14px] text-[#4d5156] leading-relaxed break-words line-clamp-2">
                        {meta.desc || 'Enter a meta description to see how your snippet will look in search results. Google typically shows up to 160 characters.'}
                    </p>
                </div>
                
                <div className="mt-8 space-y-4">
                    <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-xs font-black text-slate-400 uppercase">Title Length</p>
                            <span className={`text-xs font-black ${meta.title.length > 60 ? 'text-rose-500' : 'text-emerald-500'}`}>
                                {meta.title.length}/60
                            </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.min((meta.title.length / 60) * 100, 100)}%` }}
                                className={`h-full transition-colors duration-300 ${meta.title.length > 60 ? 'bg-rose-500' : 'bg-emerald-500'}`}
                            ></motion.div>
                        </div>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/10">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-xs font-black text-slate-400 uppercase">Description Length</p>
                            <span className={`text-xs font-black ${meta.desc.length > 160 ? 'text-rose-500' : 'text-emerald-500'}`}>
                                {meta.desc.length}/160
                            </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.min((meta.desc.length / 160) * 100, 100)}%` }}
                                className={`h-full transition-colors duration-300 ${meta.desc.length > 160 ? 'bg-rose-500' : 'bg-emerald-500'}`}
                            ></motion.div>
                        </div>
                    </div>
                </div>
            </ResultPanel>
        </div>
    );
};

const ToolGuide = ({ tool, onClose }) => {
    const Icon = tool.icon;
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-brand-950/80 backdrop-blur-md"
        >
            <motion.div 
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                className="bg-white dark:bg-brand-900 w-full max-w-2xl rounded-3xl shadow-2xl p-10 relative border border-slate-200 dark:border-white/10"
            >
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
                >
                    <X size={24} className="text-slate-400" />
                </button>
                <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-primary-600/10 rounded-2xl">
                        <Icon size={32} className="text-primary-600" />
                    </div>
                    <div>
                        <h2 className="text-3xl font-black dark:text-white">{tool.name} Guide</h2>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">Complete walk-through of the {tool.category} toolkit</p>
                    </div>
                </div>

                <div className="space-y-6 text-slate-600 dark:text-slate-300">
                    <div className="flex gap-4">
                        <div className="size-8 rounded-full bg-primary-600 text-white flex-shrink-0 flex items-center justify-center font-black">1</div>
                        <p className="font-medium leading-relaxed">Enter your target data (URL, Title, or Content) in the main input field above.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="size-8 rounded-full bg-primary-600 text-white flex-shrink-0 flex items-center justify-center font-black">2</div>
                        <p className="font-medium leading-relaxed">Customize any available settings or parameters to match your specific SEO goals.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="size-8 rounded-full bg-primary-600 text-white flex-shrink-0 flex items-center justify-center font-black">3</div>
                        <p className="font-medium leading-relaxed">Click 'Generate' or 'Analyze' to process your data through our premium algorithms.</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="size-8 rounded-full bg-primary-600 text-white flex-shrink-0 flex items-center justify-center font-black">4</div>
                        <p className="font-medium leading-relaxed">Review the generated reports and use the 'Copy' or 'Save' features to implement the results.</p>
                    </div>
                </div>

                <button 
                    onClick={onClose}
                    className="w-full mt-10 py-4 bg-primary-600 text-white rounded-2xl font-black text-lg hover:bg-primary-500 shadow-xl shadow-primary-600/30 transition-all font-black"
                >
                    Got it, let's go!
                </button>
            </motion.div>
        </motion.div>
    );
};

// --- MAIN WRAPPER ---

const ToolDetail = () => {
  const { slug } = useParams();
  const [showGuide, setShowGuide] = useState(false);
  const tool = TOOLS.find(t => t.slug === slug);

  if (!tool) return <div>Tool not found</div>;

  const renderTool = () => {
    switch (tool.id) {
      case 'keyword-density': return <KeywordDensity />;
      case 'meta-tag-generator': return <MetaTagGenerator />;
      case 'word-counter': return <WordCounter />;
      case 'basic-seo-audit': return <SEOAudit />;
      case 'google-serp-preview': return <GoogleSerpPreview />;
      default: return <div className="text-center py-20 font-bold opacity-50">This tool is currently in maintenance. Check back soon!</div>;
    }
  };

  return (
    <div className="pt-6 min-h-screen max-w-7xl mx-auto px-4 md:px-8 pb-20">
      <Link to="/tools" className="inline-flex items-center gap-2 font-bold text-slate-400 hover:text-primary-500 mb-8 transition-colors group">
        <ChevronLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Workspace
      </Link>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 flex flex-col md:flex-row items-start justify-between gap-8"
      >
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-4">
            <span className="px-4 py-1 bg-primary-600/10 text-primary-600 text-xs font-black uppercase tracking-widest rounded-full">{tool.category}</span>
            <span className="flex items-center gap-1 text-amber-500 font-bold text-sm"><Star size={14} fill="currentColor" /> 4.9 (2k+ Users)</span>
            <span className="flex items-center gap-1 text-slate-400 font-bold text-sm"><Clock size={14} /> Instant Results</span>
          </div>
          <h1 className="text-5xl font-black text-slate-800 dark:text-white mb-6 leading-tight select-none">{tool.name}</h1>
          <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
            {tool.description}
          </p>
        </div>

        <div className="flex gap-4">
            <button className="p-4 rounded-2xl bg-white dark:bg-navy-900 border border-slate-200 dark:border-white/10 hover:bg-slate-50 dark:hover:bg-white/5 transition-all shadow-sm">
                <Share2 size={24} className="text-slate-500" />
            </button>
             <button 
                onClick={() => setShowGuide(true)}
                className="p-4 rounded-2xl bg-primary-600 text-white shadow-xl shadow-primary-600/30 hover:bg-primary-500 transition-all font-black px-8"
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
    </div>
  );
};

export default ToolDetail;
