// Make Buttons accessible and declare variables
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let playerScore = 5;
let computerScore = 5;
let Pcounter = document.querySelector(".p-score");
let Ccounter = document.querySelector(".c-score");
let prompt = document.getElementById("prompt");

// Relevant for computer choice
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

// Compare the Player Selection against the Computer Selection

let compare = (playerSelection, computerSelection) => {
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
    else if (playerSelection === computerSelection) {
        return "Thats a tie!"
    }
}

// Main function for playing the game

window.addEventListener("click", function game(e) {
    let choice;
    let result;

    if (e.target.className === "Rock" || e.target.className === "Paper" || e.target.className === "Scissors") {
        choice = e.target.className;
        choice = choice.toLowerCase();
        console.log(choice)
        result = compare(choice, getComputerChoice());
    }
    else {
        //do nothing
    }

    if (result !== undefined && result.includes("win")) {
        playerScore -= 1;
        Pcounter.innerHTML = `Your Lives: ${playerScore}`
        prompt.innerHTML = "One point for you!"
    }
    else if (result !== undefined && result.includes("lose")) {
        computerScore -= 1;
        Ccounter.innerHTML = `Enemy Lives: ${computerScore}`
        prompt.innerHTML = "Yikes"
    }
    else if (result !== undefined && result.includes("tie")) {
        prompt.innerHTML = "Thats a tie!"
    }

    if (playerScore === 0) {
        prompt.innerHTML = "The computer defeated you!"
    }
    else if (computerScore === 0) {
        prompt.innerHTML = "You did it! You won!"
    }
});
