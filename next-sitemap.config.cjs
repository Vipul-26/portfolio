/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://www.vipulsingh.in.net",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/404"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: process.env.VERCEL_ENV === "preview" ? ["/"] : [],
        allow: process.env.VERCEL_ENV === "preview" ? [] : ["/"],
      },
    ],
  },
};
