let humanScore = 0;
let computerScore = 0;
let attempt = 1;
let humanChoice = "";
let round = 5;

// button DOM
const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

// score DOM
const linkHumanScore = document.querySelector("#humanScore");
const linkComputerScore = document.querySelector("#computerScore");

// Image DOM
const linkHumanImage = document.querySelector("#human-img");
const linkComputerImage = document.querySelector("#computer-img");

function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function getComputerChoice () {
    let choice;
    switch(getRandomNumber()) {
        case 1:
            choice = "Rock";
            break;
        case 2:
            choice = "Paper";
            break;
        case 3:
            choice = "Scissors";
            break;
    }
    return(choice);
}

function playRound(humanChoice, computerChoice) {
    switch (computerChoice) {
        case "Rock":
            linkComputerImage.style.backgroundImage = 'url("./img/rock.png")';
            if (humanChoice == "rock") {
                linkHumanImage.style.backgroundImage = 'url("./img/rock.png")';
            } else if (humanChoice == "paper") {
                linkHumanImage.style.backgroundImage = 'url("./img/paper.png")';
                humanScore++;
            } else {
                linkHumanImage.style.backgroundImage = 'url("./img/scissors.png")';
                computerScore++;
            }
        break;
        case "Paper":
            linkComputerImage.style.backgroundImage = 'url("./img/paper.png")';
            if (humanChoice == "rock") {
                linkHumanImage.style.backgroundImage = 'url("./img/rock.png")';
                computerScore++;
            } else if (humanChoice == "paper") {
                linkHumanImage.style.backgroundImage = 'url("./img/paper.png")';
            } else {
                linkHumanImage.style.backgroundImage = 'url("./img/scissors.png")';
                humanScore++;
            }
        break;
        case "Scissors":
            linkComputerImage.style.backgroundImage = 'url("./img/scissors.png")';
            if (humanChoice == "rock") {
                linkHumanImage.style.backgroundImage = 'url("./img/rock.png")';
                humanScore++;
            } else if (humanChoice == "paper") {
                linkHumanImage.style.backgroundImage = 'url("./img/paper.png")';
                computerScore++;
            } else {
                linkHumanImage.style.backgroundImage = 'url("./img/scissors.png")';
            }
        break;
    }
}

function resetScores() {
    humanScore = 0;
    computerScore = 0;
    round = 5;
    linkHumanScore.textContent = parseInt(humanScore);
    linkComputerScore.textContent = parseInt(computerScore);
    linkHumanImage.style.backgroundImage = 'url("./img/user.png")';
    linkComputerImage.style.backgroundImage = 'url("./img/computer.png")';
}

function playGame () {
    if(round == 0) {
        setTimeout(() => {
            let computerWin = "Computer wins the Game with " + computerScore + " point."
            let humanLose = "Your Score is " + humanScore + " point.";
            let humanWin = "You win the Game with " + humanScore + " point."
            let computerLose = "Computer Score is " + computerScore + " point.";

            alert("The End!!!");
            if (computerScore > humanScore) {
                alert(computerWin);
                alert(humanLose);
            } else if (humanScore > computerScore) {
                alert(humanWin);
                alert(computerLose);
            } else {
                alert("Hurray, It's a draw Game!!!")
            }
            resetScores();
        }, 700);
    } else {
        const computerSelection = getComputerChoice();
        playRound(humanChoice, computerSelection);
        linkHumanScore.textContent = parseInt(humanScore);
        linkComputerScore.textContent = parseInt(computerScore);
        round--;
    }
}

// event listeners:
rockButton.addEventListener("click", () => {
    humanChoice = rockButton.value;
    playGame();
})

paperButton.addEventListener("click", () => {
    humanChoice = paperButton.value;
    playGame();
})

scissorsButton.addEventListener("click", () => {
    humanChoice = scissorsButton.value;
    playGame();
})