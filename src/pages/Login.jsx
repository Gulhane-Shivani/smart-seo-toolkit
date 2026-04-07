import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, ArrowRight, Zap } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = (e) => {
    e.preventDefault();
    // Placeholder login logic
    console.log('Login with:', email, password);
    navigate('/');
  };

  return (
    <div className="min-h-screen pt-8 pb-12 flex flex-col items-center justify-center bg-slate-50 dark:bg-brand-950 px-4">
      <Link to="/" className="flex items-center space-x-2 mb-8 group">
        <div className="p-2 bg-primary-600 rounded-lg group-hover:bg-primary-500 transition-colors">
          <Zap className="text-white size-5 fill-white" />
        </div>
        <span className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
          SMART SEO
        </span>
      </Link>

      <div className="w-full max-w-md bg-white dark:bg-brand-900 rounded-2xl shadow-xl shadow-slate-200/50 dark:shadow-none border border-slate-100 dark:border-white/10 p-8 sm:p-10">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Welcome Back</h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm">Log in to continue to your workspace.</p>
        </div>


        <form onSubmit={handleEmailLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="name@company.com" 
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-brand-950 focus:bg-white focus:ring-2 focus:ring-primary-500/50 outline-none transition-all text-slate-800 dark:text-white"
              />
            </div>
          </div>
          
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">Password</label>
              <a href="#" className="text-xs font-semibold text-primary-600 hover:text-primary-500 transition-colors">Forgot password?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-5 text-slate-400" />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="••••••••" 
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-brand-950 focus:bg-white focus:ring-2 focus:ring-primary-500/50 outline-none transition-all text-slate-800 dark:text-white"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3 bg-primary-600 text-white rounded-xl font-bold hover:bg-primary-500 shadow-lg shadow-primary-600/30 transition-all text-sm mt-2"
          >
            Log In <ArrowRight className="size-4" />
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400">
          Don't have an account?{' '}
          <Link to="/signup" className="font-bold text-primary-600 hover:text-primary-500 transition-colors">
            Sign up for free
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
