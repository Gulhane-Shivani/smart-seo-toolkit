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
                        {results.links && results.links.map((link, i) => (
                            <div key={i} className="p-3 bg-slate-50 dark:bg-white/5 rounded-xl text-xs flex justify-between">
                                <span className="text-primary-500 font-bold truncate max-w-[200px]">{link.source}</span>
                                <span className="text-slate-400">DR: {link.dr}</span>
                            </div>
                        ))}
                    </div>
                </ResultPanel>
            )}
        </div>
    );
};

export default BacklinkChecker;
