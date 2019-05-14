const webpackDevMiddleware = require('webpack-dev-middleware'),
    webpack = require('webpack'),
    hotMiddleware = require('webpack-hot-middleware'),
    express = require("express"),
    app = express(),
    dev = require("./dev.conf"),
    compiler = webpack(dev.devConfig),
    proxy = require('http-proxy-middleware'),
    history = require('connect-history-api-fallback'),
    portfinder = require('portfinder'),
    log = require('webpack-log')({name: "app", timestamp: true}),
    open = require('open'),
    instance = webpackDevMiddleware(compiler, {
        publicPath: dev.devConfig.output.publicPath,
        index: "index.html",
        logLevel: "error"
    });

portfinder.getPort(function (err, port) {
    app.use(history());
    app.use(instance);
    app.use(hotMiddleware(compiler));
    if (dev.proxyConfig) {
        for (let key in dev.proxyConfig) {
            if (dev.proxyConfig.hasOwnProperty(key)) {
                app.use(key, proxy(dev.proxyConfig[key]));
            }
        }
    }
    instance.waitUntilValid(async () => {
        log.info(`open your app at http://localhost:${port}`);
        await open (`http://localhost:${port}`);
    });
    app.listen(port);
});
