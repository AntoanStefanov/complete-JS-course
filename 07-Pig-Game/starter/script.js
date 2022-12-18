'use strict';

// set base variables.
const minDiceRoll = 1;
const maxDiceRoll = 6;

// Selecting elements.
const firstPlayerEl = document.querySelector('.player--0');
const secondPlayerEl = document.querySelector('.player--1');

const scoreFirstPlayerEl = document.querySelector('#score--0'); // CSS Selector
// getElementById is a little bit faster than querySelector,
// but that's relevant though, If selecting 1000 ELs(query), then maybe?
// Usually he prefers querySelector.
const scoreSecondPlayerEl = document.getElementById('score--1'); // ID Name
const rollDiceBtn = document.querySelector('.btn--roll');
const newGameBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');
const diceEl = document.querySelector('.dice');

// State Varaibles.
let currentScore = 98;
let activePlayer = 0;
let isThereWinner = false;
const totalScores = [0, 0];

// Resetting the total players' scores.
const resetTotalScores = () => {
  // We set Numbers, not Strings.
  // JS will convert them automatically to Strings,
  // To display them on the webpage.
  scoreFirstPlayerEl.textContent = 0;
  scoreSecondPlayerEl.textContent = 0;
};

// Hide Dice if needed.
const hideDice = function () {
  // add() -> Adds all arguments passed, except those already present.
  // is classList.contains(...) really necessary, then?
  // https://stackoverflow.com/questions/36999220/checking-classlist-with-contains-if-a-class-exists-before-add-or-remove
  diceEl.classList.add('hidden');
};

const diceRoll = () => {
  return (
    Math.floor(Math.random() * (maxDiceRoll - minDiceRoll + 1)) + minDiceRoll
  );
};

// Remove 'hidden' class from Dice El, change 'src' attr to display dice.
const displayDiceRoll = function (diceNumber) {
  diceEl.classList.remove('hidden');
  diceEl.setAttribute('src', `dice-${diceNumber}.png`);
  // diceEl.src = `dice-${diceNumber}.png`;
};

// Add Dice Number to Current Score.
const addDiceToCurrentScore = (diceNumber) => (currentScore += diceNumber);

// Displaying current score.
const displayCurrentScore = () => {
  document.querySelector(`#current--${activePlayer}`).textContent =
    currentScore;
};

const resetCurrentScore = () => (currentScore = 0);

// Switch players when needed.
const switchPlayers = function () {
  activePlayer = activePlayer === 0 ? 1 : 0;
  firstPlayerEl.classList.toggle('player--active');
  secondPlayerEl.classList.toggle('player--active');
};

const addCurrentScoreToTotal = () =>
  (totalScores[activePlayer] += currentScore);

const isCurrentPlayerWinner = () => totalScores[activePlayer] >= 100;

const displayTotalScore = () => {
  document.querySelector(`#score--${activePlayer}`).textContent =
    totalScores[activePlayer];
};

const showWinner = () => {
  const winnerEl = document.querySelector(`.player--${activePlayer}`);
  winnerEl.classList.add('player--winner', 'name');
};

const disableButtons = () => {
  rollDiceBtn.disabled = true;
  holdBtn.disabled = true;
};

const enableButtons = () => {
  rollDiceBtn.disabled = false;
  holdBtn.disabled = false;
};

const resetCurrentScores = () => {
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
};

// Set initial total players' scores.
resetTotalScores();

// Hide dice at start of game.
hideDice();

// Rolling dice functionality.
rollDiceBtn.addEventListener('click', function () {
  // 1. Roll dice.
  const diceNumber = diceRoll();

  // 2. Display dice.
  displayDiceRoll(diceNumber);

  // 3. Check if dice roll === 1.
  if (diceNumber === 1) {
    resetCurrentScore();
    displayCurrentScore();
    // 3.1 Switch players.
    switchPlayers();
    return;
  }

  // 4. Add dice roll to current score.
  addDiceToCurrentScore(diceNumber);

  // 5. Display new score.
  displayCurrentScore();
});

holdBtn.addEventListener('click', function () {
  // 1. Add current score to active player's total.
  addCurrentScoreToTotal();

  // 2. Display total.
  displayTotalScore();

  // 2. Check if active player has won.
  if (isCurrentPlayerWinner()) {
    // Current player won.
    showWinner();
    isThereWinner = true;
    // Disable roll dice and hold buttons.
    disableButtons();

    hideDice();

    return;
  }

  // If no winner -> reset and display current score, then switch players.
  resetCurrentScore();
  displayCurrentScore();
  switchPlayers();
});

newGameBtn.addEventListener('click', function () {
  if (isThereWinner) {
    const activePlayerEl = document.querySelector(`.player--${activePlayer}`);
    activePlayerEl.classList.remove('player--winner', 'name');
    isThereWinner = false;
  }

  totalScores[0] = 0;
  totalScores[1] = 0;
  resetTotalScores();

  resetCurrentScores();
  resetCurrentScore();

  enableButtons();
  hideDice();

  firstPlayerEl.classList.add('player--active');
  secondPlayerEl.classList.remove('player--active');
  activePlayer = 0;
});
