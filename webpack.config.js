/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

const client = {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dev'),
        port: 3000,
        host: `localhost`
    },
    entry: {
        app: ['./src/game.js']
    },
    output: {
        path: path.join(__dirname, 'dev'),
        filename: 'game.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.m?(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/public/index.html',
            filename: 'index.html'
        })
    ]
};

const server = {
    entry: './src/server.server.js',
    target: 'node',
    externals: [nodeExternals()],
    output: {
        path: path.resolve(__dirname, 'dev'),
        filename: 'server.js',
        publicPath: '/',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.m?(js|ts|tsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js']
    }
};

module.exports = [client];
