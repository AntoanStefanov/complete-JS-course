'use strict';

const h1El = document.querySelector('h1');

console.log(h1El);

// going downwards: child(ren)

// 1st way: using querySelector (it also works on elements)

// https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector
// https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelectorAll
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLHeadingElement
// Check inheritance chain.

console.log(h1El.querySelectorAll('.highlight'));
// NodeList

// https://developer.mozilla.org/en-US/docs/Web/API/NodeList

// check Live vs Static NodeLists.
// document.querySelectorAll() method returns a static NodeList.

// Node.childNodes is live:
// https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes

// querySelector(All) works no matter how deep the child/ren/ are.
// a.k.a. it will find not 'DIRECT' children, but, non-direct.

// https://developer.mozilla.org/en-US/docs/Web/API/Node/childNodes
// Child nodes include elements, text and comments.

// https://developer.mozilla.org/en-US/docs/Web/API/Element/children
// Element.children includes only element nodes.
// To get all child nodes, including non - element nodes
// like text and comment nodes, use Node.childNodes.

// https://developer.mozilla.org/en-US/docs/Web/API/Element/children

// IF WE NEED DIRECT CHILDREN all child nodes(check what node actually contains):
console.log(h1El.childNodes);

// IF WE NEED DIRECT CHILDREN element nodes(check what Element actually contains):
console.log(h1El.children);

// the two above works only for direct children.

console.log(h1El.firstChild); // #text (first node)
console.log(h1El.firstElementChild); // span.highlight (first element node)
h1El.firstElementChild.style.color = 'orangered';
h1El.lastElementChild.style.color = 'orangered';

// Going upwards: parents

// for direct: parent/s.
console.log(h1El.parentNode); // returns parent node
console.log(h1El.parentElement); // returns parent element node
// In this case, it's the same.

// However, most of the time, we need a parent el which is NOT direct parent.
// In other words,
// We might need to find a parent element, no matter how far away it is in
// the DOM tree.

// For that, we have the closest method.
// https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
// check docs

// P.S. If you need to find a method,
// first check MDN > Element > Instance methods.

// This method will be used later especially for event delegation. Note.
console.log(h1El.closest('.header')); // CSS selector
console.log(h1El.closest('h1')); // This returns the h1 element itself.

// We can think of closest being the opposite of the querySelector.

// Going sideways: siblings.

// For some reason in JS, we can only access DIRECT siblings(previous&next ones)
const h4El = document.querySelector('h4');
console.log(h4El.previousElementSibling); // h1 (element node)
console.log(h4El.previousSibling); // \n (text node)

console.log(h4El.nextElementSibling); // button Element
console.log(h4El.nextSibling); // \n

// If we need all the siblings, not just previous or next one,
// then we move up to the parent element, then we get all children.
console.log(h4El.parentElement.children); // ofc, it includes itself.
const siblings = h4El.parentElement.children;
// siblings -> HTMLCollection -> Symbol(Symbol.iterator) : ƒ values()
// This means that HTMLCollection is an iterator,
// ...(spread operator) works with objects that are ITERABLE, so this would work
console.log([...siblings]);
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLCollection
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

[...siblings].forEach(function (el) {
  if (el !== h4El) el.style.opacity = '70%'; // !== bcs the el itself is there.
});
