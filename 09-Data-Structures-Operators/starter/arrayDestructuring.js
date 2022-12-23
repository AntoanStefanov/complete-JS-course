'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
};

// const nums = [2, 3, 4];

// One way of retrieving the elements.
// const a = nums[0];
// const b = nums[1];
// const c = nums[2];

// console.log(a, b, c);

// retrieving the elements with destructuring.
// square brackets, bcs we are destructuring an array -> [x, y, z]
// [x, y, z] -> destructuring assignment
// const [x, y, z] = nums;
// console.log(x, y, z);
// console.log(nums); // not affected.

// Work with the restaurant object.

// We do not need to take all the elements of the array.
// const [firstCategory, secondCategory] = restaurant.categories;
// console.log(firstCategory, secondCategory);

// What if we wanted the first and the third category?
// We simply leave a hole in the destructuring operator.
let [firstCat, , thirdCat] = restaurant.categories;
console.log(firstCat, thirdCat);

// Powerful. We use destructuring to do a lot of cool things.

// Let's say we want to switch the first & third category.
// Without destructuring
// const temp = firstCat;
// firstCat = thirdCat;
// thirdCat = temp;
// console.log(restaurant.categories);
// console.log(firstCat, thirdCat);

// With destructuring
[firstCat, thirdCat] = [thirdCat, firstCat];
console.log(firstCat, thirdCat);
