'use strict';

// 1. Method(function attached to an object) ->
// 'this' = <Object that is calling the method>

const antoan = {
  name: 'Antoan',
  year: 2000,
  calcAge: function () {
    return 2022 - this.year;
  },

  // Arrow functions -> 'this' = <this of parent function(lexical this)>.
  // Do NOT get own 'this'.
  showYear: () => console.log(this.year), // in debug 'this' is defined,
  // but, in debug console 'this' here is 'window' object.
};

antoan.calcAge();
antoan.showYear();

// ******************************************
