const path = require("path");

module.exports = {
  devServer: {
    compress: true,
    port: 3050
  },
  webpack: {
    alias: {
      '@': path.resolve(__dirname, "src")
    }
  }
}