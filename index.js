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
    plugins: ["fp", "sonarjs"],
    // FIXME: you should stop doing this and inline all the rules so you always know what you're doing
    extends: "eslint:recommended",
    rules: {
        "array-bracket-newline": [
            err,
            { multiline: true },
        ],
        "array-element-newline": [
            err,
            { ArrayExpression: "consistent" },
        ],
        "array-bracket-spacing": [
            err,
            "never",
        ],
        "arrow-body-style": [
            err,
            "as-needed",
        ],
        camelcase: [
            err,
            { properties: "never" },
        ],
        "block-scoped-var": err,
        "block-spacing":[
            err,
            "always",
        ],
        "brace-style": [
            err,
            "stroustrup",
        ],
        "comma-dangle": [
            err,
            "always-multiline",
        ],
        "comma-spacing": err,
        "comma-style": err,
        "computed-property-spacing": err,
        "consistent-return": err,
        curly: err,
        "dot-location": [
            err,
            "property",
        ],
        "dot-notation": err,
        "eol-last": [
            err,
            "always",
        ],
        eqeqeq: [
            err,
            "smart",
        ],
        "for-direction": err,
        "func-call-spacing": [
            err,
            "never",
        ],
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
        "max-len": [err, { "code": 120 }],
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
        "no-undefined": err,
        "no-underscore-dangle": [
            err,
            { enforceInMethodNames: true },
        ],
        "no-lonely-if": err,
        "no-trailing-spaces": err,
        "no-var": err,
        "no-with": err,
        "no-compare-neg-zero": err,
        "no-constant-condition": err,
        "no-dupe-args": err,
        "no-dupe-keys": err,
        "no-empty": err,
        "no-extra-semi": err,
        "no-unexpected-multiline" :err,
        "no-unreachable": err,
        "no-unsafe-finally": err,
        "no-extra-bind": err,
        "no-proto": err,
        "no-return-await": err,
        "no-useless-call": err,
        "no-tabs": err,
        "no-this-before-super": err,
        "object-curly-spacing": ["error", "always"],
        "padded-blocks": [err, "never"],
        "prefer-exponentiation-operator": err,
        quotes: [
            err,
            "double",
        ],
        "require-atomic-updates": err,
        semi: [
            err,
            "never",
        ],
        "unicode-bom": [
            err,
            "never",
        ],
        "valid-jsdoc": err,
        "valid-typeof": err,
        yoda: err,
        "fp/no-loops": err,
        "fp/no-arguments": err,
        "sonarjs/no-all-duplicated-branches": "error",
        "sonarjs/no-extra-arguments": "error",
        "sonarjs/no-one-iteration-loop": "error",
        "sonarjs/no-redundant-boolean": "error",
        "jsx-quotes": [err, "prefer-double"], // FIXME: should be moved to React-specific ruleset
    },
}
