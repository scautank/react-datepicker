'use strict';

const path = require('path');
const join = path.join;
const webpack = require('webpack');
const pkg = require('./package.json');
const plugins = {};

const webpackConfig = {
    entry: pkg.entry || {},
    output: {
        path: join(__dirname, 'examples'),
        filename: 'js/[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [{
          test: /\.js|jsx$/,
          exclude: /node_modules/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react', 'stage-0']
          }
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url?limit=25000'
        }, {
            test: /\.scss$/,
            loader: 'style!css!sass'
        }]
    }
}

if (process.env.NODE_ENV === 'production') {
    plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.optimize.OccurenceOrderPlugin()
    )
} else {
    webpackConfig.devtool = '#eval-source-map';
}

webpackConfig.plugins = plugins;

module.exports = webpackConfig;
