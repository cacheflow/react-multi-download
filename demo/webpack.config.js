/* global __dirname */
var path = require('path');
var webpack = require('webpack');
var dir_js = path.resolve(__dirname, 'src');
var dir_build = path.resolve(__dirname, 'dist');

module.exports = {
    entry: path.resolve(__dirname, 'app.js'),
    output: {
        path: path.resolve(__dirname, 'index.js'),
        library: 'ReactMultiDownload',
        libraryTarget: 'umd',
        filename: 'react-multi-download.js'
    },
    devServer: {
        contentBase: dir_build,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'react-hot-loader/hot',
                test: dir_js,
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                test: dir_js,
                query: {
                    presets: ['env', 'react', 'stage-0'],
                },
            }
        ]
    },
    externals: [
        {
            react: {
                root: 'React',
                amd: 'react',
                commonjs: 'react',
                commonjs2: 'react'
            }
        }
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map',
};
