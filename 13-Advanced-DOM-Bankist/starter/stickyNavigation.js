'use strict';

/**
 * Sticky navigation. Using scroll event for now.
 */
function stickyNavigation() {
  // scroll event is not really efficient, should be avoided.
  // to many events dispatched for a small amount of scrolling.
  // For now, we'll use that. There is another way.

  document.addEventListener('scroll', (event) => {
    console.log(event);
  });
}
stickyNavigation();
