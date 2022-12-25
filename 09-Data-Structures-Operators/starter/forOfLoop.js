'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for-of loop | break&continue enabled.
for (const dish of fullMenu) console.log(dish);

// What if we need the current index, not only the current item?
// A bit of a pain with for-of loop.

// destructuring the array which entries() returns.
for (const [dishIndex, dish] of fullMenu.entries()) {
  console.log(`${dishIndex + 1}. ${dish}`);
}

// console.log(fullMenu.entries()); // Array Iterator {}
// console.log([...fullMenu.entries()]); // [Array[2], Array[2], Array[2], ...]
