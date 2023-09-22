// Starting the game
let humanScore = 0;
let machineScore = 0;
let roundWinner = '';

// Emoji elements queries
const rockButton = document.querySelector('#rock_button'); // 🗿 emoji
const paperButton = document.querySelector('#paper_button'); // 📄 emoji
const scissorButton = document.querySelector('#scissor_button'); // ✂️ emoji
const humanChoice = document.querySelector('#human_choice'); // 1st ❓ emoji
const computerChoice = document.querySelector('#computer_choice'); // 2nd ❓ emoji

// Score points queries
const humanPoints = document.querySelector('#human_score'); // Human points
const machinePoints = document.querySelector('#machine_score') // Machine points

// Computer random choice
const options = ["Rock", "Paper", "Scissors"];
const getComputerChoice = () => options[Math.floor(Math.random() * options.length)];

// Gets computer play and updates the UI with it
function getComputerPlay() {
  let machinePlay = getComputerChoice();
  switch (machinePlay) {
    case "Rock":
      computerChoice.textContent = "🗿";
      break;
    case "Paper":
      computerChoice.textContent = "📄";
      break;
    case "Scissors":
      computerChoice.textContent = "✂️";
      break;
  }
}

// Play a round and show round winner
function playOneRound(playerSelection, computerSelection) {
  let roundOutome; // Display round winner

  // Conditions for winning and update the players' score points
  switch (playerSelection) {
    case "🗿":
      if (computerSelection === "🗿") {
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
      humanPoints.textContent = `Human: ${humanScore}`;
      machinePoints.textContent = `Machine: ${machineScore}`;
      break;
    case "📄":
      if (computerSelection === "🗿") {
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
      humanPoints.textContent = `Human: ${humanScore}`;
      machinePoints.textContent = `Machine: ${machineScore}`;
      break;
    case "✂️":
      if (computerSelection === "🗿") {
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
      humanPoints.textContent = `Human: ${humanScore}`;
      machinePoints.textContent = `Machine: ${machineScore}`;
      break;
  }

  alert(roundOutome);
  return roundOutome;
}

// Gets the winner of the game
function getsGameWinner() {
  let gameWinner = '';

  if (humanScore === 5) {
    gameWinner = "The winner is the PLAYER";
  } else if (machineScore === 5) {
    gameWinner = "The winner is the COMPUTER";
  } else if (humanScore === machineScore) {
    gameWinner = "This game ended up a DRAW";
  }
  alert(`\nSCORE\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n${gameWinner}\n\nKeep playing if you like!`);
}

// Finishes game after 5 rounds
function resetEntireGame() {
  humanScore = 0;
  machineScore = 0;
  roundWinner = '';
}

// UI reset for the score
function resetGameUI() {
  humanChoice.textContent = '❓';
  computerChoice.textContent = '❓';
  humanPoints.textContent = "Human: 0";
  machinePoints.textContent = "Machine: 0";
}

// Triggers to play a round
const cardButtons = document.querySelectorAll('.cardButton');
cardButtons.forEach((button) => {
  button.addEventListener('click', () => {
    humanChoice.textContent = button.textContent; // Updates UI for human choice
    getComputerPlay(); // Gets value of computer choice
    playOneRound(humanChoice.textContent, computerChoice.textContent); // Plays one round
    // Gets the winner and resets the game
    if (humanScore === 5 || machineScore === 5) {
      getsGameWinner(); // Displays the winner
      resetEntireGame(); // Zeroes the scores
      resetGameUI() // Resets the scores and UI
    }
  });
});
