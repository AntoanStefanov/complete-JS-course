'use strict';

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
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 0,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 2,
});

// variable names MUST EXATCLY MATCH property names.
//                 {destructuring object}  = object;
// const {restaurantName, openingHours, categories} = restaurant;
// console.log(restaurantName, categories, openingHours);

// What if we wanted the variable names to be different from property names?
// GIVING THE PROPERTIES different variable names.
const {
  // prop : variable name to be used.
  restaurantName: bestRestaurantName,
  // prop : variable name to be used.
  openingHours,
  // property same variable name.
  categories,
} = restaurant;

console.log(bestRestaurantName, categories, openingHours);

// Default value | giving different name as well as giving default value.
// no menu prop  |
const {menu = [], starterMenu: morningMenu = []} = restaurant;
console.log(menu, morningMenu);

// Reassigning/Mutating variables, while destructuring objects.
let a = 111;
let b = 111;
const obj = {a: 23, b: 7, c: 14};

({a, b} = obj); // use (), so that JS don't think this is a code block = obj.

console.log(a, b);

// Nested objects

const {
  fri: {open: openHour, close: closeHour},
} = openingHours;

console.log(openHour, closeHour);

// Example of practical application of this destructuring
