const repeatString = function(string, number) {
    let repeat = "";
    if(number < 0) repeat = "ERROR";
    else {
        for(let count = 1; count <= number; count++) {
            repeat = repeat + string;
        }
    }

    return repeat;
};

console.log(repeatString("h", 5));

// Do not edit below this line
module.exports = repeatString;
