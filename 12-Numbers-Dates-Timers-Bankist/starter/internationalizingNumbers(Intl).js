'use strict';

// last lecture we formatted dates using the internationalization API.
// let's format regular numbers, now.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
const num = 2312312.23;

console.log(num);
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat
// https://www.udemy.com/course/the-complete-javascript-course/learn/lecture/22648915#questions

// const options = {style: 'currency', currency: 'USD'};

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#parameters
// https://tc39.es/proposal-unified-intl-numberformat/section6/locales-currencies-tz_proposed_out.html#sec-issanctionedsimpleunitidentifier
// const options = {style: 'unit', unit: 'kilometer'};
// const options = {style: 'unit', unit: 'meter'};
const options = {style: 'unit', unit: 'kilogram'};

const numFormatterBG = new Intl.NumberFormat('bg-BG', options);
const numFormatterUS = new Intl.NumberFormat('en-US', options);
const numFormatterUK = new Intl.NumberFormat('en-UK', options);
const numFormatterDE = new Intl.NumberFormat('de-DE', options);

console.log('BG: ' + numFormatterBG.format(num));
console.log('US: ' + numFormatterUS.format(num));
console.log('UK: ' + numFormatterUK.format(num));
console.log('DE: ' + numFormatterDE.format(num));
