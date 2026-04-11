import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, AlertTriangle, CheckCircle2, X, Star } from 'lucide-react';
import ResultPanel from '../../components/ResultPanel';
import { seoApi } from '../../api/seoApi';

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
                        <h2 className="text-2xl font-black dark:text-white">{tool.name} Guide</h2>
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Complete walk-through of the {tool.category} toolkit</p>
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

export default ToolGuide;
