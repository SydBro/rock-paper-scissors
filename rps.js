const playerSelection = playerPlay();
const computerSelection = computerPlay();
let playerWins = 0;
let playerLoses = 0;
let gameTies = 0;

function playerPlay(){
    const rpsChoice = document.querySelectorAll("button");
    rpsChoice.forEach ((button) => {
        button.addEventListener("click", () =>{
            playerAnswer = button.id;
            console.log(playerAnswer);
            return playerAnswer;
        })
    })
}

function computerPlay() {
    const rpsOptions = ["rock", "paper", "scissors"];
    let computerAnswer = rpsOptions[Math.floor(Math.random()*rpsOptions.length)];
    return computerAnswer;
}

function round(playerSelection, computerSelection) {

    switch (playerSelection) {
        case "rock":
            if (computerSelection == "rock") {
                gameTies++;
                return "It's a tie! You both chose " + playerSelection + ".";
            }
            else if (computerSelection == "paper") {
                playerLoses++;
                return "You lose, " + computerSelection + " beats " + playerSelection + "!";
            }
            else if (computerSelection == "scissors") {
                playerWins++;
                return "You win, " + playerSelection + " beats " + computerSelection + "!";
            }
            else {
                return "Hmm, something went wrong!";
            }
            break;
        case "paper":
            if (computerSelection == "paper") {
                gameTies++;
                return "It's a tie! You both chose " + playerSelection + ".";
            }
            else if (computerSelection == "scissors") {
                playerLoses++;
                return "You lose, " + computerSelection + " beats " + playerSelection + "!";
            }
            else if (computerSelection == "rock") {
                playerWins++;
                return "You win, " + playerSelection + " beats " + computerSelection + "!";
            }
            else {
                return "Hmm, something went wrong!";
            }
            break;
        case "scissors":
            if (computerSelection == "scissors") {
                gameTies++;
                return "It's a tie! You both chose " + playerSelection + ".";
            }
            else if (computerSelection == "rock") {
                playerLoses++;
                return "You lose, " + computerSelection + " beats " + playerSelection + "!";
            }
            else if (computerSelection == "paper") {
                playerWins++;
                return "You win, " + playerSelection + " beats " + computerSelection + "!";
            }
            else {
                return "Hmm, something went wrong!";
            }
            break;
        default:
            console.log("Incorrect input.");
    }
}


// function game() {
//     //let playerAnswer = window.prompt("Choose rock, paper, or scissors.");
//     console.log("You chose " + playerSelection + ", your opponent chose " + computerSelection)
//     console.log(round(playerSelection, computerSelection));
//     console.log("You won " + playerWins + " times, lost " + playerLoses + " times, and got a tie " + gameTies + " times.")
// }
