const webpackDevMiddleware = require('webpack-dev-middleware'),
    webpack = require('webpack'),
    hotMiddleware = require('webpack-hot-middleware'),
    express = require("express"),
    app = express(),
    config = require("./webpack.dev.conf"),
    path = require("path"),
    compiler = webpack(config),
    port = process.env.port || 8000;

app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, "../dist"),
    hot: true
}));
app.use(hotMiddleware(compiler));
app.listen(port, function () {
    console.log(`app listening on port ${port}!\n`);
});
