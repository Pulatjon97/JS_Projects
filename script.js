'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
dfdfdf
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
//↓ here at first it was const, now it is let!
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔️ No Number!';
    displayMessage('⛔️ No Number!');
    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    //CHenging the background-color
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      guess > secretNumber ? '📈Too high!' : '📉Too low!';
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💀 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//JONAS's solution
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing!');
  document.querySelector('.score').textContent = score; //   9 lines of code = ready!
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
/*
    //when guess is too high
   else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💀 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } */

//MY SOLUTION
/*
document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing!');
  document.querySelector('.guess').textContent = 0;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = secretNumber;        9 lines of code = ready!
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = 20;
});
*/ //Only main difference is he changed the secretNumber variable on line #13 from const to let
