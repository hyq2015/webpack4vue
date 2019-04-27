const webpackDevMiddleware = require('webpack-dev-middleware'),
    webpack = require('webpack'),
    hotMiddleware = require('webpack-hot-middleware'),
    express = require("express"),
    app = express(),
    dev = require("./webpack.dev.conf"),
    path = require("path"),
    compiler = webpack(dev.devConfig),
    port = process.env.port || 8000,
    proxy = require('http-proxy-middleware');

app.use(webpackDevMiddleware(compiler, {
    publicPath: dev.devConfig.output.publicPath,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "../dist"),
    hot: true
}));
app.use(hotMiddleware(compiler));
if (dev.proxyConfig) {
    for (let key in dev.proxyConfig) {
        if (dev.proxyConfig.hasOwnProperty(key)) {
            app.use(key, proxy(dev.proxyConfig[key]));
        }
    }
}
app.listen(port, function () {
    console.log(`app listening on port ${port}!\n`);
});
