// Randomly return a string between: Rock, Paper and Scissors
function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  const random = options[Math.floor(Math.random() * options.length)];
  return random;
}

// Take player choice and computer choice in two parameters
function playRound(playerSelection, computerSelection) {
  let outcome; // For later text return

  // Conditionals for the result, there are 3 possible outcomes
  if (computerSelection == "Scissors") {
    return (outcome = "You win! Rock beats Scissors");
  } else if (computerSelection == "Rock") {
    return (outcome = "Draw");
  } else if (computerSelection == "Paper") {
    return (outcome = "You lose! Paper beats Rock");
  }
}

// Validation using fixed outputs
const playerSel = "Rock";
const computerSel = getComputerChoice();
console.log(computerSel);
console.log(playRound(playerSel, computerSel));
