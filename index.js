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

// Check if player has won
function hasPlayerWonTheRound(player, computer) {
	return (player === 'Rock' && computer === 'Scissors') || (player === 'Scissors' && computer === 'Paper') || (player === 'Paper' && computer === 'Rock');
}

// Game Variables
let playerScore = 0;
let computerScore = 0;

// Get round results
function getRoundResults(userOption) {
	const computerResult = getRandomComputerResult();
	if (hasPlayerWonTheRound(userOption, computerResult)) {
		playerScore++;
		return `Player wins! ${userOption} beats ${computerResult}`;
	} else if (computerResult === userOption) {
		return `It's a tie! Both chose ${userOption}`;
	} else {
		computerScore++;
		return `Computer wins! ${computerResult} beats ${userOption}`;
	}
}

// Show results
function showResults(userOption) {
	roundResultsMsg.innerText = getRoundResults(userOption);
	computerScoreSpanElement.innerText = computerScore;
	playerScoreSpanElement.innerText = playerScore;
	if (playerScore === 3 || computerScore === 3) {
		winnerMsgElement.innerText = `${playerScore === 3 ? 'Player' : 'Computer'} has won the game!`;
		resetGameBtn.style.display = 'block';
		optionsContainer.style.display = 'none';
	}
}
