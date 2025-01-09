let humanScore = 0;
let computerScore = 0;
let attempt = 1;

function getRandomNumber() {
    return Math.floor(Math.random() * 3) + 1;
}

function getHumanChoice () {
    let humanChoice = prompt("Instruction: Enter your choice. Either Type: Rock or Paper or Scissors.");
    if (humanChoice.toLowerCase() == "rock") {
        return(humanChoice);
    } else if (humanChoice.toLowerCase() == "paper") {
        return(humanChoice);
    } else if (humanChoice.toLowerCase() == "scissors") {
        return(humanChoice);
    } else {
        if (attempt < 5) {
            attempt++;
            alert("Wrong choice. Kindly read the instruction again");
            getHumanChoice();
        } else {
            alert("maximum attempt reached. Reload the Game!")
        }
    }
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
            if (humanChoice == "rock") {
                alert("It's a tigh! Rock draws Rock");
                console.log("It's a tigh! Rock draws Rock");
            } else if (humanChoice == "paper") {
                humanScore++;
                alert("You win! Paper beats Rock");
                console.log("You win! Paper beats Rock");
            } else {
                computerScore++;
                alert("You Lose! Rock beats Scissors");
                console.log("You Lose! Rock beats Scissors");
            }
        break;
        case "Paper":
            if (humanChoice == "rock") {
                computerScore++;
                alert("You lose! Paper beats Rock");
                console.log("You lose! Paper beats Rock");
            } else if (humanChoice == "paper") {
                alert("It's a tigh! Paper draws Paper");
                console.log("It's a tigh! Paper draws Paper");
            } else {
                humanScore++;
                alert("You win! Scissors beats Paper");
                console.log("You win! Scissors beats Paper");
            }
        break;
        case "Scissors":
            if (humanChoice == "rock") {
                humanScore++;
                alert("You win! Rock beats Scissors");
                console.log("You win! Rock beats Scissors");
            } else if (humanChoice == "paper") {
                computerScore++;
                alert("You lose! Scissors beats Paper");
                console.log("You lose! Scissors beats Paper");
            } else {
                alert("It's a tigh! Scissors draws Scissors");
                console.log("It's a tigh! Scissors draws Scissors");
            }
        break;
    }
}

function playGame () {
    for (let round = 5; round > 0; round--) {
        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();
        playRound(humanSelection, computerSelection);
    }
    console.log("The End!!!");
    if (computerScore > humanScore) {
        console.log("Computer wins the Game with ", computerScore, " points.");
        console.log("Your Score is ", humanScore, " points.");
    } else if (humanScore > computerScore) {
        console.log("You win the Game with ", humanScore, " points.");
        console.log("Computer Score is ", computerScore, " points.");
    } else {
        console.log("Hurray, It's a draw Game!!!")
    }
}

playGame();