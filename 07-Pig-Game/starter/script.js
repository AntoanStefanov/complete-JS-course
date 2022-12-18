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
};

// Get Active Player's Current Score El, Add Dice Number, Display Current Score.
const addDiceToCurrentScore = function (diceNumber) {
  const currentScoreEl = document
    .querySelector('.player--active')
    .querySelector('.current-score');
  const currentScore = Number(currentScoreEl.textContent) + diceNumber;
  currentScoreEl.textContent = currentScore;
};

// Switch players when needed.
const switchPlayers = function () {
  if (firstPlayerEl.classList.contains('player--active')) {
    firstPlayerEl.classList.remove('player--active');
    secondPlayerEl.classList.add('player--active');
  } else {
    firstPlayerEl.classList.add('player--active');
    secondPlayerEl.classList.remove('player--active');
  }
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
    // 3.1 Switch players.
    switchPlayers();
    return;
  }

  // 4. Add dice roll to current score.
  addDiceToCurrentScore(diceNumber);
  // 5. Display new score.
  displayCurrentScore(diceNumber);
});
