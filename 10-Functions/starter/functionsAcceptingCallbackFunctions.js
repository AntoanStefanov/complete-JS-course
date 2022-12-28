'use strict';

const oneWord = function (string) {
  return string.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (string) {
  const [firstWord, ...restWords] = string.split(' ');
  return [firstWord.toUpperCase(), ...restWords].join(' ');
};

console.log(oneWord('a stiga be brat'));
console.log(upperFirstWord('a stiga be brat'));

// function that accepts other functions as an arg.
//  Higher-Order Function.
const transformer = function (str, fn) {
  console.log(`Transformed by ${fn.name}`);
  console.log(fn(str));
};

transformer('a stiga be brat', oneWord);
transformer('a stiga be brat', upperFirstWord);
// Here 'oneWord' and 'upperFirstWord' functions are called 'callback functions'
// callback function, bcs I dont call it myself,
// but instead we pass it, to be called later, in this case we call them in l:18
