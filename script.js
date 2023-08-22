// Randomly return a string between: Rock, Paper and Scissors
function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  const random = options[Math.floor(Math.random() * options.length)];
  return random;
}

// validating getComputerChoice
// console.log(getComputerChoice());

// Take player choice and computer choice in two parameters
function gameMatchIf(playerSelection, computerSelection) {
  computerSelection = getComputerChoice(); // Random choice

  let outcome = ""; // For later text return
  playerSelection = prompt("Rock, Paper or Scissors?");

  // Failure outcomes
  if (playerSelection === "Scissors" && computerSelection === "Rock") {
    outcome = console.log("You lose! Rock beats Scissors");
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    outcome = console.log("You lose! Paper beats Rock");
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    outcome = console.log("You lose! Scissors beats Paper");
  }
  // Success outcomes
  else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    outcome = console.log("You win! Scissors beats Paper");
  } else if (playerSelection == "Rock" && computerSelection === "Scissors") {
    outcome = console.log("You win! Rock beats Scissors");
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    outcome = console.log("You win! Paper beats Rock");
  }

  return outcome;
  // return computerSelection;
}

// Second atempt, now using case instead of if
function gameMatchCase(playerSelection2, computerSelection2) {
  computerSelection2 = getComputerChoice(); // Random choice

  let outcome2 = ""; // For later text return
  playerSelection2 = prompt("Rock, Paper or Scissors?");
  switch (playerSelection2) {
    case "Rock":
      if (computerSelection2 === "Scissors") {
        outcome2 = console.log("You win! Rock beats Scissors");
      } else if (computerSelection2 === "Paper") {
        outcome2 = console.log("You lose! Paper beats Rock");
      } else {
        outcome2 = console.log("Its a draw");
      }
      break;
    case "Paper":
      if (computerSelection2 === "Rock") {
        outcome2 = console.log("You win! Paper beats Rock");
      } else if (computerSelection2 === "Scissors") {
        outcome2 = console.log("You lose! Scissors beats Paper");
      } else {
        outcome2 = console.log("Its a draw");
      }
      break;
    case "Scissors":
        if (computerSelection2)
  }

  return outcome;
}
console.log(getComputerChoice());
// gameMatchElif();
// gameMatchCase();

// Simple example function for 3 outcomes
function simpleChoice(choice) {
  let text = ""; // New var for the return
  choice = prompt("1, 2 or 3?");
  switch (choice) {
    case "1":
      text = console.log("AAA");
      break;
    case "2":
      text = console.log("BBB");
      break;
    case "3":
      text = console.log("CCC");
      break;
  }

  return text;
}

// validating simpleChoice;
// simpleChoice();

// Conditionals for the result, there are 3 possible outcomes
// Return a string of success/failure depending on the choice
