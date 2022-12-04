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
    this.BMI = this.mass / this.height ** 2;
    return this.BMI;
  },
};

mark.calcBMI();
john.calcBMI();

if (mark.BMI > john.BMI) {
  console.log(`Mark's BMI (${mark.BMI}) is higher than John's (${john.BMI})`);
} else {
  console.log(`Mark's BMI (${mark.BMI}) is lower than John's (${john.BMI})`);
}
