'use strict';

// IMPORTANT DOCS
// https://developer.mozilla.org/en-US/docs/Web/API/Node

// this cookie-message is created in selectingCreatingDeletingElements.js file.
const createdMessage = document.querySelector('.cookie-message');
console.log(createdMessage);

// Styles - these styles are set as INLINE styles.In the style attr of the elem.
createdMessage.style.backgroundColor = '#37383d';
createdMessage.style.width = '120%';

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
console.log(createdMessage.style);
console.log(createdMessage.style.width); // we have set 120%, it is returned.
console.log(createdMessage.style.height); // returns '', not set like the above.

// Above is element style, the below is the COMPUTED style.
// height is known when the element's style is computed, that why above is ''.
// and below is 50px;

// but https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style
const computedStyle = getComputedStyle(createdMessage);
console.log(computedStyle);
console.log(computedStyle.fontWeight); // 400, set in the style.css file.

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style#getting_style_information
// To get the values of all CSS properties for an element you should
// use Window.getComputedStyle() instead.

// The style property represents only the CSS declarations set in the element's
// inline style attribute, not those that come from style rules elsewhere,
// such as style rules in the < head > section, or external style sheets.

// https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
// used to get the real style as it appears on the page.

console.log(computedStyle.height); // 50px
// What if we wanted to increase/decrease the height by 40px?

// computedStyle.height returns 50px (this means "50px" string and px in it.)
// so we need to use:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
createdMessage.style.height =
  Number.parseFloat(computedStyle.height) + 30 + 'px';

// CSS custom properties(which we usually call 'CSS variables').
// check style.css ->  :root {CSS variables}
// If we can change these variables in the style.css through CSS,
// we can change it through JS also.!

// Let's first find where these variables are defined.
// they are defined in the document root (:root in CSS),
// in JS this is equivalent to the document(document element).
console.log(document.documentElement); // or document.querySelector('html') ?

// https://www.30secondsofcode.org/articles/s/css-root-vs-html
// https://developer.mozilla.org/en-US/docs/Web/CSS/:root
// https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity
// https://stackoverflow.com/questions/37801882/how-to-change-css-root-color-variables-in-javascript
document.documentElement.style.setProperty('--color-primary', 'orangered');
