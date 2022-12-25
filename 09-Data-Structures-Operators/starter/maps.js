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
