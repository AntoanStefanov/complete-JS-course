'use strict';

const navLinks = document.querySelector('.nav__links');

// Delegation
// https://javascript.info/event-delegation

// Capturing and bubbling allow us to implement one of the most powerful
// event handling patterns called event delegation.

// The idea is that if we have a lot of elements handled in a similar way,
// then instead of assigning a handler to each of them - we put a single handler
// on their common ancestor.

navLinks.addEventListener('click', function (event) {
  event.preventDefault();
  // Without preventDefault()
  // the 'href="#section--1"' in the HTML document,
  // will scroll the page to the section, first, and then execute this handler.

  const target = event.target;

  if (target.tagName.toLowerCase() !== 'a') return;

  console.log(event.target.href);
  const scrollIntoElementID = event.target.href.split('/').at(-1);
  const scrollIntoViewOptions = { behavior: 'smooth' };

  const HTMLElement = document.querySelector(scrollIntoElementID);
  HTMLElement.scrollIntoView(scrollIntoViewOptions);
});
