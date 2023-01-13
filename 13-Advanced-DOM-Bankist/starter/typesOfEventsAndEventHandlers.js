'use strict';

// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_bubbling
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#fixing_the_problem_with_stoppropagation
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events#event_capture

// An event is basically a signal, that is dispatched by a certain DOM node.
// Signal means that something has happened.
// Example: A click somewhere or mouse moving or user triggering the full screen
// Anything of importance, that happens on our webpage, generates an event.

// We can listen to these events by using EventListeners.
// Then we can handle them if we'd like.

// No matter if we handle a certain event or not,
// the event will ALWAYS be dispatched.

// Let's look at another type of event, which is the 'mouseenter' event

const h1 = document.querySelector('h1');

// https://developer.mozilla.org/en-US/docs/Web/Events
// different events.

// Two more ways of listening for events.

// 'mouseenter', when mouse enters a certain el. it dispatches.
// https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseenter_event
// https://developer.mozilla.org/en-US/docs/Web/Events#event_index
// https://developer.mozilla.org/en-US/docs/Web/API/Element#events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// WE usually ALWAYS use the addEventListener method. not the 'on-event' prop.
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

h1.addEventListener('mouseenter', function () {
  console.log('addEventListener: Your are reading the heading!');
});

// OLD SCHOOL WAY

// There is another way of attaching an event listener to an element.
// using the so called 'on-event' property directly on the element.

// ctrl + '.onmouseenter' click, to see the Interface.
// https://microsoft.github.io/PowerBI-JavaScript/interfaces/_node_modules_typedoc_node_modules_typescript_lib_lib_dom_d_.globaleventhandlers.html
const onmouseenterHanlder = function () {
  console.log('onmouseenter: Your are reading the heading!');
};
h1.onmouseenter = onmouseenterHanlder;

// Read messages
// https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
// 2 things why addEventListener is better.
// 1st: It allows us to add multiple listeners to the same event.

// Second listener for the same event:
h1.addEventListener('mouseenter', function () {
  console.log('addEventListener !2!: Your are reading the heading!');
});

// We cannot do that with the 'on-event' property because it will override it.

// !2nd Advantage!:
// we can actually REMOVE an eventListener with removeEventListener.
// we need the function named(fn declaration/fn expression works too/)

/**
 * test
 */
function eventListenerToRemove() {
  console.log('REMOVE addEventListener: Your are reading the heading!');

  // Removing it
  // https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
  h1.removeEventListener('mouseenter', eventListenerToRemove);
}

h1.addEventListener('mouseenter', eventListenerToRemove);
