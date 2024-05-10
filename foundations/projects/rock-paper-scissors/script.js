function getComputerInput() {
    let computerInput = Math.random();
    if (computerInput <= 0.33) {
        return "rock";
    } else if (computerInput > 0.33 && computerInput <= 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanInput() {
    let humanInput = "";
    while (true) {
        humanInput = prompt("Give a valid command: ");

        if (humanInput === null) {
            break;
        }

        if (humanInput !== "rock" && humanInput !== "paper" && humanInput !== "scissors") {
            alert("Invalid command, try again...");
            continue;
        }

        break;
    }
    return humanInput;
}

function playRound(humanInput, computerInput) {
    if (humanInput === computerInput) {
        alert(`Tie! (${humanInput + " vs " + computerInput})`);
        alert("Human: " + humanScore + ", Computer: " + computerScore);
    } else if ((humanInput === "rock" && computerInput === "paper") ||
              (humanInput === "paper" && computerInput === "scissors") ||
              (humanInput === "scissors" && computerInput == "rock")) {
        alert(`The Computer wins a round! (${humanInput + " vs " + computerInput})`);
        computerScore++;
        alert("Human: " + humanScore + ", Computer: " + computerScore);
    } else {
        alert(`The Human wins a round! (${humanInput + " vs " + computerInput})`);
        humanScore++;
        alert("Human: " + humanScore + ", Computer: " + computerScore);
    }
}

function checkWin(humanScore, computerScore) {
    if (humanScore === 5) {
        alert("You Win!");
    }
     
    if (computerScore === 5) {
        alert("You Lose!")
    }
}

function playGame() {
    while (humanScore < 5 && computerScore < 5) {
        let humanInput = getHumanInput();
        let computerInput = getComputerInput();

        if (humanInput === null) {
            break;
        }

        playRound(humanInput, computerInput);
    }

    checkWin(humanScore, computerScore)
}

let humanScore = 0;
let computerScore = 0;

alert("Welcone to the game of Rock, Paper and Scissors: ")
playGame();