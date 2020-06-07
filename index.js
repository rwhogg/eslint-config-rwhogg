const err = "error"

module.exports = {
    env: {
        browser: true,
        es6: true,
        node: true,
    },
    parserOptions: {
        ecmaFeatures: {
            globalReturn: true,
        },
        ecmaVersion: 10,
    },
    plugins: ["fp"],
    extends: "eslint:recommended",
    rules: {
        indent: [
            err,
            4,
            {
                "SwitchCase": 1,
            },
        ],
        "linebreak-style": [
            err,
            "unix",
        ],
        quotes: [
            err,
            "double",
        ],
        semi: [
            err,
            "never",
        ],
        "arrow-body-style": [
            err,
            "as-needed",
        ],
        "block-scoped-var": err,
        "block-spacing":[
            err,
            "always",
        ],
        "consistent-return": err,
        curly: err,
        "dot-location": [
            err,
            "property",
        ],
        "dot-notation": err,
        eqeqeq: [
            err,
            "smart",
        ],
        "new-cap": err,
        "new-parens": err,
        "no-console": "off",
        "no-else-return": err,
        "no-eval": err,
        "no-fallthrough": "off",
        "no-iterator": err,
        "no-lone-blocks": err,
        "no-magic-numbers": [
            err,
            {
                ignoreArrayIndexes: true,
                ignore: [0, 1, 2, 3, 4, 5, 8, 10, 16, -1],
            },
        ],
        "no-mixed-spaces-and-tabs": err,
        "no-multi-spaces": err,
        "no-new-wrappers": err,
        "no-return-assign": [
            err,
            "always",
        ],
        "no-self-compare": err,
        "no-sequences": err,
        "no-useless-escape": err,
        "no-useless-return": err,
        "no-with": err,
        yoda: err,
        "no-undefined": err,
        "no-underscore-dangle": [
            err,
            {enforceInMethodNames: true},
        ],
        "comma-dangle": [
            err,
            "always-multiline",
        ],
        "comma-spacing": err,
        "comma-style": err,
        "array-bracket-newline": [
            err,
            {multiline: true},
        ],
        "array-element-newline": [
            err,
            {ArrayExpression: "consistent"},
        ],
        "array-bracket-spacing": [
            err,
            "never",
        ],
        camelcase: [
            err,
            {properties: "never"},
        ],
        "fp/no-loops": err,
        "fp/no-arguments": err,
        "valid-jsdoc": err,
        "eol-last": [
            err,
            "always",
        ],
        "func-call-spacing": [
            err,
            "never",
        ],
        "brace-style": [
            err,
            "stroustrup",
        ],
        "computed-property-spacing": err,
        "no-lonely-if": err,
        "no-trailing-spaces": err,
        "unicode-bom": [
            err,
            "never",
        ],
        "no-var": err,
        "for-direction": err,
        "no-compare-neg-zero": err,
        "no-constant-condition": err,
        "no-dupe-args": err,
        "no-dupe-keys": err,
        "no-empty": err,
        "no-extra-semi": err,
        "no-unexpected-multiline" :err,
        "no-unreachable": err,
        "no-unsafe-finally": err,
        "require-atomic-updates": err,
        "valid-typeof": err,
        "no-extra-bind": err,
        "no-proto": err,
        "no-return-await": err,
        "no-useless-call": err,
        "jsx-quotes": [err, "prefer-double"], // FIXME: should be moved to React-specific ruleset
        "max-len": [err, {"code": 120}],
        "no-tabs": err,
        "no-this-before-super": err,
        "prefer-exponentiation-operator": err,
    },
}
