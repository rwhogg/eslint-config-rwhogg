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
            "error",
            4,
            {
                "SwitchCase": 1,
            },
        ],
        "linebreak-style": [
            "error",
            "unix",
        ],
        quotes: [
            "error",
            "double",
        ],
        semi: [
            "error",
            "never",
        ],
        "block-scoped-var": "error",
        "consistent-return": "error",
        curly: "error",
        "dot-location": [
            "error",
            "property",
        ],
        "dot-notation": "error",
        eqeqeq: [
            "error",
            "smart",
        ],
        "no-console": "off",
        "no-else-return": "error",
        "no-eval": "error",
        "no-fallthrough": "off",
        "no-iterator": "error",
        "no-lone-blocks": "error",
        "no-magic-numbers": [
            "error",
            {
                ignoreArrayIndexes: true,
                ignore: [0, 1, 2, 3, 4, 5, 8, 10, 16, -1],
            },
        ],
        "no-multi-spaces": "error",
        "no-new-wrappers": "error",
        "no-return-assign": [
            "error",
            "always",
        ],
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-with": "error",
        yoda: "error",
        "no-undefined": "error",
        // FIXME: have not added many options from http://eslint.org/docs/rules/#stylistic-issues
        "comma-dangle": [
            "error",
            "always-multiline",
        ],
        "array-bracket-newline": [
            "error",
            {multiline: true},
        ],
        "array-bracket-spacing": [
            "error",
            "never",
        ],
        camelcase: [
            "error",
            {properties: "never"},
        ],
        "fp/no-loops": "error",
        "fp/no-arguments": "error",
        "valid-jsdoc": "error",
        "eol-last": [
            "error",
            "always",
        ],
        "func-call-spacing": [
            "error",
            "never",
        ],
        /*"brace-style": [
            "error",
            "stroustrup",
        ],*/ // disable until better options available
        "no-lonely-if": "error",
        "no-trailing-spaces": "error",
        "unicode-bom": [
            "error",
            "never",
        ],
        "no-var": "error",
        "for-direction": "error",
        "no-compare-neg-zero": "error",
        "no-constant-condition": "error",
        "no-dupe-args": "error",
        "no-dupe-keys": "error",
        "no-empty": "error",
        "no-extra-semi": "error",
        "no-unexpected-multiline" :"error",
        "no-unreachable": "error",
        "no-unsafe-finally": "error",
        "require-atomic-updates": "error",
        "valid-typeof": "error",
        "no-extra-bind": "error",
        "no-proto": "error",
        "no-return-await": "error",
        "no-useless-call": "error",
        "jsx-quotes": ["error", "prefer-double"],
        "max-len": ["error", {"code": 120}],
        "no-tabs": "error",
        "no-this-before-super": "error",
    },
}
