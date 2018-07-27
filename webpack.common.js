const path = require('path'); // the current path
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

let dest = './dist';
let src = './src';
module.exports = {
    entry: {
        index: src + '/entry.js'
    },
    output: {
        path: path.resolve(__dirname, dest),
        filename: "./bundle.js"
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: '/node_modules/',
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "./[name].css", // relative to output path
            chunkFilename: "./[id].css"
        }),
        new CleanWebpackPlugin([dest])
    ]
};


