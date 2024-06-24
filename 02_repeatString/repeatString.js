const repeatString = function (input, attempts) {
    let inputMirror = input;
    if (attempts === 0) return ""
    if (attempts <= 0) return "ERROR"
    for (let index = 2; index <= attempts; index++) {
        input = input + inputMirror;
    }
    return input;
};

// Do not edit below this line
module.exports = repeatString;
