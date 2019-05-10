const presets = [
    [
        "@babel/preset-env",
        {
            targets: {
                edge: "17",
                firefox: "60",
                chrome: "67",
                safari: "11.1",
                ie: "9"
            },
            corejs: 3,
            useBuiltIns: "entry"
        },
    ]
];
const plugins = [
    [
        "@babel/plugin-transform-runtime",
        {
            "absoluteRuntime": false,
            "corejs": 3,
            "helpers": true,
            "regenerator": true,
            "useESModules": true
        }
    ],
    ["@babel/plugin-syntax-dynamic-import"]
];
module.exports = { presets, plugins };
