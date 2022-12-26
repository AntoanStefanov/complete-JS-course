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

// set(...), returns the map iself.
restaurant
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open')
  .set(false, 'We are closed');

console.log(restaurant);
console.log([...restaurant]); // [[key:value], [key:value], [key:value], ...]
// map is an iterable, so spread operator works(...)

console.log(restaurant.get('name'));
console.log(restaurant.get(true));

const time = 9;
console.log(
  restaurant.get(
    time > restaurant.get('open') && time < restaurant.get('close'),
  ),
);

console.log(restaurant.has('name'));
console.log(restaurant.delete('setup'));
// restaurant.clear();
console.log(restaurant.size);

// Let's use array(objects) as map keys.
// key as any type, example:
restaurant.set(['Levski', 'Pavlikeni'], 'location');

// That does not work., objects have different memory addresses.
// The two arrays are NOT the same object in the heap.
console.log(restaurant.get(['Levski', 'Pavlikeni']));

// In order to make it work, we need to use the same object.
const cities = ['Levski', 'Pavlikeni'];
restaurant.set(cities, 'location');
console.log(restaurant.get(cities));
// 'cities' refers to the same place in memory heap.

// This could be useful with DOM elements.
// Which are nothing more than just a special type of object.

restaurant.set(document.querySelector('h1'), 'Heading');
console.log(restaurant);
