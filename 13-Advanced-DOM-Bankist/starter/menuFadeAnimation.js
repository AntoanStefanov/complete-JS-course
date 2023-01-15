'use strict';

const nav = document.querySelector('.nav');
console.log(nav);
/**
 * Nav Hover Handler. Event delegation.
 * @param {Event} event
 */
function navHoverHandler(event) {
  const target = event.target;

  if (target.tagName.toLowerCase() !== 'a') return;

  console.log('hover');
}

nav.addEventListener('mouseover', navHoverHandler);
