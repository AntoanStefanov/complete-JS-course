'use strict';

// New feature of objects & arrays -> optional chaining (?.)

const weekDays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
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

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,
  order: function (startMenuIndex, mainMenuIndex) {
    return [this.starterMenu[startMenuIndex], this.mainMenu[mainMenuIndex]];
  },
  printRestaurantName() {
    console.log(`Restaurant Name: ${this.name}`);
  },
};

// Let's pretend we do not know if restaurant is open on Monday or not.
// console.log(restaurant.openingHours.mon.open); // Error

// In order to avoid this error, we need to check if
// restaurant.openingHours.mon actually exists.

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
if (restaurant.openingHours.fri) console.log(restaurant.openingHours.fri.open);

// If we do not know whether a restaurant has openingHours and if so,
// We dont know whether the openingHours has mon. What if it was more nested?
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// ES2020: optional chaning (?.)
// If a certain property does not exist, then undefined is returned immediately
// That will avoid line 37. error.

// WITH OPTIONAL CHAINING
console.log(restaurant.openingHours?.mon?.open);
//                    does op.Hours exists?.does mon exist?.open;
// if any of these does not exist, then undefined is returned immediately
// Here 'exists' with optional chaining actually means the nullish concept
//                         (undefined || null)

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  console.log(day);
  const openHour = restaurant.openingHours[day]?.open ?? 'not opening';
  // const closeHour = restaurant.openingHours[day]?.close ?? -1;
  console.log(`On ${day} we open at ${openHour}`);
}

// Optional Chaining (?.) works for calling methods.
// We can check if a method actually exists before calling it.
restaurant.printRestaurantName?.();
restaurant.nonExistingMethod?.() ?? console.log('Method not found');

// Optional Chaining (?.) works on arrays. Checking if array is empty.
const users = [{name: 'Antoan', email: 'email@antoan.com'}];

console.log(users[0]?.name ?? 'User array empty');
console.log(users[1]?.name ?? 'User not found');
