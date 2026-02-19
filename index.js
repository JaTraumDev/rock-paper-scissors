function getComputerChoice(){
    const random = Math.random();
    if(random < 1/3){
        return "Rock";
    } else if(random < 2/3){
        return "Paper";
    } else {
        return "Scissors"
    }
}

function playRound(playerChoice, computerChoice){

    console.log("Player chose " + playerChoice);
    console.log("Computer chose " + computerChoice);

    if (playerChoice === "Rock"){
        if(computerChoice === "Paper"){
            computerScore++;
            console.log("Computer Won!");
        } else if(computerChoice === "Scissors"){
            playerScore++;
            console.log("Player Won!");
        } else {
            console.log("Draw!");
        }
    } else if (playerChoice === "Paper"){
        if(computerChoice === "Scissors"){
            computerScore++;
            console.log("Computer Won!");
        } else if(computerChoice === "Rock"){
            playerScore++;
            console.log("Player Won!");
        } else {
            console.log("Draw!");
        }
    } else if (playerChoice === "Scissors") {
        if(computerChoice === "Rock"){
            computerScore++;
            console.log("Computer Won!");
        } else if(computerChoice === "Paper"){
            playerScore++;
            console.log("Player Won!");
        } else {
            console.log("Draw!");
        }
    } else {
        console.log("could'nt finish game properly.");
        console.log("restarting Round!");
        restart = true;
    }

    
}

function onPlayerChoice(playerChoice){

    playRound(playerChoice, getComputerChoice());
        
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);
    
    gameDecider(roundLength, playerScore, computerScore);
}

function gameDecider(roundLength, playerScore, computerScore){
    if((playerScore + computerScore) === roundLength){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        
        if(playerScore > computerScore){
            console.log("Player Won the Game!");
        } else if(playerScore < computerScore){
            console.log("Computer Won the Game!");
        } else{
            console.log("Nobody Won the Game...");
        }
    }
}

let playerScore = 0;
let computerScore = 0;

const roundLength = 5;


const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", () =>{
    onPlayerChoice("Rock");
});
paper.addEventListener("click", () => {
    onPlayerChoice("Paper");
});
scissors.addEventListener("click",  () => {
    onPlayerChoice("Scissors");
});








