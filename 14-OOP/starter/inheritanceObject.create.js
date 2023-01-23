'use strict';

// Parent class for StudentProto
// StudentProto.__proto__ === PersonProto object
const PersonProto = {
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },

  calcAge() {
    console.log(2037 - this.birthYear);
  },
};

// Object to serve as __proto__ to Student objects.| Child class of PersonProto
const StudentProto = Object.create(PersonProto);
// setting: StudentProto.__proto__ === PersonProto

StudentProto.init = function (firstName, birthYear, course) {
  PersonProto.init.call(this, firstName, birthYear);
  this.course = course;
};

StudentProto.introduce = function () {
  console.log(`Hello, I am ${this.firstName} and I study ${this.course}`);
};

// setting: steven.__proto__ === StudentProto object | PROTOTYPE CHAIN => READY
const steven = Object.create(StudentProto);
steven.init('Steven', 2000, 'JS');
steven.calcAge();
steven.introduce();
