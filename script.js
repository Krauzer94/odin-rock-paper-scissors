// Gets 🪨, 📄 and ✂️ emojis
const rockButton = document.querySelector('#rock_button'); // 🪨 emoji
const paperButton = document.querySelector('#paper_button'); // 📄 emoji
const scissorButton = document.querySelector('#scissor_button'); // ✂️ emoji

// Gets ❓ emojis
const humanChoice = document.querySelector('#human_choice'); // 1st ❓ emoji
const computerChoice = document.querySelector('#computer_choice'); // 2nd ❓ emoji

// Random choices for the computer to play
const options = ["Rock", "Paper", "Scissors"];
const getComputerChoice = () => options[Math.floor(Math.random() * options.length)];

// Sets computer ❓ emoji
function changeComputerEmoji () {
  let machinePlay = getComputerChoice();
  switch (machinePlay) {
    case 'Rock':
      computerChoice.textContent = '🪨';
      break;
    case 'paper':
      computerChoice.textContent = '📄';
      break;
    case 'Scissors':
      computerChoice.textContent = '✂️';
      break;
  }
}

// Find out player choice on button.click
function playerRoundChoice () {
  let playMade;
  humanPlay = humanChoice.textContent;
  switch (humanPlay) {
    case '🪨':
      playMade = 'rock';
      break;
    case '📄':
      playMade = 'paper';
      break;
    case '✂️':
      playMade = 'scissors';
      break;
  }
  return playMade;
}

// Take player choice and computer choice in two parameters
function playRound(playerSelection, computerSelection) {
  let outcome = ""; // For later text return
  // Conditionals for the result, there are 3 possible outcomes
  switch (playerSelection) {
    case "rock":
      if (computerSelection === "Rock") {
        return (outcome = "Its a draw");
      } else if (computerSelection === "Paper") {
        return (outcome = "You lose! Paper beats rock");
      } else if (computerSelection === "Scissors") {
        return (outcome = "You win! Rock beats Scissors");
      }
      break;
    case "paper":
      if (computerSelection === "Rock") {
        return (outcome = "You win! Paper beats rock");
      } else if (computerSelection === "Paper") {
        return (outcome = "Its a draw");
      } else if (computerSelection === "Scissors") {
        return (outcome = "You lose! Scissors beats Paper");
      }
      break;
    case "scissors":
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
function game(humanScore, machineScore) {
  let roundCount = 1; // Round loop counter
  humanScore = 0, machineScore = 0; // Scores
  let userSelection, randomSelection; // Inputs

  do {
    // userSelection = prompt("Rock, Paper or Scissors?").toLowerCase(); // user input   
    userSelection = playerRoundChoice();
    randomSelection = getComputerChoice(); // random input
    // console.log(randomSelection); // validation log
    // console.log(playRound(userSelection, randomSelection));
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
  // Winner outcome
  if (humanScore > machineScore) {
    console.log(`\n\tGAME SCORE\n\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n`);
    return (winner = "The winner is the PLAYER");
  } else if (humanScore < machineScore) {
    console.log(`\n\tGAME SCORE\n\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n`);
    return (winner = "The winner is the COMPUTER");
  } else if (humanScore === machineScore) {
    console.log(`\n\tGAME SCORE\n\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n`);
    return (winner = "This game ended up a DRAW");
  }
}

// Changes both computer and human ❓ emoji
const cardButtons = document.querySelectorAll('.cardButton');
cardButtons.forEach((button) => { // Gets card button contents
  button.addEventListener("click", () => {
    humanChoice.textContent = button.textContent; // Change human choice emoji
    changeComputerEmoji(); // Change computer choice emoji
    playerRoundChoice(); // Player choice for the round
    game(); // Five round match call
  });
});
