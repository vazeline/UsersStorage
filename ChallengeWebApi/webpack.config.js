require('webpack');

module.exports = {
    entry: ['./index.jsx'],
    output: {
        path: /*path.resolve(*/__dirname + '/Scripts/build',
        filename: 'bundle.js'
    },
    //resolve: { extensions: ['', '.js', '.jsx'] },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: /\.jsx$/,
                exclude: /node_modules/,
                options: {
                    presets: ['react']
                }
            }
        ]
    }
}