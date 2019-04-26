const baseConfig = require("./webpack.base.conf"),
    path = require("path"),
    merge = require("webpack-merge"),
    devConfig = merge(baseConfig, {
        devtool: "source-map",
        mode: "development",
        devServer: {
            historyApiFallback: true,
            contentBase: path.resolve(__dirname, "../dist"),
            hot: true,
            host: "localhost",
            port: process.env.port || 8080
        }
    });
module.exports = devConfig;

