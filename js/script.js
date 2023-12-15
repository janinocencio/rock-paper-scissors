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

function playRound(playerSelection,computerSelection){
    switch(true) {
        case playerSelection==="rock" && computerSelection==="paper":
            return "You Lose! Paper beats Rock!";
            break;
        case playerSelection==="rock" && computerSelection==="scissors":
            return "You Win! Rock beats Scissors!";
            break;
        case playerSelection==="scissors" && computerSelection==="rock":
            return "You Lose! Rock beats Scissors!";
            break;
        case playerSelection==="scissors" && computerSelection==="paper":
            return "You Win! Scissors beats Paper!";
            break;
        case playerSelection==="paper" && computerSelection==="scissors":
            return "You Lose! Scissors beats Paper!";
            break;
        case playerSelection==="paper" && computerSelection==="rock":
            return "You Win! Paper beats Rock!";
            break;
        case playerSelection===computerSelection:
            console.log("It's a tie! Try again!");
            computerSelection = getComputerChoice();
            playerSelection = getPlayerChoice();
            return playRound(playerSelection,computerSelection);
            break;
    }
}


function game() {
    let scorePlayer = 0
    let scoreComputer = 0
    for (let i=0; i<5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();
        let stringWinLose = playRound(playerSelection,computerSelection);
        console.log(stringWinLose);
        console.log("Score Update:");
        if (stringWinLose.slice(4,7) === "Win"){
            scorePlayer++;
            console.log("Player: " + scorePlayer);
            console.log("Computer: " + scoreComputer);
        } else {
            scoreComputer++;
            console.log("Player: " + scorePlayer);
            console.log("Computer: " + scoreComputer);
        }
        if ((scorePlayer === 3) || (scoreComputer === 3)){
            break;
        }
    }
    console.log("Game over!")
    if (scorePlayer > scoreComputer){
        console.log("Player Wins!");
    } else {
        console.log("Computer Wins!")
    }
}