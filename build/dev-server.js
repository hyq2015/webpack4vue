const webpackDevServer = require('webpack-dev-server'),
    webpack = require('webpack'),
    baseConfig = require("./webpack.base.conf"),
    path = require("path"),
    merge = require("webpack-merge"),
    options = {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname, "../dist"),
        hot: true,
    },
    devConfig = merge(baseConfig, {
        devtool: "source-map",
        mode: "development"
    }),
    port = process.env.port || 8000;

webpackDevServer.addDevServerEntrypoints(devConfig, options);
const compiler = webpack(devConfig);
const server = new webpackDevServer(compiler, options);

server.listen(port, 'localhost', () => {
    console.log(`dev server listening on port ${port}`);
});
