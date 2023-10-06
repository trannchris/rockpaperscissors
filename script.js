let games = 0;
let wins = 0;
let losses = 0;
let draws = 0;

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
  });
});

function getComputerChoice() {
  const randomNum = Math.floor(Math.random() * 3);

  switch (randomNum) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerString =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  computerString =
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

  resultText = document.querySelector(".resultText");

  if (playerSelection == computerSelection) {
    draws++;
    resultText.textContent = "Draw!";
  } else if (
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    wins++;
    resultText.textContent =
      "You Win! " + playerString + " beats " + computerString;
  } else {
    losses++;
    resultText.textContent =
      "You Lose! " + computerString + " beats " + playerString;
  }
}
