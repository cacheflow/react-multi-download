/* global __dirname */
var path = require('path');
var webpack = require('webpack');
var dir_js = path.resolve(__dirname, 'src');
var dir_build = path.resolve(__dirname, 'dist');

module.exports = {
    entry: path.resolve(dir_js, 'index.js'),
    output: {
        path: dir_build,
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
                loader: 'react-hot-loader/hot',
                test: dir_js,
            },
            {
                loader: 'babel-loader',
                test: dir_js,
                query: {
                    presets: ['es2015', 'react', 'stage-0'],
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
