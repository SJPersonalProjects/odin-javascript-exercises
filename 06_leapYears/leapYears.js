const leapYears = function(leapYear) {
    if(leapYear % 4 == 0) {
        if(leapYear % 100 != 0 || leapYear % 400 == 0) {
            return true;
        }
    }

    return false;
};

console.log(leapYears(2000));
console.log(leapYears(1985));
console.log(leapYears(1996)); // true;
console.log(leapYears(1997));

// Do not edit below this line
module.exports = leapYears;
