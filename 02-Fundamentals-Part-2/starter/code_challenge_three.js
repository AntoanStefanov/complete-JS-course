'use strict';

const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  mass: 78,
  height: 1.69,

  calcBMI: function () {
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

const john = {
  firstName: 'John',
  lastName: 'Smith',
  mass: 92,
  height: 1.95,

  calcBMI: function () {
    if (!this.BMI) {
      // ?
      this.BMI = this.mass / this.height ** 2;
    }
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
  console.log(
    `${mark.firstName}'s BMI (${mark.BMI}) is higher than ${john.firstName}'s (${john.BMI})`
  );
} else {
  console.log(
    `${john.firstName}'s BMI (${john.BMI}) is higher than ${mark.firstName}'s (${mark.BMI})`
  );
}

// repeating the calcBMI method. DRY violation, we will see how to avoid in later,
// using OOP.
