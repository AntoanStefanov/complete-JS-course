'use strict';

const calcAverageHumanAge = function (arr) {
  const dogAgesInHumanAges = arr.map((dogAge) =>
    dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4,
  );

  const adultDogs = dogAgesInHumanAges.filter((age) => age >= 18);

  const avgHumanAge = adultDogs.reduce(
    (currentAverage, currentAge, currentIndex, array) =>
      currentAverage + currentAge / array.length,
    0,
  );
  return avgHumanAge;
};
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
