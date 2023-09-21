// Starting the game
let humanScore = 0;
let machineScore = 0;
let roundWinner = '';

// Query selectors for the emoji elements
const rockButton = document.querySelector('#rock_button'); // 🪨 emoji
const paperButton = document.querySelector('#paper_button'); // 📄 emoji
const scissorButton = document.querySelector('#scissor_button'); // ✂️ emoji
const humanChoice = document.querySelector('#human_choice'); // 1st ❓ emoji
const computerChoice = document.querySelector('#computer_choice'); // 2nd ❓ emoji

// TODO Query selectors for the "Human: 0" and "Machine: 0" elements

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
function getsGameWinner() {
  let gameWinner = ''; // For later return

  // Alerts who the winner is
  if (humanScore === 3) {
    console.log(`\n\tSCORE\n\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n`);
    gameWinner = "The winner is the PLAYER";
  } else if (machineScore === 3) {
    console.log(`\n\tSCORE\n\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n`);
    gameWinner = "The winner is the COMPUTER";
  } else if (humanScore === machineScore) {
    console.log(`\n\tSCORE\n\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n`);
    gameWinner = "This game ended up a DRAW";
  }
  alert(gameWinner);
}

// Finishes game after 5 rounds
function resetEntireGame() {
  humanScore = 0;
  machineScore = 0;
  roundWinner = '';
  alert("Keep playing if you like");
}

// UI reset for the score and choice emojis
function resetGameUI () {
  humanChoice.textContent = '❓';
  computerChoice.textContent = '❓';
  // TODO: Reset the UI for the scores
}

// Trigger several functions in order to play a round
const cardButtons = document.querySelectorAll('.cardButton');
cardButtons.forEach((button) => {
  button.addEventListener('click', () => {
    humanChoice.textContent = button.textContent; // Sets new emoji for human
    getComputerPlay(); // Gets value of computer choice
    playOneRound(humanChoice.textContent, computerChoice.textContent); // Play one round
    console.log(`\n\tSCORE\n\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n`);
    // Gets the winner and resets the game
    if (humanScore === 3 || machineScore === 3) {
      getsGameWinner(); // Displays the winner
      // resetEntireGame(); // Zeroes the scores // ! Umcomment this when done
      resetGameUI() // Resets scores and emojis
    }
  });
});
