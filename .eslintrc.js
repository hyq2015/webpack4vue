let dftCfg, cfg, rules;

dftCfg = require("fe-code-lint/src/eslint/.eslintrc");
rules = dftCfg.rules;
rules["vue/html-indent"] = [
    "error", 4
];
rules["vue/script-indent"] = [
    "error", 4, {
        baseIndent: 1
    }
];
cfg = Object.assign({}, dftCfg, {
    root: true,
    // required to lint *.vue files
    plugins: [
        "vue"
    ],
    extends: [
        "eslint:recommended",
        "plugin:vue/recommended"
    ],
    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module",
        ecmaFeatures: {
            "jsx": true
        },
        ecmaVersion: 2017
    },
    rules: rules,
    overrides: [
        {
            files: ["*.vue"],
            rules: {
                "indent": "off"
            }
        }
    ]
});
// allow debugger during development
cfg.rules["no-debugger"] = process.env.NODE_ENV === "production" ? 2 : 0;
module.exports = cfg;
