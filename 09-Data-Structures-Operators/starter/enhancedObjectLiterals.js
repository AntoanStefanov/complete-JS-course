'use strict';

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Third enhancement to object literals(number 3.).
// we can now actually compute/calculate property names instead of
// having to write them out manually and literally.

const openingHours = {
  [weekDays[3]]: {
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

// That's object literal (syntax).
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enhanced object literal(number 1.):
  // takes openingHours object and put it into the restaurant object,
  // creating a property with exactly that variable name
  openingHours,

  // PRE-ES6
  // openingHours: openingHours, // adding obj to obj
  order: function (startMenuIndex, mainMenuIndex) {
    return [this.starterMenu[startMenuIndex], this.mainMenu[mainMenuIndex]];
  },

  // Second enhancement to object literals is about writing methods (number 2.)
  // In ES6, we no longer have to create a property
  // and then set it to function expression. (order method as example).

  // That works the same as order method, just easier syntax
  printRestaurantName() {
    console.log(`Restaurant Name: ${this.name}`);
  },
};

console.log(restaurant);
restaurant.printRestaurantName();
