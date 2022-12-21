'use strict';

// BLOCK SCOPED FUNCTION
if (true) {
  const sayHi = () => console.log('Hi');
  sayHi();
}
// sayHi(); ERROR

const firstName = 'Tony';

// const hello = function () {
//   console.log('Hello');
// };

/**
 * !this one is in global scope, debug with live-server,!
 * !and google chrome debug from VSCode.!
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

const test = function () {
  const x = 5;
  second();

  const test1 = () => {
    // if aloha()/x/third()/ is not used in this scope:
    // function /f()/ 's CLOSURE DOES NOT HAVE ACCESS TO IT.
    // THAT'S JUST BECAUSE THE FUNCTION/VARIABLE IS NOT USED ANYWHERE.
    aloha();
    console.log(x); // comment it ! Check f()'s closure
    third();
    return 0;
  };

  const aloha = (z, y) => {
    return z + y;
  };

  const third = () => {
    console.log('hi third');
    console.log(firstName);
  };

  const f = () => {
    // Closure -> 'ahola' function ? WTF ? check test1()
    console.log('hi third');
    console.log(firstName);
  };
  third();
  f();

  test1();
};

test();

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
  // const b = second(7, 9);
  // const u = aloha();
  console.log(c);

  a = a + b;
  return a;
};

const x = first();
asd();
console.log(x, firstName);
