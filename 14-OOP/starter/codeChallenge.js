'use strict';

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    return this;
  }

  get speedUS() {
    return this.speed / 1.6; // mi/h
  }

  set speedUS(speedUS) {
    this.speed = speedUS * 1.6;
  }
}

class ElectricCarCl extends CarCl {
  #charge; // initializing the needed private property.Works kinda like closure?

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge; // redefining the initial value of the private prop.
  }

  // public API /methods for external code, outside/
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with charge of ${
        this.#charge
      }%.`,
    );
    return this;
  }
}

const electricCar = new ElectricCarCl('Rivian', 120, 23);

console.log(electricCar);
electricCar.accelerate().chargeBattery(100).brake().accelerate().accelerate();
console.log(electricCar);
