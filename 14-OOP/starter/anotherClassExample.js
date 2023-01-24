'use strict';

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
}

const acc1 = new Account('Antoan', 'EUR', 1111);
console.log(acc1);

// What about the deposits and withdrawals?
acc1.movements.push(250); // deposit
acc1.movements.push(-140); // withdrawal
