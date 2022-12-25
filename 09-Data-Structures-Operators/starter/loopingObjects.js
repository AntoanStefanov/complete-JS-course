'use strict';

// for of loop, looping over arrays, which is iterable,
// but we can also loop through objects, which are no iterables, but in
// an indirect way.

// Do we want to loop through object property names, through the values or
// both together?

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

// console.log(Object.values(restaurant));

// Loop over property names.
for (const property of Object.keys(restaurant)) {
  console.log(property);
}

// Loop over property values.
for (const value of Object.values(restaurant)) {
  console.log(value);
}

// Loop over property names & property values.
for (const propertyArr of Object.entries(restaurant)) {
  console.log('prop arr ', propertyArr);
}

for (const [key, value] of Object.entries(restaurant)) {
  console.log(key, value);
}

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

// key, value -> Object.entries
for (const [day, {open: openHour, close: closeHour}] of Object.entries(
  openingHours,
)) {
  console.log(`On ${day}, we open at ${openHour} and close at ${closeHour}`);
}
