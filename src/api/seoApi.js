import apiClient from './client';

export const seoApi = {
  // SEO Analysis: GET /seo/analyze?url=...&keyword=...
  analyze: (url, keyword) => {
    return apiClient.get('/seo/analyze', {
      params: { url, keyword },
    });
  },

  // SEO Audit: GET /seo/audit?url=...
  audit: (url) => {
    return apiClient.get('/seo/audit', {
      params: { url },
    });
  },

  // Keyword Suggestions: GET /seo/keywords?keyword=...
  getKeywords: (keyword) => {
    return apiClient.get('/seo/keywords', {
      params: { keyword },
    });
  },

  // Backlink Checker: GET /seo/backlinks?url=...
  checkBacklinks: (url) => {
    return apiClient.get('/seo/backlinks', {
      params: { url },
    });
  },

  // Meta Tag Generator: POST /seo/meta
  generateMeta: (data) => {
    return apiClient.post('/seo/meta', data);
  },

  // Sitemap Generator: POST /seo/sitemap
  generateSitemap: (data) => {
    return apiClient.post('/seo/sitemap', data);
  },

  // Word Count: POST /seo/wordcount
  wordcount: (data) => {
    return apiClient.post('/seo/wordcount', data);
  },

  // Keyword Density: POST /seo/keyword-density
  keywordDensity: (data) => {
    return apiClient.post('/seo/keyword-density', data);
  },

  // SERP Preview: POST /seo/serp-preview
  serpPreview: (data) => {
    return apiClient.post('/seo/serp-preview', data);
  },

  // Site Health Checker: GET /seo/health?url=...
  checkHealth: (url) => {
    return apiClient.get('/seo/health', {
      params: { url },
    });
  },
};
