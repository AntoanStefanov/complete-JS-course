'use strict';

const secureBooking = function () {
  // fn called 'secureBooking', bcs this passengerCount variable
  // CANNOT be manipulated and accessed from outside.
  let passengerCount = 0;

  return function () {
    passengerCount++; // increment the variable defined in the PARENT fn.
    console.log('Passenger Count: ' + passengerCount);
  };
};

// booker variable is a function, that secureBooking fn returns.
const booker = secureBooking();

booker();
booker();
booker();
// How the booker fn can update the passengerCount variable,
// that's defined in the secureBooking fn, that has already finished executing.

// The closure makes that possible.

// The environment(secureBooking EC) in which the booker function was created
// !is no longer active.! It is in fact GONE.

// But still the booker function somehow continues
// to have access to the variables that were present at the time
// that the function was created.

// Closure makes a function remember all the variables that existed
// AT THE FUNCTION's BIRTHPLACE essentially.

// We can imagine the secureBooking fn as being the birthplace of the booker fn.
// And so, this function remembers,
// EVERYTHING at its birthplace by the time it was created.

// ANY FUNCTION ALWAYS HAS ACCESS ТО
// THE VARIABLE ENRIROMENT OF THE EXECTUTION CONTEXT IN WHICH THE FN WAS CREATED

// BOOKER FN WAS CREATED IN THE EXECUTION CONTEXT OF SECURE BOOKING,
// so, booker fn has access to 'secureBooking' variable environment.

// CLOSURE: VARIABLE ENRIROMENT ATTACHED to the function, exactly as it was
// when the function was created in a given execution context.

// In a sense, the scope chain is preserved, thorugh closure, even when a scope
// Has been destroyed, bcs its execution context is gone.

// CLOSURE HAS PRIORITY OVER THE SCOPE CHAIN!.

// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648683#overview

console.dir(booker);
