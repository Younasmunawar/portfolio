/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ymcoding.com', // ✅ Your live domain
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/404'],

  // ✅ Ensure sitemap and robots.txt are placed in /public/
  outDir: './public',
};