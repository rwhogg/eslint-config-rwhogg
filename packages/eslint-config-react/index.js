const err = "error"

module.exports = {
    env: {
        browser: true,
        es6: true,
        jest: true,
    },
    extends: [
        "@rwhogg/eslint-config-base",
        "plugin:react/recommended",
    ],
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true,
        },
    },
    "settings": {
        "react": {
            "version": "detect",
        },
    },
    "rules": {
        "consistent-return": 0,
        "jsx-quotes": [err, "prefer-double"],
        "react/button-has-type": err,
        "react/default-props-match-prop-types": err,
        "react/hook-use-state": err,
        "react/no-array-index-key": err,
        "react/no-danger": err,
        "unicorn/no-invalid-remove-event-listener": err,
    },
}
