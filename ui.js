const choices = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}


function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
    else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        playerScore++;
        return "You win! " + playerChoice + " beats " + computerChoice + "!";
    }
    else {
        computerScore++;
        return "Computer wins! " + computerChoice + " beats " + playerChoice + "!";
    }
}

const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');

document.getElementById("rock").addEventListener("click", () => handleClick('rock'));
document.getElementById("paper").addEventListener("click", () => handleClick('paper'));
document.getElementById("scissors").addEventListener("click", () => handleClick('scissors'));



let computerScore = 0;
let playerScore = 0;

function handleClick(playerChoice) {
    computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    resultDiv.textContent = result;
    scoreDiv.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;

    checkWinner();
}

function checkWinner() {
    if (playerScore === 5) {
        resultDiv.textContent = "Congratulations🎉! You won the game!";
        resetGame();
    } else if (computerScore === 5) {
        resultDiv.textContent = "Sorry, computer wins💻. Better luck next time!";
        resetGame();

    }
}

function resetGame() {
    scoreDiv.textContent = `Player Score: ${playerScore} Computer Score: ${computerScore}`;
    playerScore = 0;
    computerScore = 0;
}
document.getElementById("reset").addEventListener("click", resetGame);

