const convertToCelsius = function(fahrTemp) {
  let cResult = ((fahrTemp - 32)*(5/9));
  return +cResult.toFixed(1);
};

const convertToFahrenheit = function(celcTemp) {
  let fResult = ((celcTemp * (9/5)) + 32);
  return +fResult.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
