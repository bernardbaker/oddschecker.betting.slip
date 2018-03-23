var path = require('path')

module.exports = {
  build: {
    // Proxy your API if using any.
    // Also see /build/script.dev.js and search for "proxy api requests"
    // https://github.com/chimurai/http-proxy-middleware
    proxyTable: {
      // proxy all requests starting with /api
      '/decimalOddsMoreThanTwo': {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      },
      '/decimalOddsLessThanTwo': {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false,
      }
    }
  }
}
