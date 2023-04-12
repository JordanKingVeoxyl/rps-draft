//Code from "What's dev" as specified in ReadMe
// Varibles for DOM elements
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");
const lizard_div = document.getElementById("lizard");
const spock_div = document.getElementById("spock");

//GETS RANDOM COMPUTER CHOICE
function getComputerChoice() {
    const choices = ['r', 'p', 's', 'l', 'k'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    if (letter === "s") return "Scissors";
    if (letter === "l") return "Lizard";
    return "Spock";
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
    // USER WINNING CONDITIONS
        // rock beats scissors and lizard
        case "rs":
        case "rl":
        // paper beats rock and spock
        case "pr":
        case "pk":
        // scissors beats paper and lizard
        case "sp":
        case "sl":
        // lizard beats paper and spock
        case "lp":
        case "lk":
        // spock beats scissors and rock
        case "ks":
        case "kr":
            win(userChoice, computerChoice);
            break;
    // USER LOSING CONDITIONS
        // rock loses to paper and spock
        case "rp":
        case "rk":
        // paper loses to scissors and lizard
        case "ps":
        case "pl":
        // scissors loses to rock and spock
        case "sr":
        case "sk": 
        // lizard loses to rock and scissors
        case "lr":
        case "ls":
        // spock loses to paper and lizard
        case "kp":
        case "kl":  
            lose(userChoice, computerChoice);
            break;
    // USER DRAWS CONDITIONS
        case "rr":
        case "pp":
        case "ss": 
        case "ll":
        case "kk":
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

lizard_div.addEventListener('click', function() {
    game("l");
});

spock_div.addEventListener('click', function() {
    game("k");
});

}

main();