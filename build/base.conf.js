const webpack = require("webpack"),
    path = require("path"),
    VueLoaderPlugin = require("vue-loader/lib/plugin"),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin');
module.exports = {
    entry: [
        path.resolve(__dirname,"../src/index.js")
    ],
    output: {
        filename: "[name].[hash].bundle.js",
        chunkFilename: "[id].[chunkhash].js",
        path: path.resolve(__dirname,"../dist"),
        publicPath: "/"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "less-loader"
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: ["file-loader"]
            },
            {
                test: /\.vue$/,
                exclude:/node_modules/,
                use: ["vue-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".js", ".vue", ".jsx", ".json"],
        alias: {
            'vue': 'vue/dist/vue.js',
            '@':path.resolve(__dirname,'../src')
        }
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
            exclude: /\/node_modules/
        })],
        runtimeChunk: {
            name: "manifest"
        },
        splitChunks: {
            chunks: 'all',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                common: {
                    name: "common",
                    test:/[\\/]src[\\/]js[\\/]/,
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/index.html"),
            inject: "body"
        })
    ]
};
