var base = require('./webpack.config')
var merge = require('lodash.merge')
var webpack = require('webpack');

base.output.path = './tmp'

base.entry = [
    base.entry,
    'webpack-dev-server/client?http://localhost:3100',
    'webpack/hot/dev-server'
]

base.module.loaders.forEach(function(loader){
    loader.loader = "react-hot!" + loader.loader
})

base.plugins.push(
  new webpack.HotModuleReplacementPlugin()
);

merge(base, {
    devServer: {
        contentBase: './tmp',
        port: '3100',
        host:'0.0.0.0',
        hot:true
    },
    devtool: '#inline-source-map',
    debug: true
})

module.exports = base;
