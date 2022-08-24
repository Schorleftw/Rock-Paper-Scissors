let random = () => {
    return Math.floor(Math.random() * 3);
}

let getComputerChoice = () => {
    let choice = random();
    
    switch(choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
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

/*let playGame = (playerSelection, computerSelection) => {

}*/

const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice("rock");

//console.log(getPlayerChoice(playerSelection))