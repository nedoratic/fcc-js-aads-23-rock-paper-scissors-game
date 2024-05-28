// DOM Elements Variables
const playerScoreSpanElement = document.getElementById('player-score');
const computerScoreSpanElement = document.getElementById('computer-score');
const roundResultsMsg = document.getElementById('results-msg');
const winnerMsgElement = document.getElementById('winner-msg');
const optionsContainer = document.querySelector('.options-container');
const resetGameBtn = document.getElementById('reset-game-btn');
const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

// Get random computer result
function getRandomComputerResult() {
	const options = ['Rock', 'Paper', 'Scissors'];
	const randomIndex = Math.floor(Math.random() * options.length);
	return options[randomIndex];
}
