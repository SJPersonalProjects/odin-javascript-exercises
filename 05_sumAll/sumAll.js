const sumAll = function(startingPoint, endingPoint) {
    //Terminates the program by returning "ERROR" on any negative point.
    if(startingPoint < 0 || endingPoint < 0) return "ERROR";
    if(!Number.isInteger(startingPoint) || !Number.isInteger(endingPoint)) {
            return "ERROR";
        }
    //If both points are meeting on same number.
    //then return that same number before adding twice.
    let sumOfAll = startingPoint;
    if(startingPoint < endingPoint) {
        //Make it zero to starting summation.
        sumOfAll = 0;
        for(let i = startingPoint; i <= endingPoint; i++) {
            sumOfAll += i;
        }
    } else {
        //Make it zero to start summation.
        sumOfAll = 0;
        for(let i = startingPoint; i >= endingPoint; i--) {
            sumOfAll += i;
        }
    }

    return sumOfAll;
};

console.log(sumAll(3.2, 1));

// Do not edit below this line
module.exports = sumAll;
