'use strict';

/**
 * Menu Fade Animation.
 */
function menuFadeAnimation() {
  const nav = document.querySelector('.nav');
  console.log(nav);
  /**
   * Nav Hover Handler. Event delegation.
   * @param {Event} event
   */
  function navHoverHandler(event) {
    const target = event.target;

    if (target.tagName.toLowerCase() !== 'a') return;
  }

  nav.addEventListener('mouseover', navHoverHandler);
  // mouseover is similar to mouseenter, with the BIG diffenence that,
  // mouseenter EVENT does not bubble. (same event going upwards to the root.)
  // !!!!!!!!!!!!!!! DOCS !!!!!!!!!!!!!!!!! READ IT.
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event#usage_notes
}

menuFadeAnimation();
