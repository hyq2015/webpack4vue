const merge = require('webpack-merge');
const baseWebpackConfig = require('./base.conf');
const path = require("path");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpackConfig = merge(baseWebpackConfig, {
    output: {
        path:path.resolve(__dirname, "../dist"),
        filename: "[name].[chunkhash].js",
        chunkFilename: "[id].[chunkhash].js"
    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            test: /\.js(\?.*)?$/i,
            include: /src/
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
    }
});
module.exports = webpackConfig;
