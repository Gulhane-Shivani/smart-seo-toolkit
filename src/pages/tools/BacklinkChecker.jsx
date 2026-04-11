import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, AlertTriangle, CheckCircle2, X, Star } from 'lucide-react';
import ResultPanel from '../../components/ResultPanel';
import { seoApi } from '../../api/seoApi';

const BacklinkChecker = () => {
    const [url, setUrl] = useState('');
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);

    const check = async () => {
        setLoading(true);
        try {
            const response = await seoApi.checkBacklinks(url);
            setResults(response.data);
        } catch (error) {
            console.error('Error checking backlinks:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-8">
            <div className="glass-card p-6 rounded-2xl h-fit">
                <input 
                    type="url" 
                    value={url} 
                    onChange={e => setUrl(e.target.value)}
                    placeholder="https://example.com"
                    className="w-full p-4 bg-slate-100 dark:bg-navy-950/50 rounded-xl outline-none mb-4"
                />
                <button onClick={check} disabled={loading} className="w-full py-4 bg-primary-600 text-white rounded-xl font-black">
                    {loading ? 'Checking...' : 'Check Backlinks'}
                </button>
            </div>
            {results && (
                <ResultPanel title="Backlink Data">
                    <div className="space-y-4">
                        <div className="p-4 bg-slate-50 dark:bg-white/5 rounded-2xl flex flex-col items-center justify-center border border-slate-200 dark:border-white/10">
                            <span className="text-4xl font-black text-primary-600 mb-2">{results.backlinks !== undefined ? results.backlinks : 0}</span>
                            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Total Backlinks</span>
                        </div>
                        <div className="p-3 bg-primary-500/10 rounded-xl text-center break-words">
                            <span className="text-xs font-semibold text-primary-600 truncate block">Target: {results.url || url}</span>
                        </div>
                    </div>
                </ResultPanel>
            )}
        </div>
    );
};

export default BacklinkChecker;
