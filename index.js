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
            result.textContent = "Computer Won!";
        } else if(computerChoice === "Scissors"){
            playerScore++;
            result.textContent = "Player Won!";
        } else {
            result.textContent = "Draw!";
        }
    } else if (playerChoice === "Paper"){
        if(computerChoice === "Scissors"){
            computerScore++;
            result.textContent = "Computer Won!";
        } else if(computerChoice === "Rock"){
            playerScore++;
            result.textContent = "Player Won!";
        } else {
            result.textContent = "Draw!";
        }
    } else if (playerChoice === "Scissors") {
        if(computerChoice === "Rock"){
            computerScore++;
            result.textContent = "Computer Won!";
        } else if(computerChoice === "Paper"){
            playerScore++;
            result.textContent = "Player Won!";
        } else {
            result.textContent = "Draw!";
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
    if(playerScore === roundLength || computerScore === roundLength){
        rock.disabled = true;
        paper.disabled = true;
        scissors.disabled = true;
        
        if(playerScore > computerScore){
            result.textContent = "Player Won the Game!";
        } else if(playerScore < computerScore){
            result.textContent = "Computer Won the Game!";
        }
    }
}

let playerScore = 0;
let computerScore = 0;

const roundLength = 5;

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

const result = document.querySelector("#result");

rock.addEventListener("click", () =>{
    onPlayerChoice("Rock");
});
paper.addEventListener("click", () => {
    onPlayerChoice("Paper");
});
scissors.addEventListener("click",  () => {
    onPlayerChoice("Scissors");
});








