// Remember, we're gonna use strict mode in all scripts now!
'use strict';

/*

// 59. Using Google, StackOverflow and MDN.

// Given an array of temperatures of one day, calculate the temp amplitude.
// Keep in mind that sometimes there might be a sensor error.

// 1. Understand the problem.
// 2. Breaking up into sub-problems.

// 1.1. How to calculate the temperature amplitude ?
// 1.2. What values are valid for the temperature amplitude to be calculated ?

// 2.1. Iterate over the temperatures / array /.
// 2.2. Check if the temperature is actually a number,
// throw error, if is anything else.
// 2.3. If temperature is valid, calculate the temperature amplitude (somehow).

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temperatures) {
  let maxTemp = Number.MIN_SAFE_INTEGER;
  let minTemp = Number.MAX_SAFE_INTEGER;
  //  let maxTemp = temperatures[0];
  //  let minTemp = temperatures[0];
  //  what if i[0] is an 'error' ? -> NaN, bug in our code.
  for (let i = 0; i < temperatures.length; i++) {
    const currentTemp = temperatures[i];

    if (typeof currentTemp !== 'number') continue;

    if (currentTemp < minTemp) minTemp = currentTemp;

    if (currentTemp > maxTemp) maxTemp = currentTemp;
  }
  //   console.log(maxTemp, minTemp);
  return maxTemp - minTemp;
};

const calcTempAmplitudes = function (arrays) {
  const tempAmplitudes = [];

  for (let i = 0; i < arrays.length; i++) {
    tempAmplitudes.push(calcTempAmplitude(arrays[i]));
  }

  return tempAmplitudes;
};

const tempAmplitudes = calcTempAmplitudes([
  [10, 12],
  [-20, -21],
]);

console.log(tempAmplitudes);
console.log(calcTempAmplitude(tempAmplitudes));

const tempAmplitude = calcTempAmplitude(temperatures);

console.log(tempAmplitude);
console.log(calcTempAmplitude([10, 12]));
console.log(calcTempAmplitude([2, 1]));
console.log(calcTempAmplitude([0, -6]));
console.log(calcTempAmplitude([-1, -6]));
console.log(calcTempAmplitude([1, -6]));
console.log(calcTempAmplitude([-20, -21]));
// console.log(calcTempAmplitude(['error', -20, -21])); ->
// that's why I didn't use  'max = arr[0]'.

// Now, the proj manager says "The function should recieve 2 arrays of temps.
// The rest of the function should work just the same."

*/

// 61. Debugging with the console and breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius: ')),
  };

  console.table(measurement);

  const kelvin = measurement.value + 273.15;
  return kelvin;
};

console.log(measureKelvin());
