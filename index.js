var express = require('express');
var app = express();
var path = require('path');


const webpack = require('webpack');
const config = require('./webpack.config');
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.get('*', function(req, res) {
  res.sendFile('dist/index.html', { root: __dirname });
});

app.listen(3000);