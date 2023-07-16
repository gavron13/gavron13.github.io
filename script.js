/*'use strict';
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 19;
document.querySelector('.guess').value = 23;
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number';

    // When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'True number!';
    document.querySelector('.number').textContent = secretNumber;

    //HighScore
    let currentScore = Number(document.querySelector('.score').textContent);
    let highscore = Number(document.querySelector('.highscore').textContent);
    if (currentScore > highscore) {
      highscore = currentScore;
      document.querySelector('.highscore').textContent = highscore;
    }
    //CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // when guessNumber is high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loose the game :(';
      document.querySelector('body').style.backgroundColor = '#8B0000';
    }

    // When guessNumber is low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loose the game :(';
      document.querySelector('body').style.backgroundColor = '#8B0000';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222222';
});
