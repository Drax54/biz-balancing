import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Your website URL
const WEBSITE_URL = 'https://financeflow.com';

// Get all blog posts from the BlogPost component
const getBlogPosts = () => {
  const blogPostsFile = path.join(__dirname, '../src/pages/BlogPost.tsx');
  const content = fs.readFileSync(blogPostsFile, 'utf8');
  
  // Extract blog post slugs using regex
  const slugRegex = /'([^']+)':\s*{/g;
  const matches = [...content.matchAll(slugRegex)];
  
  return matches.map(match => `/blog/${match[1]}`);
};

// Static routes
const staticRoutes = [
  '/',
  '/about',
  '/contact',
  '/solutions',
  '/blog'
];

// Generate sitemap XML
const generateSitemap = () => {
  const blogRoutes = getBlogPosts();
  const allRoutes = [...staticRoutes, ...blogRoutes];
  
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allRoutes.map(route => `  <url>
    <loc>${WEBSITE_URL}${route}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  // Write sitemap to the dist folder
  const distDir = path.join(__dirname, '../dist');
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir);
  }
  
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
  console.log('Sitemap generated successfully!');
};

// Run the generator
generateSitemap();