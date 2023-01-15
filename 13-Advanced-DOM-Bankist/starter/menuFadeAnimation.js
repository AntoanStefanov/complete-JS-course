'use strict';

/**
 * Menu Fade Animation.
 */
function menuFadeAnimation() {
  const nav = document.querySelector('.nav');

  /**
   * @param {Event} event
   * @param {String} opacity
   */
  function hoverHandler(event, opacity = '100%') {
    const target = event.target;
    const elTagName = target.tagName.toLowerCase();

    // There are no child elements that we can accidentally hover over,
    // so we do NOT use closest method. check tabbedComponent, for more.

    if (elTagName !== 'a') return;

    // if (target.classList.contains('nav__link')) {
    const anchorEl = target;

    const anchorElSiblings = anchorEl
      .closest('.nav__links')
      .querySelectorAll('.nav__link');

    const logo = nav.querySelector('#logo');

    anchorElSiblings.forEach((anchor) => {
      if (anchor !== anchorEl) {
        anchor.style.opacity = opacity;
      }
    });

    logo.style.opacity = opacity;
    // }
  }

  // https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648983#questions
  // 16:10
  // nav.addEventListener('mouseover', hoverHandler.bind('60%'));
  // nav.addEventListener('mouseover', hoverHandler.bind(nav, '60%'));

  nav.addEventListener('mouseover', (event) => hoverHandler(event, '60%'));
  nav.addEventListener('mouseout', (event) => hoverHandler(event));

  // mouseover is similar to mouseenter, with the BIG diffenence that,
  // mouseenter EVENT does not bubble. (same event going upwards to the root.)
  // !!!!!!!!!!!!!!! DOCS !!!!!!!!!!!!!!!!! READ IT.
  // https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event#usage_notes
  // opposites: mouseenter -> mouseleave, mouseover -> mouseout
}

menuFadeAnimation();
