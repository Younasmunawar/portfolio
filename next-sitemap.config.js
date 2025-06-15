/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://ymcoding.com', // ✅ Replace with your actual domain
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'monthly',
  priority: 0.7,
  exclude: ['/404'],
};
