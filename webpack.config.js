var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path')


module.exports = {
    entry: './src/main.js',
    output: {
        path: './dist',
        filename: 'main.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.scss$/, loader: 'style!css!autoprefixer-loader!sass' },
            { test: /\.css$/, loader: 'style!css!autoprefixer-loader' },
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
        new HtmlWebpackPlugin({
            template: 'src/index.template.html'
        })
    ]
}
