// Make Buttons accessible
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let playerScore = 0;
let computerScore = 0;

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

// get Player choice

let getPlayerChoice = (playerSelection) => {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === "rock" || playerSelection ===  "paper" || playerSelection ===  "scissors") {
        return playerSelection;
    }
    else {
        console.log("Nope")
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

window.addEventListener("click", function getPlayerChoice(e) {
    let choice;
    let result;


    if (e.target.innerHTML === "Rock" || e.target.innerHTML === "Paper" || e.target.innerHTML === "Scissors") {
        choice = e.target.innerHTML;
        choice = choice.toLowerCase();
        result = compare(choice, getComputerChoice());
    }
    else {
        //do nothing
    }

    if (result !== undefined && result.includes("win")) {
        playerScore += 1;
    }
    else if (result !== undefined && result.includes("lose")) {
        computerScore += 1;
    }
    else if (result !== undefined && result.includes("tie")) {
        //do nothing
    }
    else if (playerScore === 5 || computerScore === 5) {
        console.log(end)
    }

    console.log("Player score" + playerScore);
    console.log("Computer score" + computerScore);

    if (playerScore === 5) {
        console.log("You did it! You won")
    }
    else if (computerScore === 5) {
        console.log("The computer defeated you!")
    }
});



// rock.addEventListener("click", function game() {
//     //get inner HTML and place it in variable
//     //get computer choice
//     //compare computer and player choice and set score
//     //after 5 points declare winner
// });

// let game = () => {
//     let playerScore = 0;
//     let computerScore = 0;

//     // for (let i = 0; i < 5; i++) {
//     //     result = compare(getPlayerChoice(prompt()), getComputerChoice());
//     //     console.log(result)
//     //     if (result.includes("win")) {
//     //         playerScore += 1;
//     //     }
//     //     else if (result.includes("lose")) {
//     //         computerScore += 1;
//     //     }
//     //     else if (result.includes("tie")) {
//     //         //do nothing
//     //     }
//     // }

//     // let end = (playerScore > computerScore) ? `You won with ${playerScore} to ${computerScore}!` :
//     //     (playerScore < computerScore) ? `You lost with ${playerScore} to ${computerScore}!` :
//     //     `You tied with ${playerScore} to ${computerScore}!`;
    
//     // console.log(end)
// }

//game();