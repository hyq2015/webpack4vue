const webpack = require("webpack"),
    path = require("path"),
    VueLoaderPlugin = require("vue-loader/lib/plugin"),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: path.resolve(__dirname,"../src/index.js"),
    output: {
        filename: "[name].[hash].bundle.js",
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
    plugins: [
        // new CleanWebpackPlugin([path.resolve(__dirname, "../dist")]),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/index.html"),
            inject: "body"
        })
    ]
};
