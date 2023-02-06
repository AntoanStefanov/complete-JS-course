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
const str3 = '}';

const areBracketsValid = function (str) {
  for (const currentBracket of str) {
    if (isBracketOpen(currentBracket)) {
      openBracketsStack.push(currentBracket);
      continue;
    }

    const lastOpenBracket = openBracketsStack.pop();

    const matchingClosingBracket = brackets[lastOpenBracket];

    if (!(matchingClosingBracket === currentBracket)) {
      console.log('Invalid.');
      return;
    }
  }
  console.log('Valid.');
};

areBracketsValid(str);
areBracketsValid(str1);
areBracketsValid(str2);
areBracketsValid(str3);
