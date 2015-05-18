var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/main.js',
    output: {
        path: './tmp',
        filename: 'main.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.scss$/, loader: 'style!css!sass' },
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.json$/, loader: 'json' },
            { test: /\.svg$/, loader: 'raw' },
            { test: /\.png$/, loader: 'file' }
        ]
    },
    plugins: [new HtmlWebpackPlugin()],
    devServer: {
        contentBase: './tmp',
        port: '3100'
    },
    devtool: '#inline-source-map',
    debug: true
}
