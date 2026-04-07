import React from 'react';
import { Users, Target, Shield, Award, Zap } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-brand-950 pt-20 pb-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold mb-4">
            <Zap className="size-3.5" />
            <span>Our Mission</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-slate-950 dark:text-white mb-4 uppercase tracking-tight">
            Empowering Your <span className="text-primary-600">SEO Journey</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Smart SEO Toolkit was built with a simple goal: to make professional-grade SEO tools accessible to everyone. From small bloggers to large enterprise marketers, we provide the data you need to win.
          </p>
        </div>

        {/* Features/Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {[
            {
              icon: Target,
              title: "Data Driven",
              desc: "Every tool we build is backed by accurate, real-world search engine data to give you the competitive edge."
            },
            {
              icon: Shield,
              title: "Trust & Reliability",
              desc: "We prioritize your privacy and ensure our tools are always up and running when you need them most."
            },
            {
              icon: Award,
              title: "Expertise",
              desc: "Our team consists of SEO veterans who understand the nuances of search algorithms and user intent."
            }
          ].map((item, index) => (
            <div key={index} className="p-6 rounded-2xl bg-slate-50 dark:bg-brand-900 border border-slate-100 dark:border-white/5 hover:shadow-xl transition-all">
              <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center text-white mb-4">
                <item.icon className="size-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3 uppercase tracking-tight">{item.title}</h3>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Team Section Placeholder */}
        <div className="bg-slate-900 dark:bg-brand-900 rounded-3xl p-8 md:p-12 text-center text-white overflow-hidden relative">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary-600 filter blur-[80px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="text-2xl md:text-4xl font-black mb-6 uppercase tracking-tight relative z-10 leading-tight">Join Thousands of <br />Marketers Globally</h2>
          <p className="text-slate-400 mb-8 max-w-xl mx-auto relative z-10 text-base">
            Our platform is growing every day. We are constantly adding new tools and features to stay ahead of the search landscape.
          </p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-800 flex items-center justify-center font-bold text-[10px]">
                  U{i}
                </div>
              ))}
            </div>
            <div className="text-xs pt-2.5 font-bold uppercase tracking-widest text-primary-400">
              +12,000 active users
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
