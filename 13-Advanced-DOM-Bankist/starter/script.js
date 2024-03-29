'use strict';

// Modal window
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648433#questions
// 79. PROJECT #2: Modal Window - 81. Handling an "Esc" Keypress Event
const openAccountModalWindow = function () {
  const modal = document.querySelector('.modal');
  const overlay = document.querySelector('.overlay');
  const btnCloseModal = document.querySelector('.btn--close-modal');
  const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

  const openModal = function (event) {
    console.log(event);
    // https://stackoverflow.com/questions/1291942/what-does-javascriptvoid0-mean
    // https://stackoverflow.com/questions/1357118/event-preventdefault-vs-return-false
    event.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  };

  const closeModal = function (event) {
    console.log(event);

    modal.classList.add('hidden');
    overlay.classList.add('hidden');
  };

  btnsOpenModal.forEach((btnOpenModal) =>
    btnOpenModal.addEventListener('click', openModal),
  );

  btnCloseModal.addEventListener('click', closeModal);
  overlay.addEventListener('click', closeModal);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
};

openAccountModalWindow();

// Smooth Scroll
// 188. Implementing Smooth Scrolling
/**
 * Two ways of applying smooth scroll
 *
 * 1st will be a bit more old school, which will allow us to see
 * a couple of interesting stuff (manually calculating the values)
 *
 * 2nd the more modern way, which only works in super modern browsers.
 */
const smoothScroll = function () {
  // https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648955#questions
  const btnToScroll = document.querySelector('.btn--scroll-to');
  const sectionToBeScrolled = document.getElementById('section--1');

  // 1st way of doing it. Old school, manually calculating the position.
  const oldSchoolScrollListener = function () {
    // 1. we get the coordinates of the element that we want to scroll to.
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    const sectionCoordinates = sectionToBeScrolled.getBoundingClientRect();

    console.log(sectionCoordinates);

    // we can get the current scroll position
    console.log(
      'Current scroll position (X/Y): ',
      // current top-edge position of the viewport to the top of the page.
      window.pageXOffset,
      // current position of the viewport and the left of the page.
      window.pageYOffset,
    );

    // We can read the height and width of the viewport
    // viewport ->
    // the rectangle in which we can see the current portion of the page.
    // NOT INCLUDING THE SCROLLBARS,
    // just the dimensions of the viewport available for the ACTUAL content.
    console.log(
      'width/height of viewport: ',
      document.documentElement.clientWidth,
      document.documentElement.clientHeight,
    );

    // Scrolling

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTo
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollTo
    // https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648955#questions

    // check docs, there is just to pass section.x, section.y
    const scrollOptions = {
      // NOT relative to the viewport. By adding the scrolled space ->
      // ABSOLUTE position of the element based on the document.
      // the section space until the viewport edge+the scrolled space in the bar

      // CURRENT POSITION RELATIVE TO THE VIEWPORT
      //                +
      // THE ALREADY SCROLLED SPACE/OFFSET based on the whole document itself.

      top: sectionCoordinates.top + window.pageYOffset, // top == y
      left: sectionCoordinates.left + window.pageXOffset, // left == x
      behavior: 'smooth',
    };
    console.log(scrollOptions);
    window.scrollTo(scrollOptions);
  };

  // so that there is not error in the script
  console.log(oldSchoolScrollListener);

  // 2nd way of doing it. modern web
  const modernWebScrollListener = function (event) {
    console.log(event);

    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    const scrollIntoViewOptions = { behavior: 'smooth' };
    sectionToBeScrolled.scrollIntoView(scrollIntoViewOptions);
    // Align with the bottom of the el. there is other way-options. CHECK DOCS:
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    // sectionToBeScrolled.scrollIntoView(false, scrollIntoViewOptions);
  };

  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  // btnToScroll.addEventListener('click', oldSchoolScrollListener);
  btnToScroll.addEventListener('click', modernWebScrollListener);
};

smoothScroll();
