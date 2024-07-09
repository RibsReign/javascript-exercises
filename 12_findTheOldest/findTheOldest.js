const findTheOldest = function (people) {
    let oldestName = {};
    currentYear = 2024;
    people.reduce((previous, current) => {
        if (current.yearOfBirth === undefined) {
            return previous;
        }
        else if (current.yearOfDeath === undefined) {
            // if (Date().getFullYear() - current.yearOfBirth)
            //console.log(currentYear - current.yearOfBirth + ' ' + previous);
            if ((currentYear - current.yearOfBirth) > previous) {
                previous = currentYear - current.yearOfBirth;
                oldestName = current;
                return previous;
            }
        }
        if ((current.yearOfDeath - current.yearOfBirth) > previous) {
            //console.log(current.yearOfDeath - current.yearOfBirth + ' ' + previous);
            previous = current.yearOfDeath - current.yearOfBirth;
            oldestName = current;
            return previous;
        }
    }, 0);
    return oldestName;
};
const people = [
    {
        name: "Carly",
        yearOfBirth: 2018,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
];
console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
