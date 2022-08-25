let random = () => {
    return Math.floor(Math.random() * 3);
}

let getComputerChoice = () => {
    let choice = random();
    
    switch(choice) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

let getPlayerChoice = (playerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" || playerSelection ===  "paper" || playerSelection ===  "scissors") {
        return playerSelection;
    }
    else {
        console.log("Nope")
    }
}

let playGame = (playerSelection, computerSelection) => {
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats Rock"
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scisors beats Paper"
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats Scissors"
    }
    else if (computerSelection === "rock" && playerSelection === "paper") {
        return "You win! Paper beats Rock"
    }
    else if (computerSelection === "paper" && playerSelection === "scissors") {
        return "You win! Scisors beats Paper"
    }
    else if (computerSelection === "scissors" && playerSelection === "rock") {
        return "You win! Rock beats Scissors"
    }
    else {
        return "Thats a tie!"
    }
}

let game = () => {
    let playerScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < 5; i++) {
        result = playGame(getPlayerChoice("rock"), getComputerChoice());
        console.log(result)
        if (result.includes("win")) {
            playerScore += 1;
        }
        else if (result.includes("lose")) {
            computerScore += 1;
        }
        else if (result.includes("tie")) {
            //do nothing
        }
    }

    //console.log(playerScore)
    //console.log(computerScore)

    let end = (playerScore > computerScore) ? `You won with ${playerScore} to ${computerScore}!` :
        (playerScore < computerScore) ? `You lost with ${playerScore} to ${computerScore}!` :
        `You tied with ${playerScore} to ${computerScore}!`;
    
    console.log(end)
}

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice("rock");

game();