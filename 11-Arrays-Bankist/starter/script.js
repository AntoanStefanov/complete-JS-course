'use strict';

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// 147. Creating DOM Elements.

// Whenever we do some functionality of our app,
// Writing our code in the global context is BAD PRACTICE.
// it's always best to create a function.

// Intead of working with the global variables,
// start passing the data into the function that needs it.
const displayMovements = function (movements) {
  // Emptying container
  containerMovements.innerHTML = '';

  const movementsFrag = document.createDocumentFragment();

  // Adding new Elements.
  movements.reverse().forEach(function (movement, index) {
    const movementRowEl = document.createElement('row');
    movementRowEl.classList.add('movements__row');

    const movementType = movement > 0 ? 'deposit' : 'withdrawal';
    const movementTypeEl = document.createElement('div');
    movementTypeEl.classList.add(
      'movements__type',
      `movements__type--${movementType}`,
    );
    movementTypeEl.textContent = `${index + 1} ${movementType}`;

    const movementDateEl = document.createElement('div');
    movementDateEl.classList.add('movements__date');
    movementDateEl.textContent = '3 days ago';

    const movementValueEl = document.createElement('div');
    movementValueEl.classList.add('movements__value');
    movementValueEl.textContent = movement;

    movementRowEl.appendChild(movementTypeEl);
    movementRowEl.appendChild(movementDateEl);
    movementRowEl.appendChild(movementValueEl);

    movementsFrag.appendChild(movementRowEl);

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    // containerMovements.insertAdjacentHTML('afterbegin', movementRowHTML);
  });
  containerMovements.appendChild(movementsFrag);
};

displayMovements(account1.movements);
