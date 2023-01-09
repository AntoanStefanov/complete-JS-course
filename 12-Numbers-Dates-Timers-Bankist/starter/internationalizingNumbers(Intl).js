'use strict';

// last lecture we formatted dates using the internationalization API.
// let's format regular numbers, now.

const num = 2312312.23;

console.log(num);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648915#questions
const numFormatterBG = new Intl.NumberFormat('bg-BG');
const numFormatterUS = new Intl.NumberFormat('en-US');
const numFormatterUK = new Intl.NumberFormat('en-UK');
const numFormatterDE = new Intl.NumberFormat('de-DE');

console.log('BG: ' + numFormatterBG.format(num));
console.log('US: ' + numFormatterUS.format(num));
console.log('UK: ' + numFormatterUK.format(num));
console.log('DE: ' + numFormatterDE.format(num));
