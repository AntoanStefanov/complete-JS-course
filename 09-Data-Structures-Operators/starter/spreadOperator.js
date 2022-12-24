'use strict';

const arr = [7, 8, 9];
console.log(arr);

// let's create a new array based on this array,
// but with some new items at the beginning.

const newArr = [5, 6, ...arr];
console.log(newArr);
console.log(...newArr);

const restaurant = {
  restaurantName: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
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
  },

  order: function (startMenuIndex, mainMenuIndex) {
    return [this.starterMenu[startMenuIndex], this.mainMenu[mainMenuIndex]];
  },

  //             destructuring object, right away. We got 4 variable names.
  orderDelivery: function ({
    mainIndex = 0,
    starterIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(time, address, mainIndex, starterIndex);
    console.log(`Order recieved! ${this.starterMenu[starterIndex]} & \
${this.mainMenu[mainIndex]} will be delivered to "${address}" at ${time}`);
  },

  orderPasta: function (ingredient, taste, boxForHome) {
    console.log(
      `You order pasta with ${ingredient} which taste is ${taste}.\
Box for Home: ${boxForHome ? 'yes' : 'no'}. Restaurant: ${this.restaurantName}`,
    );
  },
};

restaurant.mainMenu = [...restaurant.mainMenu, 'Steak'];
console.log(restaurant.mainMenu);

// Two important use cases of ... spread operator,

// 1. Creating shallow copy of arrays.
// 2. Merge two arrays together.

// 1.
const copyOfMainMenu = [...restaurant.mainMenu];
copyOfMainMenu.push('Lazagna');

console.log(restaurant.mainMenu);
console.log(copyOfMainMenu);

// 2.
const allMenuItems = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(allMenuItems);

// Spread Operator works on all so-called iterables.
// Iterables are things like arrays, strings, maps, sets, but NOT objects.

// Iterable objects are objects that can be iterated over with for..of.
// Technically, iterables must implement the Symbol.iterator method.
// Debug to see IT, the Symbol.iterator method.!

const str = 'Antoan';
const lettersArray = [...str];
console.log(lettersArray);

// Multiple values seperated by a comma, are usually only expected,
// when we pass arguments into a function or when we build a new array.
// that's what spread operator do (unpacking into multiple values).
const orderPastaArguments = ['tomato', 'delicious', true];
restaurant.orderPasta(...orderPastaArguments);

// Since ES2018, spread operator also works on objects.
// Even though, objects are not iterables.

// Objects: Shallow copy.
const newRestaurant = {founder: 'Antoan', ...restaurant, parking: 'no'};
console.log(newRestaurant);

newRestaurant.openingHours.fri.open = 10;
console.log('newRestaurant friday open ' + newRestaurant.openingHours.fri.open);
console.log('restaurant friday open ' + restaurant.openingHours.fri.open);

// Shallow copy of objects
const restaurantCopy = {...restaurant};
console.log(restaurantCopy);
