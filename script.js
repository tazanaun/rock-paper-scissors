const WINNING_NUM = 5;
function getComputerChoice() {
	randomInt = (max) => Math.floor(Math.random() * max);
	let num = randomInt(3);
	if (num == 0) {
		return "rock";
	} else if (num == 1) {
		return "paper";
	} else {
		return "scissors";
	}
}
function playRound(humanChoice, computerChoice) {
	if (humanChoice == computerChoice) {
	} else if (humanChoice == "rock") {
		if (computerChoice == "paper") {
			computerScore++;
		} else {
			humanScore++;
		}
	} else if (humanChoice == "paper") {
		if (computerChoice == "scissors") {
			computerScore++;
		} else {
			humanScore++;
		}
	} else {
		if (computerChoice == "rock") {
			computerScore++;
		} else {
			humanScore++;
		}
	}
	updateDisplay(humanChoice, computerChoice);
}
let humanScore = 0;
let computerScore = 0;
rockBtn = document.querySelector(".rock");
paperBtn = document.querySelector(".paper");
scissorsBtn = document.querySelector(".scissors");

rockBtn.addEventListener("click", () => {
	playRound("rock", getComputerChoice());
});
paperBtn.addEventListener("click", () => {
	playRound("paper", getComputerChoice());
});
scissorsBtn.addEventListener("click", () => {
	playRound("scissors", getComputerChoice());
});

function updateDisplay(humanChoice, computerChoice) {
	let display = document.querySelector(".display");
	let winnerText = document.querySelector(".winner");
	winnerText.textContent = "";
	let humanText = document.querySelector(".human-choice");
	let computerText = document.querySelector(".computer-choice");

	humanText.textContent = `You picked ${humanChoice}`;
	computerText.textContent = `Computer picked ${computerChoice}`;
	let humanScoreText = document.querySelector(".human-score");
	let computerScoreText = document.querySelector(".computer-score");

	humanScoreText.textContent = `Your score ${humanScore}`;
	computerScoreText.textContent = `Computer score ${computerScore}`;
	if (humanScore >= WINNING_NUM) {
		winnerText.textContent = "You are the Winner!";
		display.appendChild(winnerText);
		humanScore = 0;
		computerScore = 0;
	} else if (computerScore >= WINNING_NUM) {
		winnerText.textContent = "You Lose!";
		display.appendChild(winnerText);
		humanScore = 0;
		computerScore = 0;
	}
}
