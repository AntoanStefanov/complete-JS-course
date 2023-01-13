'use strict';

// https://javascript.info/bubbling-and-capturing#capturing

// That's: for a click on <a> the event first goes through the ancestors chain
// down to the element(capturing phase), then it reaches the target and
// triggers there(target phase), and then it goes up(bubbling phase),
// calling handlers on its way.

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());

/**
 * Showing in console the called handlers.
 */
function bubbling() {
  document
    .querySelector('.nav__link')
    .addEventListener('click', function (event) {
      event.currentTarget.style.backgroundColor = randomColor();
      console.log('Features link');
    });

  document
    .querySelector('.nav__links')
    .addEventListener('click', function (event) {
      event.currentTarget.style.backgroundColor = randomColor();
      console.log('NAV LINKS');
    });

  document.querySelector('html').addEventListener('click', function () {
    console.log('eventListener added on the html element');
  });

  window.addEventListener('click', function () {
    console.log('eventListener added on window');
  });

  // This is the bubbling process:
  // The event is passed from the most inner(targetElement) to most outer eleme

  // No matter if we handle a certain event or not,
  // the event will ALWAYS be dispatched (from targetEl to the most outer elem)

  // https://javascript.info/bubbling-and-capturing#capturing

  // That's: for a click on <a> the event first goes through the ancestors chain
  // down to the element(capturing phase), then it reaches the target and
  // triggers there(target phase), and then it goes up(bubbling phase),
  // calling handlers on its way.
}

bubbling();

/**
 * Showing in console the called handlers.
 */
function capturing() {
  document.querySelector('.nav__link').addEventListener(
    'click',
    function (event) {
      event.currentTarget.style.backgroundColor = randomColor();
      console.log('CAPTURING - Features link');
    },
    true,
  );
  // 'true' is alias of {capture: true}, check MDN docs for addEventListener and
  // https://javascript.info/bubbling-and-capturing#capturing

  document.querySelector('.nav__links').addEventListener(
    'click',
    function (event) {
      event.currentTarget.style.backgroundColor = randomColor();
      console.log('CAPTURING - NAV LINKS');
    },
    true,
  );

  document.querySelector('html').addEventListener(
    'click',
    function () {
      console.log('CAPTURING - eventListener added on the html element');
    },
    true,
  );

  window.addEventListener(
    'click',
    function () {
      console.log('CAPTURING - eventListener added on window');
    },
    true,
  );
  // when the link is clicked, the following is logged out:

  // This is the capturing phase (1):
  // The event is passed from the most outer to most inner(targetElement) elem.

  // No matter if we handle a certain event or not,
  // the event will ALWAYS be dispatched (from targetEl to the most outer elem)

  // https://javascript.info/bubbling-and-capturing#capturing
}

capturing();

// Please note, the 'Features link' shows up twice,
// because we’ve set two listeners: capturing and bubbling.
// The target triggers at the end of the first and
// at the beginning of the second phase.
