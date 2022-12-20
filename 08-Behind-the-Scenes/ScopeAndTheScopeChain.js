'use strict';

// NESTED STRUCTURES OF SCOPES (SCOPE CHAIN)

const myName = 'Antoan'; // Global scope -> (that's a global variable).

/**
 *
 */
function first() {
  // Function scope
  const age = 30;

  if (age >= 30) {
    // Block Scope
    // <- *UNCOMMENT* const decade = 3; // block scoped (let/const).
    // <- *UNCOMMENT* var millenial = true; // function scoped (var).
  }

  /**
   * @return {void}
   */
  function second() {
    // Function scope
    console.log(millenial);

    const job = 'frontend dev';
    console.log(`${myName} is ${age}-old ${job}`);
  }

  second();
}

first(); // Global scope
