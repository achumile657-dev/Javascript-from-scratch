function getComputerChoice(){
const randomNumber = Math.floor(Math.random() * 3);
if (randomNumber === 0){
    return "Rock";
} else if (randomNumber === 1){
    return "Paper";
} else {
    return "Scissors";
}}


function getHumanChoice(){
    let choice = prompt("Rock, Paper, Scissors");
    return (choice);
}


let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice,computerChoice){
humanChoice = humanChoice.toUpperCase();
computerChoice = computerChoice.toUpperCase();
if(humanChoice === "ROCK" && computerChoice === "SCISSORS"){
    console.log("Human wins");
    console.log("Human Score: " + ++humanScore);
}
else if(humanChoice === "PAPER" && computerChoice ==="ROCK"){
    console.log("Human wins");
    console.log("Human Score: " + ++humanScore);
}
else if(humanChoice === "SCISSORS" && computerChoice === "PAPER"){
    console.log("Human wins");
    console.log("Human Score: " + ++humanScore);
}
else if(computerChoice === "ROCK" && humanChoice === "SCISSORS"){
   console.log("Computer wins");
   console.log("Computer Score: " + ++computerScore);
}
else if(computerChoice === "PAPER" && humanChoice === "ROCK"){
    console.log("Computer wins");
    console.log("Computer Score: " + ++computerScore);
}
else if(computerChoice === "SCISSORS" && humanChoice === "PAPER"){
    console.log("Computer wins");
    console.log("Computer Score: " + ++computerScore);
}
else if(humanChoice === "ROCK" && computerChoice === "ROCK"){
    console.log("Tie");
    
}
else if(humanChoice === "PAPER" && computerChoice === "PAPER"){
    console.log("Tie");

}
else if(humanChoice === "SCISSORS" && computerChoice === "SCISSORS"){
console.log("Tie");
    
}
}
let i = 0;
while(i < 5){
console.log(playRound(getHumanChoice(i), getComputerChoice(i)));
i++;
}




