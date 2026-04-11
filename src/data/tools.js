import { 
  Search, 
  Hash, 
  FileText, 
  Settings, 
  BarChart2, 
  Key, 
  Globe, 
  CheckCircle2, 
  Zap,
  Layout,
  Type,
  PieChart
} from 'lucide-react';

export const CATEGORIES = [
  { id: 'all', name: 'All Tools', icon: Layout },
  { id: 'analysis', name: 'SEO Analysis', icon: BarChart2 },
  { id: 'content', name: 'Content Generators', icon: FileText },
  { id: 'checkers', name: 'Checkers', icon: CheckCircle2 },
  { id: 'keywords', name: 'Keyword Tools', icon: Key },
];

export const TOOLS = [
  {
    id: 'keyword-density',
    name: 'Keyword Density Checker',
    category: 'keywords',
    icon: Search,
    description: 'Analyze how often specific keywords appear in your content relative to the total word count.',
    popular: true,
    slug: 'keyword-density-checker'
  },
  {
    id: 'seo-analysis',
    name: 'Advanced SEO Analysis',
    category: 'analysis',
    icon: BarChart2,
    description: 'Deep dive into your page content for specific keyword optimization and technical metrics.',
    popular: false,
    slug: 'seo-analysis'
  },
  {
    id: 'meta-tag-generator',
    name: 'Meta Tag Generator',
    category: 'content',
    icon: Hash,
    description: 'Generate SEO-friendly meta titles and descriptions categorized for Google and social media.',
    popular: true,
    slug: 'meta-tag-generator'
  },
  {
    id: 'word-counter',
    name: 'Word Counter',
    category: 'content',
    icon: Type,
    description: 'Count words, characters, and sentences in your text. Perfect for blog post optimization.',
    popular: false,
    slug: 'word-counter'
  },
  {
    id: 'basic-seo-audit',
    name: 'Basic SEO Audit',
    category: 'analysis',
    icon: Settings,
    description: 'Get a quick SEO score and high-priority suggestions for any webpage URL.',
    popular: true,
    slug: 'basic-seo-audit'
  },
  {
    id: 'google-serp-preview',
    name: 'SERP Preview Tool',
    category: 'analysis',
    icon: Globe,
    description: 'See how your website will appear in Google search results before you publish.',
    popular: false,
    slug: 'google-serp-preview'
  },
  {
    id: 'site-health-checker',
    name: 'Site Health Checker',
    category: 'checkers',
    icon: Zap,
    description: 'Analyze page load speed, mobile responsiveness, and core web vitals.',
    popular: false,
    slug: 'site-health-checker'
  },
  {
    id: 'keyword-suggestions',
    name: 'Keyword Suggestions',
    category: 'keywords',
    icon: Search,
    description: 'Get related keyword ideas and search volume insights for your target topics.',
    popular: false,
    slug: 'keyword-suggestions'
  },
  {
    id: 'backlink-checker',
    name: 'Backlink Checker',
    category: 'analysis',
    icon: Globe,
    description: 'Track and analyze incoming links to your website to improve authority.',
    popular: false,
    slug: 'backlink-checker'
  },
  {
    id: 'sitemap-generator',
    name: 'Sitemap Generator',
    category: 'content',
    icon: FileText,
    description: 'Automatically generate XML sitemaps to help search engines index your site.',
    popular: false,
    slug: 'sitemap-generator'
  }
];
