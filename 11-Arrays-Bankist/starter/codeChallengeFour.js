'use strict';

const dogs = [
  {weight: 22, curFood: 250, owners: ['Alice', 'Bob']},
  {weight: 8, curFood: 200, owners: ['Matilda']},
  {weight: 13, curFood: 275, owners: ['Sarah', 'John']},
  {weight: 32, curFood: 340, owners: ['Michael']},
];

dogs.forEach((dog) => (dog.recFood = dog.weight ** 0.75 * 28));
console.log(dogs);

const sarahDog = dogs.find((dog) => dog.owners.includes('Sarah'));
console.log(sarahDog);

const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood >= dog.recFood * 1.1)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood <= dog.recFood * 0.9)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

console.log(dogs.some((dog) => dog.recFood === dog.curFood));

console.log(
  dogs.some(
    (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1,
  ),
);

const dogsEatingOK = dogs.filter(
  (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1,
);
console.log(dogsEatingOK);

const dogsCopy = dogs.slice();
dogsCopy.sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);
