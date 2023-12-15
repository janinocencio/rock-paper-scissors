function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Rock, Paper, or Scissors?");
    playerChoice = playerChoice.toLowerCase().trim();
    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors") {
        console.log("Invalid choice! Please try again.");
        return getPlayerChoice();
    } else {
        return playerChoice;
    }
}