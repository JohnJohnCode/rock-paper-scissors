
function getRndInteger() {
    return Math.floor(Math.random() * (3 - 1) ) + 1;
}

function computerPlay() {
    
    compTurn = getRndInteger()
    
    switch (true) {
        case compTurn === 1:
            return "rock";
            break;
        case compTurn === 2:
            return "paper";
            break;
        default:
            return "scissors";
    }
}

function rpsRound(playerSelection, computerSelection) {
    
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return "Human wins!";
        
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        return "Human wins!";
        
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "Human wins!";
        
    } else if (playerSelection === computerSelection){
        return "Tie!";
    
    } else {
        return "Machine wins!";
    }
}
