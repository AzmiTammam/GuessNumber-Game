'use strict';

const secretNumber = Math.trunc(Math.random() * 35) + 1;
let score = 10;

document.querySelector('.number').textContent = '?';

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    // When the player wins
    document.querySelector('.message').textContent = '🎉 Correct Number !';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.highscore').textContent = score
  } else if (guess > secretNumber) {
    // When guess too high
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // When score equal 0
      document.querySelector('.message').textContent = '🥲 GAME OVER!';
      score--;
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    // When guess too low
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥲 GAME OVER!';
      score--;
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing... ';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = 10;
  document.querySelector('.guess').value = '';
  score = 10;
  secretNumber = Math.trunc(Math.random() * 35) + 1;
  document.querySelector('.highscore').textContent = score
});
