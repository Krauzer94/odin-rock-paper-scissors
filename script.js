// Randomly return a string between: Rock, Paper and Scissors
function getComputerChoice() {
  let options = ["Rock", "Paper", "Scissors"];
  const random = options[Math.floor(Math.random() * options.length)];
  return random;
}

// Take player choice and computer choice in two parameters
function playRound(playerSelection, computerSelection) {
  let outcome = ""; // For later text return

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

// Find out the winner out of five rounds
function game(humanScore, machineScore, winner) {
  let roundCount = 1; // Round loop counter
  (humanScore = 1), (machineScore = 1); // Scores
  let userSelection, randomSelection; // Inputs

  do {
    userSelection = prompt("Rock, Paper or Scissors?"); // user input
    randomSelection = getComputerChoice(); // random input
    console.log(randomSelection); // validation log
    console.log(playRound(userSelection, randomSelection));
    roundCount++;

    switch (userSelection) {
      case "Rock":
        if (randomSelection === "Rock") { // Its a draw
          humanScore = humanScore;
          machineScore = machineScore;
        } else if (randomSelection === "Paper") { // Computer wins
          humanScore = humanScore;
          machineScore++;
        } else if (randomSelection === "Scissors") { // Player wins
          humanScore++;
          machineScore = machineScore;
        }
        break;
      case "Paper":
        if (randomSelection === "Rock") { // Player wins
          humanScore++;
          machineScore = machineScore;
        } else if (randomSelection === "Paper") { // Its a draw
          humanScore = humanScore;
          machineScore = machineScore;
        } else if (randomSelection === "Scissors") { // Computer wins
          humanScore = humanScore;
          machineScore++;
        }
        break;
      case "Scissors":
        if (randomSelection === "Rock") { // Computer wins
          humanScore = humanScore;
          machineScore++;
        } else if (randomSelection === "Paper") { // Player wins
          humanScore++;
          machineScore = machineScore;
        } else if (randomSelection === "Scissors") { // Its a draw
          humanScore = humanScore;
          machineScore = machineScore;
        }
        break;
    }
  } while (roundCount <= 5);
}

// console.log(`\n##########\nScore:\nPlayer: ${humanScore} | \tComputer: ${machineScore}\n##########\n`);
game();
