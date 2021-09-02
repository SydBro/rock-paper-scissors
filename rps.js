const rpsOptions = ["rock", "paper", "scissors"];

    function computerPlay() {
        let computerAnswer = rpsOptions[Math.floor(Math.random()*rpsOptions.length)];
        console.log(computerAnswer);
    }

    function round(playerSelection, computerSelection) {
        switch (playerSelection) {
            case "rock":
                if (computerSelection = "rock") {
                    return "It's a tie! You both chose " + playerSelection + ".";
                }
                else if (computerSelection = "paper") {
                    return "You lose, " + computerSelection + " beats " + playerSelection + "!";
                }
                else {
                    return "You win, " + playerSelection + " beats " + computerSelection + "!";
                }
                break;
            case "paper":
                if (computerSelection = "paper") {
                    return "It's a tie! You both chose " + playerSelection + ".";
                }
                else if (computerSelection = "scissors") {
                    return "You lose, " + computerSelection + " beats " + playerSelection + "!";
                }
                else {
                    return "You win, " + playerSelection + " beats " + computerSelection + "!";
                }
                break;
            case "scissors":
                if (computerSelection = "scissors") {
                    return "It's a tie! You both chose " + playerSelection + ".";
                }
                else if (computerSelection = "rock") {
                    return "You lose, " + computerSelection + " beats " + playerSelection + "!";
                }
                else {
                    return "You win, " + playerSelection + " beats " + computerSelection + "!";
                }
                break;
        }
        
    }
    const playerSelection = "scissors";
    const computerSelection = computerPlay();
    console.log(round(playerSelection, computerSelection));


    function game() {

    }
