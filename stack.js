// eslint-disable-next-line strict
'use strict';

const brackets = {
  '(': ')',
  '[': ']',
  '{': '}',
};

const isBracketOpen = function (bracket) {
  if (bracket === '{' || bracket === '[' || bracket === '(') return true;
  return false;
};

const openBracketsStack = [];

const str = '[{}]';
const str1 = '[]{}({})';
const str2 = '{]';

const areBracketsValid = function (str) {
  for (const bracket of str) {
    if (isBracketOpen(bracket)) {
      openBracketsStack.push(bracket);
      continue;
    }

    const lastOpenBracket = openBracketsStack.pop();

    if (!(brackets[lastOpenBracket] === bracket)) {
      console.log('Invalid.');
      return;
    }
  }
  console.log('Valid.');
};

areBracketsValid(str);
areBracketsValid(str1);
areBracketsValid(str2);
