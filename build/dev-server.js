const webpackDevMiddleware = require('webpack-dev-middleware'),
    webpack = require('webpack'),
    hotMiddleware = require('webpack-hot-middleware'),
    express = require("express"),
    app = express(),
    dev = require("./dev.conf"),
    compiler = webpack(dev.devConfig),
    port = process.env.port || 8000,
    proxy = require('http-proxy-middleware'),
    path = require('path'),
    history = require('connect-history-api-fallback');
console.log(path.resolve(__dirname,"../src/index.html"));
app.use(history());
app.use(webpackDevMiddleware(compiler, {
    publicPath: dev.devConfig.output.publicPath,
    quiet: true
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
