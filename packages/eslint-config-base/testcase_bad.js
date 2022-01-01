// this file is the testcase
// It's NOT supposed to pass the linter
// Note, the filename itself should handle unicorn/filename-case

const accessorPairs = {
    set ap(pair) {
        this.pair = pair
    },
}

const arrayBracketNewline = ["should be single line",
]

const arrayBracketSpacing = [ "should not have spaces"]

// can't figure out array-element-newline

const arrowBodyStyle = () => {
    return "no-braces-here"
}

// can't figure out block-spacing

const braceStyle = v => {
    if(v) {
        return "this is fine"
    } else if(v + 1) {
        return "else if should be on next line"
    }
    return "this is also fine"
}

const camel_case = {
    tooSnaky: "should be camelCase",
}

const commaDangle = [
    "this is fine",
    "this is missing a comma at the end"
]

const commaSpacing = [
    "this is fine",
    "this is not" ,
]

const commaStyle = [
    "this is fine"
    , "NEVER EVER EVER do comma-first style!!!!",
]

const computedPropertySpacing = { ["a" + "b" ]: "remove the space" }

const consistentReturn = v => {
    if(v) {
        return "this is fine"
    }
    else if(v + 1) {
        const problem = "no return value here"
        return
    }
    return "this is also fine"
}

const objectCurlySpacing = {"shouldBe": "spaced better" }

var noVar = "use let or const"

// ignoring unicode-bom since it would make manipulating this file a pain
