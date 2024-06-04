const convertToCelsius = function(fahrTemp) {
  let result = ((fahrTemp - 32)*(5/9));
  return +result.toFixed(1);
};

const convertToFahrenheit = function(celcTemp) {
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
