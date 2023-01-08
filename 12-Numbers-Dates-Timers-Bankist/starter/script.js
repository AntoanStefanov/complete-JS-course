'use strict';

// DIFFERENT Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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

let loggedInAccount;

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

const displayMessage = function (messageType) {
  if (messageType === 'login') {
    labelWelcome.textContent = `Welcome back, ${
      loggedInAccount.owner.split(' ')[0]
    }`;
  } else {
    labelWelcome.textContent = 'Log in to get started';
  }
};

const displayMovements = function (account, sort = false) {
  // Each function should actually recieve the data that it will work with,
  // instead of using global variables.

  // Emptying container
  containerMovements.innerHTML = '';

  const movementsFrag = document.createDocumentFragment();

  const movements = sort
    ? account.movements.slice().sort((a, b) => a - b)
    : account.movements;

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

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#several_ways_to_create_a_date_object
    const movementDate = (date) => {
      const dateObj = new Date(date);

      const [day, month, year] = [
        // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
        `${dateObj.getDate()}`.padStart(2, 0),
        `${dateObj.getMonth() + 1}`.padStart(2, 0),
        dateObj.getFullYear(),
      ];
      return `${day}/${month}/${year}`;
    };

    const movementDateEl = createHTMLElement({
      classNames: ['movements__date'],
      textContent: `${movementDate(account.movementsDates[index])}`,
    });

    const movementValueEl = createHTMLElement({
      classNames: ['movements__value'],
      textContent: `${movement.toFixed(2)}€`,
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

const updateUI = function (account) {
  displayMovements(loggedInAccount);

  const calcBalance = () => {
    const initialBalance = 0;
    account.balance = account.movements.reduce(
      (balance, movement) => balance + movement,
      initialBalance,
    );
    return account.balance;
  };

  const displayBalance = function () {
    const balance = calcBalance();
    labelBalance.textContent = `${balance.toFixed(2)}€`;
  };
  displayBalance();

  const calcIncome = function () {
    const initialIncome = 0;
    return account.movements
      .filter((movement) => movement > 0)
      .reduce(
        (currentIncome, movement) => currentIncome + movement,
        initialIncome,
      );
  };

  const displayIncome = function () {
    const income = calcIncome();
    labelSumIn.textContent = `${income.toFixed(2)}€`;
  };
  displayIncome();

  const calcOutcome = function () {
    const initialIncome = 0;
    return account.movements
      .filter((movement) => movement < 0)
      .reduce(
        (currentOutcome, movement) => currentOutcome + movement,
        initialIncome,
      );
  };

  const displayOutcome = function () {
    const outcome = calcOutcome();
    labelSumOut.textContent = `${Math.abs(outcome).toFixed(2)}€`;
  };
  displayOutcome();

  const calcInterest = function () {
    const initialInterest = 0;

    return account.movements
      .filter((movement) => movement > 0)
      .map((deposit) => (deposit * account.interestRate) / 100)
      .filter((interest) => interest >= 1)
      .reduce(
        (currentInterest, depositInterest) => currentInterest + depositInterest,
        initialInterest,
      );
  };

  const displayInterest = function () {
    const interest = calcInterest();
    labelSumInterest.textContent = `${interest.toFixed(2)}€`;
  };
  displayInterest();
};

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

// Event handler
// Enter in input fields of form or clicking the login btn'll trigger the event.
const onLogin = function (event) {
  // default behavior, when we click a submit button, is the page to reload.
  // PAGE RELOADS, BECAUSE THIS IS A BUTTON IN A FORM ELEMENT.
  // Stop the reloading.
  event.preventDefault(); // prevent the form from submitting.

  // we take value property of input elements.
  const username = inputLoginUsername.value;
  const pin = Number(inputLoginPin.value);

  const account = accounts.find((account) => account.username === username);

  // (account && account.pin === pin)
  // OPTIONAL CHAINING -> pin will be read only in case account exists.
  if (account?.pin !== pin) return;
  loggedInAccount = account;
  containerApp.style.opacity = 100;
  updateUI(loggedInAccount);
  displayMessage('login');

  const clearUsedCredentials = () => {
    // from right to left, operator precedence MDN
    inputLoginUsername.value = inputLoginPin.value = '';
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/blur
    inputLoginPin.blur();
    inputLoginUsername.blur();
  };
  clearUsedCredentials();

  const displayCurrentTime = () => {
    // two ways of filling 0 before unit.

    const now = new Date();

    const displayZeroBeforeUnit = (unit) => (unit < 10 ? `0${unit}` : unit);

    // internationalization, later in this section.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString
    // labelDate.textContent = now.toLocaleString('bg-BG', {timeZone: 'UTC'});

    const [day, month, year, hours, minutes, seconds] = [
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart
      `${now.getDate()}`.padStart(2, 0),
      `${now.getMonth() + 1}`.padStart(2, 0),
      now.getFullYear(),
      now.getHours(),
      `${now.getMinutes()}`.padStart(2, 0),
      `${now.getSeconds()}`.padStart(2, 0),
    ];

    labelDate.textContent = `${day}/${month}/${year}, ${displayZeroBeforeUnit(
      hours,
    )}:${minutes}:${seconds}`;
  };

  displayCurrentTime();
  // https://developer.mozilla.org/en-US/docs/Web/API/setInterval
  // https://developer.mozilla.org/en-US/docs/Web/API/setTimeout
  setInterval(displayCurrentTime, 1_000); // every 1 second.
};
btnLogin.addEventListener('click', onLogin);

// Fake login, so we dont need to reset all the time

inputLoginUsername.value = 'js';
inputLoginPin.value = 1111;
btnLogin.click();

const onTransfer = function (event) {
  console.log(event);
  event.preventDefault();

  const recipientAccount = accounts.find(
    (account) => account.username === inputTransferTo.value,
  );
  const moneyAmount = Number(inputTransferAmount.value);

  inputTransferTo.value = inputTransferAmount.value = '';

  if (!recipientAccount) return;
  if (recipientAccount.username === loggedInAccount.username) return;
  if (moneyAmount <= 0) return;
  if (loggedInAccount.balance < moneyAmount) return;

  loggedInAccount.movements.push(-moneyAmount);
  loggedInAccount.movementsDates.push(new Date().toISOString());

  recipientAccount.movements.push(moneyAmount);
  recipientAccount.movementsDates.push(new Date().toISOString());

  updateUI(loggedInAccount);
};
btnTransfer.addEventListener('click', onTransfer);

const onLoanRequest = function (event) {
  event.preventDefault();

  const amount = Math.round(inputLoanAmount.value); // round do type coercion
  inputLoanAmount.value = '';

  if (amount <= 0) return;
  const approved = loggedInAccount.movements.some(
    (movement) => movement > (amount * 10) / 100,
  );

  if (approved) {
    loggedInAccount.movements.push(amount);
    loggedInAccount.movementsDates.push(new Date().toISOString());
    updateUI(loggedInAccount);
  }
};
btnLoan.addEventListener('click', onLoanRequest);

const onClose = function (event) {
  event.preventDefault();

  const username = inputCloseUsername.value;
  const pin = Number(inputClosePin.value);

  inputCloseUsername.value = inputClosePin.value = '';

  const account = accounts.find((account) => account.username === username);

  if (!account) return;
  if (account.username !== loggedInAccount.username) return;
  if (account.pin !== pin) return;

  const accountIndex = accounts.findIndex(
    (account) => account.username === username,
  );

  // https://sentry.io/answers/remove-specific-item-from-array/
  accounts.splice(accountIndex, 1);
  containerApp.style.opacity = 0;
  displayMessage('close');
};
btnClose.addEventListener('click', onClose);

let isSorted = false;
const onSort = function () {
  displayMovements(loggedInAccount, !isSorted);
  isSorted = !isSorted;
};
btnSort.addEventListener('click', onSort);

// 176. Adding dates to 'Bankist' App
