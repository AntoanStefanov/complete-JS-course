'use strict';

// We learned about the forEach method on arrays,
// however, forEach is also available on maps and sets.

// Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// console.log(currencies);

// currencies.forEach((value) => console.log(value));

// currencies.forEach((value, key) =>
//   console.log(`Value: ${value} | Key: ${key}`),
// );

// currencies.forEach((value, key, map) => {
//   console.log(`Value: ${value} | Key: ${key} | Map: ${map}`);
// });

// Set
const currenciesUnique = new Set(['USD', 'EUR', 'GBP', 'EUR', 'GBP', 'EUR']);
console.log(currenciesUnique);

// Value is EXACTLY the SAME as the key. BECAUSE
// A set does NOT have keys.
// A set does NOT have indexes too.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/forEach
// We can use '_' instead of 'key' as variable,
// bcs '_' means a throwaway variable(unnecessary variable).
// (value, _, set) => {...}
currenciesUnique.forEach((value, key, set) => {
  console.log(`Value: ${value} | Key: ${key} | Map: ${set}`);
});
