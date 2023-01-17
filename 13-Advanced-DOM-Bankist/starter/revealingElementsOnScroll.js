'use strict';

/**
 * Revealing elements on scroll, when we are close to them.
 */
function revealingElements() {
  // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  // #creating_an_intersection_observer

  const observerOptions = {
    // https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
    // treshold: 0.1, // 10%
    // rootMargin: '-200px', // ctrl+F in docs above 'rootMargin'. kinda CSS values
    // check viewport height and entry.rootBound height, there ur margin goes.
    // example:
    // viewport height: 917px
    // rootMargin: '-200px'.this way the viewport'll be shinkred 200px each side
    // /top, right, bottom, left/
    // entry.rootBound height: 517px./917(real height) - 200(top) - 200(bottom)/
    // We shinkred the height of the viewport, not on real, but in the observer.

    // Jonas solution: without rootMargin(which I think is easier to understand)
    // just using, threshold. with no rootMargin.
    threshold: 0.15, // 15% element visibility, run the callback.
  };

  /**
   * Observer Handler.
   * @param {IntersectionObserverEntry} entry
   * @param {IntersectionObserver} observer
   */
  function observerHandler([entry], observer) {
    // one treshold, one entry.
    console.log(entry);

    // guard clause
    if (!entry.isIntersecting) return; // if its not intersecting. return.

    const section = entry.target;
    section.classList.remove('section--hidden');
    observer.unobserve(section);
  }

  const observer = new IntersectionObserver(observerHandler, observerOptions);
  // https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/observe
  document.querySelectorAll('section').forEach((el) => {
    observer.observe(el);

    // https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648995#questions
    // 5:10
    el.classList.add('section--hidden');
  });
}
// https://cloud.netlifyusercontent.com/assets/
// 344dbf88-fdf9-42bb-adb4-46f01eedd629/cbe79f7b-b5e0-4891-9322-aea13e2fe54e/margin-motion.gif
revealingElements();
