module.exports = {
  basePath: '/anything',
  // trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/something'
      }
    ]
  }
};
