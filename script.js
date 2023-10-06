let wins = 0;
let losses = 0;

const buttons = document.querySelectorAll("button");
const instructions = document.querySelector(".instructions");
const resultText = document.querySelector(".resultText");
const roundText = document.querySelector(".roundText");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id, getComputerChoice());
    checkScore();
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
  const playerString =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  const computerString =
    computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

  if (playerSelection == computerSelection) {
    roundText.textContent = "Draw!";
  } else if (
    (playerSelection == "paper" && computerSelection == "rock") ||
    (playerSelection == "rock" && computerSelection == "scissors") ||
    (playerSelection == "scissors" && computerSelection == "paper")
  ) {
    wins++;
    roundText.textContent =
      "You Win! " + playerString + " beats " + computerString;
  } else {
    losses++;
    roundText.textContent =
      "You Lose! " + computerString + " beats " + playerString;
  }

  instructions.textContent = `Wins: ${wins} Losses: ${losses}`;
}

function checkScore() {
  if (wins == 5 || losses == 5) {
    roundText.style.display = "none";
    restartButton = document.createElement("button");
    restartButton.textContent = "Play again";
    restartButton.addEventListener("click", () => {
      wins = 0;
      losses = 0;
      instructions.textContent =
        "You are being challenged by a nobody! Play rock, paper, scissors. First to 5 wins gets to have bragging rights. Begin!";
      resultText.removeChild(restartButton);
      roundText.style.display = "inline";
      roundText.textContent = "";
    });

    resultText.appendChild(restartButton);
  }
  if (wins == 5) {
    instructions.textContent = "Congratulations, you have won!";
  } else if (losses == 5) {
    instructions.textContent = "You lost! Now you officially suck.";
  }
}
