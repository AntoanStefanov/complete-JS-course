'use strict';

// https://javascript.info/bubbling-and-capturing#capturing

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

console.log(randomColor());

document.querySelector('.nav__links').addEventListener('click', function () {
  console.log('NAV LINKS');
});

document.querySelector('.nav__link').addEventListener('click', function () {
  console.log('Features link');
});

document.querySelector('html').addEventListener('click', function () {
  console.log('eventListener added on the html element');
});

window.addEventListener('click', function () {
  console.log('eventListener added on window');
});

// when the link is clicked, the following is logged out:

// Features link
// NAV LINKS
// eventListener added on the html element
// eventListener added on window

// This is the bubbling process:
// The event is passed from the most inner(targetElement) to most outer element.

// No matter if we handle a certain event or not,
// the event will ALWAYS be dispatched (from targetEl to the most outer element)
