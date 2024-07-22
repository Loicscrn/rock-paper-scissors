// Score 

let humanScore = 0;
let computerScore = 0;

// Computer choice - randomized

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Human choice - string

/* Initial choice
let humanChoice

function getHumanChoice(){
    let humanChoice = prompt("Select your next move : Rock, Paper or Scissors");
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){
        return humanChoice;
    } else {
        alert("Invalid choice, please choose Rock, Paper or Scissors.");
        return getHumanChoice()
    }

};
*/
/*
let humanChoice

function getHumanChoice(){
    // let humanChoice = prompt("Select your next move : Rock, Paper or Scissors");
    
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors"){
        return humanChoice;
    } else {
        alert("Invalid choice, please choose Rock, Paper or Scissors.");
        return getHumanChoice()
    }

};
*/
document.getElementById('rock').addEventListener('click', function() {
    document.getElementById('result').textContent = 'rock';
});

document.getElementById('paper').addEventListener('click', function() {
    document.getElementById('result').textContent = 'paper';
});

document.getElementById('scissors').addEventListener('click', function() {
    document.getElementById('result').textContent = 'scissors';
});


// Play Game

function playGame (humanChoice, computerChoice) {
    const humanChoiceGame = getHumanChoice();
    const compChoiceGame = getComputerChoice();

    console.log("You chose: " + humanChoiceGame);
    console.log("The computer chose: " + compChoiceGame);

    if (humanChoiceGame === compChoiceGame) {
        console.log("It's a tie");
    } else if (
        (humanChoiceGame === "rock" && compChoiceGame === "scissors") ||
        (humanChoiceGame === "paper" && compChoiceGame === "rock") ||
        (humanChoiceGame === "scissors" && compChoiceGame === "paper")
    ) { 
        console.log("You Win!");
        humanScore++;
    } else { 
        console.log ("You Lose!");
        computerScore++;
    };
    console.log(`Scores: Human - ${humanScore}, Computer - ${computerScore}`);

        if ( humanScore === 5 ) {
            console.log("You Won the game, congratulations !");
        }
        else if ( computerScore === 5 ) {
            console.log("You Lost the Game, you suck !");
        } 
        else if ( computerScore < 5 || humanScore < 5) {
            console.log("Keep playing...");
            return playGame (humanChoice, computerChoice);
    };
}



window.onload = playGame;


// Play Round
/*
function playRound (humanChoice, computerChoice){

    const humanChoiceGame = getHumanChoice();
    const compChoiceGame = getComputerChoice();

    console.log("You chose: " + humanChoiceGame);
    console.log("The computer chose: " + compChoiceGame);

    if (humanChoiceGame === compChoiceGame) {
        console.log("It's a tie");
    } else if (
        (humanChoiceGame === "rock" && compChoiceGame === "scissors") ||
        (humanChoiceGame === "paper" && compChoiceGame === "rock") ||
        (humanChoiceGame === "scissors" && compChoiceGame === "paper")
    ) { 
        console.log("You Win!");
        humanScore++;
    } else { 
        console.log ("You Lose!");
        computerScore++;
    };
    console.log(`Scores: Human - ${humanScore}, Computer - ${computerScore}`);
}
*/

