const sumAll = function (smaller, bigger) {
    if (isNaN(smaller) || isNaN(bigger) || smaller < 0 || bigger < 0 || typeof (smaller) != typeof (1) || typeof (bigger) != typeof (1)) {
        return "ERROR"
    }
    if (smaller > bigger) {
        let temp = smaller;
        smaller = bigger;
        bigger = temp;
    }
    let sum = smaller;
    for (let i = smaller; i < bigger; i++) {
        sum += smaller + i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
