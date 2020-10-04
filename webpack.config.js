/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isDevelopment = process.env.NODE_ENV === 'development';

const client = {
    devServer: {
        contentBase: path.join(__dirname, 'dev'),
        port: 3000,
        host: `localhost`
    },
    entry: {
        app: ['./src/game.js']
    },
    output: {
        path: isDevelopment ? path.join(__dirname, 'dev') : path.join(__dirname, 'build'),
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

module.exports = [client];
