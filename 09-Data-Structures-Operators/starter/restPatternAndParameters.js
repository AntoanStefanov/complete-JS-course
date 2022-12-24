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

  orderPasta: function (ingredient, taste, boxForHome) {
    console.log(
      `You order pasta with ${ingredient} which taste is ${taste}.\
Box for Home: ${boxForHome ? 'yes' : 'no'}. Restaurant: ${this.restaurantName}`,
    );
  },
};

// 1) Destructuring.

// Rest pattern looks same as the spread operator.
// does opposite of spread operator. (packing elements in array.)

//        left side = right side
// rest pattern ... = spread operator ...

// spread operator/syntax -> right side from equal(=). Unpacking elements in arr
// SPREAD, bcs on RIGHT side of =
const arr = [1, 2, ...[3, 4]];
console.log(arr);

// rest syntax ... = left side from equal(=). Packing elements in array
// rest pattern + array destructuring.
// REST, bcs on LEFT side of =
const [a, b, , ...rest] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(a, b, rest); // rest is array of the rest elements.

// rest pattern collects the elements that are unused
// in the destructuring assignment.

// ... on both sides.

const [x, y, , ...restt] = [1, 2, 3, 4, 5, 6, ...[7, 8, 9]];
console.log(x, y, restt);

// rest syntax in destructing asssignment
const [firstMainMenuItem, , thirdMainMenuItem, ...restOfMenuArr] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(firstMainMenuItem, thirdMainMenuItem, restOfMenuArr);

// In objects, it works.

const {sat: saturday, ...weekDays} = restaurant.openingHours;

console.log(saturday, weekDays);

// 2) Functions.
