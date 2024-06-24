const removeFromArray = function (originalArray, ...items) {
    for (let k = 0; k < items.length; k++) {
        originalArray = removeItem(originalArray, items[k])
    }
    return originalArray;
};

function removeItem(originalArray, item) {
    for (let i = 0; i < originalArray.length; i++) {
        if (originalArray[i] == item && typeof (originalArray[i]) === typeof(item)) {
            for (let j = i; j < originalArray.length - 1; j++) {
                originalArray[j] = originalArray[j + 1];
            }
            originalArray.length--;
            i--;
        }
    }
    return originalArray;
};
//console.log(removeFromArray([1, 2, 3, 4], 3));
//console.log(removeFromArray([1, 2, 3, 4, 5], 3, 4));
// Do not edit below this line
module.exports = removeFromArray;
