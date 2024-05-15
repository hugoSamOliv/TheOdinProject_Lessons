const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
const playerHand = document.querySelector(".hand");
const botHand = document.querySelector(".robot-hand");
const playerCount = document.querySelector("#player-count");
const botCount = document.querySelector("#bot-count");
const alert = document.querySelector(".alert");
let playerCountValue = parseInt(playerCount.innerText);
let botCountValue = parseInt(botCount.innerText);
let playerMove = "";

rockButton.addEventListener("click", () => {
    playerMove = rockButton.id;
    console.log(playerMove)
    playerHand.src = "img/rockhuman.png";
    gameStart();
});

paperButton.addEventListener("click", () => {
    playerMove = paperButton.id;
    console.log(playerMove)
    playerHand.src = "img/paperhuman.png";
    gameStart();
});

scissorsButton.addEventListener("click", () => {
    playerMove = scissorsButton.id;
    console.log(playerMove)
    playerHand.src = "img/scissorshuman.png";
    gameStart();
});

function getBotMove() {
    const play = Math.floor(Math.random() * 3) + 1;
    let robotPlay = "";
    if (play === 1) {
        robotPlay = rockButton.id;
        botHand.src = "img/rockrobot.png";
        return robotPlay;
    } else if (play === 2) {
        robotPlay = paperButton.id;
        botHand.src = "img/paperrobot.png";
        return robotPlay;
    }

    robotPlay = scissorsButton.id;
    botHand.src = "img/scissorsrobot.png";
    return robotPlay;
}


function checkConditions(playerMove, botMove) {
    if (playerMove === botMove) {
        alert.innerText = "Tie!";
        return "Tie";
    }

    return compareMoves(playerMove, botMove);
}

function compareMoves(playerMove, botMove) {
    if (playerMove === "rock" && botMove === "paper") {
        alert.innerText = "Round Loss!";
        return false;
    } else if (playerMove === "paper" && botMove === "scissors") {
        alert.innerText = "Round Loss!";
        return false;
    } else if (playerMove === "scissors" && botMove === "rock") {
        alert.innerText = "Round Loss!";
        return false;
    } else {
        alert.innerText = "Round Win!";
        return true;
    }
}

function restartGame() {
    playerCountValue = 0;
    playerCount.innerText = playerCountValue;
    botCountValue = 0;
    botCount.innerText = botCountValue;
    alert.innerText = "RPS Armageddon: Choose Your Weapon, Seal Your Fate";
}

function gameStart() {
    if (playerCountValue < 5 && botCountValue < 5) {
        const botMove = getBotMove();
        const checker = checkConditions(playerMove, botMove);

        if (checker === "Tie") {
            return;
        } else if (checker) {
            playerCountValue++;
            playerCount.innerText = playerCountValue;
        } else {
            botCountValue++;
            botCount.innerText = botCountValue;
        }

        if (playerCountValue === 5) {
            alert.innerText = "You won the game!";
            setTimeout( () => {
                alert.innerText = "Restart?";
            }, 2500);
        } else if (botCountValue === 5) {
            alert.innerText = "You lost the game...";
            setTimeout( () => {
                alert.innerText = "Restart?";
            }, 2500);
        }
    } else {
        restartGame();
    }
}

console.log(getBotMove());
console.log(playerMove);
console.log(playerCountValue);
console.log(botCountValue);