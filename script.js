let choice = ["Rock", "Paper", "Scissors"];
let computerScore = 0;
let playerScore = 0;
let playerChoice;

function ComputerPick() {
  let computerPick = choice[Math.floor(Math.random() * 3)];
  return computerPick;
}

function lossAlert() {
  computerScore++;
  alert("You lost!");
}

function PlayRound(playerChoice, ComputerPick) {
  if (ComputerPick === choice[0] && playerChoice === choice[2]) {
    lossAlert();
  } else if (ComputerPick === choice[2] && playerChoice === choice[1]) {
    lossAlert();
  } else if (ComputerPick === choice[1] && playerChoice === choice[0]) {
    lossAlert();
  } else if (ComputerPick === playerChoice) {
    alert(
      `That's a draw! Computer picked ${ComputerPick} and you picked ${playerChoice}.`
    );
  } else {
    alert("You win! " + playerChoice + " beats " + ComputerPick + ".");
    playerScore++;
  }
}


// Constants for the player options
const rockBtn = document.querySelector("#rockbtn");
const paperBtn = document.querySelector("#paperbtn");
const scissorsBtn = document.querySelector("#scissorsbtn");

rockBtn.addEventListener('click', () => {
  playerChoice = choice[0];
  ComputerPick();
  PlayRound(playerChoice, ComputerPick());
});

paperBtn.addEventListener('click', () => {
  playerChoice = choice[1];
  ComputerPick();
  PlayRound(playerChoice, ComputerPick());
});

scissorsBtn.addEventListener('click', () => {
  playerChoice = choice[2];
  ComputerPick();
  PlayRound(playerChoice, ComputerPick());
});