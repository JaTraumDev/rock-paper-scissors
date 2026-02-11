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

    switch (parseInt(choice)){
        case 0, "Rock":
            return "Rock";
        case 1, "Paper":
            return "Paper";
        case 2, "Scissors":
            return "Scissors";
         default:
            return "not valid number";
    }

}


let playerScore = 0;
let computerScore = 0;

const playerChoice = getHumanChoice();
const computerChoice = getComputerChoice();

