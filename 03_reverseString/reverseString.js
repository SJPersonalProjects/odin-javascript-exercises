const reverseString = function(string) {
    let text = "";
    for(let i = string.length - 1; i >= 0; i--) {
        text = text + string.charAt(i);
    }

    return text;
};

console.log(reverseString("string"));

// Do not edit below this line
module.exports = reverseString;
