// Version if the local Node.js version supports async/await
// webpack.config.js
const path = require('path');
const webpack = require('webpack')
const slsw = require('serverless-webpack');
var nodeExternals = require('webpack-node-externals');
// var LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

module.exports = {
    // devtool: 'source-map',
    entry: slsw.lib.entries,
    target: 'node',
    externals: [nodeExternals()],
    // mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    optimization: {
        // We no not want to minimize our code.
        minimize: false
    },
    performance: {
        // Turn off size warnings for entry points
        hints: false
    },
    devtool: 'nosources-source-map',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]

            }
        ]
    },
    // plugins: [
    //     new LodashModuleReplacementPlugin
    // ],
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: "[name].js",
        sourceMapFilename: 'bundle.map'
    }
};