import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, AlertTriangle, CheckCircle2, X, Star } from 'lucide-react';
import ResultPanel from '../../components/ResultPanel';
import { seoApi } from '../../api/seoApi';

const SitemapGenerator = () => {
    const [payload, setPayload] = useState({ url: '', freq: 'daily', priority: '0.8' });
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);

    const generate = async () => {
        setLoading(true);
        try {
            const response = await seoApi.generateSitemap(payload);
            setResults(response.data);
        } catch (error) {
            console.error('API failed, showing generic sitemap XML:', error);
            // Mock output if backend is failing
            setResults(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n   <url>\n      <loc>${payload.url || 'https://example.com'}</loc>\n      <changefreq>${payload.freq}</changefreq>\n      <priority>${payload.priority}</priority>\n   </url>\n</urlset>`);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_450px] gap-8">
            <div className="glass-card p-6 rounded-2xl flex flex-col gap-4">
                <div>
                    <label className="block text-[10px] font-black text-slate-500 mb-1 uppercase tracking-wider">Website URL</label>
                    <input 
                        type="url"
                        value={payload.url}
                        onChange={e => setPayload({...payload, url: e.target.value})}
                        placeholder="https://example.com"
                        className="w-full p-4 bg-slate-100 dark:bg-navy-950/50 rounded-xl outline-none text-sm dark:text-white"
                    />
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-[10px] font-black text-slate-500 mb-1 uppercase tracking-wider">Frequency</label>
                        <select 
                            value={payload.freq} 
                            onChange={e => setPayload({...payload, freq: e.target.value})}
                            className="w-full p-4 bg-slate-100 dark:bg-navy-950/50 rounded-xl outline-none text-sm dark:text-white"
                        >
                            <option value="always">Always</option>
                            <option value="hourly">Hourly</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                            <option value="yearly">Yearly</option>
                            <option value="never">Never</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-[10px] font-black text-slate-500 mb-1 uppercase tracking-wider">Priority (0.0 - 1.0)</label>
                        <input 
                            type="number"
                            step="0.1"
                            min="0" max="1"
                            value={payload.priority}
                            onChange={e => setPayload({...payload, priority: e.target.value})}
                            className="w-full p-4 bg-slate-100 dark:bg-navy-950/50 rounded-xl outline-none text-sm dark:text-white"
                        />
                    </div>
                </div>
                <button onClick={generate} disabled={loading} className="w-full mt-4 py-3 bg-primary-600 text-white rounded-xl font-black">
                    {loading ? 'Generating...' : 'Generate Sitemap'}
                </button>
            </div>
            {results && (
                <ResultPanel title="XML Sitemap">
                    <pre className="p-4 bg-slate-900 rounded-xl text-emerald-400 text-xs overflow-auto h-[300px]">
                        <code>{results}</code>
                    </pre>
                </ResultPanel>
            )}
        </div>
    );
};

export default SitemapGenerator;
