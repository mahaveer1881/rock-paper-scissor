const choices = ['rock', 'paper', 'scissor'];
const palyerDisplay = document.getElementById('playerDisplay');
const computerDisplay = document.getElementById('computerDisplay');
const resultDisplay = document.getElementById('result');
let isGamePlaying = false;

let playerScore = 0;
let computerScore = 0;
let totalGames = 0;
const playerScoreDisplay = document.getElementById('playerScoreDisplay');
const computerScoreDisplay = document.getElementById('computerScoreDisplay');
const totalGamesDisplay = document.getElementById('totalGamesDisplay');

const startButton = document.getElementById('start-btn');
const startContainer = document.getElementById('start-container');
const gameContainer = document.getElementById('game-container');

function startGame() {
  isGamePlaying = true;
  startContainer.style.display = 'none';
  gameContainer.style.display = 'flex';
}

function endGame() {
  isGamePlaying = false;
  startContainer.style.display = 'flex';
  gameContainer.style.display = 'none';
  resetScores();
}

function reStartGame() {
  resetScores();
}

function resetScores() {
  playerScore = 0;
  computerScore = 0;
  totalGames = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
  totalGamesDisplay.textContent = totalGames;

  palyerDisplay.textContent = '';
  computerDisplay.textContent = '';
  resultDisplay.textContent = '';
}

function playGame(playerChoice) {
  if (!isGamePlaying) return;

  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = '';
  if (playerChoice === computerChoice) {
    result = "It's a Tie";
  } else {
    switch (playerChoice) {
      case 'rock':
        result = computerChoice === 'scissor' ? 'You Win!' : 'You Lose!';
        break;
      case 'paper':
        result = computerChoice === 'rock' ? 'You Win!' : 'You Lose!';
        break;
      case 'scissor':
        result = computerChoice === 'paper' ? 'You Win!' : 'You Lose!';
        break;
    }
  }
  palyerDisplay.textContent = playerChoice;
  computerDisplay.textContent = computerChoice;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove('greenText', 'redText');
  totalGames++;
  totalGamesDisplay.textContent = totalGames;
  switch (result) {
    case 'You Win!':
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      resultDisplay.classList.add('greenText');
      break;
    case 'You Lose!':
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      resultDisplay.classList.add('redText');
      break;
  }
}
