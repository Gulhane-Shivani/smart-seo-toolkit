import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, AlertTriangle, CheckCircle2, X, Star } from 'lucide-react';
import ResultPanel from '../../components/ResultPanel';
import { seoApi } from '../../api/seoApi';

const MetaTagGenerator = () => {
    const [meta, setMeta] = useState({ title: '', description: '', keywords: '', author: '' });
    const [results, setResults] = useState(null);

    const generate = async () => {
        try {
            const response = await seoApi.generateMeta(meta);
            // The backend returns a string of HTML meta tags
            setResults(response.data);
        } catch (error) {
            console.error('Error generating meta tags:', error);
            alert('Failed to generate meta tags. Please check the backend connection.');
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
                        placeholder="e.g. My Awesome SEO Tools"
                        className="w-full p-3 bg-slate-100 dark:bg-navy-950/50 rounded-lg border border-transparent focus:border-primary-500 outline-none dark:text-white text-sm"
                    />
                </div>
                <div>
                     <label className="block text-[10px] font-black text-slate-500 mb-1 uppercase tracking-wider">Meta Description</label>
                    <textarea 
                        value={meta.description}
                        onChange={e => setMeta({...meta, description: e.target.value})}
                        placeholder="Describe your page here..."
                        className="w-full h-24 p-3 bg-slate-100 dark:bg-navy-950/50 rounded-lg border border-transparent focus:border-primary-500 outline-none dark:text-white text-sm"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                     <div>
                        <label className="block text-[10px] font-black text-slate-500 mb-1 uppercase tracking-wider">Keywords</label>
                        <input 
                            type="text" 
                            value={meta.keywords}
                            onChange={e => setMeta({...meta, keywords: e.target.value})}
                            className="w-full p-3 bg-slate-100 dark:bg-navy-950/50 rounded-lg border border-transparent focus:border-primary-500 outline-none dark:text-white text-sm"
                        />
                    </div>
                    <div>
                        <label className="block text-[10px] font-black text-slate-500 mb-1 uppercase tracking-wider">Author</label>
                        <input 
                            type="text" 
                            value={meta.author}
                            onChange={e => setMeta({...meta, author: e.target.value})}
                            className="w-full p-3 bg-slate-100 dark:bg-navy-950/50 rounded-lg border border-transparent focus:border-primary-500 outline-none dark:text-white text-sm"
                        />
                    </div>
                </div>
                <button 
                  onClick={generate}
                  className="w-full py-3 bg-primary-600 text-white rounded-xl font-black text-lg hover:bg-primary-500"
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

export default MetaTagGenerator;
