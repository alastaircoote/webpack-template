var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')

module.exports = {
    entry: './src/main.js',
    output: {
        path: './tmp',
        filename: 'main.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.scss$/, loader: 'style!css!autoprefixer-loader!sass' },
            { test: /\.css$/, loader: 'style!css!autoprefixer-loader' },
            { test: /\.json$/, loader: 'json' },
            { test: /\.svg$/, loader: 'raw' },
            { test: /\.(png|otf)$/, loader: 'file' }
        ]
    },
    resolveLoader: {
      modulesDirectories: [
              path.join(__dirname,'/node_modules')
          ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'index.template.html'
    })],
    devServer: {
        contentBase: './tmp',
        port: '3100',
        host:'0.0.0.0',
        hot:true
    },
    devtool: '#inline-source-map',
    debug: true
}
