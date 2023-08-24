const options = ["Rock", "Paper", "Scissors"];

const getComputerChoice = () => options[Math.floor(Math.random() * options.length)];

function getWinner(userSelection, randomSelection) {
    switch (userSelection) {
        case "Rock":
          if (randomSelection === "Rock") {
            return "draw";
          } else if (randomSelection === "Paper") {
            return "machine";
          } else {
            return "player";
          }
        case "Paper":
          if (randomSelection === "Rock") {
            return "player";
          } else if (randomSelection === "Paper") {
            return "draw";
          } else {
            return "machine";
          }
        case "Scissors":
          if (randomSelection === "Rock") {
            return "machine";
          } else if (randomSelection === "Paper") {
            return "player";
          } else {
            return "draw";
          }
      }
}

function endGame(humanScore, machineScore) {
    // Winner outcome
    if (humanScore > machineScore) {
      console.log(
        `\n\tGAME SCORE\n\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n`
      );

      return  "The winner is the PLAYER";
    } else if (humanScore < machineScore) {
      console.log(
        `\n\tGAME SCORE\n\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n`
      );
      
      return "The winner is the COMPUTER"; 
    } else {
      console.log(
        `\n\tGAME SCORE\n\nHuman: ${humanScore}\nMachine: ${machineScore}\n\n`
      );

      return "This game ended up a DRAW";
    }
}

function game() {
    let winner = ""; 
    let roundCount = 1; 
    let humanScore = 0;
    let machineScore = 0; 
    let userSelection = "";
    let randomSelection = ""; 
  
    do {
        userSelection = prompt("Rock, Paper or Scissors?"); 
        randomSelection = getComputerChoice(); 
        roundCount++;
        
        //falta validação de case das palavras, ex: "rock" ou "RoCK"

        winner = getWinner(userSelection, randomSelection);

        if(winner === "player") {
            humanScore++;
        } else if(winner === "machine") {
            machineScore++;
        }
  
    } while (roundCount <= 5);

    return endGame(humanScore, machineScore);
  }

  
console.log(game());
  