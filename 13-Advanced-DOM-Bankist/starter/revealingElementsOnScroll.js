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
    rootMargin: '-200px', // ctrl+F in docs above 'rootMargin'. kinda CSS values
    // check viewport height and entry.rootBound height, there ur margin goes.
    // example:
    // viewport height: 917px
    // rootMargin: '-200px'.this way the viewport'll be shinkred 200px each side
    // /top, right, bottom, left/
    // entry.rootBound height: 517px./917(real height) - 200(top) - 200(bottom)/
    // We shinkred the height of the viewport, not on real, but in the observer.
  };

  /**
   * Observer Handler.
   * @param {IntersectionObserverEntry} entry
   * @param {IntersectionObserver} observer
   */
  function observerHandler([entry], observer) {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.remove('section--hidden');
      observer.unobserve(entry.target);
    }
  }

  const observer = new IntersectionObserver(observerHandler, observerOptions);
  // https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/observe
  document.querySelectorAll('section').forEach((el) => observer.observe(el));
}

revealingElements();
