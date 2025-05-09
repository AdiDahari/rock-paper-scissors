const options = ["rock", "paper", "scissors"];

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const scoreDiv = document.getElementById("score");

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

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
  let res = [0, 0];

  if (
    humanChoice == computerChoice ||
    humanScore === 5 ||
    computerScore === 5
  ) {
    return [humanScore, computerScore];
  }
  switch (computerChoice) {
    case "rock":
      if (humanChoice == "scissors") {
        res = [humanScore, computerScore + 1];
      } else {
        res = [humanScore + 1, computerScore];
      }
      break;

    case "paper":
      if (humanChoice == "rock") {
        res = [humanScore, computerScore + 1];
      } else {
        res = [humanScore + 1, computerScore];
      }
      break;

    default:
      if (humanChoice == "paper") {
        res = [humanScore, computerScore + 1];
      } else {
        res = [humanScore + 1, computerScore];
      }
  }

  if (res[0] === 5 || res[0] === 5) {
    const finalScore = document.createElement("h1");
    if (res[0] === 5) finalScore.textContent = "Human wins!";
    else finalScore.textContent = "Computer wins!";
    scoreDiv.appendChild(finalScore);
  }
  return res;
}

function playGame() {
  const humanScore = document.getElementById("human_score");
  const computerScore = document.getElementById("computer_score");
  let humanScoreValue = 0;
  let computerScoreValue = 0;
  let humanChoice;
  rockBtn.addEventListener("click", () => {
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    [humanScoreValue, computerScoreValue] = playRound(
      humanChoice,
      computerChoice,
      humanScoreValue,
      computerScoreValue
    );

    humanScore.innerText = humanScoreValue;
    computerScore.innerText = computerScoreValue;
  });
  paperBtn.addEventListener("click", () => {
    humanChoice = "paper";
    computerChoice = getComputerChoice();
    [humanScoreValue, computerScoreValue] = playRound(
      humanChoice,
      computerChoice,
      humanScoreValue,
      computerScoreValue
    );

    humanScore.innerText = humanScoreValue;
    computerScore.innerText = computerScoreValue;
  });
  scissorsBtn.addEventListener("click", () => {
    humanChoice = "scissors";
    computerChoice = getComputerChoice();
    [humanScoreValue, computerScoreValue] = playRound(
      humanChoice,
      computerChoice,
      humanScoreValue,
      computerScoreValue
    );

    humanScore.innerText = humanScoreValue.toString();
    computerScore.innerText = computerScoreValue.toString();
  });
}
playGame();
