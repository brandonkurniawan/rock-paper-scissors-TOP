// console.log("Hello World");

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