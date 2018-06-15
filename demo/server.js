'use strict';

var fs = require('fs');
var path = require('path');
var util = require('util');
var express = require('express');
var serveStatic = require('serve-static');

var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var WebpackConfig = require('./webpack.config')

var app = module.exports.app = exports.app = express();

var rootDir   = path.join(__dirname, '.');
var port  = process.env.port || 8080;
var nodeEnv   = process.env.nodeEnv || 'development';


app.use(serveStatic(rootDir));


app.use(webpackDevMiddleware(webpack(WebpackConfig), {
  publicPath: '/demo/',
  stats: {
    colors: true
  }
}))


app.listen(port, function() {
  console.log(`Server running on ${nodeEnv} mode on port ${port}`)
});
