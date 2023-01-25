'use strict';

// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22649125#questions

// https://javascript.info/private-protected-properties-methods
// Protected fields start with _. That’s a well-known convention, not enforced at the language level.
// Programmers should only access a field starting with _ from its class and classes inheriting from it.
// Private fields start with #. JavaScript makes sure we can only access those from inside the class.

class Student {
  static #numSubjects = 10;

  university = 'University of Washington';
  #studyHours = 0;
  #course;

  constructor(fullName, birthYear, startYear, course) {
    this.fullName = fullName;
    this._birthYear = birthYear;
    this.startYear = startYear;
    this.#course = course;
  }

  static printCurriculum() {
    console.log(`There are ${this.#numSubjects} subjects`);
  }

  introduce() {
    console.log(
      `I study ${this.#course} at ${this.university}, born in ${
        this.birthYear
      }`,
    );
  }

  study(hours) {
    this.#makeCoffe();
    this.#studyHours += hours;
  }

  #makeCoffe() {
    console.log('Here is your coffe.');
  }

  get testScore() {
    return this._testScore;
  }

  set testScore(score) {
    this._testScore = score > 20 ? score : 0;
  }

  get hoursStudied() {
    return this.#studyHours;
  }
  get birthYear() {
    return this._birthYear;
  }
}

const student = new Student('Antoan', 2000, 2022, 'KST');
console.log(student);
student.introduce();
Student.printCurriculum();
student.study(2);
console.log(student.hoursStudied);
student.testScore = 40;
console.log(student.testScore);
