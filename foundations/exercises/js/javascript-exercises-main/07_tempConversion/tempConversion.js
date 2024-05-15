const convertToCelsius = function(temperature) {
  let celsius = (temperature - 32) * 5 / 9;
  let intPart = Math.floor(celsius);
  let roundedDecimal = Math.round((celsius - intPart) * 10) / 10;
  celsius = intPart + roundedDecimal;
  return celsius;
};

const convertToFahrenheit = function(temperature) {
  let fahrenheit = (temperature * 9 / 5 + 32);
  let intPart = Math.floor(fahrenheit);
  let roundedDecimal = Math.round((fahrenheit - intPart) * 10) / 10;
  fahrenheit = intPart + roundedDecimal;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
