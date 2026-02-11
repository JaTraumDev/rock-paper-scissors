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


