import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, AlertTriangle, CheckCircle2, X, Star } from 'lucide-react';
import ResultPanel from '../../components/ResultPanel';
import { seoApi } from '../../api/seoApi';

const GoogleSerpPreview = () => {
    const [meta, setMeta] = useState({ title: '', description: '', url: 'https://example.com' });
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);

    const generatePreview = async () => {
        setLoading(true);
        try {
            const response = await seoApi.serpPreview(meta);
            setResults(response.data);
        } catch (error) {
            console.error('API failed, showing local preview:', error);
            setResults(meta); // fallback to raw
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-8">
            <div className="glass-card p-6 rounded-2xl space-y-4">
                <div>
                    <label className="block text-[10px] font-black text-slate-500 mb-1 uppercase tracking-wider">Page Title</label>
                    <input 
                        type="text" 
                        value={meta.title}
                        onChange={e => setMeta({...meta, title: e.target.value})}
                        placeholder="Smart SEO Toolkit | All-in-one SEO Workspace"
                        className="w-full p-3 bg-slate-100 dark:bg-navy-950/50 rounded-lg border border-transparent focus:border-primary-500 outline-none dark:text-white text-sm"
                    />
                </div>
                <div>
                    <label className="block text-[10px] font-black text-slate-500 mb-1 uppercase tracking-wider">Meta Description</label>
                    <textarea 
                        value={meta.description}
                        onChange={e => setMeta({...meta, description: e.target.value})}
                        placeholder="Experience the future of SEO with our premium tools..."
                        className="w-full h-24 p-3 bg-slate-100 dark:bg-navy-950/50 rounded-lg border border-transparent focus:border-primary-500 outline-none dark:text-white text-sm"
                    />
                </div>
                <div>
                    <label className="block text-[10px] font-black text-slate-500 mb-1 uppercase tracking-wider">Site URL</label>
                    <input 
                        type="text" 
                        value={meta.url}
                        onChange={e => setMeta({...meta, url: e.target.value})}
                        className="w-full p-3 bg-slate-100 dark:bg-navy-950/50 rounded-lg border border-transparent focus:border-primary-500 outline-none dark:text-white text-sm"
                    />
                </div>
                <button 
                  onClick={generatePreview}
                  disabled={loading}
                  className="w-full py-3 bg-primary-600 text-white rounded-xl font-black text-lg hover:bg-primary-500 transition-all"
                >
                  {loading ? 'Processing...' : 'Generate Preview'}
                </button>
            </div>

            <ResultPanel title="Google Search Preview">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm max-w-full overflow-hidden">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="size-7 bg-slate-100 rounded-full flex items-center justify-center text-[10px] text-slate-400 font-bold">G</div>
                        <div className="flex flex-col">
                            <span className="text-[14px] text-slate-900 leading-none">Google</span>
                            <span className="text-[12px] text-slate-500 truncate max-w-[200px]">{(results?.url || meta.url) || 'https://example.com'}</span>
                        </div>
                    </div>
                    <h3 className="text-[20px] text-[#1a0dab] hover:underline cursor-pointer mb-1 truncate leading-tight mt-1">
                        {(results?.title || meta.title) || 'Please enter a page title'}
                    </h3>
                    <p className="text-[14px] text-[#4d5156] leading-relaxed break-words line-clamp-2">
                        {(results?.description || meta.description) || 'Enter a meta description to see how your snippet will look in search results. Google typically shows up to 160 characters.'}
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
                            <span className={`text-xs font-black ${meta.description.length > 160 ? 'text-rose-500' : 'text-emerald-500'}`}>
                                {meta.description.length}/160
                            </span>
                        </div>
                        <div className="w-full h-1.5 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                            <motion.div 
                                initial={{ width: 0 }}
                                animate={{ width: `${Math.min((meta.description.length / 160) * 100, 100)}%` }}
                                className={`h-full transition-colors duration-300 ${meta.description.length > 160 ? 'bg-rose-500' : 'bg-emerald-500'}`}
                            ></motion.div>
                        </div>
                    </div>
                </div>
            </ResultPanel>
        </div>
    );
};

export default GoogleSerpPreview;
