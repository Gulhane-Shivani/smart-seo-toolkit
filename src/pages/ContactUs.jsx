import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Zap, Github, Twitter, Linkedin } from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Contact submission:", formData);
    alert("Thanks for your message! Our team will get back to you shortly.");
  };

  return (
    <div className="min-h-screen bg-white dark:bg-brand-950 pt-10 pb-16 px-4 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-bold mb-4">
            <MessageSquare className="size-3.5" />
            <span>Support & Partnership</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-950 dark:text-white mb-4 uppercase tracking-tight">
            How Can We <span className="text-primary-600">Help You?</span>
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto leading-relaxed">
            Have a question about our tools or a potential partnership? Reach out and we'll be happy to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          {/* Contact Form */}
          <div className="p-6 rounded-xl bg-slate-50 dark:bg-brand-900 border border-slate-100 dark:border-white/5 animate-in fade-in slide-in-from-left-4 duration-700 fill-mode-both">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="John Doe"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-brand-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600/50 outline-none transition-all text-sm"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Email address</label>
                  <input 
                    type="email" 
                    required 
                    placeholder="john@example.com"
                    className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-brand-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600/50 outline-none transition-all text-sm"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Subject</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Inquiry about API"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-brand-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600/50 outline-none transition-all text-sm"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Message</label>
                <textarea 
                  required 
                  rows="3"
                  placeholder="How can we help you?"
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 dark:border-white/10 bg-white dark:bg-brand-950 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-600/50 outline-none transition-all resize-none text-sm"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-3 bg-primary-600 text-white rounded-lg font-bold hover:bg-primary-500 shadow-md shadow-primary-600/20 transition-all hover:scale-[1.01] active:scale-100 text-sm"
              >
                Send Message <Send className="size-4" />
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="animate-in fade-in slide-in-from-right-4 duration-700 fill-mode-both">
            <h2 className="text-xl font-black text-slate-900 dark:text-white mb-6 tracking-tight uppercase leading-none">Contact Information</h2>
            <div className="space-y-7">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary-50 dark:bg-primary-900/20 text-primary-600 flex items-center justify-center shrink-0">
                  <Mail className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase mb-1">Email Support</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">support@smartseotoolkit.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-900/20 text-amber-600 flex items-center justify-center shrink-0">
                  <Phone className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase mb-1">Phone Line</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">+1 (555) 000-0000</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-600 flex items-center justify-center shrink-0">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase mb-1">Main HQ</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    1 SEO Way, Suite 100, Austin, TX 78701
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-slate-100 dark:border-white/5">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase mb-4">Social Channels</h4>
                <div className="flex gap-3">
                  {[Github, Twitter, Linkedin].map((Icon, idx) => (
                    <a key={idx} href="#" className="w-9 h-9 rounded-full bg-slate-100 dark:bg-brand-900 text-slate-600 dark:text-slate-400 flex items-center justify-center border border-transparent hover:border-primary-600 hover:text-primary-600 transition-all">
                      <Icon className="size-4.5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
