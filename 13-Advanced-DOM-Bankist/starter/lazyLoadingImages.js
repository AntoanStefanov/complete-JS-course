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
    // one threshold, one entry (in callback fn).
    threshold: 0, // 0 %
    rootMargin: '0px 0px 200px 0px',
    // adding 200px on the bottom of the viewport, so that imgs can load sooner.
    // Ideally, we don't want our users to notice, that we are lazy loading
    // these images. All of this, should basically happen in the background,
    // without our users noticing it.
  };

  const loadingImageHandler = function ([entry], observer) {
    console.log(entry);

    // Guard clause.
    if (!entry.isIntersecting) return;

    const lazyImgEl = entry.target;

    lazyImgEl.setAttribute('src', lazyImgEl.dataset.src);

    // lazyImgEl.classList.remove('lazy-img');

    // using event listener instead of removing the class right away. CHECK VIDEO, why is that.
    // https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648999#questions/14423474
    // 12:33 min.

    // when img loading finishes, it will fire this load event
    lazyImgEl.addEventListener('load', () =>
      // remove the blurry filter, once loading is DONE.
      // Slow internet case. check video above 12:33min
      lazyImgEl.classList.remove('lazy-img'),
    );

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
