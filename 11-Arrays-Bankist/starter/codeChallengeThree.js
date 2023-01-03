'use strict';

const calcAverageHumanAge = function (arr) {
  return arr
    .map((dogAge) => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4))
    .filter((age) => age >= 18)
    .reduce(
      (currentAverage, currentAge, _, array) =>
        currentAverage + currentAge / array.length,
      0,
    );
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
