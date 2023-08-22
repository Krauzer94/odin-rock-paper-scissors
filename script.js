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

// Testing a simple prompt return function
function simpleChoice(choice) {
    choice = prompt('Choose betwen 1, 2 or 3: ');
    switch (choice) {
        case (1):
            return alert('Too little');
            break;
        case (2):
            return console.log('In between');
            break;
        case (3):
            return console.log('Too much');
            break;
    }
}

simpleChoice();

// Conditionals for the result, there are 3 possible outcomes
// Return a string of success/failure depending on the choice
