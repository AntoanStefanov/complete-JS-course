'use strict';

// Selecting elements.
const scoreFirstPlayerEl = document.querySelector('#score--0'); // CSS Selector
// getElementById is a little bit faster than querySelector,
// but that's relevant though, If selecting 1000 ELs(query), then maybe?
// Usually he prefers querySelector.
const scoreSecondPlayerEl = document.getElementById('score--1'); // ID Name

const diceEl = document.querySelector('.dice');

// Resetting the total players' scores.
const resetTotalScores = () => {
  // We set Numbers, not Strings.
  // JS will convert them automatically to Strings,
  // To display them on the webpage.
  scoreFirstPlayerEl.textContent = 0;
  scoreSecondPlayerEl.textContent = 0;
};

const hideDice = function () {
  diceEl.classList.add('hidden');
};

// Set initial total players' scores.
resetTotalScores();
