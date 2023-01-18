'use strict';

// If slideNum = 0:
// 100 * (0 - 0) = 100 * 0 = 0%
// 100 * (1 - 0) = 100 * 1 = 100%
// 100 * (2 - 0) = 100 * 2 = 200%
// 100 * (3 - 0) = 100 * 3 = 300%

// If slideNum = 1:
// 100 * (0 - 1) = 100 * -1 = -100%
// 100 * (1 - 1) = 100 * 0 = 0%
// 100 * (2 - 1) = 100 * 1 = 100%
// 100 * (3 - 1) = 100 * 2 = 200%

// If slideNum = 2:
// 100 * (0 - 2) = 100 * -2 = -200%
// 100 * (1 - 2) = 100 * -1 = -100%
// 100 * (2 - 2) = 100 * 0 = 0%
// 100 * (3 - 2) = 100 * 1 = 100%

/**
 * Slider Component.
 * https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649001#questions
 */
function sliderComponent() {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  let nextSlideNum = 0;

  const goToSlide = (slideNum) => {
    slides.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${100 * (index - slideNum)}%)`),
    );
  };

  // https://www.w3schools.com/cssref/css3_pr_transform.php | transform property
  // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX | CSS function

  // INITIALIZING THE SLIDER. Why not do it in the HTML manually, I do not know.
  goToSlide(nextSlideNum);

  const rightBtnHandler = function () {
    nextSlideNum++;

    // let's say nextSlideNum now is, 1. Then, we want this:
    // 0-slide: -100% | 1st-slide: 0% | 2nd-slide: 100% | 3rd-slide: 200%
    // We do it, by substracting the nextSlideNum from the index.

    // if we are at passing the number of slides, start over.
    // If slides are 3, here nextSlideNum is 4(slides.length), so we zero it.
    if (nextSlideNum === slides.length) nextSlideNum = 0;

    goToSlide(nextSlideNum);

    // We want the active slide to have 0% translation,
    // to make it so, we want the substractaction to be equal to 0.
    // We do that by subtracting the index, by the index itself. 0-based.
  };

  const leftBtnHandler = function () {
    let previousSlideNum = --nextSlideNum;

    if (previousSlideNum === -1) previousSlideNum = slides.length - 1;

    goToSlide(previousSlideNum);
  };

  btnRight.addEventListener('click', rightBtnHandler);
  btnLeft.addEventListener('click', leftBtnHandler);
}

// sliderComponent();

/**
 * Slider Component.
 * https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649001#questions
 */
function sliderComponent() {
  const slides = document.querySelectorAll('.slide');
  const btnRight = document.querySelector('.slider__btn--right');
  const btnLeft = document.querySelector('.slider__btn--left');

  let currentSlideNum = 0;

  const goToCurrentSlide = () => {
    slides.forEach((slide, index) => {
      slide.style.transform = `translate(${100 * (index - currentSlideNum)}%)`;
    });
  };

  // Initialize slider.
  goToCurrentSlide();

  const rightBtnHandler = function () {
    currentSlideNum++;

    if (currentSlideNum === slides.length) currentSlideNum = 0;

    goToCurrentSlide();
  };

  const leftBtnHandler = function () {
    currentSlideNum--;

    if (currentSlideNum === -1) currentSlideNum = slides.length - 1;

    goToCurrentSlide();
  };

  btnRight.addEventListener('click', rightBtnHandler);

  btnLeft.addEventListener('click', leftBtnHandler);
}

sliderComponent();
