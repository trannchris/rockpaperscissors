function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() == computerSelection.toLowerCase()) {
    return "Draw!";
  } else if (
    (playerSelection.toLowerCase == "paper" &&
      computerSelection.toLowerCase == "rock") ||
    (playerSelection.toLowerCase == "rock" &&
      computerSelection.toLowerCase == "scissors") ||
    (playerSelection.toLowerCase == "scissors" &&
      computerSelection.toLowerCase == "paper")
  ) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
