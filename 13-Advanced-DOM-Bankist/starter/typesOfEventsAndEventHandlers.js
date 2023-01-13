'use strict';

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

h1.addEventListener('mouseenter', function () {
  console.log('Mouse entered: Your are reading the heading!');
});

// There is another way of attaching an event listener to an element.
// using the so called 'on-event' property directly on the element.
h1.onmouseenter = function () {
  console.log('Mouse entered: Your are reading the heading!');
};
