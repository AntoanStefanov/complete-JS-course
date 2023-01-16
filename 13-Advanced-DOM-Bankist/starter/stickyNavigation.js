'use strict';

/**
 * Sticky navigation. Using scroll event for now.
 */
function stickyNavigation() {
  const nav = document.querySelector('.nav');
  const firstSection = document.querySelector('#section--1');
  // scroll event is not really efficient, should be avoided.
  // to many events dispatched for a small amount of scrolling.
  // For now, we'll use that. There is another way.

  document.addEventListener('scroll', () => {
    const sectionCoordinates = firstSection.getBoundingClientRect();

    // console.log(window.scrollY);
    // pixels from top edge to the very top of the page. => scrollY prop

    // when we make the navigation sticky? As soon as we reach the first section
    // https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetTop
    // window.scrollY >= firstSection.offsetTop
    //   ? nav.classList.add('sticky')
    //   : nav.classList.remove('sticky');

    sectionCoordinates.top <= 0
      ? nav.classList.add('sticky')
      : nav.classList.remove('sticky');
  });
}
stickyNavigation();

// pretty bad for performance(using 'scroll' event).
// scroll event fires all the time.

// go with this, for this job:
// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648987#questions/13686796
