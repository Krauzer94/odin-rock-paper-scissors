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
  switch (playerSelection) {
    case "Rock":
      if (computerSelection === "Rock") {
        return (outcome = "Its a draw");
      } else if (computerSelection === "Paper") {
        return (outcome = "You lose! Paper beats rock");
      } else if (computerSelection === "Scissors") {
        return (outcome = "You win! Rock beats Scissors");
      }
      break;
    case "Paper":
      if (computerSelection === "Rock") {
        return (outcome = "You win! Paper beats rock");
      } else if (computerSelection === "Paper") {
        return (outcome = "Its a draw");
      } else if (computerSelection === "Scissors") {
        return (outcome = "You lose! Scissors beats Paper");
      }
      break;
    case "Scissors":
      if (computerSelection === "Rock") {
        return (outcome = "You lose! Rock beats Scissors");
      } else if (computerSelection === "Paper") {
        return (outcome = "You win! Scissors beats Paper");
      } else if (computerSelection === "Scissors") {
        return (outcome = "Its a draw");
      }
      break;
  }
}

// Validation using fixed outputs
const userSelection = prompt("Rock, Paper or Scissors?"); // user input
const randomSelection = getComputerChoice(); // random input
console.log(randomSelection);
console.log(playRound(userSelection, randomSelection));
