module.exports =
{
    env:
    {
        amd: true,
        browser: true,
        es6: true,
        node: true
    },
    parserOptions:
    {
        ecmaFeatures:
        {
            globalReturn: true
        },
        ecmaVersion: 2017
    },
    extends: "eslint:recommended",
    rules:
    {
        indent:
        [
            "error",
            4
        ],
        "linebreak-style":
        [
            "error",
            "unix"
        ],
        quotes:
        [
            "error",
            "double"
        ],
        semi:
        [
            "error",
            "always"
        ],
        "block-scoped-var": "error",
        "consistent-return": "error",
        curly: "error",
        "dot-location":
        [
            "error",
            "property"
        ],
        "dot-notation": "error",
        eqeqeq:
        [
            "error",
            "smart"
        ],
        "no-console": "off",
        "no-else-return": "error",
        "no-eval": "error",
        "no-fallthrough": "off",
        "no-iterator": "error",
        "no-lone-blocks": "error",
        "no-magic-numbers":
        [
            "error",
            {
                ignoreArrayIndexes: true,
                ignore: [0, 1, 2, 4, 5, 10]
            }
        ],
        "no-multi-spaces": "error",
        "no-new-wrappers": "error",
        "no-proto": "error",
        "no-return-assign":
        [
            "error",
            "always"
        ],
        "no-self-compare": "error",
        "no-sequences": "error",
        "no-useless-escape": "error",
        "no-useless-return": "error",
        "no-with": "error",
        yoda: "error",
        "no-undefined": "error",
        // FIXME: have not added many options from http://eslint.org/docs/rules/#stylistic-issues
        "brace-style":
        [
            "error",
            "allman"
        ],
        "comma-dangle":
        [
            "error",
            // this is technically the default
            // however, it's better to be explicit
            "never"
        ]
    }
};
