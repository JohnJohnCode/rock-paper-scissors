const score = document.getElementById("scoreDisplay");
const announcer = document.getElementById("announcement");
const humanWeapon = document.getElementById("hWeapon");
const computerWeapon = document.getElementById("cWeapon");
const btnRock = document.getElementById("btn1");
const btnPaper = document.getElementById("btn2");
const btnScissors = document.getElementById("btn3");
const buttons = document.querySelectorAll("button");
let playerScore = 0;
let computerScore = 0;


function getRndInteger() {
    return Math.floor(Math.random() * (4 - 1) ) + 1;
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

function updateScore(status) {
    if (status == "win") {
        
        playerScore+=1;
        score.textContent = `${playerScore}\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0${computerScore}`;
    
    } else if (status == "loss") {
        
        computerScore+=1;
        score.textContent = `${playerScore}\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0${computerScore}`;
    }
}

function resetGame() {
    
    humanWeapon.style.visibility = "hidden";
    computerWeapon.style.visibility = "hidden";
    playerScore = 0;
    computerScore = 0;
    score.textContent = `${playerScore}\xa0\xa0\xa0\xa0:\xa0\xa0\xa0\xa0${computerScore}`;
    announcer.textContent = "";
}

function determineWinner() {
    
    if (playerScore == 5) {
        announcer.textContent = "Human wins!";
    
    } else if (computerScore == 5) {
        announcer.textContent = "Computer wins!";
    }
}

// Play a round of rock paper scissors
function rpsRound(playerSelection, computerSelection) {
    
    // Reset game if someone won
    if (playerScore == 5 || computerScore == 5) {
        resetGame();
    
    // Compare choices and declare winner
    } else if (playerSelection === "rock" && computerSelection === "scissors"){
        
        announcer.textContent = "";
        updateScore("win");
        determineWinner();
        humanWeapon.src = `images/${playerSelection}.png`;
        computerWeapon.src = `images/${computerSelection}.png`;
        humanWeapon.style.visibility = "visible";
        computerWeapon.style.visibility = "visible";
        
    } else if (playerSelection === "paper" && computerSelection === "rock"){
        
        announcer.textContent = "";
        updateScore("win");
        determineWinner();
        humanWeapon.src = `images/${playerSelection}.png`;
        computerWeapon.src = `images/${computerSelection}.png`;
        humanWeapon.style.visibility = "visible";
        computerWeapon.style.visibility = "visible";

        
    } else if (playerSelection === "scissors" && computerSelection === "paper"){
        
        announcer.textContent = "";
        updateScore("win");
        determineWinner();
        humanWeapon.src = `images/${playerSelection}.png`;
        computerWeapon.src = `images/${computerSelection}.png`;
        humanWeapon.style.visibility = "visible";
        computerWeapon.style.visibility = "visible";
        
    } else if (playerSelection === computerSelection){
        
        humanWeapon.src = `images/${playerSelection}.png`;
        computerWeapon.src = `images/${computerSelection}.png`;
        humanWeapon.style.visibility = "visible";
        computerWeapon.style.visibility = "visible";
        announcer.textContent = "Draw!";
    
    } else {
        
        announcer.textContent = "";
        updateScore("loss");
        determineWinner();
        humanWeapon.src = `images/${playerSelection}.png`;
        computerWeapon.src = `images/${computerSelection}.png`;
        humanWeapon.style.visibility = "visible";
        computerWeapon.style.visibility = "visible";
    }
}

buttons.forEach(button => {
    button.addEventListener("click", function() {
        if (playerScore == 5 || computerScore == 5) {
            resetGame();
        } else {
            rpsRound(button.name, computerPlay());
        }
    })
})