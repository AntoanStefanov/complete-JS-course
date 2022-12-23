'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (startMenuIndex, mainMenuIndex) {
    return [this.starterMenu[startMenuIndex], this.mainMenu[mainMenuIndex]];
  },
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

// Powerful. We use destructuring to do a lot of cool things:
// 1. SWAP

//  Let's say we want to switch the first & third category.

// SWAP -> Without destructuring:
// const temp = firstCat;
// firstCat = thirdCat;
// thirdCat = temp;
// console.log(restaurant.categories);
// console.log(firstCat, thirdCat);

// SWAP -> With destructuring

// deconstruct assigment = the array
[firstCat, thirdCat] = [thirdCat, firstCat];
console.log(firstCat, thirdCat);

// 2. when function, returns an array. We can immediately destruct the array,
// into different variables. This allows us to return multiple values from func.

// Recieve 2 returned values from a function.
// deconstruct assignment = an array;
const [starterDish, mainDish] = restaurant.order(0, 2);
console.log(starterDish, mainDish);

// Next step, What happens if we have a nested array.
const nestedArray = [1, 2, [3, 4]];
// How we can get 1 and the [3, 4] array ?

// destructuring assignment = an array.
const [firstValue, , numbersArray] = nestedArray;
console.log(firstValue, numbersArray);

// What if we wanted all the individual values?

// destructuring assignment inside of destructuring assignment = an array.
const [firstEl, , [firstElOfArr, secondElOfArr]] = nestedArray;

console.log(firstEl, firstElOfArr, secondElOfArr);
