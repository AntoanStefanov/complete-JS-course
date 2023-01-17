'use strict';

// One of the most things when building any website is performance.
// And images have by far the biggest impact on page loading.
// So, it's very important that images are optimized on any page.
// For that, we can use a strategy called 'Lazy Loading Images'.

// This one is for Perfomance. While the other things we did so far are more
// visual things.

// This one really impacts how your site works and especially for your users,
// who might have a slow internet connection/low data plan/slow cell phone.

// We always have to think about all users. Not everyone has a super high-end
// computer or the latest phone.

/**
 * Lazy Loading Images.
 * https://www.udemy.com/course/the-complete-javascript-course/ | 199 Lecture.
 */
function lazyLoadingImages() {
  const observerOptions = {
    threshold: 1, // 100 %
  };

  const loadingImageHandler = function ([entry], observer) {
    console.log(entry);

    if (!entry.isIntersecting) return;

    const lazyImgEl = entry.target;
    lazyImgEl.classList.remove('lazy-img');
    lazyImgEl.setAttribute('src', lazyImgEl.dataset.src);
    observer.unobserve(lazyImgEl);
  };

  const observer = new IntersectionObserver(
    loadingImageHandler,
    observerOptions,
  );
  document
    .querySelectorAll('img[data-src]')
    .forEach((el) => observer.observe(el));
}

lazyLoadingImages();
