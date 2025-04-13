let humanScore = 0;
let computerScore = 0;
const options = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

function getHumanChoice() {
  let flag = false;
  while (!flag) {
    const choice = prompt("rock, paper or scissors?:");
    if (options.includes(choice)) {
      return choice;
      flag = true;
    } else {
      console.log(
        "'" + choice + "'",
        "is an nvalid choice, please use 'rock', 'paper' or 'scissors'"
      );
    }
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log(humanChoice + " Tie!");

    return;
  }
  switch (computerChoice) {
    case "rock":
      if (humanChoice == "scissors") {
        console.log("Rock beats Scissors! Computer win round");

        computerScore++;
      } else {
        console.log("Paper beats Rock! Human win round");
        humanScore++;
      }
      break;

    case "paper":
      if (humanChoice == "rock") {
        console.log("Paper beats Rock! Computer win round");
        computerScore++;
      } else {
        console.log("Scissors beats Paper! Human win round");
        humanScore++;
      }
      break;

    default:
      if (humanChoice == "paper") {
        console.log("Scissors beats Paper! Computer win round");
        computerScore++;
      } else {
        console.log("Rock beats Scissors! Human win round");
        humanScore++;
      }
  }
}

function playGame() {
  for (i = 0; i < 5; i++) {
    computerChoice = getComputerChoice();
    humanChoice = getHumanChoice();
    console.log("Round #" + (i + 1));
    playRound(humanChoice, computerChoice);

    console.log("Human:", humanScore, ", Computer:", computerScore);
    console.log();
  }

  console.log();
  console.log("Final Score");
  console.log();
  if (humanScore > computerScore) {
    console.log("Human win the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer win the game!");
  } else {
    console.log("It's a Tie!");
  }
  console.log("Human:", humanScore, ", Computer:", computerScore);
}

playGame();
