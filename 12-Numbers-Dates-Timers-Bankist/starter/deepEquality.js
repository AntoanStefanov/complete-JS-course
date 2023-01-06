'use strict';
// https://dmitripavlutin.com/how-to-compare-objects-in-javascript/
const deepEqual = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    const val1 = object1[key];
    const val2 = object2[key];
    const areObjects = isObject(val1) && isObject(val2);
    if (
      (areObjects && !deepEqual(val1, val2)) ||
      (!areObjects && val1 !== val2)
    ) {
      return false;
    }
  }
  return true;
};
const isObject = function (object) {
  return object != null && typeof object === 'object';
};

const hero1 = {
  name: 'Batman',
  address: {
    city: 'Gotham',
  },
};
const hero2 = {
  name: 'Batman',
  address: {
    city: 'Gotham',
  },
};
deepEqual(hero1, hero2); // => true