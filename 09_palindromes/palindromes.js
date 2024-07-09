const palindromes = function (palindrome) {
    //console.log(`${palindrome.length}`);
    palindrome = palindrome.toLowerCase();
    //console.log(palindrome);
    let mirror = palindrome.length - 1;
    if (palindrome[mirror] == '!' || palindrome[mirror] == '?' || palindrome[mirror] == '.') {
        palindrome = palindrome.slice(0, palindrome.length - 1);
        //console.log(palindrome);
        mirror = palindrome.length - 1;
    }
    let halfLength = Math.floor(palindrome.length / 2);
    for (let i = 0; i < (halfLength); i++) {
        //console.log('B> Start:' + palindrome[i] + ' End:' + palindrome[mirror]);
        while (palindrome[mirror] == ' ' || palindrome[mirror] == ',') {
            mirror--;
        }
        while (palindrome[i] == ' ' || palindrome[i] == ',') {
            i++;
        }
        //console.log('A> Start:' + palindrome[i] + ' End:' + palindrome[mirror]);
        if (!(palindrome[i] == palindrome[mirror])) {
            //console.log(`${palindrome[i] + ' ' + palindrome[mirror--]}`)
            return false;
        }
        mirror--;
    }
    return true;
};

console.log(palindromes("A car, a man, a maraca."));
// Do not edit below this line
module.exports = palindromes;
