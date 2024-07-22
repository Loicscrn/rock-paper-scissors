/*// Score 

let humanScore = 0;
let computerScore = 0;

// Computer choice - randomized

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Write name of button in div

document.getElementById('rock').addEventListener('click', function() {
    document.getElementById('result').textContent = 'rock';
    console.log("rock");
});

document.getElementById('paper').addEventListener('click', function() {
    document.getElementById('result').textContent = 'paper';
    console.log("paper");
});

document.getElementById('scissors').addEventListener('click', function() {
    document.getElementById('result').textContent = 'scissors';
    console.log("scissors");
});


//Human Choice

let humanChoice
function getHumanChoice() {
    const humanChoice = document.getElementById('result').textContent;
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    }
    return null;
}

// End Game 
function endGame(message) {
    document.getElementById('gameResult').textContent += ` ${message}`;
    const buttons = document.querySelectorAll('#buttons button');
    buttons.forEach(button => {
        button.disabled = true;
    });
}


// Play Game

function playGame() {
    const humanChoiceGame = getHumanChoice();
  
    const compChoiceGame = getComputerChoice();

    document.getElementById('gameResult').textContent = `You chose: ${humanChoiceGame}. The computer chose: ${compChoiceGame}.`;

    if (humanChoiceGame === compChoiceGame) {
        document.getElementById('gameResult').textContent += " It's a tie!";
    } else if (
        (humanChoiceGame === "rock" && compChoiceGame === "scissors") ||
        (humanChoiceGame === "paper" && compChoiceGame === "rock") ||
        (humanChoiceGame === "scissors" && compChoiceGame === "paper")
    ) {
        document.getElementById('gameResult').textContent += " You Win!";
        humanScore++;
    } else {
        document.getElementById('gameResult').textContent += " You Lose!";
        computerScore++;
    }

    document.getElementById('scores').textContent = `Scores: Human - ${humanScore}, Computer - ${computerScore}`;

    if (humanScore === 5) {
        document.getElementById('scores').textContent += " You Won the game, congratulations!";
    } else if (computerScore === 5) {
        document.getElementById('scores').textContent += " You Lost the Game, you suck!";
    } else {
        document.getElementById('scores').textContent += " Keep playing...";
    }
}

function restartGame() {
    humanScore = 0;
    computerScore = 0;
    document.getElementById('result').textContent = '';
    document.getElementById('gameResult').textContent = '';
    document.getElementById('scores').textContent = '';
    const buttons = document.querySelectorAll('#buttons button');
    buttons.forEach(button => {
        button.disabled = false;
    });
    document.getElementById('restart').style.display = 'none';
}



window.onload = function() {
    document.getElementById('rock').addEventListener('click', function() {
        document.getElementById('result').textContent = 'rock';
        playGame();
    });
    document.getElementById('paper').addEventListener('click', function() {
        document.getElementById('result').textContent = 'paper';
        playGame();
    });
    document.getElementById('scissors').addEventListener('click', function() {
        document.getElementById('result').textContent = 'scissors';
        playGame();
    });
};
-------*/
/*function playGame (humanChoice, computerChoice) {
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
}*/



// window.onload = playGame;


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

let humanScore = 0;
let computerScore = 0;
let gameEnded = false;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    const humanChoice = document.getElementById('result').textContent;
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
        return humanChoice;
    }
    return null;
}

function endGame(message) {
    document.getElementById('gameResult').textContent += ` ${message}`;
    const buttons = document.querySelectorAll('#buttons button');
    buttons.forEach(button => {
        button.disabled = true;
    });
    document.getElementById('restart').style.display = 'block';
    gameEnded = true;
}

function playGame() {
    if (gameEnded) return;

    const humanChoiceGame = getHumanChoice();
    if (!humanChoiceGame) {
        document.getElementById('gameResult').textContent = "Please select a valid choice.";
        return;
    }

    const compChoiceGame = getComputerChoice();
    displayComputerChoice(compChoiceGame); // Show computer choice

    document.getElementById('gameResult').textContent = ``;

    if (humanChoiceGame === compChoiceGame) {
        document.getElementById('gameResult').textContent += " It's a tie!";
    } else if (
        (humanChoiceGame === "rock" && compChoiceGame === "scissors") ||
        (humanChoiceGame === "paper" && compChoiceGame === "rock") ||
        (humanChoiceGame === "scissors" && compChoiceGame === "paper")
    ) {
        document.getElementById('gameResult').textContent += " You Win!";
        humanScore++;
    } else {
        document.getElementById('gameResult').textContent += " You Lose!";
        computerScore++;
    }

    document.getElementById('scores').textContent = `Scores: Human - ${humanScore}, Computer - ${computerScore}`;

    if (humanScore === 5) {
        endGame("You Won the game, congratulations!");
    } else if (computerScore === 5) {
        endGame("You Lost the Game, better luck next time!");
    } else {
        document.getElementById('gameResult').textContent += " Keep playing...";
    }
}


function displayComputerChoice(choice) {
    document.querySelector('.cpuChoice').textContent = `${choice}`;
}


function restartGame() {
    humanScore = 0;
    computerScore = 0;
    gameEnded = false; 
    document.getElementById('result').textContent = '';
    document.getElementById('gameResult').textContent = '';
    document.getElementById('scores').textContent = '';
    const buttons = document.querySelectorAll('#buttons button');
    buttons.forEach(button => {
        button.disabled = false;
    });
    document.getElementById('restart').style.display = 'none';
}

window.onload = function() {
    document.getElementById('rock').addEventListener('click', function() {
        document.getElementById('result').textContent = 'rock';
        playGame();
    });
    document.getElementById('paper').addEventListener('click', function() {
        document.getElementById('result').textContent = 'paper';
        playGame();
    });
    document.getElementById('scissors').addEventListener('click', function() {
        document.getElementById('result').textContent = 'scissors';
        playGame();
    });
    document.getElementById('restart').addEventListener('click', restartGame);
};