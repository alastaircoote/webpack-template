var base = require('./webpack.config')
var merge = require('lodash.merge')
var webpack = require('webpack');

base.entry = [
    base.entry,
    'webpack-dev-server/client?http://localhost:3100',
    'webpack/hot/dev-server'
]

var loaderIndexes = [0,1,2]

loaderIndexes.forEach(function(index) {
    base.module.loaders[index].loader = "react-hot!" + base.module.loaders[index].loader
})

base.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

merge(base.devServer, {
    hot: true
})

module.exports = base;
