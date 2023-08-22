// Randomly return a string between: Rock, Paper and Scissors
function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    const random = options[Math.floor(Math.random() * options.length)];
    return random;
}

// validating getComputerChoice
// console.log(getComputerChoice());

// Take player choice and computer choice in two parameters
function gameMatch(playerSelection, computerSelection) {
    computerSelection = getComputerChoice();
}

// Simple example function for 3 outcomes
function simpleChoice(choice) {
    let text = ''; // New var for the return
    choice = prompt('1, 2 or 3?');
    switch(choice) {
        case '1':
            text = console.log('AAA');
        break;
        case '2':
            text = console.log('BBB');
        break;
        case '3':
            text = console.log('CCC');
        break;
    }

    return text;
}

// validating simpleChoice;
// simpleChoice();

// Conditionals for the result, there are 3 possible outcomes
// Return a string of success/failure depending on the choice
