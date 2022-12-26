'use strict';

const question = new Map([
  ['question', 'What is the best programming language?'],
  [1, 'C'], // option 1
  [2, 'Java'], // option 2
  [3, 'JavaScript'], // option 3
  ['correct', 3], // correct answer
  [true, 'Correct!'], // when user is correct
  [false, 'Try Again!'], // when user is wrong
]);

console.log(question);

// Easy way of converting object to map. with
// Object.entries(obj) return [[key, value], [key, value], ...]
// same as the above way of creating a map.

const openingHours = {
  thu: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
// Object to map conversion. Read above comments.
const openingHoursMap = new Map(Object.entries(openingHours));
console.log(openingHoursMap);

// Map Iteration.
// Iteration is possible on maps, bcs it has 'Symbol.iterator', it's iterable.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol/iterator

// Question task.
// destructuring arr.
// map is an iterable.
console.log(question.get('question'));
for (const [key, value] of question) {
  // if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);

  typeof key === 'number' && console.log(`Answer ${key}: ${value}`);
}

const userAnswer = Number(prompt('Answer is: '));

console.log(question.get(userAnswer === 1));
