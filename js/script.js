function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3);
    if (computerChoice === 0) {
        return "rock";
    } else if (computerChoice === 1) {
        return "paper";
    } else if (computerChoice === 2) {
        return "scissors";
    }
};

function getPlayerChoice() {
    let playerChoiceText = document.querySelector('.choice-player');

    return new Promise(resolve => {
        const playerButtons = document.querySelectorAll('.rps-box-player > button');
        playerButtons.forEach(function(button) {
            button.addEventListener('click', function(event) {
                let playerChoice = event.target;
                switch (true){
                    case playerChoice.id === "rock-player":
                        playerChoiceText.textContent = "Player plays ROCK!";
                        resolve("rock");
                        break;
                    case playerChoice.id ==="paper-player":
                        playerChoiceText.textContent = "Player plays PAPER!";
                        resolve("paper");
                        break;
                    case playerChoice.id ==="scissors-player":
                        playerChoiceText.textContent = "Player plays SCISSORS!";
                        resolve("scissors");
                        break;
                };
            });
        });
    });
};

function playRound(playerSelection,computerSelection){
    const winnerRound = document.querySelector('.mid-winner > h4');
    switch(true) {
        case playerSelection==="rock" && computerSelection==="paper":
            return winnerRound.textContent = "You Lose! Paper beats Rock!";
        case playerSelection==="rock" && computerSelection==="scissors":
            return winnerRound.textContent = "You Win! Rock beats Scissors!";
        case playerSelection==="scissors" && computerSelection==="rock":
            return winnerRound.textContent = "You Lose! Rock beats Scissors!";
        case playerSelection==="scissors" && computerSelection==="paper":
            return winnerRound.textContent = "You Win! Scissors beats Paper!";
        case playerSelection==="paper" && computerSelection==="scissors":
            return winnerRound.textContent = "You Lose! Scissors beats Paper!";
        case playerSelection==="paper" && computerSelection==="rock":
            return winnerRound.textContent = "You Win! Paper beats Rock!";
        case playerSelection===computerSelection:
            return winnerRound.textContent = "It's a tie! Try again!";
    };
};


async function game() {
    const scoreCurrent = document.querySelector('.game-name > h4')
    let scorePlayer = 0
    let scoreComputer = 0
    for (let i=0; i<5; i++) {
        let computerSelection = getComputerChoice();
        let playerSelection = await getPlayerChoice();
        let stringWinLose = playRound(playerSelection,computerSelection);
        
        while (stringWinLose.slice(7,10) === "tie") {
            computerSelection = getComputerChoice();
            playerSelection = await getPlayerChoice();
            stringWinLose = playRound(playerSelection,computerSelection);
        }

        if (stringWinLose.slice(4,7) === "Win"){
            scorePlayer++;
            scoreCurrent.textContent = "Player: " + scorePlayer + " | Computer: " + scoreComputer;
        } else if (stringWinLose.slice(4,7) === "Los") {
            scoreComputer++;
            scoreCurrent.textContent = "Player: " + scorePlayer + " | Computer: " + scoreComputer;
        }
        if ((scorePlayer === 3) || (scoreComputer === 3)){
            break;
        }
    };
    const startDiv = document.querySelector('.start')
    const winnerGame = document.createElement('p')
    if (scorePlayer > scoreComputer){
        winnerGame.textContent = "Game Over! Player Wins";
        startDiv.insertBefore(winnerGame,btnStart)
    } else {
        winnerGame.textContent = "Game Over! Computer Wins";
        startDiv.insertBefore(winnerGame,btnStart)
    };
};


const btnStart = document.querySelector('.btn-start');
btnStart.addEventListener('click', () => {
    game();
    btnStart.disabled = true;
});