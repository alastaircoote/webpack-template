var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        filename: 'main.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader','css!autoprefixer-loader!sass') },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style!css!autoprefixer-loader') },
            { test: /\.json$/, loader: 'json' },
            { test: /\.svg$/, loader: 'raw' },
            { test: /\.(svg|jpeg|jpg|png)$/, loader: 'file' }
        ]
    },
    resolveLoader: {
      modulesDirectories: [
              path.join(__dirname,'/node_modules')
          ]
    },
    plugins: [
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
            template: 'src/index.template.html'
        })
    ]
}
