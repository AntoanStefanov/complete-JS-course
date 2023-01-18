'use strict';

/**
 * Dots.
 * https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649003#questions
 */
function dotsComponent() {
  const slides = document.querySelectorAll('.slide');
  const dotsDiv = document.querySelector('.dots');

  const createDotBtn = (dotNum) => {
    const dotEl = document.createElement('button');

    dotEl.classList.add('dots__dot');

    // https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes
    dotEl.dataset.slide = dotNum; // setting data prop. if 2 words -> slideNum
    // console.log(dotEl.dataset.slide); // getting data prop.

    return dotEl;
  };

  const createDotBtns = () =>
    slides.forEach((_, index) => dotsDiv.appendChild(createDotBtn(index)));

  createDotBtns();
}

dotsComponent();
