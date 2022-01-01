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

class ConstructorSuper extends null {
    // the real problem here is extending null, but whatever...
    constructor() {
        super()
    }
}

const curly = v => {
    if(v)
        return "this should be a block statement"
    return "this is fine"
}

const dotLocation = window.
    location

const dotNotation = window["location"]

// ignoring eol-last since it would make manipulating this file a pain

const eqeqeq = v => 1 == "1"

const getterReturn = {
    get noReturn() {
        const what = "ever"
    }
}

// ignoring linebreak-style since it would make manipulating this file a pain

const maxLen = 1 + "this is the longest string anyone has ever seen why on Earth would you write a string this long. Never ever do that"

const newCap = () => {
    const uncapitalizedConstructor = () => "should be UncapitalizedConstructor"
    return new uncapitalizedConstructor()
}

const newParens = () => {
    const ConstructorFunc = () => "A constructor with no args"
    return new ConstructorFunc
}

const objectCurlySpacing = {"shouldBe": "spaced better" }

var noVar = "use let or const"

// ignoring unicode-bom since it would make manipulating this file a pain
