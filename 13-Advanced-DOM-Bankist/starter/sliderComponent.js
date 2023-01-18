'use strict';

/**
 * Slider Component.
 * https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649001#questions
 */
function sliderComponent() {
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  // https://www.w3schools.com/cssref/css3_pr_transform.php | transform property
  // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX | CSS function

  // INITIALIZING THE SLIDER. Why not do it in the HTML manually, I do not know.

  // 0-slide: 0% | 1st-slide: 100% | 2nd-slide: 200% | 3rd-slide: 300% | ... |
  slides.forEach(
    (slide, index) => (slide.style.transform = `translateX(${100 * index}%)`),
  );
  // to see that the slides are one after the other,
  // remove 'overflow' property from the slider itself.
  // Or watch the video to see more techniques to see them.

  // BUTTONS
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  // Going to next slide(right). meaning removing 100% from X-axis in all slides
  btnRight.addEventListener('click', () => {
    currentSlide++;

    // let's say currentSlide now is, 1. Then, we want this:
    // 0-slide: -100% | 1st-slide: 0% | 2nd-slide: 100% | 3rd-slide: 200%
    // We do it, by substracting the currentSlide from the index.

    // if we are at passing the number of slides, start over.
    // If slides are 3, here currentSlide is 4(slides.length), so we zero it.
    if (currentSlide === slides.length) currentSlide = 0;

    slides.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${
          100 * (index - currentSlide)
        }%)`),
    );
  });
}

sliderComponent();
