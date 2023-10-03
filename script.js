let games = 0;
let wins = 0;
let losses = 0;
let draws = 0;

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
  player = playerSelection.toLowerCase();
  computer = computerSelection.toLowerCase();
  playerString = player.charAt(0).toUpperCase() + player.slice(1);
  computerString = computer.charAt(0).toUpperCase() + computer.slice(1);

  if (player == computer) {
    draws++;
    return "Draw!";
  } else if (
    (player == "paper" && computer == "rock") ||
    (player == "rock" && computer == "scissors") ||
    (player == "scissors" && computer == "paper")
  ) {
    wins++;
    return "You Win! " + playerString + " beats " + computerString;
  } else {
    losses++;
    return "You Lose! " + computerString + " beats " + playerString;
  }
}

function game() {
  let keepGoing = true;

  while (keepGoing) {
    if (games == 5) {
      keepGoing = false;
    } else {
      let playerInput = prompt("Choose rock, paper, or scissors");
      if (
        playerInput.toLowerCase() != "rock" &&
        playerInput.toLowerCase() != "paper" &&
        playerInput.toLowerCase() != "scissors"
      ) {
        alert("Please enter a valid move");
      } else {
        console.log(playRound(playerInput, getComputerChoice()));
        games++;
        console.log(
          "You have " +
            wins +
            " wins, " +
            losses +
            " losses, and " +
            draws +
            " draws!"
        );
      }
    }
  }
}

game();
