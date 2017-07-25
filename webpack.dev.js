// const fs = require('fs')
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const config = {
    entry: {
        print: './src/print.js',
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(), // Enable HMR
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Code Splitting'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'common' // 公共函数 分离
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    }
};

module.exports = config;