/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

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

module.exports = [client];
