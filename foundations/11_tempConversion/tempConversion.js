const convertToCelsius = function (fahrenheit) {
  return roundUpOneDecimal((5 / 9) * (fahrenheit - 32));
};

const convertToFahrenheit = function (celsius) {
  return roundUpOneDecimal((9 / 5) * celsius + 32);
};

const roundUpOneDecimal = (number) => {
  return Math.round(number * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
