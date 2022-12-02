'use strict';

// stand-alone (generic) function -> this could be used for everything(money, height, width),
// not only scores. so we used a, b, c.
// It just calculates the average of 3 numbers, which nums can be anything, no only scores.!
const calcAverage = (a, b, c) => (a + b + c) / 3;

// const -> let, because down below, we need/want to reassign the values.
let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins.');
  }
  // ignore draw.
};

checkWinner(avgDolphins, avgKoalas);

// checkWinner is a stand-alone function, it can be called with any number values,
// the function doesn't care about where the numbers came from.
// We can insert random numbers.
// checkWinner(122, 200);
// The FUNCTIONS ARE ALL INDEPENDENT FROM ANOTHER.

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);
checkWinner(avgDolphins, avgKoalas);
