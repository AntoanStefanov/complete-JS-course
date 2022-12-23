'use strict';

/*
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
*/

/*

// Primitive data types

// id: lastName; m.address: 001; value: 'Jeff;
let lastName = 'Jeff';
// id: oldLastName; m.address: 001;
const oldLastName = lastName;
// id: lastName; m.address: 002; value: 'Ron';
lastName = 'Ron';
// New m.address is created, with the given new value,
// so that we do NOT LOSE the oldLastName's value.
console.log(lastName, oldLastName);
// All above is happening in the call stack.^

// Objects are stored in m.Heap,
// The call stack just keeps reference /the same m.address/
// at which the object is stored in the heap.
// Reference types

//              CALL STACK               |              HEAP
// id: maria; m.address: 001; value: H01 | m.address: H01;  value: the object;
const maria = {
  firstName: 'Maria',
  lastName: 'Jekova',
  age: 22,
};

// The 'marriedMaria' id points the same m.address (Call Stack & Heap). 2 in 1.
//                  CALL STACK                 |            HEAP
// id: marriedMaria; m.address: 001; value: H01|m.address: H01;value: the object

let marriedMaria = maria; // Reference copy;Same object;Points the same adress

//                  CALL STACK                 |            HEAP
// id: marriedMaria; m.address: 001; value: H01|m.address:H01;val:ref.the object
marriedMaria.lastName = 'Stefanov';
// The Value(H01) in call stack in NOT changed with that command.
// So, no other m.address & value is created. =>
// The refactored object stays the same for the 'maria' id, also.

// we can change object's props, even they are 'const' declared, l.57
// because the 'const' applies for the stack's value(H01), the reference;m.adr,
// not the object itself in heap.

// const & let are ponly about the value in the STACK.
// Heap changes has NOTHING to do with 'let' and 'const'.

// Reassigning a completely new object, will result in stack's value change(H01)
// which will result in creating a completely new m.adress for both stack & heap
// So, if it is 'const' declared, change will be immposible.
// Stack's value, will be changed. That's what 'const' cares about;
//  that value in Call Stack being Constant.
marriedMaria = {}; // Error if 'const',
// let -> new obj in heap, stack's value(H01) will be changed with the new obj's
// m.address in Heap, so that a new m.ad in stack'll be created to hold that ref
// maria obj, will be as it was always.

console.log(marriedMaria);
console.log(maria);

// Completely changing the object with another, /Reassigning a new obj to it/,
// is completely different than simply changing a property
*/

// What if we really wanted to copy the object,
// so that we could then change one of them, without changing the other.

const mariaOne = {
  firstName: 'Maria',
  lastName: 'Jekova',
  age: 22,
  family: ['Johnny', 'Becca', 'Rose'], // array is just an object
};
// If we really wanted to copy this object,
// we could use a function 'object.assign'.

// SHALLOW COPY (ONLY FIRST LEVEL/primitives/).
const mariaTwo = Object.assign({}, mariaOne);
// console.log(mariaTwo);

// Let's say now, mariaTwo gets married.
mariaTwo.lastName = 'Arnaudova';

// Lets change array in shallow/first-level copy.
// The change will apply to both maria objects. Bcs its not deep copy.
mariaTwo.family.push('Megan');

console.log(mariaOne); // mariaOne.lastName did NOT change.
//  bcs these now, are two DIFFERENT objects.
console.log(mariaTwo);

// There is still a problem, bcs using Object.assign(),
// only work on the FIRST level. In other words,
// If we have an object inside the object, then this inner object will
// actually still be the same. It'll still point to the same place in memory.
// That's why we say Object.assign only creates a SHALLOW copy.
// NOT A DEEP CLONE, which is what we want.

// A SHALLOW copy will only copy the primitives properties in the first level,
// A DEEP clone will copy everything(primitives & objects).
