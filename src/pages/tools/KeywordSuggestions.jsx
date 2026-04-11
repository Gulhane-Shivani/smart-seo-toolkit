import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, AlertTriangle, CheckCircle2, X, Star } from 'lucide-react';
import ResultPanel from '../../components/ResultPanel';
import { seoApi } from '../../api/seoApi';

const KeywordSuggestions = () => {
    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);

    const suggest = async () => {
        setLoading(true);
        try {
            const response = await seoApi.getKeywords(keyword);
            setResults(response.data);
        } catch (error) {
            console.error('Error getting suggestions:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-8">
            <div className="glass-card p-6 rounded-2xl h-fit">
                <input 
                    type="text" 
                    value={keyword} 
                    onChange={e => setKeyword(e.target.value)}
                    placeholder="e.g. digital marketing"
                    className="w-full p-4 bg-slate-100 dark:bg-navy-950/50 rounded-xl outline-none mb-4"
                />
                <button onClick={suggest} disabled={loading} className="w-full py-4 bg-primary-600 text-white rounded-xl font-black">
                    {loading ? 'Searching...' : 'Get Suggestions'}
                </button>
            </div>
            {results && (
                <ResultPanel title="Related Keywords">
                    <div className="space-y-2">
                        {results.map((item, i) => (
                            <div key={i} className="flex justify-between items-center p-3 hover:bg-slate-50 dark:hover:bg-white/5 rounded-xl transition-colors">
                                <span className="font-bold text-slate-800 dark:text-white capitalize">{item.keyword}</span>
                                <span className="text-xs font-black text-primary-500">{item.volume} / mo</span>
                            </div>
                        ))}
                    </div>
                </ResultPanel>
            )}
        </div>
    );
};

export default KeywordSuggestions;
