'use strict';

/**
 * Slider Component.
 * https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649001#questions
 */
function sliderComponent() {
  const slides = document.querySelectorAll('.slide');

  let nextSlideNum = 0;

  const goTonextSlide = (nextSlideNum) => {
    slides.forEach(
      (slide, index) =>
        (slide.style.transform = `translateX(${
          100 * (index - nextSlideNum)
        }%)`),
    );
  };

  // https://www.w3schools.com/cssref/css3_pr_transform.php | transform property
  // https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translateX | CSS function

  // INITIALIZING THE SLIDER. Why not do it in the HTML manually, I do not know.
  goTonextSlide(nextSlideNum);

  // 0-slide: 0% | 1st-slide: 100% | 2nd-slide: 200% | 3rd-slide: 300% | ... |

  // to see that the slides are one after the other,
  // remove 'overflow' property from the slider itself.
  // Or watch the video to see more techniques to see them.

  // BUTTONS
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');

  // Going to next slide(right). meaning removing 100% from X-axis in all slides
  btnRight.addEventListener('click', () => {
    nextSlideNum++;

    // let's say nextSlideNum now is, 1. Then, we want this:
    // 0-slide: -100% | 1st-slide: 0% | 2nd-slide: 100% | 3rd-slide: 200%
    // We do it, by substracting the nextSlideNum from the index.

    // if we are at passing the number of slides, start over.
    // If slides are 3, here nextSlideNum is 4(slides.length), so we zero it.
    if (nextSlideNum === slides.length) nextSlideNum = 0;

    goTonextSlide(nextSlideNum);

    // We want the active slide to have 0% translation,
    // to make it so, we want the substractaction to be equal to 0.
    // We do that by subtracting the index, by the index itself. 0-based.
  });
}

sliderComponent();
