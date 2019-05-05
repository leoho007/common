const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const env = process.env;
var mode = env.mode || 'development';
const settings = {
    entry: {
        vueAPP: './src/init.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    mode: mode,
    target: 'web',
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'style.css'
        }),
        new HtmlWebpackPlugin({
            template: './src/template.html',
            title: 'Leo'
        })
    ],
    module: {
        rules: [
            {
                test: /\.vue?$/,
                use: ['vue-loader'],
                exclude: [path.resolve(__dirname, 'node_modules')]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },

            {
                test: /\.css$/,
                use: [
                    mode !== 'production'
                        ? 'vue-style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },

            {
                test: /\.scss$/,
                use: [
                    mode !== 'production'
                        ? 'vue-style-loader'
                        : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        // alias: {
        //   'vue$': 'vue/dist/vue.esm.js' // 'vue/dist/vue.common.js' for webpack 1
        // }
    },
    devServer: {
        host: '0.0.0.0',
        port: 9000
        // publicPath: '/dist/'
    }
};

module.exports = settings;
