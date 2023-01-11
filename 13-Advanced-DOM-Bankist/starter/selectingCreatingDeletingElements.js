'use strict';

// selecting the document itself of any webpage.
// https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
console.log(document.documentElement);
// example: applying CSS styles to the entire page, we always need to select
// documentElement.

// developer.mozilla.org/en-US/docs/Web/API/Document/head
https: console.log(document.head);
// https://developer.mozilla.org/en-US/docs/Web/API/Document/body
console.log(document.body);

// For the above special elements, we don't need to write any selector.
// But otherwise, as I already know, we can use querySelector.

console.log(document.querySelector('html'));
console.log(document.querySelector('head'));
console.log(document.querySelector('body'));

// querySelector -> returns first match
// querySelectorAll -> returns all matches
