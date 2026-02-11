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

    if(parseInt(choice) === 0){
        return "Rock";
    } else if(parseInt(choice) === 1){
        return "Paper"
    } else if (parseInt(choice) === 2){
        return "Scissors";
    } else {
        return "Invalid"
    }

}

function choiceChecker(playerChoice, computerChoice){
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
    }
    
}


let playerScore = 0;
let computerScore = 0;

restart = true;

while(playerScore < 1 && computerScore < 1){
    const playerChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    console.log("Player chose " + playerChoice);
    console.log("Computer chose " + computerChoice);

    
    choiceChecker(playerChoice, computerChoice);
    
    console.log("Player Score: " + playerScore);
    console.log("Computer Score: " + computerScore);

}


