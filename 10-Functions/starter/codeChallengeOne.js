'use strict';

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    let promptMessage = `${this.question}`;
    for (const option of this.options) {
      promptMessage += `\n${option}`;
    }
    const userAnswer = Number(prompt(promptMessage));

    if (typeof userAnswer === 'number' && userAnswer >= 0 && userAnswer <= 3) {
      this.answers[userAnswer]++;
      this.displayResults();
    } else {
      console.log('Try Again!');
      this.registerNewAnswer();
    }
  },
  displayResults(type = 'array') {
    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    } else if (type === 'array') {
      console.log(this.answers);
    }
  },
};

// poll.registerNewAnswer();
const pollBtn = document.querySelector('.poll');
pollBtn.addEventListener('click', poll.registerNewAnswer.bind(poll));

const obj = {
  answers: [5, 2, 3],
  // answers: [1, 5, 3, 9, 6, 1],
};

poll.displayResults.call(obj);
poll.displayResults.call(obj, 'string');
