const baseConfig = require("./webpack.base.conf"),
    webpack = require("webpack"),
    merge = require("webpack-merge"),
    devConfig = merge(baseConfig, {
        entry: ["webpack-hot-middleware/client"],
        devtool: "source-map",
        mode: "development",
        plugins:[new webpack.HotModuleReplacementPlugin()]
    });
console.log(devConfig);
module.exports = devConfig;


