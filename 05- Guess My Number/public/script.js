'use strict';

const calcSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

const displaySecretNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const displayStyle = function (color, width) {
  document.querySelector('body').style.backgroundColor = color;
  document.querySelector('.number').style.width = width;
};

let secretNumber = calcSecretNumber();
console.log(secretNumber);

let score = 20;
document.querySelector('.score').textContent = score;

let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!!');
    displaySecretNumber(secretNumber);
    if (score > highScore) {
      document.querySelector('.highscore').textContent = score;
      highScore = score;
    }

    displayStyle('#60b347', '30rem');

    //when player loses
  } else if (score <= 1) {
    displayMessage('💥 You Lose!');
    displayScore(0);

    //when the guessed number is different
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? '📈 Too High!!' : '📉 Too Low!!');
    score--;
    displayScore(score);
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = calcSecretNumber();
  console.log(secretNumber);

  displayMessage('Start guessing...');
  displaySecretNumber('?');
  displayScore(score);
  document.querySelector('.guess').value = '';
  displayStyle('#222', '15rem');
});

/* document.querySelector('.again').addEventListener('click', function () {
  location.reload();
}); */
