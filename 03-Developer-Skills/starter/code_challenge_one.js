'use strict';

const printForecast = function (arr) {
  let forecastString = '... ';

  for (let i = 0; i < arr.length; i++) {
    forecastString += `${arr[i]}°C in ${i + 1} days ... `;
  }

  return forecastString;
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
