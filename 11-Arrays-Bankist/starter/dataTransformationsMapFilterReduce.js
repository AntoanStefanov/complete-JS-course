'use strict';

// 3 important methods we use all the time for data transformations.

// These are methods that we use to create new arrays based on transforming data
// from other arrays.

// They are everywhere you look!

// MAP | FiLTER | REDUCE

// Map:
// method that we can use to loop over arrays.
// similar to forEach method, difference is that
// map method creates a new array based on the original array.
// Map method: takes an array, loops over it
// and in each iteration it applies a callback function to the current item.

const mapArr = [1, 2, 3].map((el) => el * 2); // NEW ARRAY!

// We say that the method maps the values of the original array to a new array.
// that's why the method is called map. EXTREMELY USEFUL.

console.log(mapArr);

// Filter:
// Used to filter elements in the original array, which satisfy a condition.

const filterArr = [1, 2, 3].filter((el) => el > 2); // NEW FILTERED ARRAY!
console.log(filterArr);

// Reduce:
// We use that method to boil down all the elements in the original array into
// ONE SINGLE VALUE.

const reducedItem = [1, 2, 3].reduce((acc, cur) => acc + cur);
console.log(reducedItem);
