'use strict';

// selecting the document itself of any webpage.
// https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
console.log(document.documentElement);
// example: applying CSS styles to the entire page, we always need to select
// documentElement.

// https://developer.mozilla.org/en-US/docs/Web/API/Document/head
console.log(document.head);
// https://developer.mozilla.org/en-US/docs/Web/API/Document/body
console.log(document.body);

// For the above special elements, we don't need to write any selector.
// But otherwise, as I already know, we can use querySelector.

console.log(document.querySelector('html'));
console.log(document.querySelector('head'));
console.log(document.querySelector('body'));

// querySelector -> returns first match
// querySelectorAll -> returns all matches

const allSections = document.querySelectorAll('.section');
console.log(allSections);

// HTMLCollection is a LIFE collection.(if DOM changes, so do the collection)
// getElementsByTagName -> returns HTMLCollection.
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
document.querySelector('.btn--text.btn--scroll-to').remove();
console.log(allButtons);
