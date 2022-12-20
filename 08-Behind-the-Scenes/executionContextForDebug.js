const firstName = 'Tony';

const first = () => {
  let a = 1;
  const b = second(7, 9);
  a = a + b;
  return a;
};

/**
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
function second(x, y) {
  const timeHandler1 = () => {
    console.log('time is out 1');
  };
  const timeHandler2 = () => {
    console.log('time is out 2');
  };
  setTimeout(timeHandler1, 1000);
  setTimeout(timeHandler2, 1000);
  const c = x + y;
  return c;
}

const x = first();

console.log(x, firstName);
