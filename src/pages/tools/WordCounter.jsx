import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, AlertTriangle, CheckCircle2, X, Star } from 'lucide-react';
import ResultPanel from '../../components/ResultPanel';
import { seoApi } from '../../api/seoApi';

const WordCounter = () => {
    const [text, setText] = useState('');
    const [stats, setStats] = useState({ words: 0, chars: 0, sentences: 0, readTime: 0 });
    const [loading, setLoading] = useState(false);

    const count = async () => {
        if (!text.trim()) return;
        setLoading(true);
        try {
            const response = await seoApi.wordcount({ text });
            const data = response.data;
            setStats({
                words: data.wordCount || 0,
                chars: data.characterCount || 0,
                sentences: data.sentenceCount || 0,
                readTime: parseInt(data.readingTime) || 1
            });
        } catch (error) {
            console.error('API failed, using fallback:', error);
            const words = text.trim() ? text.trim().split(/\s+/).length : 0;
            const chars = text.length;
            const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
            const readTime = Math.ceil(words / 200);
            setStats({ words, chars, sentences, readTime });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-8">
            <div className="glass-card p-6 rounded-2xl flex flex-col h-fit">
                <textarea 
                    value={text} 
                    onChange={e => setText(e.target.value)}
                    placeholder="Enter text to count..."
                    className="w-full h-[200px] mb-4 bg-slate-100 dark:bg-navy-950/50 rounded-xl p-4 border-2 border-transparent focus:border-primary-500 outline-none dark:text-white text-base"
                />
                <button 
                  onClick={count}
                  disabled={!text || loading}
                  className="w-full py-3 bg-primary-600 text-white rounded-xl font-black text-lg hover:bg-primary-500 disabled:opacity-50 transition-all flex justify-center items-center gap-2"
                >
                  {loading ? <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div> : 'Count Words'}
                </button>
            </div>
            <ResultPanel title="Text Stats">
                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl text-center border border-slate-200 dark:border-white/10 shadow-sm">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Words</p>
                        <p className="text-2xl font-black text-primary-600">{stats.words}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl text-center border border-slate-200 dark:border-white/10 shadow-sm">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Characters</p>
                        <p className="text-2xl font-black text-cyan-600">{stats.chars}</p>
                    </div>
                    <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl text-center border border-slate-200 dark:border-white/10 shadow-sm">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Sentences</p>
                        <p className="text-2xl font-black text-indigo-600">{stats.sentences}</p>
                    </div>
                     <div className="bg-slate-50 dark:bg-white/5 p-4 rounded-xl text-center border border-slate-200 dark:border-white/10 shadow-sm">
                        <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest mb-1">Reading Time</p>
                        <p className="text-2xl font-black text-amber-600">{stats.readTime}m</p>
                    </div>
                </div>
            </ResultPanel>
        </div>
    );
};

export default WordCounter;
