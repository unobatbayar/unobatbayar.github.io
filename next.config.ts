// next.config.js
module.exports = {
  // Ensure the app is ready for static export
  output: "export",
  images: {
    unoptimized: true,  // Optional: Disable image optimization if needed
  },
}
