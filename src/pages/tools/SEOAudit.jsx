import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, AlertTriangle, CheckCircle2, X } from 'lucide-react';
import ResultPanel from '../../components/ResultPanel';
import { seoApi } from '../../api/seoApi';

const SEOAudit = () => {
    const [url, setUrl] = useState('');
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);

    const { search } = useLocation();

    const audit = async () => {
        if (!url) return;
        setLoading(true);
        try {
            const response = await seoApi.audit(url);
            const data = response.data;
            const issues = [];
            let score = 100;
            if (!data.title) { issues.push({ type: 'error', msg: 'Missing title tag.' }); score -= 30; }
            else issues.push({ type: 'success', msg: `Title: ${data.title}` });
            
            if (!data.description) { issues.push({ type: 'warning', msg: 'Missing meta description.' }); score -= 20; }
            else issues.push({ type: 'success', msg: `Description: ${data.description}` });
            
            setResults({
                score: Math.max(score, 0),
                issues
            });
        } catch (error) {
            console.error('Error auditing site:', error);
            // Fallback for demo if backend is not responding with valid data structure
            setResults({
                score: 0,
                issues: [{ type: 'error', msg: 'Failed to connect to backend for real-time audit.' }]
            });
        } finally {
            setLoading(false);
        }
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
            <div className="glass-card p-6 rounded-2xl h-fit">
                <h3 className="text-xl font-black dark:text-white mb-4">Website Scanner</h3>
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                    <input 
                        type="url" 
                        placeholder="https://example.com" 
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                        className="flex-grow p-3 bg-slate-100 dark:bg-navy-950/50 rounded-lg border-2 border-transparent focus:border-primary-500 outline-none dark:text-white transition-all text-sm"
                    />
                    <button 
                        onClick={audit}
                        disabled={!url || loading}
                        className="px-6 py-3 bg-primary-600 text-white rounded-lg font-black hover:bg-primary-500 disabled:opacity-50 shrink-0 shadow-lg shadow-primary-600/20 active:scale-95 transition-all text-sm"
                    >
                        {loading ? 'Scanning...' : 'Scan'}
                    </button>
                </div>
                <div className="bg-amber-500/10 border border-amber-500/20 p-3 rounded-xl flex items-start gap-3">
                    <Info size={18} className="text-amber-600 flex-shrink-0 mt-0.5" />
                    <p className="text-amber-800 dark:text-amber-200 text-[11px] leading-relaxed font-semibold">
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
                          <circle className="text-emerald-500 stroke-current transition-all duration-1000 ease-out" strokeWidth="10" strokeDasharray="251.2" strokeDashoffset={251.2 * (1 - (results.score || 0) / 100)} strokeLinecap="round" fill="transparent" r="40" cx="50" cy="50" />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-5xl font-black dark:text-white">{results.score || 0}</span>
                            <span className="text-xs font-bold text-slate-400 tracking-widest uppercase">Health</span>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {results.issues && results.issues.map((issue, i) => (
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

export default SEOAudit;
