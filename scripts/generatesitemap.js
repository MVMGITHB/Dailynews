// public/scripts/generatesitemap.js

import fs from 'fs';
import path from 'path';
import axios from 'axios';

const baseUrl = 'https://dailynewzmail.com';
const apiUrl = 'https://api.dailynewzmail.com';
const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');

// Ensure `public/` folder exists
const ensurePublicFolderExists = () => {
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }
};

// Fetch all active categories
const fetchCategories = async () => {
  try {
    const res = await axios.get(`${apiUrl}/api/catagory/get-categories`);
    return (res.data.categories || []).filter(cat => cat.status === 'Active');
  } catch (err) {
    console.error('❌ Error fetching categories:', err.message);
    return [];
  }
};

// Fetch all active blogs
const fetchBlogs = async () => {
  try {
    const res = await axios.get(`${apiUrl}/api/blog/getAllBlog`);
    return (res.data.allblogs || []).filter(blog => blog.status === 'Active');
  } catch (err) {
    console.error('❌ Error fetching blogs:', err.message);
    return [];
  }
};

// Generate sitemap
const generateSitemap = async () => {
  ensurePublicFolderExists();

  const categories = await fetchCategories();
  const blogs = await fetchBlogs();

  let urls = [
    `${baseUrl}/`,
    `${baseUrl}/about`,
    `${baseUrl}/contact`,
    `${baseUrl}/privacy-policy`,
    `${baseUrl}/terms-of-service`,
    `${baseUrl}/advertise`,
    `${baseUrl}/help`,
  ];

  // Add category URLs
  urls.push(...categories.map(cat => `${baseUrl}/${cat.slug}`));

  // Add blog URLs
  urls.push(
    ...blogs.map(blog =>
      `${baseUrl}/${blog.category?.slug || 'blog'}/${blog.slug}`
    )
  );

  // Create XML content
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  try {
    fs.writeFileSync(sitemapPath, sitemapXml, 'utf8');
    console.log('✅ Sitemap successfully generated at /public/sitemap.xml');
  } catch (err) {
    console.error('❌ Failed to write sitemap.xml:', err.message);
  }
};

generateSitemap();
