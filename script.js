// Game header
let humanScore = 0;
let machineScore = 0;
let roundWinner = '';

// Query selectors for the emoji elements
const rockButton = document.querySelector('#rock_button'); // 🪨 emoji
const paperButton = document.querySelector('#paper_button'); // 📄 emoji
const scissorButton = document.querySelector('#scissor_button'); // ✂️ emoji
const humanChoice = document.querySelector('#human_choice'); // 1st ❓ emoji
const computerChoice = document.querySelector('#computer_choice'); // 2nd ❓ emoji

// Random choices for the computer to play
const options = ["Rock", "Paper", "Scissors"];
const getComputerChoice = () => options[Math.floor(Math.random() * options.length)];

// Gets play made by the computer and updates the UI
function getComputerPlay() {
  let machinePlay = getComputerChoice();
  switch (machinePlay) {
    case "Rock":
      computerChoice.textContent = "🪨";
      break;
    case "Paper":
      computerChoice.textContent = "📄";
      break;
    case "Scissors":
      computerChoice.textContent = "✂️";
      break;
  }
}

// Take player choice and computer choice in two parameters
function playOneRound(playerSelection, computerSelection) {
  let roundOutome; // Return the outcome of the round

  // Conditionals for the result, with 3 possible outomes
  switch (playerSelection) {
    case "🪨":
      if (computerSelection === "🪨") {
        roundOutome = "Its a draw";
        roundWinner = "nobody";
      } else if (computerSelection === "📄") {
        roundOutome = "You lose! Paper beats rock";
        roundOutome = "machine";
        machineScore++;
      } else if (computerSelection === "✂️") {
        roundOutome = "You win! Rock beats Scissors";
        roundWinner = "human";
        humanScore++;
      }
      break;
    case "📄":
      if (computerSelection === "🪨") {
        roundOutome = "You win! Paper beats rock";
        roundWinner = "human";
        humanScore++;
      } else if (computerSelection === "📄") {
        roundOutome = "Its a draw";
        roundWinner = "nobody";
      } else if (computerSelection === "✂️") {
        roundOutome = "You lose! Scissors beats Paper";
        roundWinner = "machine";
        machineScore++;
      }
      break;
    case "✂️":
      if (computerSelection === "🪨") {
        roundOutome = "You lose! Rock beats Scissors";
        roundWinner = "machine"
        machineScore++;
      } else if (computerSelection === "📄") {
        roundOutome = "You win! Scissors beats Paper";
        roundWinner = "human";
        humanScore++;
      } else if (computerSelection === "✂️") {
        roundOutome = "Its a draw";
        roundWinner = "nobody";
      }
      break;
  }

  alert(roundOutome);
  return roundOutome;
}

// Find out the winner out of five rounds
function playFiveRounds(userSelection, randomSelection) {
  let roundCount = 1; // Round loop counter
  // let humanScore = 0; // Human score initializer
  // let machineScore = 0; // Computer score initializer
  let winner; // For later return

  do {
    roundCount++;

    switch (userSelection) {
      case "🪨":
        if (randomSelection === "🪨") {
          // Its a draw
          humanScore = humanScore;
          machineScore = machineScore;
        } else if (randomSelection === "📄") {
          // Computer wins
          humanScore = humanScore;
          machineScore++;
        } else if (randomSelection === "✂️") {
          // Player wins
          humanScore++;
          machineScore = machineScore;
        }
        break;
      case "📄":
        if (randomSelection === "🪨") {
          // Player wins
          humanScore++;
          machineScore = machineScore;
        } else if (randomSelection === "📄") {
          // Its a draw
          humanScore = humanScore;
          machineScore = machineScore;
        } else if (randomSelection === "✂️") {
          // Computer wins
          humanScore = humanScore;
          machineScore++;
        }
        break;
      case "✂️":
        if (randomSelection === "🪨") {
          // Computer wins
          humanScore = humanScore;
          machineScore++;
        } else if (randomSelection === "📄") {
          // Player wins
          humanScore++;
          machineScore = machineScore;
        } else if (randomSelection === "✂️") {
          // Its a draw
          humanScore = humanScore;
          machineScore = machineScore;
        }
        break;
    }
  } while (roundCount <= 5);

  // Alerts who the winner is
  if (humanScore > machineScore) {
    console.log(`\n\tSCORE\n\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n`);
    winner = "The winner is the PLAYER";
  } else if (humanScore < machineScore) {
    console.log(`\n\tSCORE\n\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n`);
    winner = "The winner is the COMPUTER";
  } else if (humanScore === machineScore) {
    console.log(`\n\tSCORE\n\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n`);
    winner = "This round ended up a DRAW";
  }
  alert(winner);
  return winner;
}

// Finishes game after 5 rounds
function gameIsOver () {
  return (humanScore === 5 || machineScore === 5);
}

// Trigger several functions in order to play a round
const cardButtons = document.querySelectorAll('.cardButton');
cardButtons.forEach((button) => {
  button.addEventListener('click', () => {
    humanChoice.textContent = button.textContent; // Sets new emoji for human
    getComputerPlay(); // Gets value of computer choice
    playOneRound(humanChoice.textContent, computerChoice.textContent); // Play one round
    // playFiveRounds(humanChoice.textContent, computerChoice.textContent); // Play five rounds
  });
});
