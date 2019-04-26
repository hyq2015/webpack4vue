const webpackDevMiddleware = require('webpack-dev-middleware'),
    webpack = require('webpack'),
    hotMiddleware = require('webpack-hot-middleware'),
    express = require("express"),
    app = express(),
    config = require("./webpack.dev.conf"),
    path = require("path"),
    compiler = webpack(config),
    port = process.env.port || 8000,
    proxy = require('http-proxy-middleware'),
    proxyConfig = config.proxy;

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "../dist"),
    hot: true
}));
app.use(hotMiddleware(compiler));
if (proxyConfig) {
    for (let key in proxyConfig) {
        if (proxyConfig.hasOwnProperty(key)) {
            app.use(key, proxy(proxyConfig[key]));
        }
    }
}
app.listen(port, function () {
    console.log(`app listening on port ${port}!\n`);
});
