const fs = require('fs')
const path = require('path');
const webpack = require('webpack');


const definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true')),
    __PRERELEASE__: JSON.stringify(JSON.parse(process.env.BUILD_PRERELEASE || 'false'))
});

const SRC = path.resolve(__dirname, 'src')

const config = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: SRC,
                use: ['babel-loader',],
                // query: {
                //     presets: ['env']
                // }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ['file-loader']
            }
        ]
    },
    // resolve: {
    //     extensions: ['.js', '.json', '.css']
    // },
    plugins: [definePlugin]
};

module.exports = config;