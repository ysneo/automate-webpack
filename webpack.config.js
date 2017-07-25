const fs = require('fs')
const path = require('path');
const webpack = require('webpack');

const config = {
    entry: {
        index: './src/index.js',
        print: './src/print.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    }
};

module.exports = config;