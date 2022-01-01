#!/usr/bin/env zsh

eslint -c index.js index.js
if [ $? -ne 0 ]; then
    echo "Base eslint check failed"
    exit 1
fi

# FIXME fix this
#./node_modules/.bin/eslint -c ./index.js -f json ./testcase_bad.js | gojq
