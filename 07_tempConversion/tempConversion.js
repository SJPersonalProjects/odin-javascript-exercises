//converts from fahrenheit to celsius.
const convertToCelsius = function(fahrenheit) {
  const roundedNumber = (fahrenheit - 32) * 5/9;
  return parseFloat(roundedNumber.toFixed(1));
};

//converts from celsius to fahrenheit.
const convertToFahrenheit = function(celsius) {
  const roundedNumber = (celsius * 9/5) + 32;
  return parseFloat(roundedNumber.toFixed(1));
};

console.log(convertToCelsius(100));
console.log(convertToFahrenheit(0));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
