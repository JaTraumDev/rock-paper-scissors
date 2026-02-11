function getComputerChoice(){
    random = Math.random();
    console.log(random);
    if(random < 1/3){
        return "Rock";
    } else if(random > 1/3 && random < 2/3){
        return "Paper";
    } else {
        return "Scissors"
    }
}

function getHumanChoice(){
    choice = prompt("Rock (0), paper (1) or Scissors (2)");

    if(parseInt(choice) === 0 || choice.toUpperCase() === "ROCK"){
        return "Rock";
    } else if(parseInt(choice) === 1 || choice.toUpperCase() === "PAPER"){
        return "Paper"
    } else if (parseInt(choice) === 2 || choice.toUpperCase() === "SCISSORS"){
        return "Scissors";
    } else {
        return "Invalid"
    }

}

function playRound(playerChoice, computerChoice){
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

function playGame(roundLength){

    let restart = false;

    let roundCounter = 0;
    
    while(roundCounter != roundLength){
        const playerChoice = getHumanChoice();
        const computerChoice = getComputerChoice();

        console.log("Player chose " + playerChoice);
        console.log("Computer chose " + computerChoice);

        
        playRound(playerChoice, computerChoice);
        
        console.log("Player Score: " + playerScore);
        console.log("Computer Score: " + computerScore);

        roundCounter++;

        if(restart === true){
            roundCounter--;
            restart = false;
        }
    }
}

function gameDecider(){
    if(playerScore > computerScore){
        console.log("Player Won the Game!");
    } else{
        console.log("Computer Won the Game!");
    }
}

let playerScore = 0;
let computerScore = 0;

playGame(5);
gameDecider();





