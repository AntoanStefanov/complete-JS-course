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

  orderPizza: function (mainIngredient, ...otherIngredients) {
    let str = `Pizza made with ${mainIngredient}`;
    for (const ingredient of otherIngredients) {
      str += ', ' + ingredient;
    }
    console.log(str);
  },
};

// AND & OR logical operators.
// How to use them for short circuit.
// Until now, we used && and ||  to combine boolean values.
// We can do more than that with these logical operators.

/*
// OR (||)

// Non-boolean values as operands.
console.log(3 || 'Antoan'); // output: 3

// The result of the OR operator does NOT always have to be a boolean.

// There are three properties about logical operators.
// 1. They can use ANY data type.
// 2. They can return ANY data type.
// 3. They do 'short-circuiting'(short-circuit evaluation).

// used 2 values that are not booleans, returned a value that was not a boolean.
console.log(3 || 'Antoan'); // output: 3
// About short circuit evaluation, in the case of the OR operator,
// short circuiting means that if one of the given value is a truthy value,
// it will immediately return that value, not caring about the rest values.

// If no one of the given values is a truthy value, it will return the last one.

const x = false || 0 || ''; // output: '' (empty string) /last value/
console.log(x);

// That works this way because
// OR -> if at least one operand is true -> the result is true.
// If one of the operands is true, we 'short-circuit' the evaluation.


// More practical application of it.
// Let's say, we do not know if that prop exists.

// const numberOfGuests = restaurant.numberOfGuests
//   ? restaurant.numberOfGuests
//   : 0;

// 'short-circuiting' & OR operator, instead of ternary operator (above).
const numberOfGuests = restaurant.numberOfGuests || 0;
console.log(numberOfGuests);
// Easier method to set default values, instead of ternary operator, or even
// worse if-else statement.

// AND operator, works the opposite way of the OR operator.
console.log(0 && 'Antoan'); // output: 0
// AND operator, short-circuits, when the first value is falsy.

// Practical example:

// If this method exists, Let's say we dont know if the method exists.
if (restaurant.orderPizza) {
  restaurant.orderPizza('bacon', 'corn');
}

// if method does NOT exist, short-circuit will happen, and the return-undefined
restaurant.orderPizza && restaurant.orderPizza('bacon');
// restaurant.asd && restaurant.asd('bacon');

*/
// What if number of guests is actually 0(it will return 10, when we have 0 gues
restaurant.numberOfGuests = 0; // 0 is falsy value. But we have 0 guests,so now?
const numberOfGuests = restaurant.numberOfGuests || 10; // output: 10
console.log(numberOfGuests);

// VERY GOOD SOLUTION TO THIS: THE NULLISH COALescing operator (??)
// nullish coalescing (нулево сливане) -> ES2020.

const correctNumberOfGuests = restaurant.numberOfGuests ?? 10;
console.log(correctNumberOfGuests);
