import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, AlertTriangle, CheckCircle2, X, Star } from 'lucide-react';
import ResultPanel from '../../components/ResultPanel';
import { seoApi } from '../../api/seoApi';

const ToolInformation = ({ tool }) => {
    const info = {
        'keyword-density': {
            how: `Our algorithm scans your entire document, stripping away common "stop words" and punctuation to identify your most frequent terms. It then calculates the percentage of each word relative to the total word count.`,
            output: `You will receive a ranked list of keywords, their raw frequency (count), and a percentage-based density bar. Ideally, your primary keyword should be between 1-2% for natural SEO.`,
            tips: `Avoid "keyword stuffing" by keeping density under 3%. Use synonyms (LSI keywords) to maintain relevance without repetitive phrasing.`
        },
        'seo-analysis': {
            how: `This advanced analyzer performs a deep crawl of your URL focused on a specific keyword. It evaluates your keyword placement in headings, speed metrics, and content structure.`,
            output: `A comprehensive JSON report detailing every technical aspect of the page relative to your focus keyword.`,
            tips: `Use this to compare your page directly against a competitor's URL for the same keyword.`
        },
        'meta-tag-generator': {
            how: `Based on the title and description you provide, we generate the exact HTML snippets required for Google (Meta Tags) and social platforms like X and Facebook (Open Graph).`,
            output: `A code block containing pre-formatted HTML tags. We also provide a character count to ensure your tags don't get truncated (cut off) in search results.`,
            tips: `Keep your titles under 60 characters and descriptions under 160 characters for maximum visibility.`
        },
        'word-counter': {
            how: `We process your text through a high-speed tokenization engine that counts every character, word, and sentence. We also calculate estimate "Reading Time" based on a standard speed of 200 words per minute.`,
            output: `A statistical dashboard showing total counts and reading time. This helps you hit specific length targets for guest posts or ad copy.`,
            tips: `For blog posts, aim for at least 1,200 words to improve your chances of appearing on Google’s first page.`
        },
        'basic-seo-audit': {
            how: `Our scanner performs a technical crawl of your URL to check for essential SEO elements like SSL security, Heading tags (H1), image Alt text, and page speed headers.`,
            output: `An overall "Health Score" out of 100, followed by a categorized list of Errors (critical), Warnings (optional), and Successes (optimized).`,
            tips: `Always fix the Red ERRORS first, as these have the highest impact on your search engine ranking.`
        },
        'google-serp-preview': {
            how: `This tool renders a pixel-perfect simulation of a Google Search Result page based on your specific metadata. It mimics font sizes, colors, and layouts to show you exactly what your site will look like.`,
            output: `A visual preview of your snippet. Use this to ensure your most important keywords are visible and not cut off by ellipses (...).`,
            tips: `Use an action-oriented description to improve your Click-Through Rate (CTR).`
        },
        'site-health-checker': {
            how: `We use a performance engine that measures Core Web Vitals. This checks how fast your page loads (LCP), how interactive it is (FID), and how stable the layout is during loading (CLS).`,
            output: `Four major scores: Performance, Accessibility, Best Practices, and SEO. High scores here mean a better experience for your users.`,
            tips: `If your performance score is low, try optimizing your images and reducing large JavaScript files.`
        },
        'keyword-suggestions': {
          how: `We scan major search engines to find real-time related queries for your target keyword.`,
          output: `A list of related keywords with their estimated monthly search volume.`,
          tips: `Focus on "Long Tail" keywords (3+ words) for easier ranking.`
        },
        'backlink-checker': {
          how: `Our spider crawls the web to find links pointing to your target URL.`,
          output: `A detailed list of referring domains and their Domain Rating (authority).`,
          tips: `High-quality backlinks from established sites are the #1 ranking factor.`
        },
         'sitemap-generator': {
          how: `We crawl the URLs you provide and format them into a search-engine friendly XML structure.`,
          output: `A raw XML code block ready to be uploaded to your server's root directory.`,
          tips: `Keep your sitemap updated whenever you add new content.`
        }
    }[tool.id] || { 
        how: `This tool uses our smart SEO algorithms to analyze your input and provide actionable data point to improve your ranking.`,
        output: `A detailed report or generated code snippet based on your specific inputs.`,
        tips: `Regularly audits your content to stay ahead of search engine algorithm updates.`
    };

    return (
        <div className="mt-16 border-t border-slate-200 dark:border-white/5 pt-16">
            <h2 className="text-2xl font-black text-slate-800 dark:text-white mb-8 text-center">Toolkit Information.</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="glass-card p-8 rounded-3xl border-t-4 border-t-primary-500">
                    <h4 className="text-lg font-black dark:text-white mb-4 flex items-center gap-2">
                        <Info size={18} className="text-primary-500" /> How it works?
                    </h4>
                    <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed font-medium">
                        {info.how}
                    </p>
                </div>
                <div className="glass-card p-8 rounded-3xl border-t-4 border-t-emerald-500">
                    <h4 className="text-lg font-black dark:text-white mb-4 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-emerald-500" /> Analysis Output
                    </h4>
                    <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed font-medium">
                        {info.output}
                    </p>
                </div>
                <div className="glass-card p-8 rounded-3xl border-t-4 border-t-amber-500">
                    <h4 className="text-lg font-black dark:text-white mb-4 flex items-center gap-2">
                        <Star size={18} className="text-amber-500" /> Expert Tips
                    </h4>
                    <p className="text-slate-500 dark:text-slate-300 text-sm leading-relaxed font-medium">
                        {info.tips}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ToolInformation;
