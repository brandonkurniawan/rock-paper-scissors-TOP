console.log("Welcome Player!");

function getComputerChoice(){
    let choice;
    let random = (Math.ceil(Math.random() * 3));
    if(random == 1){
        choice = "rock";
    } else if(random == 2){
        choice = "paper";
    } else if(random == 3){
        choice = "scissors";
    }
    return choice;
};

function getHumanChoice(){
    let choice = prompt("Enter your choice:\n(rock / paper / scissors)");
    choice = choice.toLowerCase();
    return choice;
};

let humanScore = 0;
let computerScore = 0;

function playRound(){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    switch(true){
        case(humanChoice == "rock" && computerChoice == "rock"):
            console.log("Draw!");
            break;
        case(humanChoice == "rock" && computerChoice == "paper"):
            console.log("You lose! Paper beats Rock");
            computerScore++;
            break;
        case(humanChoice == "rock" && computerChoice == "scissors"):
            console.log("You win! Rock beats Scissors");
            humanScore++;
            break;
        case(humanChoice == "paper" && computerChoice == "rock"):
            console.log("You win! Paper beats Rock");
            humanScore++;
            break;
        case(humanChoice == "paper" && computerChoice == "paper"):
            console.log("Draw!");
            break;
        case(humanChoice == "paper" && computerChoice == "scissors"):
            console.log("You lose! Scissors beats Paper");
            computerScore++;
            break;
        case(humanChoice == "scissors" && computerChoice == "rock"):
            console.log("You lose! Rock beats Scissors");
            computerScore++;
            break;
        case(humanChoice == "scissors" && computerChoice == "paper"):
            console.log("You win! Scissors beats Paper");
            humanScore++;
            break;
        case(humanChoice == "scissors" && computerChoice == "scissors"):
            console.log("Draw!");
            break;
    }
    return console.log("Player Score: " + humanScore + "\nComputer Score: " + computerScore);
}