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
    "parser": "babel-eslint",
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
        // FIXME: add no-invalid-remove-event-listener
    },
}
