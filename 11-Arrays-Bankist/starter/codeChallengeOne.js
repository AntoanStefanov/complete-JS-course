'use strict';

const checkDogs = function (dogsJulia, dogsKate) {
  // creating shallow copy,
  // parameters because it's a bad practice to mutate function
  const dogsJuliaCpy = [...dogsJulia].slice(1, -2);

  const dogs = [...dogsJuliaCpy, ...dogsKate];

  dogs.forEach((years, index) => {
    if (years >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${years} years old.`,
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy.`);
    }
  });
};

checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
