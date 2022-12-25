'use strict';

// 117. Maps: Fundamentals

/**
 *
 * @param {array} A
 * @return {number} odd number
 */
function findOdd(A) {
  const counter = {};
  for (const number of A) {
    counter[number] ?? (counter[number] = 0);
    counter[number]++;
  }

  for (const [givenNumber, occurances] of Object.entries(counter)) {
    if (occurances % 2 !== 0) return Number(givenNumber);
  }
}

findOdd([7]); // 7
findOdd([0]); // 0
findOdd([1, 1, 2]); // 2
findOdd([0, 1, 0, 1, 0]); // 0
findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]); // 4

/**
 * sort the odd numbers in ascending order,
 * while leaving the even numbers at their original positions.
 * @param {array} array
 * @return {array} sorted array
 */
function sortArray(array) {
  const oddNums = array.filter((x) => x % 2 != 0);
  oddNums.sort((a, b) => a - b);
  const sortedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      sortedArray.push(oddNums.shift());
    } else {
      sortedArray.push(array[i]);
    }
  }
  return sortedArray;
}

console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0])); // [1, 3, 5, 8, 0]
console.log(sortArray([])); // []
console.log(sortArray([1, 11, 2, 8, 3, 4, 5])); // [ 1, 3, 2, 8, 5, 4, 11 ]
