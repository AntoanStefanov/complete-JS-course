'use strict';

let x = 1;
const y = x;
x = 2;

console.log(x);
console.log(y);

const me = {
  name: 'Antoan',
  age: 20,
};

const friend = me; // Here the reference becomes the same,
friend.age = 30; // so when we change friend age, it change the 'me' obj age too

console.log(me); // Here, age = 30.
console.log(friend);
