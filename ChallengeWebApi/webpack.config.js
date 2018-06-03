var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['./index.js'],
    output: {
        path: path.resolve(__dirname, './Scripts/build'),
        filename: 'bundle.js'
    },
    //resolve: { extensions: ['', '.js', '.jsx'] },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
                options: {
                    presets: ["babel-preset-react", "babel-preset-stage-2", "babel-preset-es2015", "babel-preset-es2016", "babel-preset-es2017"].map(require.resolve)
                }
            },
            {
                test: /\.css$/,
                include: /node_modules/,
                loaders: ['style-loader', 'css-loader'],
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map'
}