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

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
// HTMLCollection is a LIFE collection.(if DOM changes, so do the collection)
// An HTMLCollection in the HTML DOM is live
// getElementsByTagName -> returns HTMLCollection.
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);
document.querySelector('.btn--text.btn--scroll-to').remove();
console.log(allButtons);

// https://developer.mozilla.org/en-US/docs/Web/API/NodeList
// nodeList is static. not 'live' like the HTMLCollection above.

// Creating and inserting elements.

// https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
// .insertAdjacentHTML

// Sometimes its more useful to actually built the element instead of inserting.

// // tag name as arg | returns HTMLDivElement
const message = document.createElement('div');
console.log(message);
// this element is not yet anywhere in our DOM.
// We can modify it and then append/insert it to the DOM.
// We can modify/add/remove anything from this element
// We can behave with it the same as getting/selection an el from the DOM.

// Let's add a class.
message.classList.add('cookie-message');
message.textContent = 'We use cookies.';

const messageButton = document.createElement('button');
messageButton.textContent = 'Got it.';
messageButton.classList.add('btn', 'btn--close-cookie');

message.append(messageButton);
const header = document.querySelector('.header');
header.prepend(message);

// 14:40
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648947#questions
// DOM Element is unique, so it can exist at one place at a time.
// kinda like human.

// What if we want to insert multiple copies of the same element?
// We would have to first copy the first element.
// header.prepend(message.cloneNode(true));
// true means: to copy all the child nodes of the element.

// Two more methods. Before/After the given element - /sibling/.
// header.before(message.cloneNode(true));
// header.after(message.cloneNode(true));
