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
console.log(computedStyle.height); // 50px
console.log(computedStyle.fontWeight); // 400, set in the style.css file.

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/style#getting_style_information
// To get the values of all CSS properties for an element you should
// use Window.getComputedStyle() instead.

// The style property represents only the CSS declarations set in the element's
// inline style attribute, not those that come from style rules elsewhere,
// such as style rules in the < head > section, or external style sheets.
