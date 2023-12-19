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
    const playerButtons = document.querySelectorAll('.rps-box-player > button');
    playerButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            let playerChoice = event.target;
            switch (true){
                case playerChoice.id === "rock-player":
                    return "rock";
                case playerChoice.id ==="paper-player":
                    return "paper";
                case playerChoice.id ==="scissors-player":
                    return "scissors";
            }
        });
    });
}

function playRound(playerSelection,computerSelection){
    switch(true) {
        case playerSelection==="rock" && computerSelection==="paper":
            return "You Lose! Paper beats Rock!";
        case playerSelection==="rock" && computerSelection==="scissors":
            return "You Win! Rock beats Scissors!";
        case playerSelection==="scissors" && computerSelection==="rock":
            return "You Lose! Rock beats Scissors!";
        case playerSelection==="scissors" && computerSelection==="paper":
            return "You Win! Scissors beats Paper!";
        case playerSelection==="paper" && computerSelection==="scissors":
            return "You Lose! Scissors beats Paper!";
        case playerSelection==="paper" && computerSelection==="rock":
            return "You Win! Paper beats Rock!";
        case playerSelection===computerSelection:
            console.log("It's a tie! Try again!");
            computerSelection = getComputerChoice();
            playerSelection = getPlayerChoice();
            return playRound(playerSelection,computerSelection);
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


const btnStart = document.querySelector('.btn-start');
btnStart.addEventListener('click', game); 