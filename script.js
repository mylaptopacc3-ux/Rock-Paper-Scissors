const choice = ["rock", "paper", "scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

function playRound(playerChoice, computerChoice) {
    if (!choice.includes(playerChoice)) {
        return "Invalid choice. Please choose rock, paper, or scissors.";
    }
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } else {
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
        if (!playerChoice || !choice.includes(playerChoice.toLowerCase())) {
            console.log("Invalid input or game cancelled. Skipping round.");
            continue;
        }


        const computerChoice = getComputerChoice();
        const result = playRound(playerChoice, computerChoice);
        console.log('Round ' + (i + 1) + ': ' + result);

        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }
    console.log(`Final Score - You: ${playerScore} | Computer: ${computerScore}`);

    if (playerScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (playerScore < computerScore) {
        console.log("Sorry, you lost the game. Better luck next time!");
    } else {
        console.log("It's a tie game!");
    }

}      
game();