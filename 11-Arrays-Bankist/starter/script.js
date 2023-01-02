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

// Elements.
// Label is basically all the things where we simply want to put some text in.
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

// https://stackoverflow.com/questions/11796093/is-there-a-way-to-provide-named-parameters-in-a-function-call-in-javascript
const createHTMLElement = ({tagName = 'div', classNames = [], textContent}) => {
  const el = document.createElement(tagName);
  el.classList.add(...classNames);
  if (textContent === 0 || textContent) {
    el.textContent = textContent;
  }
  return el;
};

const displayMovements = function (movements) {
  // Each function should actually recieve the data that it will work with,
  // instead of using global variables.

  // Emptying container
  containerMovements.innerHTML = '';

  const movementsFrag = document.createDocumentFragment();

  // Adding new Elements.
  movements.forEach(function (movement, index) {
    const movementRowEl = createHTMLElement({
      classNames: ['movements__row'],
    });

    const movementType = movement > 0 ? 'deposit' : 'withdrawal';

    const movementTypeEl = createHTMLElement({
      classNames: ['movements__type', `movements__type--${movementType}`],
      textContent: `${index + 1} ${movementType}`,
    });

    const movementDateEl = createHTMLElement({
      classNames: ['movements__date'],
      textContent: '3 days ago',
    });

    const movementValueEl = createHTMLElement({
      classNames: ['movements__value'],
      textContent: movement,
    });

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/append
    movementRowEl.append(movementTypeEl, movementDateEl, movementValueEl);
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/prepend
    movementsFrag.prepend(movementRowEl);

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    // containerMovements.insertAdjacentHTML('afterbegin', movementRowHTML);
    // https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648719#questions
  });
  containerMovements.appendChild(movementsFrag);
};
displayMovements(account1.movements);

const calcBalance = (movements) => {
  const initialBalance = 0;
  return movements.reduce(
    (balance, movement) => balance + movement,
    initialBalance,
  );
};

const displayBalance = function (account) {
  const balance = calcBalance(account.movements);
  labelBalance.textContent = `${balance} EUR`;
};
displayBalance(account1);

const createUsernames = function (accounts) {
  // Each function should actually recieve the data that it will work with,
  // instead of using global variables.
  // We don't want to rely on the accounts variable, that we already have,
  // instead, we want to pass it into the function.

  // forEach method, because we do NOT want to create a new array(map method).
  // We simply want to modify the array that we get as an input.
  accounts.forEach((account) => {
    const username = account.owner
      .split(' ')
      .map((currentName) => currentName[0].toLowerCase())
      // arrwFn ACTIVELY RETURNS, THERE IS A RETURN KEYWORD, IT IS JUST HIDDEN.
      .join('');

    account.username = username;
  });
};
createUsernames(accounts);
