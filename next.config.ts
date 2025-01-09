// next.config.js
module.exports = {
  // Ensure the app is ready for static export
  output: "export",
  images: {
    unoptimized: true,  // Optional: Disable image optimization if needed
  },
  // Set the base path for GitHub Pages (optional, if your repo is not a personal one)
  basePath: '/unobatbayar.github.io',
}
