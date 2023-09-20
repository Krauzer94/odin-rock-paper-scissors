// Gets information regarding button emoji contents
const rockButton = document.querySelector('#rock_button'); // 🪨 emoji
const paperButton = document.querySelector('#paper_button'); // 📄 emoji
const scissorButton = document.querySelector('#scissor_button'); // ✂️ emoji
const humanChoice = document.querySelector('#human_choice'); // 1st ❓ emoji
const computerChoice = document.querySelector('#computer_choice'); // 2nd ❓ emoji

// Random choices for the computer to play
const options = ["Rock", "Paper", "Scissors"];
const getComputerChoice = () => options[Math.floor(Math.random() * options.length)];

// Gets play made by the computer and updates the UI
function getComputerPlay () {
  let machinePlay = getComputerChoice();
  switch (machinePlay) {
    case 'Rock':
      computerChoice.textContent = '🪨';
      randomPlayMade = '🪨';
      break;
    case 'Paper':
      computerChoice.textContent = '📄';
      randomPlayMade = '📄';
      break;
    case 'Scissors':
      computerChoice.textContent = '✂️';
      break;
  }
}

// Take player choice and computer choice in two parameters
function playOneRound(playerSelection, computerSelection) {
  let roundOutome; // Return the outcome of the round
  playerSelection = humanChoice.textContent; // Gets human play
  computerSelection = computerChoice.textContent; // Gets computer play

  // Conditionals for the result, there are 3 possible roundOutomes
  switch (playerSelection) {
    case '🪨':
      if (computerSelection === '🪨') {
        roundOutome = "Its a draw";
      } else if (computerSelection === '📄') {
        roundOutome = "You lose! Paper beats rock";
      } else if (computerSelection === '✂️') {
        roundOutome = "You win! Rock beats Scissors";
      }
      break;
    case '📄':
      if (computerSelection === '🪨') {
        roundOutome = "You win! Paper beats rock";
      } else if (computerSelection === '📄') {
        roundOutome = "Its a draw";
      } else if (computerSelection === '✂️') {
        roundOutome = "You lose! Scissors beats Paper";
      }
      break;
    case '✂️':
      if (computerSelection === '🪨') {
        roundOutome = "You lose! Rock beats Scissors";
      } else if (computerSelection === '📄') {
        roundOutome = "You win! Scissors beats Paper";
      } else if (computerSelection === '✂️') {
        roundOutome = "Its a draw";
      }
      break;
  }

  alert(roundOutome);
  return roundOutome;
}

// Find out the winner out of five rounds
function playFiveRounds(humanScore, machineScore) {
  let roundCount = 1; // Round loop counter
  humanScore = 0, machineScore = 0; // Scores
  let userSelection, randomSelection; // Inputs

  do {
    userSelection = humanChoice.textContent;
    randomSelection = computerChoice.textContent; // random input
    roundCount++;

    switch (userSelection) {
      case "rock":
        if (randomSelection === "Rock") {
          // Its a draw
          humanScore = humanScore;
          machineScore = machineScore;
        } else if (randomSelection === "Paper") {
          // Computer wins
          humanScore = humanScore;
          machineScore++;
        } else if (randomSelection === "Scissors") {
          // Player wins
          humanScore++;
          machineScore = machineScore;
        }
        break;
      case "paper":
        if (randomSelection === "Rock") {
          // Player wins
          humanScore++;
          machineScore = machineScore;
        } else if (randomSelection === "Paper") {
          // Its a draw
          humanScore = humanScore;
          machineScore = machineScore;
        } else if (randomSelection === "Scissors") {
          // Computer wins
          humanScore = humanScore;
          machineScore++;
        }
        break;
      case "scissors":
        if (randomSelection === "Rock") {
          // Computer wins
          humanScore = humanScore;
          machineScore++;
        } else if (randomSelection === "Paper") {
          // Player wins
          humanScore++;
          machineScore = machineScore;
        } else if (randomSelection === "Scissors") {
          // Its a draw
          humanScore = humanScore;
          machineScore = machineScore;
        }
        break;
    }
  } while (roundCount <= 5);

  let winner = ""; // For later return
  // Winner roundOutome
  if (humanScore > machineScore) {
    console.log(`\n\tSCORE\n\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n`);
    return (winner = "The winner is the PLAYER");
  } else if (humanScore < machineScore) {
    console.log(`\n\tSCORE\n\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n`);
    return (winner = "The winner is the COMPUTER");
  } else if (humanScore === machineScore) {
    console.log(`\n\tSCORE\n\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n`);
    return (winner = "This round ended up a DRAW");
  }
}

// Trigger several functions in order to play a round
const cardButtons = document.querySelectorAll('.cardButton');
cardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    humanChoice.textContent = button.textContent; // Sets new emoji for human
    // getHumanPlay(); // Gets value of player choice
    getComputerPlay(); // Gets value of computer choice
    playOneRound(); // Gets the roundOutome of a single round
    playFiveRounds(); // Gets the roundOutome of five rounds
  });
});
