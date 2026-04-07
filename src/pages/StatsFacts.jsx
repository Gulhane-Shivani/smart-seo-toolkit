import React from 'react';
import { BarChart3, TrendingUp, Search, UserCheck, Zap, Globe, Clock, ShieldCheck } from 'lucide-react';

const StatsFacts = () => {
  const stats = [
    { icon: Search, value: "15M+", label: "Queries Analyzed", desc: "Our crawlers handle millions of monthly SEO requests.", color: "text-blue-500" },
    { icon: TrendingUp, value: "98.7%", label: "Accuracy Rate", desc: "Our algorithms provide the most precise SERP data available.", color: "text-green-500" },
    { icon: UserCheck, value: "12,400", label: "Active Marketers", desc: "SMEs and enterprises rely on our SEO tools daily.", color: "text-primary-600" },
    { icon: BarChart3, value: "45+", label: "SEO Modules", desc: "Specialized tools covering every aspect of SEO.", color: "text-purple-500" },
    { icon: Globe, value: "180+", label: "Countries Reached", desc: "Our platform is used globally in dozens of languages.", color: "text-amber-500" },
    { icon: Clock, value: "0.4s", label: "Avg. Tool Speed", desc: "Optimized for lightning-fast performance.", color: "text-red-500" },
    { icon: ShieldCheck, value: "256-bit", label: "SSL Encryption", desc: "Your data is always secure with us.", color: "text-indigo-500" },
    { icon: Zap, value: "24/7", label: "Uptime", desc: "We ensure our tools are always available.", color: "text-primary-400" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-brand-950 pt-20 pb-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold mb-4 italic">
            <Zap className="size-3.5" />
            <span>Facts & Data</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-950 dark:text-white mb-4 uppercase tracking-tight">
            Our Impact in <span className="text-primary-600">Numbers</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            We believe in transparency. Here's a look at the scale of our platform and why marketers trust Smart SEO Toolkit for their daily needs.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 animate-in fade-in slide-in-from-bottom-4 delay-200 duration-700 fill-mode-both">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white dark:bg-brand-900 border border-slate-100 dark:border-white/5 shadow-sm hover:shadow-xl transition-all">
              <div className={`mb-4 flex justify-center ${stat.color}`}>
                <stat.icon className="size-7 stroke-[2.5]" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-1 tracking-tight leading-none">{stat.value}</h3>
                <p className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">{stat.label}</p>
                <div className="w-6 h-0.5 bg-primary-600 rounded-full mx-auto mb-3 opacity-20"></div>
                <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-relaxed italic">{stat.desc}</p>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </div>
  );
};

export default StatsFacts;
