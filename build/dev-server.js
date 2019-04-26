const webpackDevMiddleware = require('webpack-dev-middleware'),
    webpack = require('webpack'),
    express = require("express"),
    app = express(),
    baseConfig = require("./webpack.base.conf"),
    path = require("path"),
    merge = require("webpack-merge"),
    devConfig = merge(baseConfig, {
        devtool: "source-map",
        mode: "development"
    }),
    compiler = webpack(devConfig),
    port = process.env.port || 8000;

app.use(webpackDevMiddleware(compiler, {
    publicPath: baseConfig.output.publicPath,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "../dist"),
    hot: true
}));
app.listen(port, function () {
    console.log(`app listening on port ${port}!\n`);
});
