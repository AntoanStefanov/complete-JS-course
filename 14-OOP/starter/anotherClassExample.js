'use strict';
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649103#questions
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    // what about movements array and locale?
    // We always want to start with empty array for movements,
    // and locale we get from navigator.language.
    // No point of passing to constructor [empty arr], we can do it here,
    // same goes for locale.
    this.movements = [];
    this.locale = navigator.language;
    // chrome://settings/languages#lan -> locale change for test, if needed.

    // We can write any code in the constructor(its basically a regular function
    // console.log(`Thanks for opening an account ${owner}`);
  }

  transaction(amount) {
    this.movements.push(amount);
  }

  // API of our objects /public interface of our objects/For Outside interaction
  deposit(amount) {
    this.transaction(amount);
  }

  withdraw(amount) {
    // This withdraw method actually,
    // abtracts the fact that a withdrawal is a negative movement.
    // We use it like this: acc1.withdraw(100). Small Abstraction.
    this.transaction(-amount);
  }
}

const acc1 = new Account('Antoan', 'EUR', 1111);
console.log(acc1);

// What about the deposits and withdrawals?
// BAD !!!
// DO NOT INTERACT WITH OBJECT PROPERTIES / movements / LIKE THAT!.
// acc1.movements.push(250); // deposit
// acc1.movements.push(-140); // withdrawal

// INSTEAD OF ABOVE WAY,

// CREATE METHODS that interact with THESE PROPERTIES / movements /
// ESPECIALLY TRUE FOR IMPORTANT PROPERTIES, such as these movements!!!!
// avoiding bugs in the future.
acc1.deposit(250);
acc1.withdraw(140);
// Above: we are using the public interface of the object/deposit and withdraw/.
// We call this: API.

console.log(acc1);

// Of course still nothing stops someone on our team from interacting with
// the movements array property. And potentially making mistakes and introducing
// bugs.

// BAD PRACTICE, IMPORTANT PROPERTIES ARE BEING ACCESSIBLE outside! Bad.
// Even though, we have deposit and withdraw methods, we still can do this:
// acc1.movements.push(250);
// Same goes, for example for the pin.
// We can access the pin from outside of the account. Bad.
// It should NOT be accessible from outside of the class/and class-children maybe/.
// Real and important CONCERN, SAME GOES FOR METHODS, NOT ONLY PROPERTIES!
console.log(acc1.pin);
