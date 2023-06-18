'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number !';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);

  if (!guess) {
    displayMessage('🚫 No number');
    // document.querySelector('.message').textContent = '🚫 No number';
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number !');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🧨 You lost the game !');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // Score reset
  score = 20;
  document.querySelector('.score').textContent = score;

  // Message reset
  displayMessage('Start guessing...');

  // Input reset
  document.querySelector('.guess').value = '';

  // Background reset
  document.querySelector('body').style.backgroundColor = '#222';
  // Width and number reset

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';

  // Secret number reset
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
