'use strict';

const textAreaEl = document.createElement('textarea');
const buttonEl = document.createElement('button');

document.body.append(textAreaEl);
document.body.append(buttonEl);

buttonEl.addEventListener('click', () => {
  const rawText = textAreaEl.value;
  let words = rawText.split('\n');
  words = words.map((word) => word.trim());
  for (const word of words) {
    const [firstPart, secondPart] = word.split('_');
    const lowerFirstPart = firstPart.toLowerCase();
    const lowerSecondPart =
      secondPart[0].toUpperCase() + secondPart.slice(1).toLowerCase();
    console.log((lowerFirstPart + lowerSecondPart).padEnd(20, ' ') + '*');
  }
});
