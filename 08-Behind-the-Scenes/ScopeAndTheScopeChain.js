const myName = 'Antoan';

/**
 *
 */
function first() {
  const age = 30;

  if (age >= 30) {
    const decade = 3;
    var millenial = true;
  }

  /**
   *
   */
  function second() {
    console.log(millenial);

    const job = 'frontend dev';
    console.log(`${myName} is ${age}-old ${job}`);
  }

  second();
}

first();

// NESTED STRUCTURES OF SCOPES (SCOPE CHAIN)
