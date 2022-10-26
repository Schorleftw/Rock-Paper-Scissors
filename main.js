// Make Buttons accessible and declare variables
const ghost = document.getElementById("ghost");
const pumpkins = document.getElementById("pumpkins");
const scarecrow = document.getElementById("scarecrow");
let playerScore = 5;
let computerScore = 5;
let currentRound = 0;
let Pcounter = document.querySelector(".p-score");
let Ccounter = document.querySelector(".c-score");
let prompt = document.getElementById("prompt");
let restart = document.getElementById("restart");
let round = document.getElementById("round");

// Relevant for computer choice
let random = () => {
    return Math.floor(Math.random() * 3);
}

let getComputerChoice = () => {
    let choice = random();
    
    switch(choice) {
        case 0:
            return "ghost";
        case 1:
            return "pumpkins";
        case 2:
            return "scarecrow";
    }
}

// Compare the Player Selection against the Computer Selection

let compare = (playerSelection, computerSelection) => {
    if (playerSelection === "ghost" && computerSelection === "pumpkins") {
        return "You lose! Paper beats Rock"
    }
    else if (playerSelection === "pumpkins" && computerSelection === "scarecrow") {
        return "You lose! Scisors beats Paper"
    }
    else if (playerSelection === "scarecrow" && computerSelection === "ghost") {
        return "You lose! Rock beats Scissors"
    }
    else if (computerSelection === "ghost" && playerSelection === "pumpkins") {
        return "You win! Paper beats Rock"
    }
    else if (computerSelection === "pumpkins" && playerSelection === "scarecrow") {
        return "You win! Scisors beats Paper"
    }
    else if (computerSelection === "scarecrow" && playerSelection === "ghost") {
        return "You win! Rock beats Scissors"
    }
    else if (playerSelection === computerSelection) {
        return "Thats a tie!"
    }
}

// Main function for playing the game

window.addEventListener("click", function game(e) {
    let choice;
    let result;

    if (e.target.className === "Ghost" || e.target.className === "Pumpkins" || e.target.className === "Scarecrow") {
        choice = e.target.className;
        choice = choice.toLowerCase();
        computerChoice = getComputerChoice();
        console.log(computerChoice);
        result = compare(choice, computerChoice);
    }
    else {
        //do nothing
    }

    if (result !== undefined && result.includes("win")) {
        computerScore -= 1;
        Ccounter.innerHTML = `Enemy Lives: ${computerScore}`;
        prompt.innerHTML = "You win this round!";
        document.getElementById("skull").src = `images/${computerChoice}` + ".png";
        currentRound++;
        round.innerHTML = `Round: ${currentRound}`;
    }
    else if (result !== undefined && result.includes("lose")) {
        playerScore -= 1;
        Pcounter.innerHTML = `Your Lives: ${playerScore}`;
        prompt.innerHTML = "You lose one live!";
        document.getElementById("skull").src = `images/${computerChoice}` + ".png";
        currentRound++;
        round.innerHTML = `Round: ${currentRound}`;
    }
    else if (result !== undefined && result.includes("tie")) {
        prompt.innerHTML = "Thats a tie!";
        document.getElementById("skull").src = `images/${computerChoice}` + ".png";
        currentRound++;
        round.innerHTML = `Round: ${currentRound}`;
    }

    if (playerScore === 0) {
        prompt.innerHTML = "The computer defeated you!";
        document.getElementById("restart").removeAttribute("hidden");
    }
    else if (computerScore === 0) {
        prompt.innerHTML = "You did it! You won!";
        document.getElementById("restart").removeAttribute("hidden");
    }
});


restart.addEventListener("click", () => {
    window.location.reload();
});