'use strict';

// https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API

// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/
// 22648993#questions/13686796

/**
 * Sticky Nav API.
 */
function stickyNavAPI() {
  const nav = document.querySelector('.nav');
  const navHeight = nav.getBoundingClientRect().height;

  const options = {
    root: null, // viewport, if root is omitted, default is viewport, again.

    rootMargin: `-${navHeight}px 0px 0px 0px`,
    // IntersectionObserverEntry.rootBounds
    // 22:01 min
    // https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648993#questions

    threshold: 0, // 10% -> call callback fn, on 10% element visibility.!!!
    // The default is 0 -> on 0.000001% element visibility, callback fn is called.
    // meaning as soon as even one pixel is visible, the callback will be run.

    // and vice versa,
    // on less than 10% element visibility, the callback will be called.
    // on less than 0.000001% element visibility, the callback will be called.

    // 10% -> treshold.
    // Conclusion: if 10% is crossed either way(up or down),
    // the callback will be called.

    // When the target element intersects the treshold, the callback will be run
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

    // entry.intersectionRatio <= 0.1
    //   ? nav.classList.add('sticky')
    //   : nav.classList.remove('sticky');
    // console.log(entry);

    entry.isIntersecting
      ? nav.classList.remove('sticky')
      : nav.classList.add('sticky');

    // if (entry.intersectionRatio === 1) return;
    // // first load on page, header is fully visible.

    // nav.classList.toggle('sticky');
  }

  const observer = new IntersectionObserver(observerAction, options);
  const target = document.querySelector('.header');
  observer.observe(target);

  // if you want nav to appear right on the header last line, remove threshold,
  // and intersectionRatio === 0, add (sticky)
}
stickyNavAPI();

// bottom:847height:757left:90right:1118top:90width:1028x:90y:90
