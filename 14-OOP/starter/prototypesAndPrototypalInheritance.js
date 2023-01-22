'use strict';

function Vehicle(factory, maxSpeed) {
  this.factory = factory;
  this.maxSpeed = maxSpeed;
}

Vehicle.staticMethod = function () {
  console.log('static method attached to Vehicle');
};

Vehicle.prototype.info = function () {
  console.log(`Made in ${this.factory}. Max speed: ${this.maxSpeed}`);
};

function Automobile(factory, maxSpeed, color) {
  Vehicle.call(this, factory, maxSpeed); // call parent constructor
  this.color = color;
}

// https://stackoverflow.com/questions/6617780/how-to-call-parent-constructor

// Automobile.prototype = Object.create(Vehicle.prototype); // keeps th proto clean
// Automobile.prototype.constructor = Automobile; // repair the inherited cnstrctor
Automobile.prototype.startEngine = function () {
  console.log(`Starting engine on car made in ${this.factory}`);
};

// ABOVE WAY OR BELOW WAY ? I think they kinda work the same.

Object.setPrototypeOf(Automobile.prototype, Vehicle.prototype);

// this sets a __proto__ to the prototype property (of the Constructor function)
// Now, Vehicle.prototype is __proto__ for Automobile.prototype. (proto chain).
// So, when we call automobile.info(),
// it will find it, in Vehicle.prototype property|Automobile.prototype.__proto__

// Created objects with constructor fn, their __proto__ is the fn prototype property,
// automobile.__proto__ === Automobile.prototype | true
// automobile.__proto__.__proto__ === Vehicle.prototype | true

const vehicle = new Vehicle('Pegeout', 120);
vehicle.info();

const automobile = new Automobile('BMW', 150, 'green');
automobile.info();
