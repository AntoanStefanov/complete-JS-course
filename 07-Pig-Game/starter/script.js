'use strict';

// Selecting elements.
const scoreFirstPlayerEl = document.querySelector('#score--0'); // CSS Selector
// getElementById is a little bit faster than querySelector,
// but that's relevant though, If selecting 1000 ELs(query), then maybe?
// Usually he prefers querySelector.
const scoreSecondPlayerEl = document.getElementById('score--1'); // ID Name

const diceEl = document.querySelector('.dice');

const rollDiceBtn = document.querySelector('.btn--roll');

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
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Set initial total players' scores.
resetTotalScores();

// Hide dice at start of game.
hideDice();

rollDiceBtn.addEventListener('click', function (event) {
  const diceNumber = diceRoll();
});
