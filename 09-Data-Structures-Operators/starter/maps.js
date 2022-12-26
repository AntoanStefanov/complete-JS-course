'use strict';

// /**
//  *
//  * @param {array} A
//  * @return {number} odd number
//  */
// function findOdd(A) {
//   const counter = {};
//   for (const number of A) {
//     counter[number] ?? (counter[number] = 0);
//     counter[number]++;
//   }

//   for (const [givenNumber, occurances] of Object.entries(counter)) {
//     if (occurances % 2 !== 0) return Number(givenNumber);
//   }
// }

// findOdd([7]); // 7
// findOdd([0]); // 0
// findOdd([1, 1, 2]); // 2
// findOdd([0, 1, 0, 1, 0]); // 0
// findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]); // 4

// /**
//  * sort the odd numbers in ascending order,
//  * while leaving the even numbers at their original positions.
//  * @param {array} array
//  * @return {array} sorted array
//  */
// function sortArray(array) {
//   const oddNums = array.filter((x) => x % 2 != 0);
//   oddNums.sort((a, b) => a - b);
//   const sortedArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 !== 0) {
//       sortedArray.push(oddNums.shift());
//     } else {
//       sortedArray.push(array[i]);
//     }
//   }
//   return sortedArray;
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
// console.log(sortArray([5, 3, 1, 8, 0])); // [1, 3, 5, 8, 0]
// console.log(sortArray([])); // []
// console.log(sortArray([1, 11, 2, 8, 3, 4, 5])); // [ 1, 3, 2, 8, 5, 4, 11 ]

// 117. Maps: Fundamentals (data structure)

// More useful than Sets.

// What exactly is a map ?
// Data structure for mapping values to keys. Looks kinda like object.

// Big difference between map and object,
// - map's keys can have any type. HUGE!

// In Objects, the keys are basically always strings.
// In Maps, the keys can be any type. Even objects, arrays, or other maps.

const restaurant = new Map(); // Map constructor // empty map

// add item to map.
restaurant.set('name', 'Perfecto');
restaurant.set('setup', 'Outdoor/Indoor');
// key as any type, example:
const returnedValueFromSet = restaurant.set(
  ['Levski', 'Pavlikeni'],
  'location',
);
console.log(returnedValueFromSet); // the map itself.

// set(...), returns the map iself.
restaurant
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23);

console.log(restaurant);
console.log([...restaurant]); // [[key:value], [key:value], [key:value], ...]
// map is an iterable, so spread operator works(...)
