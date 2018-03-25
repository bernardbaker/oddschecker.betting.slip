// server.js
var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

app = express();

app.use('/bet', express.static(__dirname + "/dist"))

var config = require('./config')
var proxyMiddleware = require('http-proxy-middleware')

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.build.proxyTable

// proxy requests like API. See /config/index.js -> dev.proxyTable
// https://github.com/chimurai/http-proxy-middleware
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
});

app.use(serveStatic(__dirname + "/dist"))
var port = process.env.PORT || 5000
app.listen(port)
console.log('server started '+ port)
