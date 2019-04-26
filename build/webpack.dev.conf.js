const baseConfig = require("./webpack.base.conf"),
    path = require("path"),
    merge = require("webpack-merge"),
    devConfig = merge(baseConfig, {
        devtool: "source-map",
        mode: "development"
    });
module.exports = devConfig;

