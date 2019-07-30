const webpack = require("webpack"),
    path = require("path"),
    VueLoaderPlugin = require("vue-loader/lib/plugin"),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        "core-js/modules/es.promise", // 做了按路由加载，所以需要添加这两个依赖在entry里面
        "core-js/modules/es.array.iterator",
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
            },
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                use: ["babel-loader"]
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
        new CleanWebpackPlugin(),
        new VueLoaderPlugin(),
        new webpack.NormalModuleReplacementPlugin(/es6-promise$/, 'bluebird'),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../index.html"),
            inject: "body"
        })
    ]
};
