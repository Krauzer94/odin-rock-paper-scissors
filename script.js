// #01 Randomly return a string between: Rock, Paper and Scissors
function getComputerChoice (choice) {
    let options = ["Rock", "Paper", "Scissors"];
    const random = options[Math.floor(Math.random() * options.length)];
    return random;
}

// Validating #01
// console.log(getComputerChoice());

// #02 