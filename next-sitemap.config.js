module.exports = {
  siteUrl: 'https://cleaners.sbg-camps.com',
  generateRobotsTxt: true,
  outDir: './public', 
  exclude: ['/private'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private'],
      },
    ],
  },
}
