const fibonacci = function (count) {
    if (count == 0)
        return 0;
    else if (count == 1)
        return 1;
    else if (count == 2)
        return 1;
    else if (count < 1)
        return "OOPS";
    let fNMinus1 = 1;
    let fNMinus2 = 0;
    let temp = 0;
    let f = 0;
    for (let i = 1; i <= count - 1; i++) {
        f = fNMinus1 + fNMinus2;
        temp = fNMinus1;
        fNMinus2 = fNMinus1;
        fNMinus1 = f;
        console.log(f);
    }
    return f;
};

fibonacci(10);
// Do not edit below this line
module.exports = fibonacci;
