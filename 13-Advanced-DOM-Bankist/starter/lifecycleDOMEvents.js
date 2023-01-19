'use strict';

// https://www.w3schools.com/tags/att_script_async.asp
// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event

// let's look at a couple of different events,
// that occur in the DOM during a webpage's lifecycle.

// lifecycle -> right from the moment that the page is first accessed,
// until user leaves it.

// first event we need to talk about:
// DOMContentLoaded event.

// this event is fired by the document as soon as the HTML is completely parsed.
// Which means that the HTML has been downloaded and been converted to the DOM tree.

// Also, all deferred scripts must be downloaded and executed before
// the DOMContentLoaded event can happen.

// Event doesn't wait for other things like images, subframes, and async scripts
// to finish loading.

// DOMContentLoaded does not wait for stylesheets to load,
// however deferred scripts do wait for stylesheets,
// and DOMContentLoaded queues behind deferred scripts.

// https://www.w3schools.com/tags/att_script_async.asp

document.addEventListener('DOMContentLoaded', function (event) {
  console.log(
    'JS deferred scripts loaded, ' +
      'which scripts wait for the CSS first, HTML parsed, event fired.',
  );
  console.log(event);
});

// We can now execute code that should only be executed after the DOM is loaded,
// and available.

// In fact, we want ALL our code to be executed after the DOM is ready, right?

// Does that mean we should wrap our entire code into an event handler?

// No. We do not need to od that.

// That's because we have the script tag, which is the one that imports the JS,
// into the HTML, right at the end of the body.
// Basically, it's the last thing that is going to be read in the HTML.

// The browser will only find our script tag, when the rest of HTML is already
// parsed.

// So, When we have the script tag, here at the end of the body/HTML,
// we do NOT need to listen for the DOMContentLoaded event.

// There are also other ways of loading JS files with script tag. next lecture.
