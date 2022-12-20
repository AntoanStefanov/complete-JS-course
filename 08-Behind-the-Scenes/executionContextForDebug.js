'use strict';


// BLOCK SCOPED FUNCTION
if (true) {
  const sayHi = () => console.log('Hi');
  sayHi();
}
// sayHi(); ERROR

const firstName = 'Tony';

/**
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function second(x, y) {
  // console.log(a); Error
  // const timeHandler1 = () => {
  //   console.log('time is out 1');
  // };
  // const timeHandler2 = () => {
  //   console.log('time is out 2');
  // };
  // setTimeout(timeHandler1, 1000);
  const c = x + y;
  return c;
}

const third = function () {
  // Closure -> 'ahola' function ? WTF ?
  console.log('hi third');
  console.log(firstName);
};

third();

/**
 * @param {number} z
 * @param {number} y
 * @return {number} 0;
 */
const aloha = (z, y) => {
  return z + y;
};

/**
 *@return {number} 1
 */
const asd = () => {
  console.log('hi fourth');
  const u = aloha();
  // because 'aloha' func is called inside of a function,
  // I have the func in 'third' func's closure. ??
  return u;
};

const first = function () {
  let a = 1;
  const funcTest = () => {
    // const test = 2;
    console.log('Hello');
    console.log(a);
  };
  funcTest();

  // here we call second func (that's why it's shown in the closure)

  // console.log(c); Error
  const b = second(7, 9);
  // const u = aloha();
  console.log(c);

  a = a + b;
  return a;
};

const x = first();
asd();
console.log(x, firstName);
