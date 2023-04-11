//Code from "What's dev" as specified in ReadMe
// Varibles for DOM elements
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

//GETS RANDOM COMPUTER CHOICE
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

// FUNCTIONS FOR MESSAGE ON WIN, LOST OR DRAW, AND INCREMENT SCORE TO THE WINNER
function win(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You win!`;
    userChoice_div.classList.add('result-winner');
    setTimeout(() => userChoice_div.classList.remove('result-winner'), 2000);
}

function lose(userChoice, computerChoice) {
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} loses to ${convertToWord(computerChoice)}. You lost!`;
    userChoice_div.classList.add('result-loser');
    setTimeout(() => userChoice_div.classList.remove('result-loser'), 2000);
}

function draw(userChoice, computerChoice) {
    result_p.innerHTML = `${convertToWord(userChoice)} equals ${convertToWord(computerChoice)}. It's a draw!`; 
}

//COMPARES ALL COMBINATIONS OF THE GAME AND WHAT THE RESULT IS 
function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp": 
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr": 
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss": 
            draw(userChoice, computerChoice);
            break;
    }
}

// EVENTS WHEN CLICKING THE BUTTONS
function main() {
rock_div.addEventListener('click', function() {
    game("r");
});

paper_div.addEventListener('click', function() {
    game("p");
});

scissors_div.addEventListener('click', function() {
    game("s");
});
}

main();