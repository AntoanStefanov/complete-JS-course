'use strict';

// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/
// 22648993#questions/13686796

/**
 * Sticky Nav API.
 */
function stickyNavAPI() {
  const options = {
    root: null, // viewport, if root is omitted, default is viewport again.
    threshold: 0.1, // 10% -> call callback fn, on 10% element visibility.
  };

  /**
   *
   * @param {IntersectionObserverEntry} entries
   * @param {IntersectionObserver} _
   */
  function observerAction([entry], _) {
    // _ -> observer if needed.

    // [entry] => deconstruct the array, which has only 1 obj.
    // if entries  are more than 1, use entries and then the forEach below.
    // entries.forEach((entry) => {
    //   console.log(entry);
    // });
    entry.intersectionRatio <= 0.1
      ? nav.classList.add('sticky')
      : nav.classList.remove('sticky');
    console.log(entry);
  }

  const nav = document.querySelector('.nav');
  const observer = new IntersectionObserver(observerAction, options);
  const target = document.querySelector('.header');
  observer.observe(target);

  // if you want nav to appear right on the header last line, remove threshold,
  // and intersectionRatio === 0, add (sticky)
}
stickyNavAPI();
